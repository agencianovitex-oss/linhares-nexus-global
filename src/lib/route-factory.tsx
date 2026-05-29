import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/layout/Placeholder";
import { buildLocaleHead } from "@/lib/seo";
import { dict, type Locale } from "@/i18n/locales";

type PageKey = keyof (typeof dict)["pt"]["pages"];

export function makeRoute(args: {
  routeId: string;
  path: string;
  locale: Locale;
  pageKey: PageKey;
  noindex?: boolean;
}) {
  const { routeId, path, locale, pageKey, noindex } = args;
  const t = dict[locale].pages[pageKey];

  return createFileRoute(routeId as never)({
    head: () =>
      buildLocaleHead({
        path,
        locale,
        title: `${t.title} — Linhares Law`,
        description: t.intro,
        noindex,
      }),
    component: function Page() {
      return <Placeholder title={t.title} intro={t.intro} eyebrow={dict[locale].brand} />;
    },
  });
}
