import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { notFound } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { SidebarLatestPosts } from "@/components/blog/SidebarLatestPosts";
import { getPostBySlug, getRelatedPosts, getLatestPosts } from "@/lib/blog/public.functions";
import { tBlog, blogBasePath, blogArticlePath, siteOrigin } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

export function articleQueries(locale: Locale, slug: string) {
  return {
    post: queryOptions({
      queryKey: ["blog", "post", locale, slug],
      queryFn: async () => {
        const p = await getPostBySlug({ data: { locale, slug } });
        if (!p) throw notFound();
        return p;
      },
      staleTime: 5 * 60_000,
    }),
  };
}

export function latestPostsQuery(locale: Locale) {
  return queryOptions({
    queryKey: ["blog", "latest", locale],
    queryFn: () => getLatestPosts({ data: { locale, limit: 4 } }),
    staleTime: 60_000,
  });
}

export function BlogArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = tBlog(locale);
  const post = useSuspenseQuery(articleQueries(locale, slug).post).data;
  const related = useSuspenseQuery(queryOptions({
    queryKey: ["blog", "related", locale, post.id],
    queryFn: () => getRelatedPosts({ data: { postId: post.id, locale, categoryId: post.category_id, limit: 3 } }),
    staleTime: 60_000,
  })).data;
  const latest = useSuspenseQuery(latestPostsQuery(locale)).data.filter((p) => p.id !== post.id).slice(0, 4);

  const articleUrl = `${siteOrigin()}${blogArticlePath(locale, post.slug)}`;

  const sidebar = (
    <div className="space-y-6">
      <SidebarLatestPosts posts={latest} locale={locale} />
      <TableOfContents doc={post.body} locale={locale} />
      <ArticleCTA
        variant="sidebar"
        locale={locale}
        categorySlug={post.category?.slug}
        cta_title={post.cta.cta_title}
        cta_description={post.cta.cta_description}
        cta_button_text={post.cta.cta_button_text}
        cta_url={post.cta.cta_url}
      />
    </div>
  );

  return (
    <>
      {/* Cabeçalho claro: título à esquerda, capa em proporção fixa à direita */}
      <section className="border-b border-border/50 bg-background pb-12 pt-28 sm:pt-32">
        <Container>
          <div className="mb-8">
            <Breadcrumb items={[
              { label: t.breadcrumbHome, href: locale === "pt" ? "/" : `/${locale}` },
              { label: t.breadcrumbBlog, href: blogBasePath(locale) },
              { label: post.title },
            ]} />
          </div>
          <ArticleHeader post={post} locale={locale} />
        </Container>
      </section>

      <section className="bg-[rgb(6_36_67)]/[0.03] py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <aside className="order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">{sidebar}</div>
            </aside>

            <div className="order-1 min-w-0 lg:order-2">
              <div className="bg-card p-6 shadow-[0_1px_3px_rgba(6,36,67,0.06)] sm:p-10">
                {post.excerpt && (
                  <p className="mb-8 border-l-2 border-[rgb(179_134_66)] pl-5 font-display text-lg leading-relaxed text-[rgb(6_36_67)]">
                    {post.excerpt}
                  </p>
                )}
                <ArticleBody doc={post.body} />
                <ArticleFAQ faq={post.faq} locale={locale} />
                <ShareButtons url={articleUrl} title={post.title} locale={locale} />
              </div>

              <ArticleCTA
                locale={locale}
                categorySlug={post.category?.slug}
                cta_title={post.cta.cta_title}
                cta_description={post.cta.cta_description}
                cta_button_text={post.cta.cta_button_text}
                cta_url={post.cta.cta_url}
              />
              {post.author_full && <AuthorCard author={post.author_full} locale={locale} />}
              <RelatedArticles posts={related} locale={locale} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
