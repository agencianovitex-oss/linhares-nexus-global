import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/layout/Placeholder";
import { buildLocaleHead } from "@/lib/seo";
import { dict } from "@/i18n/locales";

const L = "en" as const;

export const Route = createFileRoute("/_site/en/")({
  head: () =>
    buildLocaleHead({
      path: "/",
      locale: L,
      title: `${dict[L].pages.home.title} — U.S. Immigration · Boutique Practice`,
      description: dict[L].pages.home.intro,
    }),
  component: () => (
    <Placeholder title={dict[L].pages.home.title} intro={dict[L].pages.home.intro} eyebrow={dict[L].slogan} />
  ),
});
