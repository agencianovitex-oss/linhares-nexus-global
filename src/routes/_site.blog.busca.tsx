import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BlogSearchPage } from "@/components/blog/pages/BlogSearchPage";
import { BlogError, BlogNotFound } from "@/components/blog/BlogBoundaries";
import { buildLocaleHead } from "@/lib/seo";
import { tBlog } from "@/lib/blog/i18n-strings";

const L = "pt" as const;
const search = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/_site/blog/busca")({
  validateSearch: search,
  head: () => buildLocaleHead({
    path: "/blog/busca", locale: L,
    title: `${tBlog(L).searchArticles} — Linhares Law`,
    description: tBlog(L).intro,
    noindex: true,
  }),
  errorComponent: ({ error }) => <BlogError locale={L} error={error as Error} />,
  notFoundComponent: () => <BlogNotFound locale={L} />,
  component: function Page() {
    const { q } = Route.useSearch();
    return <BlogSearchPage locale={L} initialQ={q ?? ""} />;
  },
});
