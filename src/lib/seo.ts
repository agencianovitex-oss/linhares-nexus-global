import { DEFAULT_LOCALE, LOCALES, LOCALE_HREFLANG, type Locale } from "@/i18n/locales";
import { withLocale } from "@/i18n/useI18n";

interface BuildHeadInput {
  /** Path WITHOUT locale prefix, e.g. "/", "/quem-somos" */
  path: string;
  locale: Locale;
  title: string;
  description: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

/**
 * Per-route head() builder. Emits canonical only on the leaf (links concat
 * without dedup in TanStack Router). Meta is deduped by name/property.
 */
export function buildLocaleHead({
  path,
  locale,
  title,
  description,
  ogImage,
  type = "website",
  noindex = false,
}: BuildHeadInput) {
  const localized = withLocale(locale, path);

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: localized },
    { property: "og:site_name", content: "Linhares Law" },
    { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (ogImage) {
    meta.push({ property: "og:image", content: ogImage });
    meta.push({ name: "twitter:image", content: ogImage });
  }
  if (noindex) meta.push({ name: "robots", content: "noindex, nofollow" });

  const links: Array<{ rel: string; href: string; hrefLang?: string }> = [
    { rel: "canonical", href: localized },
  ];
  for (const l of LOCALES) {
    links.push({ rel: "alternate", hrefLang: LOCALE_HREFLANG[l], href: withLocale(l, path) });
  }
  links.push({ rel: "alternate", hrefLang: "x-default", href: withLocale(DEFAULT_LOCALE, path) });

  return { meta, links };
}
