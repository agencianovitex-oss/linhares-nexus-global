import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { notFound, Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { FeaturedHero } from "@/components/blog/FeaturedHero";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import {
  listPublishedPosts, getCategoryBySlug, getTagBySlug, getAuthorBySlug, getProfessionBySlug,
} from "@/lib/blog/public.functions";
import { tBlog, blogBasePath, blogTaxonomyPath } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

type Kind = "category" | "tag" | "author" | "profession";

export function taxonomyQueries(locale: Locale, kind: Kind, slug: string, page: number) {
  const filterKey: Record<Kind, "categorySlug" | "tagSlug" | "authorSlug" | "professionSlug"> = {
    category: "categorySlug", tag: "tagSlug", author: "authorSlug", profession: "professionSlug",
  };
  return {
    entity: queryOptions({
      queryKey: ["blog", "tax", kind, slug, locale],
      queryFn: async () => {
        const r =
          kind === "category" ? await getCategoryBySlug({ data: { locale, slug } }) :
          kind === "tag" ? await getTagBySlug({ data: { locale, slug } }) :
          kind === "author" ? await getAuthorBySlug({ data: { locale, slug } }) :
          await getProfessionBySlug({ data: { locale, slug } });
        if (!r) throw notFound();
        return r as any;
      },
      staleTime: 5 * 60_000,
    }),
    list: queryOptions({
      queryKey: ["blog", "tax-list", kind, slug, locale, page],
      queryFn: () => listPublishedPosts({ data: { locale, page, pageSize: 12, [filterKey[kind]]: slug } as any }),
      staleTime: 60_000,
    }),
  };
}

export function BlogTaxonomyPage({ locale, kind, slug, page }: { locale: Locale; kind: Kind; slug: string; page: number }) {
  const q = taxonomyQueries(locale, kind, slug, page);
  const entity = useSuspenseQuery(q.entity).data;
  const list = useSuspenseQuery(q.list).data;
  const t = tBlog(locale);

  const kindLabel = kind === "category" ? t.category : kind === "tag" ? t.tag : kind === "author" ? t.author : t.profession;
  const title = entity.name;
  const description = entity.description ?? entity.short_bio ?? null;
  const isHub = kind === "profession";
  const featured = isHub ? list.items.slice(0, 3) : [];
  const rest = isHub ? list.items.slice(3) : list.items;

  return (
    <>
      <section className="bg-[rgb(6_36_67)] pb-12 pt-32 text-white sm:pt-40">
        <Container>
          <Breadcrumb items={[
            { label: t.breadcrumbHome, href: locale === "pt" ? "/" : `/${locale}` },
            { label: t.breadcrumbBlog, href: blogBasePath(locale) },
            { label: title },
          ]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[rgb(179_134_66)]">
              {isHub ? t.contentHubFor(title) : kindLabel}
            </span>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
            {description && <p className="mt-4 text-white/75">{description}</p>}
            {kind === "author" && entity.role_title && <p className="mt-2 text-white/60">{entity.role_title}</p>}
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          {isHub && featured.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-6 font-display text-2xl text-[rgb(6_36_67)] sm:text-3xl">{t.featured}</h2>
              <FeaturedHero posts={featured} locale={locale} />
            </div>
          )}
          {(isHub ? rest.length > 0 : true) && (
            <>
              <h2 className="mb-6 font-display text-2xl text-[rgb(6_36_67)] sm:text-3xl">{t.recent}</h2>
              <ArticleGrid posts={rest} locale={locale} page={page} pageSize={12} total={list.total - (isHub ? featured.length : 0)} basePath={blogTaxonomyPath(locale, kind, slug)} />
            </>
          )}
          {isHub && (
            <ArticleCTA locale={locale} categorySlug={slug} />
          )}
        </Container>
      </section>
    </>
  );
}
