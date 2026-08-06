import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock, User } from "lucide-react";
import { tBlog } from "@/lib/blog/i18n-strings";
import { taxonomyLink } from "@/lib/blog/links";
import { mediaUrl } from "@/lib/blog/media-url";
import type { PublicPostDetail } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props { post: PublicPostDetail; locale: Locale }

export function ArticleHeader({ post, locale }: Props) {
  const t = tBlog(locale);
  const cover = mediaUrl(post.cover_image_url);
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(locale === "pt" ? "pt-BR" : locale === "es" ? "es-US" : "en-US",
        { day: "2-digit", month: "short", year: "numeric" })
    : null;

  return (
    <header className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
      <div className="order-2 min-w-0 space-y-5 lg:order-1">
        {post.category && (
          <Link {...taxonomyLink(locale, "category", post.category.slug)}
            className="inline-block bg-[rgb(6_36_67)]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[rgb(179_134_66)] transition hover:bg-[rgb(6_36_67)]/10">
            {post.category.name}
          </Link>
        )}
        <h1 className="font-display text-3xl leading-[1.15] text-[rgb(6_36_67)] sm:text-4xl">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink/60">
          {post.author_full && (
            <span className="flex items-center gap-2">
              <User size={13} className="text-[rgb(179_134_66)]" />
              <Link {...taxonomyLink(locale, "author", post.author_full.slug)} className="hover:text-[rgb(6_36_67)]">
                {post.author_full.name}
              </Link>
            </span>
          )}
          {date && (
            <span className="flex items-center gap-2">
              <CalendarDays size={13} className="text-[rgb(179_134_66)]" />{date}
            </span>
          )}
          {post.reading_time_minutes && (
            <span className="flex items-center gap-2">
              <Clock size={13} className="text-[rgb(179_134_66)]" />{t.readingTime(post.reading_time_minutes)}
            </span>
          )}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted shadow-[0_18px_40px_-24px_rgba(6,36,67,0.45)]">
          {cover ? (
            <img src={cover} alt={post.title} className="h-full w-full object-cover"
              decoding="async" loading="eager" {...({ fetchPriority: "high" } as any)} />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[rgb(6_36_67)] to-[rgb(6_36_67)]/70" />
          )}
        </div>
      </div>
    </header>
  );
}
