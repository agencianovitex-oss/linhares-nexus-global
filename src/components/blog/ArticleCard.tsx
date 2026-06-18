import { Link } from "@tanstack/react-router";
import { blogArticlePath, blogTaxonomyPath, tBlog } from "@/lib/blog/i18n-strings";
import type { PublicPostListItem } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props {
  post: PublicPostListItem;
  locale: Locale;
  variant?: "default" | "compact" | "hero";
  priority?: boolean;
}

export function ArticleCard({ post, locale, variant = "default", priority = false }: Props) {
  const t = tBlog(locale);
  const href = blogArticlePath(locale, post.slug);
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(locale === "pt" ? "pt-BR" : locale === "es" ? "es-US" : "en-US",
        { day: "2-digit", month: "short", year: "numeric" })
    : null;

  if (variant === "hero") {
    return (
      <Link to={href} className="group block overflow-hidden rounded-xl bg-card ring-1 ring-border/40 transition hover:ring-[rgb(179_134_66)]/40">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {post.cover_image_url ? (
            <img src={post.cover_image_url} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              loading={priority ? "eager" : "lazy"} decoding="async"
              {...(priority ? { fetchPriority: "high" as any } : {})} />
          ) : <div className="h-full w-full bg-gradient-to-br from-[rgb(6_36_67)] to-[rgb(6_36_67)]/70" />}
        </div>
        <div className="space-y-3 p-6">
          {post.category && (
            <span className="text-xs uppercase tracking-[0.2em] text-[rgb(179_134_66)]">{post.category.name}</span>
          )}
          <h3 className="font-display text-2xl leading-tight text-ink group-hover:text-[rgb(6_36_67)]">{post.title}</h3>
          {post.excerpt && <p className="line-clamp-3 text-sm text-ink/70">{post.excerpt}</p>}
          <div className="flex items-center gap-3 text-xs text-ink/60">
            {post.author && <span>{t.by} {post.author.name}</span>}
            {date && <span>· {date}</span>}
            {post.reading_time_minutes && <span>· {t.readingTime(post.reading_time_minutes)}</span>}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link to={href} className="group flex gap-4">
        <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-md bg-muted">
          {post.cover_image_url ? (
            <img src={post.cover_image_url} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          ) : <div className="h-full w-full bg-[rgb(6_36_67)]/30" />}
        </div>
        <div className="min-w-0 flex-1">
          {post.category && <span className="text-[10px] uppercase tracking-widest text-[rgb(179_134_66)]">{post.category.name}</span>}
          <h4 className="line-clamp-2 text-sm font-medium text-ink group-hover:text-[rgb(6_36_67)]">{post.title}</h4>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-border/40 transition hover:ring-[rgb(179_134_66)]/40">
      <Link to={href} className="block overflow-hidden">
        <div className="relative aspect-[16/10] bg-muted">
          {post.cover_image_url ? (
            <img src={post.cover_image_url} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
          ) : <div className="h-full w-full bg-gradient-to-br from-[rgb(6_36_67)] to-[rgb(6_36_67)]/70" />}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        {post.category && (
          <Link to={blogTaxonomyPath(locale, "category", post.category.slug)}
            className="text-xs uppercase tracking-[0.2em] text-[rgb(179_134_66)] hover:opacity-80">
            {post.category.name}
          </Link>
        )}
        <Link to={href}>
          <h3 className="font-display text-xl leading-snug text-ink group-hover:text-[rgb(6_36_67)]">{post.title}</h3>
        </Link>
        {post.excerpt && <p className="line-clamp-3 text-sm text-ink/70">{post.excerpt}</p>}
        <div className="mt-auto flex items-center gap-3 text-xs text-ink/60">
          {post.author && <span>{t.by} {post.author.name}</span>}
          {post.reading_time_minutes && <span>· {t.readingTime(post.reading_time_minutes)}</span>}
        </div>
      </div>
    </article>
  );
}
