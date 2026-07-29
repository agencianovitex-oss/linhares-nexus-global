import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { translatePostPayload } from "./translate.server";

const faqItemSchema = z.object({ question: z.string(), answer: z.string() });

const translateSchema = z.object({
  target: z.enum(["en", "es"]),
  title: z.string().min(1),
  excerpt: z.string().default(""),
  meta_title: z.string().default(""),
  meta_description: z.string().default(""),
  faq: z.array(faqItemSchema).default([]),
  body: z.any(),
});

export const translatePost = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => translateSchema.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("IA indisponível: chave não configurada.");
    return translatePostPayload(key, data as Parameters<typeof translatePostPayload>[1]);
  });
