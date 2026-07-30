import { queryOptions } from "@tanstack/react-query";
import { getFeaturedPosts } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

export function homeFeaturedPostsQuery(locale: Locale) {
  return queryOptions({
    queryKey: ["home", "featured-posts", locale],
    queryFn: () => getFeaturedPosts({ data: { locale, limit: 3 } }),
    staleTime: 60_000,
  });
}
