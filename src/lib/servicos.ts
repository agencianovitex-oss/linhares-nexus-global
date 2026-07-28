import { notFound } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/seo";
import { VISAS, VISA_ORDER, type VisaSlug } from "@/data/visas";
import type { Locale } from "@/i18n/locales";
import { withLocale } from "@/i18n/useI18n";
import { buildHubFaqSchema } from "@/components/visa/ServicesHub";
import { buildVisaFaqSchema } from "@/components/visa/VisaPage";
import { servicesStrings } from "@/i18n/content/services";

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
  const t = servicesStrings[locale].hub;
  const title = t.seoTitle;
  const description = t.seoDescription;
  const head = buildLocaleHead({ path: servicesBase(locale), locale, title, description });
  return {
    ...head,
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildHubFaqSchema(locale)) }],
  };
}

export function visaHead(locale: Locale, rawSlug: string) {
  if (!isVisaSlug(rawSlug)) {
    return buildLocaleHead({
      path: `${servicesBase(locale)}/${rawSlug}`,
      locale,
      title: servicesStrings[locale].hub.seoTitle,
      description: servicesStrings[locale].hub.seoFallbackDescription,
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
