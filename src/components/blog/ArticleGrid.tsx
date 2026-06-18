import { ArticleCard } from "./ArticleCard";
import { tBlog, blogBasePath } from "@/lib/blog/i18n-strings";
import type { PublicPostListItem } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props {
  posts: PublicPostListItem[];
  locale: Locale;
  page: number;
  pageSize: number;
  total: number;
  basePath?: string;
}

export function ArticleGrid({ posts, locale, page, pageSize, total, basePath }: Props) {
  const t = tBlog(locale);
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const base = basePath ?? blogBasePath(locale);
  const link = (p: number) => `${base}?page=${p}`;

  if (posts.length === 0) {
    return <p className="py-16 text-center text-ink/60">{t.noResults}</p>;
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => <ArticleCard key={p.id} post={p} locale={locale} />)}
      </div>
      {pages > 1 && (
        <nav className="flex items-center justify-center gap-3 text-sm" aria-label="Pagination">
          {page > 1 && (
            <a href={link(page - 1)} className="rounded border border-border/60 px-3 py-1.5 hover:border-[rgb(179_134_66)]">← {t.prev}</a>
          )}
          <span className="text-ink/60">{t.page} {page} {t.of} {pages}</span>
          {page < pages && (
            <a href={link(page + 1)} className="rounded border border-border/60 px-3 py-1.5 hover:border-[rgb(179_134_66)]">{t.next} →</a>
          )}
        </nav>
      )}
    </div>
  );
}

