import { createFileRoute, redirect } from "@tanstack/react-router";
import { BlogArticlePage, articleQueries, latestPostsQuery } from "@/components/blog/pages/BlogArticlePage";
import { BlogError, BlogNotFound } from "@/components/blog/BlogBoundaries";
import { buildArticleHead } from "@/lib/blog/article-head";
import { blogArticlePath } from "@/lib/blog/i18n-strings";

const L = "es" as const;

export const Route = createFileRoute("/_site/es/blog/$slug")({
  loader: async ({ context, params }) => {
    const post = await context.queryClient.ensureQueryData(articleQueries(L, params.slug).post);
    // Legacy/foreign slug: send the reader (and crawlers) to this locale's own slug.
    if (post.slug && post.slug !== params.slug) {
      throw redirect({ to: "/es/blog/$slug", params: { slug: post.slug }, statusCode: 301 });
    }
    await context.queryClient.ensureQueryData(latestPostsQuery(L));
    return post;
  },
  head: ({ loaderData, params }) => loaderData ? buildArticleHead(loaderData as any, L, blogArticlePath(L, params.slug)) : {},
  errorComponent: ({ error }) => <BlogError locale={L} error={error as Error} />,
  notFoundComponent: () => <BlogNotFound locale={L} />,
  component: function Page() {
    const { slug } = Route.useParams();
    return <BlogArticlePage locale={L} slug={slug} />;
  },
});
