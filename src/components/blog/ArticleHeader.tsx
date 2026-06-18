import { Link } from "@tanstack/react-router";
import { blogTaxonomyPath, tBlog } from "@/lib/blog/i18n-strings";
import type { PublicPostDetail } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props { post: PublicPostDetail; locale: Locale }

export function ArticleHeader({ post, locale }: Props) {
  const t = tBlog(locale);
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(locale === "pt" ? "pt-BR" : locale === "es" ? "es-US" : "en-US",
        { day: "2-digit", month: "long", year: "numeric" })
    : null;

  return (
    <header className="space-y-6">
      {post.category && (
        <Link to={blogTaxonomyPath(locale, "category", post.category.slug)}
          className="inline-block text-xs uppercase tracking-[0.25em] text-[rgb(179_134_66)] hover:opacity-80">
          {post.category.name}
        </Link>
      )}
      <h1 className="font-display text-4xl leading-tight text-[rgb(6_36_67)] sm:text-5xl">{post.title}</h1>
      {post.excerpt && <p className="text-lg text-ink/75 sm:text-xl">{post.excerpt}</p>}
      <div className="flex flex-wrap items-center gap-4 border-t border-border/40 pt-4 text-sm text-ink/70">
        {post.author_full && (
          <div className="flex items-center gap-3">
            {post.author_full.photo_url ? (
              <img src={post.author_full.photo_url} alt="" className="h-10 w-10 rounded-full object-cover" />
            ) : <div className="h-10 w-10 rounded-full bg-[rgb(6_36_67)]/10" />}
            <div className="leading-tight">
              <Link to={blogTaxonomyPath(locale, "author", post.author_full.slug)} className="font-medium text-ink hover:text-[rgb(6_36_67)]">
                {post.author_full.name}
              </Link>
              {post.author_full.role_title && <div className="text-xs text-ink/60">{post.author_full.role_title}</div>}
            </div>
          </div>
        )}
        {date && <span>· {date}</span>}
        {post.reading_time_minutes && <span>· {t.readingTime(post.reading_time_minutes)}</span>}
      </div>
    </header>
  );
}
