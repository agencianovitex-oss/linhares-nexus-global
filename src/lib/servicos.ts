import { notFound } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/seo";
import { VISAS, VISA_ORDER, type VisaSlug } from "@/data/visas";
import type { Locale } from "@/i18n/locales";
import { withLocale } from "@/i18n/useI18n";
import { buildHubFaqSchema } from "@/components/visa/ServicesHub";
import { buildVisaFaqSchema } from "@/components/visa/VisaPage";

/** Base path for the services hub per locale. PT uses /areas-de-atuacao; EN/ES keep /servicos. */
export function servicesBase(locale: Locale): string {
  return locale === "pt" ? "/areas-de-atuacao" : "/servicos";
}

export function servicesHref(locale: Locale): string {
  return withLocale(locale, servicesBase(locale));
}

export function isVisaSlug(s: string): s is VisaSlug {
  return (VISA_ORDER as string[]).includes(s);
}

export function visaHrefFor(locale: Locale) {
  return (slug: VisaSlug) => withLocale(locale, `${servicesBase(locale)}/${slug}`);
}

export function notFoundIfInvalid(slug: string): asserts slug is VisaSlug {
  if (!isVisaSlug(slug)) throw notFound();
}

export function hubHead(locale: Locale) {
  const title = "Áreas de Atuação, Linhares Law";
  const description =
    "Estratégias migratórias para profissionais, empresários, investidores e famílias. EB-2 NIW, EB-1, E-2, L-1, O-1, H-1B e EB-5.";
  const head = buildLocaleHead({ path: servicesBase(locale), locale, title, description });
  return {
    ...head,
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildHubFaqSchema()) }],
  };
}

export function visaHead(locale: Locale, rawSlug: string) {
  if (!isVisaSlug(rawSlug)) {
    return buildLocaleHead({
      path: `${servicesBase(locale)}/${rawSlug}`,
      locale,
      title: "Áreas de Atuação, Linhares Law",
      description: "Estratégias jurídicas de imigração americana.",
      noindex: true,
    });
  }
  const v = VISAS[locale][rawSlug];
  const head = buildLocaleHead({
    path: `${servicesBase(locale)}/${rawSlug}`,
    locale,
    title: v.seoTitle,
    description: v.seoDescription,
    type: "article",
  });
  return {
    ...head,
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildVisaFaqSchema(locale, rawSlug)) }],
  };
}
