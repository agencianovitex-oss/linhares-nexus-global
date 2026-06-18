import { ArticleCard } from "./ArticleCard";
import type { PublicPostListItem } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props {
  posts: PublicPostListItem[];
  locale: Locale;
}

export function FeaturedHero({ posts, locale }: Props) {
  if (posts.length === 0) return null;
  const [primary, ...rest] = posts;
  const sides = rest.slice(0, 2);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ArticleCard post={primary} locale={locale} variant="hero" priority />
      </div>
      <div className="flex flex-col gap-6">
        {sides.map((p) => <ArticleCard key={p.id} post={p} locale={locale} />)}
      </div>
    </div>
  );
}
