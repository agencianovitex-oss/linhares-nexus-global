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
import { getPostBySlug, getRelatedPosts } from "@/lib/blog/public.functions";
import { countWords } from "@/lib/blog/tiptap-render";
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

export function BlogArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = tBlog(locale);
  const post = useSuspenseQuery(articleQueries(locale, slug).post).data;
  const related = useSuspenseQuery(queryOptions({
    queryKey: ["blog", "related", locale, post.id],
    queryFn: () => getRelatedPosts({ data: { postId: post.id, locale, categoryId: post.category_id, limit: 3 } }),
    staleTime: 60_000,
  })).data;

  const words = countWords(post.body);
  const articleUrl = `${siteOrigin()}${blogArticlePath(locale, post.slug)}`;

  return (
    <>
      <section className="bg-[rgb(6_36_67)] pb-10 pt-32 text-white sm:pt-36">
        <Container width="narrow">
          <Breadcrumb items={[
            { label: t.breadcrumbHome, href: locale === "pt" ? "/" : `/${locale}` },
            { label: t.breadcrumbBlog, href: blogBasePath(locale) },
            { label: post.title },
          ]} />
        </Container>
      </section>

      {post.cover_image_url && (
        <div className="relative -mt-2 aspect-[21/9] w-full overflow-hidden bg-[rgb(6_36_67)]">
          <img src={post.cover_image_url} alt={post.title}
            className="h-full w-full object-cover" decoding="async" loading="eager"
            {...({ fetchPriority: "high" } as any)} />
        </div>
      )}

      <section className="bg-background py-12 sm:py-16">
        <Container width="narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
            <div className="min-w-0">
              <ArticleHeader post={post} locale={locale} />
              <ShareButtons url={articleUrl} title={post.title} locale={locale} />
              <ArticleBody doc={post.body} />
              <ArticleFAQ faq={post.faq} locale={locale} />
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
            <aside className="hidden lg:block">
              <TableOfContents doc={post.body} wordCount={words} locale={locale} />
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
