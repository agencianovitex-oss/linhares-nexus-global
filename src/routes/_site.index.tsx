import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";
import { buildLocaleHead } from "@/lib/seo";
import { dict } from "@/i18n/locales";
import ogImage from "@/assets/andre-portrait.jpg";

export const Route = createFileRoute("/_site/")({
  head: () =>
    buildLocaleHead({
      path: "/",
      locale: "pt",
      title: `${dict.pt.pages.home.title} — Advogados de Imigração nos Estados Unidos`,
      description:
        "Linhares Law é um escritório boutique de imigração americana. Há mais de 14 anos, ajudamos profissionais, empresários e famílias a construírem seu futuro nos Estados Unidos. Escritórios em Orlando, Miami, New York e Salt Lake City.",
      ogImage,
    }),
  component: Home,
});
