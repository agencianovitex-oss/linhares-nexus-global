import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { searchPosts } from "@/lib/blog/public.functions";
import { tBlog, blogBasePath } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

export function BlogSearchPage({ locale, initialQ }: { locale: Locale; initialQ: string }) {
  const t = tBlog(locale);
  const [q, setQ] = useState(initialQ);
  const enabled = q.trim().length >= 2;
  const { data, isFetching } = useQuery({
    queryKey: ["blog", "search", locale, q.trim()],
    queryFn: () => searchPosts({ data: { q: q.trim(), locale, limit: 24 } }),
    enabled,
    staleTime: 30_000,
  });

  return (
    <>
      <section className="bg-[rgb(6_36_67)] pb-12 pt-32 text-white sm:pt-40">
        <Container>
          <Breadcrumb items={[
            { label: t.breadcrumbHome, href: locale === "pt" ? "/" : `/${locale}` },
            { label: t.breadcrumbBlog, href: blogBasePath(locale) },
            { label: t.searchArticles },
          ]} />
          <h1 className="mt-6 font-display text-3xl sm:text-4xl">{t.searchArticles}</h1>
          <div className="mt-6 flex max-w-2xl items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 opacity-60">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-3.5-3.5" />
            </svg>
            <input
              autoFocus
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="flex-1 bg-transparent px-2 py-2 text-base text-white outline-none placeholder:text-white/50"
            />
          </div>
        </Container>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <Container>
          {!enabled && <p className="text-ink/60">{t.searchPlaceholder}</p>}
          {enabled && isFetching && <p className="text-ink/60">…</p>}
          {enabled && !isFetching && data && (
            <>
              <p className="mb-6 text-sm text-ink/60">{t.searchResultsFor(q)}</p>
              {data.length === 0 ? (
                <p className="text-ink/60">{t.noResults}</p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {data.map((p) => <ArticleCard key={p.id} post={p} locale={locale} />)}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}
