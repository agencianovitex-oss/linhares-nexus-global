import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { tBlog } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

interface Props {
  faq: Array<{ question: string; answer: string }>;
  locale: Locale;
}

export function ArticleFAQ({ faq, locale }: Props) {
  if (!faq?.length) return null;
  const t = tBlog(locale);
  return (
    <section className="my-12 rounded-xl border border-border/50 bg-card p-6 sm:p-8">
      <h2 className="mb-4 font-display text-2xl text-[rgb(6_36_67)]">FAQ</h2>
      <Accordion type="single" collapsible>
        {faq.map((f, i) => (
          <AccordionItem value={`f-${i}`} key={i}>
            <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
            <AccordionContent className="text-ink/75">{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <span className="sr-only">{t.inThisArticle}</span>
    </section>
  );
}
