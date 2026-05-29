import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/layout/Placeholder";
import { buildLocaleHead } from "@/lib/seo";
import { dict } from "@/i18n/locales";

export const Route = createFileRoute("/_site/")({
  head: () =>
    buildLocaleHead({
      path: "/",
      locale: "pt",
      title: `${dict.pt.pages.home.title} — U.S. Immigration · Boutique Practice`,
      description: dict.pt.pages.home.intro,
    }),
  component: () => (
    <Placeholder title={dict.pt.pages.home.title} intro={dict.pt.pages.home.intro} eyebrow={dict.pt.slogan} />
  ),
});
