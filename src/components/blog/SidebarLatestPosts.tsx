import { Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { articleLink } from "@/lib/blog/links";
import { mediaUrl } from "@/lib/blog/media-url";
import { tBlog } from "@/lib/blog/i18n-strings";
import type { PublicPostListItem } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props { posts: PublicPostListItem[]; locale: Locale }

export function SidebarLatestPosts({ posts, locale }: Props) {
  if (!posts.length) return null;
  const t = tBlog(locale);

  return (
    <section className="border border-border/60 bg-card p-5">
      <h2 className="font-display text-base text-[rgb(6_36_67)]">{t.latestPosts}</h2>
      <div className="mt-4 h-px w-10 bg-[rgb(179_134_66)]" />
      <ul className="mt-4 space-y-4">
        {posts.map((p) => {
          const cover = mediaUrl(p.cover_image_url);
          const date = p.published_at
            ? new Date(p.published_at).toLocaleDateString(locale === "pt" ? "pt-BR" : locale === "es" ? "es-US" : "en-US",
                { day: "2-digit", month: "short", year: "numeric" })
            : null;
          return (
            <li key={p.id}>
              <Link {...articleLink(locale, p.slug)} className="group flex gap-3">
                <div className="h-14 w-16 shrink-0 overflow-hidden bg-muted">
                  {cover ? (
                    <img src={cover} alt={p.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  ) : <div className="h-full w-full bg-[rgb(6_36_67)]/15" />}
                </div>
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-[13px] leading-snug text-ink/85 group-hover:text-[rgb(6_36_67)]">{p.title}</h3>
                  {date && (
                    <span className="mt-1 flex items-center gap-1 text-[11px] text-ink/50">
                      <CalendarDays size={11} />{date}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
