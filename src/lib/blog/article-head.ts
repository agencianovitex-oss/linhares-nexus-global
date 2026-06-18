import { LOCALES, LOCALE_HREFLANG, type Locale } from "@/i18n/locales";
import { withLocale } from "@/i18n/useI18n";
import { blogArticlePath, siteOrigin, tBlog } from "@/lib/blog/i18n-strings";
import type { PublicPostDetail } from "@/lib/blog/public.functions";

interface MetaItem extends Record<string, string> {}

export function buildArticleHead(post: PublicPostDetail, locale: Locale, localizedPath: string) {
  const origin = siteOrigin();
  const url = `${origin}${localizedPath}`;
  const title = `${post.meta_title ?? post.title} — Linhares Law`;
  const description = post.meta_description ?? post.excerpt ?? "";
  const img = post.cover_image_url ?? undefined;
  const t = tBlog(locale);

  const meta: MetaItem[] = [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Linhares Law" },
    { name: "twitter:card", content: img ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (img) {
    meta.push({ property: "og:image", content: img });
    meta.push({ name: "twitter:image", content: img });
  }
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

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: img ? [img] : undefined,
    datePublished: post.published_at ?? undefined,
    dateModified: post.updated_at,
    author: post.author_full ? { "@type": "Person", name: post.author_full.name } : undefined,
    publisher: {
      "@type": "Organization",
      name: "Linhares Law",
      logo: { "@type": "ImageObject", url: `${origin}/favicon.ico` },
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
