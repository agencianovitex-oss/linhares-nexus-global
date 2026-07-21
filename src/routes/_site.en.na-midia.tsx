import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/layout/Placeholder";
import { buildLocaleHead } from "@/lib/seo";
import { dict } from "@/i18n/locales";

const L = "en" as const;
const t = dict[L].pages.media;

export const Route = createFileRoute("/_site/en/na-midia")({
  head: ({ params }: { params: Record<string, never> }) =>
    buildLocaleHead({
      path: "/na-midia",
      locale: L,
      title: `${t.title}, Linhares Law`,
      description: t.intro,
    }),
  component: function Page() {
    
    return <Placeholder title={t.title} intro={t.intro} eyebrow={dict[L].brand} />;
  },
});
