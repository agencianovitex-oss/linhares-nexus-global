import type { Locale } from "@/i18n/locales";

type Kind = "category" | "tag" | "author" | "profession";

const ARTICLE_ROUTE = {
  pt: "/blog/$slug",
  en: "/en/blog/$slug",
  es: "/es/blog/$slug",
} as const;

const TAXONOMY_ROUTE = {
  pt: {
    category: "/blog/categoria/$slug",
    tag: "/blog/tag/$slug",
    author: "/blog/autor/$slug",
    profession: "/blog/profissao/$slug",
  },
  en: {
    category: "/en/blog/category/$slug",
    tag: "/en/blog/tag/$slug",
    author: "/en/blog/author/$slug",
    profession: "/en/blog/profession/$slug",
  },
  es: {
    category: "/es/blog/categoria/$slug",
    tag: "/es/blog/tag/$slug",
    author: "/es/blog/autor/$slug",
    profession: "/es/blog/profesion/$slug",
  },
} as const;

/** Link props for an article route (TanStack needs `to` + `params`, never an interpolated string). */
export function articleLink(locale: Locale, slug: string) {
  return { to: ARTICLE_ROUTE[locale], params: { slug } } as const;
}

export function taxonomyLink(locale: Locale, kind: Kind, slug: string) {
  return { to: TAXONOMY_ROUTE[locale][kind], params: { slug } } as const;
}
