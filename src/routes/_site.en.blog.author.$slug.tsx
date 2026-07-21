import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BlogTaxonomyPage, taxonomyQueries } from "@/components/blog/pages/BlogTaxonomyPage";
import { BlogError, BlogNotFound } from "@/components/blog/BlogBoundaries";
import { buildLocaleHead } from "@/lib/seo";
import { tBlog } from "@/lib/blog/i18n-strings";

const L = "en" as const;
const KIND = "author" as const;
const search = z.object({ page: z.coerce.number().int().min(1).optional() });

export const Route = createFileRoute("/_site/en/blog/author/$slug")({
  validateSearch: search,
  loaderDeps: ({ search: s }) => ({ page: s.page ?? 1 }),
  loader: async ({ context, params, deps }) => {
    const q = taxonomyQueries(L, KIND, params.slug, deps.page);
    const entity = await context.queryClient.ensureQueryData(q.entity);
    await context.queryClient.ensureQueryData(q.list);
    return entity;
  },
  head: ({ loaderData, params }) => buildLocaleHead({
    path: `/blog/author/${params.slug}`, locale: L,
    title: `${loaderData?.name ?? params.slug}, ${tBlog(L).author}, Linhares Law`,
    description: loaderData?.short_bio ?? tBlog(L).intro,
  }),
  errorComponent: ({ error }) => <BlogError locale={L} error={error as Error} />,
  notFoundComponent: () => <BlogNotFound locale={L} />,
  component: function Page() {
    const { slug } = Route.useParams();
    const { page } = Route.useSearch();
    return <BlogTaxonomyPage locale={L} kind={KIND} slug={slug} page={page ?? 1} />;
  },
});
