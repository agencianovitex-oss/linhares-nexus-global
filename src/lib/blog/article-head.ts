import { LOCALES, LOCALE_HREFLANG, type Locale } from "@/i18n/locales";
import { withLocale } from "@/i18n/useI18n";
import { blogArticlePath, siteOrigin, tBlog } from "@/lib/blog/i18n-strings";
import { mediaUrl } from "@/lib/blog/media-url";
import { BRAND_LOGO_PATH } from "@/lib/brand";
import type { PublicPostDetail } from "@/lib/blog/public.functions";

interface MetaItem extends Record<string, string> {}

export function buildArticleHead(post: PublicPostDetail, locale: Locale, localizedPath: string) {
  const origin = siteOrigin();
  const url = `${origin}${localizedPath}`;
  const title = `${post.meta_title || post.title}, Linhares Law`;
  const description = post.meta_description || post.excerpt || "";
  const rawImg = mediaUrl(post.cover_image_url);
  const img = rawImg ? (rawImg.startsWith("http") ? rawImg : `${origin}${rawImg}`) : `${origin}/og-default.jpg`;
  const t = tBlog(locale);

  const meta: MetaItem[] = [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Linhares Law" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  meta.push({ property: "og:image", content: img });
  meta.push({ property: "og:image:width", content: "1200" });
  meta.push({ property: "og:image:height", content: "630" });
  meta.push({ property: "og:image:alt", content: post.title });
  meta.push({ name: "twitter:image", content: img });
  meta.push({ property: "og:locale", content: LOCALE_HREFLANG[locale].replace("-", "_") });
  if (post.published_at) meta.push({ property: "article:published_time", content: post.published_at });
  if (post.updated_at) meta.push({ property: "article:modified_time", content: post.updated_at });
  if (post.author_full?.name) meta.push({ property: "article:author", content: post.author_full.name });
  if (post.category?.name) meta.push({ property: "article:section", content: post.category.name });
  for (const tag of post.tags) meta.push({ property: "article:tag", content: tag.name });

  const links: Array<{ rel: string; href: string; hrefLang?: string }> = [
    { rel: "canonical", href: url },
  ];
  // hreflang only for locales that the article actually has (we don't know without an extra query;
  // emit all 3 — fallback strategy keeps URLs valid).
  for (const l of LOCALES) {
    links.push({ rel: "alternate", hrefLang: LOCALE_HREFLANG[l], href: `${origin}${blogArticlePath(l, post.slug)}` });
  }
  // x-default always resolves to the Portuguese version (authoring locale).
  links.push({ rel: "alternate", hrefLang: "x-default", href: `${origin}${blogArticlePath("pt", post.slug)}` });

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    inLanguage: locale === "pt" ? "pt-BR" : locale,
    image: img ? [img] : undefined,
    datePublished: post.published_at ?? undefined,
    dateModified: post.updated_at,
    author: post.author_full ? { "@type": "Person", name: post.author_full.name } : undefined,
    publisher: {
      "@type": "Organization",
      name: "Linhares Law",
      logo: { "@type": "ImageObject", url: `${origin}${BRAND_LOGO_PATH}` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    timeRequired: post.reading_time_minutes ? `PT${post.reading_time_minutes}M` : undefined,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${origin}${withLocale(locale, "/")}` },
      { "@type": "ListItem", position: 2, name: t.breadcrumbBlog, item: `${origin}${withLocale(locale, "/blog")}` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const scripts: Array<{ type: string; children: string }> = [
    { type: "application/ld+json", children: JSON.stringify(article) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
  ];

  if (post.faq.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }),
    });
  }

  return { meta, links, scripts };
}
