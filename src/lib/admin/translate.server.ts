import { generateText, Output, NoObjectGeneratedError } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { collectDocStrings, applyDocStrings } from "./tiptap-text";

interface FaqItem { question: string; answer: string }

export interface TranslateInput {
  target: "en" | "es";
  title: string;
  excerpt: string;
  meta_title: string;
  meta_description: string;
  faq: FaqItem[];
  body: unknown;
}

const LANG: Record<"en" | "es", string> = {
  en: "English (United States)",
  es: "Spanish (neutral, Latin American)",
};

const SYSTEM = `You are an institutional legal translator for a U.S. immigration law firm.
Rules:
- Preserve the formal, institutional tone of the firm.
- Keep U.S. immigration terminology in English (EB-2 NIW, Green Card, USCIS, RFE, Form I-140, etc.).
- Do not invent, add, remove or summarize content.
- Never change numbers, dates, proper names, URLs or brand names.
- Translate each input string independently and return exactly the same number of strings, in the same order.
- If a string is empty or is only punctuation/whitespace, return it unchanged.
- Preserve leading and trailing whitespace of each string.`;

export async function translatePostPayload(apiKey: string, input: TranslateInput) {
  const bodyStrings = collectDocStrings(input.body);
  const faqStrings = input.faq.flatMap((f) => [f.question, f.answer]);
  const head = [input.title, input.excerpt, input.meta_title, input.meta_description];
  const all = [...head, ...faqStrings, ...bodyStrings];

  const translated = await translateStrings(apiKey, all, input.target);

  let i = 0;
  const take = () => translated[i++] ?? "";
  const title = take();
  const excerpt = take();
  const meta_title = take();
  const meta_description = take();
  const faq = input.faq.map(() => ({ question: take(), answer: take() }));
  const rest = translated.slice(i);

  return {
    title,
    excerpt,
    meta_title,
    meta_description,
    faq,
    body: applyDocStrings(input.body, rest),
  };
}

async function translateStrings(apiKey: string, items: string[], target: "en" | "es") {
  const gateway = createLovableAiGatewayProvider(apiKey, { structuredOutputs: true });
  const model = gateway("openai/gpt-5.6-sol");

  const out: string[] = [];
  // Chunk to keep each request small and the array alignment reliable.
  const CHUNK = 60;
  for (let start = 0; start < items.length; start += CHUNK) {
    const chunk = items.slice(start, start + CHUNK);
    const payload = JSON.stringify(chunk);
    try {
      const { output } = await generateText({
        model,
        system: SYSTEM,
        prompt: `Translate the following JSON array of strings from Portuguese (Brazil) to ${LANG[target]}.
Return an object with an "items" array containing exactly ${chunk.length} strings, in the same order.

${payload}`,
        output: Output.object({ schema: z.object({ items: z.array(z.string()) }) }),
        providerOptions: { lovable: { reasoningEffort: "none" } },
      });
      const got = output.items;
      for (let k = 0; k < chunk.length; k++) out.push(got[k] ?? chunk[k]);
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) {
        throw new Error("A IA não retornou uma tradução válida. Tente novamente.");
      }
      const message = (error as { message?: string })?.message ?? "";
      if (message.includes("429")) throw new Error("Limite de requisições da IA atingido. Tente novamente em instantes.");
      if (message.includes("402")) throw new Error("Créditos de IA esgotados. Adicione créditos no workspace.");
      throw error instanceof Error ? error : new Error("Falha ao traduzir.");
    }
  }
  return out;
}
