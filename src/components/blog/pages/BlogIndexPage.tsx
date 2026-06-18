import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { FeaturedHero } from "@/components/blog/FeaturedHero";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { CategoryNav } from "@/components/blog/CategoryNav";
import {
  listPublishedPosts, getFeaturedPosts, getCategoryTree,
} from "@/lib/blog/public.functions";
import { blogBasePath, tBlog, blogSearchPath } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";
import { Link } from "@tanstack/react-router";

export function blogIndexQueries(locale: Locale, page: number) {
  return {
    featured: queryOptions({
      queryKey: ["blog", "featured", locale],
      queryFn: () => getFeaturedPosts({ data: { locale, limit: 3 } }),
      staleTime: 60_000,
    }),
    list: queryOptions({
      queryKey: ["blog", "list", locale, page],
      queryFn: () => listPublishedPosts({ data: { locale, page, pageSize: 12 } }),
      staleTime: 60_000,
    }),
    cats: queryOptions({
      queryKey: ["blog", "cats", locale],
      queryFn: () => getCategoryTree({ data: { locale } }),
      staleTime: 5 * 60_000,
    }),
  };
}

export function BlogIndexPage({ locale, page }: { locale: Locale; page: number }) {
  const q = blogIndexQueries(locale, page);
  const t = tBlog(locale);
  const featured = useSuspenseQuery(q.featured).data;
  const list = useSuspenseQuery(q.list).data;
  const cats = useSuspenseQuery(q.cats).data;

  // Exclude featured from recent grid to avoid duplicates
  const featuredIds = new Set(featured.map((f) => f.id));
  const recent = list.items.filter((p) => !featuredIds.has(p.id));

  return (
    <>
      <section className="relative overflow-hidden bg-[rgb(6_36_67)] pb-12 pt-32 text-white sm:pt-40">
        <Container>
          <Breadcrumb items={[{ label: t.breadcrumbHome, href: locale === "pt" ? "/" : `/${locale}` }, { label: t.breadcrumbBlog }]} />
          <div className="mt-6 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[rgb(179_134_66)]">{t.hero}</span>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{t.breadcrumbBlog}</h1>
            <p className="mt-4 text-white/75">{t.intro}</p>
            <div className="mt-6">
              <Link to={blogSearchPath(locale)} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-[rgb(179_134_66)] hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-3.5-3.5" /></svg>
                {t.searchArticles}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container>
          {featured.length > 0 && (
            <div className="mb-16">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="font-display text-2xl text-[rgb(6_36_67)] sm:text-3xl">{t.featured}</h2>
              </div>
              <FeaturedHero posts={featured} locale={locale} />
            </div>
          )}

          {cats.roots.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-4 text-xs uppercase tracking-[0.25em] text-ink/60">{t.categories}</h3>
              <CategoryNav roots={cats.roots} locale={locale} />
            </div>
          )}

          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl text-[rgb(6_36_67)] sm:text-3xl">{t.recent}</h2>
          </div>
          <ArticleGrid posts={recent} locale={locale} page={page} pageSize={12} total={list.total - featured.length} basePath={blogBasePath(locale)} />
        </Container>
      </section>
    </>
  );
}
