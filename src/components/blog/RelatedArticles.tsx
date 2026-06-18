import { ArticleCard } from "./ArticleCard";
import { tBlog } from "@/lib/blog/i18n-strings";
import type { PublicPostListItem } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props { posts: PublicPostListItem[]; locale: Locale }

export function RelatedArticles({ posts, locale }: Props) {
  if (!posts.length) return null;
  const t = tBlog(locale);
  return (
    <section className="my-16 border-t border-border/40 pt-12">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-2xl text-[rgb(6_36_67)] sm:text-3xl">{t.continueReading}</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => <ArticleCard key={p.id} post={p} locale={locale} />)}
      </div>
    </section>
  );
}
