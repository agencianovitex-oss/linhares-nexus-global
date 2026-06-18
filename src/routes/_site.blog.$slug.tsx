import { createFileRoute } from "@tanstack/react-router";
import { BlogArticlePage, articleQueries } from "@/components/blog/pages/BlogArticlePage";
import { BlogError, BlogNotFound } from "@/components/blog/BlogBoundaries";
import { buildArticleHead } from "@/lib/blog/article-head";
import { blogArticlePath } from "@/lib/blog/i18n-strings";

const L = "pt" as const;

export const Route = createFileRoute("/_site/blog/$slug")({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(articleQueries(L, params.slug).post),
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    return buildArticleHead(loaderData as any, L, blogArticlePath(L, params.slug));
  },
  errorComponent: ({ error }) => <BlogError locale={L} error={error as Error} />,
  notFoundComponent: () => <BlogNotFound locale={L} />,
  component: function Page() {
    const { slug } = Route.useParams();
    return <BlogArticlePage locale={L} slug={slug} />;
  },
});
