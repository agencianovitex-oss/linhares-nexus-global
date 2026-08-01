import { DEFAULT_LOCALE, LOCALES, LOCALE_HREFLANG, type Locale } from "@/i18n/locales";
import { withLocale } from "@/i18n/useI18n";
import { translateBasePath } from "@/i18n/paths";
import { absUrl } from "@/lib/site";

interface BuildHeadInput {
  /** Path WITHOUT locale prefix, in the CURRENT locale's vocabulary, e.g. "/", "/servicos" */
  path: string;
  locale: Locale;
  title: string;
  description: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** Extra JSON-LD blocks for this route. */
  jsonLd?: unknown[];
}

/**
 * Per-route head() builder. Emits an absolute canonical only on the leaf
 * (links concat without dedup in TanStack Router). Meta is deduped by
 * name/property. hreflang alternates translate localized segments so we never
 * advertise a 404 (e.g. /en/areas-de-atuacao).
 */
export function buildLocaleHead({
  path,
  locale,
  title,
  description,
  ogImage,
  type = "website",
  noindex = false,
  jsonLd,
}: BuildHeadInput) {
  const canonical = absUrl(withLocale(locale, path));
  const image = absUrl(ogImage ?? "/og-default.jpg");

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonical },
    { property: "og:locale", content: LOCALE_HREFLANG[locale].replace("-", "_") },
    { property: "og:site_name", content: "Linhares Law" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  meta.push({ property: "og:image", content: image });
  meta.push({ property: "og:image:width", content: "1200" });
  meta.push({ property: "og:image:height", content: "630" });
  meta.push({ property: "og:image:alt", content: title });
  meta.push({ name: "twitter:image", content: image });

  if (noindex) meta.push({ name: "robots", content: "noindex, nofollow" });

  const links: Array<{ rel: string; href: string; hrefLang?: string }> = [
    { rel: "canonical", href: canonical },
  ];
  for (const l of LOCALES) {
    links.push({
      rel: "alternate",
      hrefLang: LOCALE_HREFLANG[l],
      href: absUrl(withLocale(l, translateBasePath(locale, l, path))),
    });
  }
  links.push({
    rel: "alternate",
    hrefLang: "x-default",
    href: absUrl(withLocale(DEFAULT_LOCALE, translateBasePath(locale, DEFAULT_LOCALE, path))),
  });

  const head: {
    meta: Array<Record<string, string>>;
    links: typeof links;
    scripts?: Array<{ type: string; children: string }>;
  } = { meta, links };

  if (jsonLd?.length) {
    head.scripts = jsonLd.map((block) => ({
      type: "application/ld+json",
      children: JSON.stringify(block),
    }));
  }

  return head;
}
