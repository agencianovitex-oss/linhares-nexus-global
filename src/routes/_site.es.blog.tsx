import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BlogIndexPage, blogIndexQueries } from "@/components/blog/pages/BlogIndexPage";
import { BlogError, BlogNotFound } from "@/components/blog/BlogBoundaries";
import { buildLocaleHead } from "@/lib/seo";
import { tBlog } from "@/lib/blog/i18n-strings";

const L = "es" as const;
const search = z.object({ page: z.coerce.number().int().min(1).optional() });

export const Route = createFileRoute("/_site/es/blog")({
  validateSearch: search,
  loaderDeps: ({ search: s }) => ({ page: s.page ?? 1 }),
  loader: ({ context, deps }) => {
    const q = blogIndexQueries(L, deps.page);
    return Promise.all([
      context.queryClient.ensureQueryData(q.featured),
      context.queryClient.ensureQueryData(q.list),
      context.queryClient.ensureQueryData(q.cats),
    ]);
  },
  head: () => buildLocaleHead({
    path: "/blog", locale: L,
    title: `${tBlog(L).breadcrumbBlog}, Linhares Law`,
    description: tBlog(L).intro,
  }),
  errorComponent: ({ error }) => <BlogError locale={L} error={error as Error} />,
  notFoundComponent: () => <BlogNotFound locale={L} />,
  component: function Page() {
    const { page } = Route.useSearch();
    return <BlogIndexPage locale={L} page={page ?? 1} />;
  },
});
