import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicesHub, buildHubFaqSchema } from "@/components/visa/ServicesHub";
import { VisaPage, buildVisaFaqSchema } from "@/components/visa/VisaPage";
import { buildLocaleHead } from "@/lib/seo";
import { VISAS, VISA_ORDER, type VisaSlug } from "@/data/visas";
import type { Locale } from "@/i18n/locales";
import { withLocale } from "@/i18n/useI18n";

export function isVisaSlug(s: string): s is VisaSlug {
  return (VISA_ORDER as string[]).includes(s);
}

export function visaHrefFor(locale: Locale) {
  return (slug: VisaSlug) => withLocale(locale, `/servicos/${slug}`);
}

export function hubHead(locale: Locale) {
  const title = "Áreas de Atuação — Linhares Law";
  const description =
    "Estratégias jurídicas de imigração americana para profissionais, executivos, investidores e famílias. EB-2 NIW, EB-1, E-2, L-1, O-1, H-1B e EB-5.";
  const head = buildLocaleHead({ path: "/servicos", locale, title, description });
  return {
    ...head,
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildHubFaqSchema()) },
    ],
  };
}

export function visaHead(locale: Locale, slug: VisaSlug) {
  const v = VISAS[locale][slug];
  const title = `${v.title} — Linhares Law`;
  const description = v.tagline;
  const head = buildLocaleHead({ path: `/servicos/${slug}`, locale, title, description, type: "article" });
  return {
    ...head,
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildVisaFaqSchema(locale, slug)) },
    ],
  };
}

export function notFoundIfInvalid(slug: string) {
  if (!isVisaSlug(slug)) throw notFound();
}

// Re-export to make tree-shaking explicit
export { ServicesHub, VisaPage, createFileRoute };
