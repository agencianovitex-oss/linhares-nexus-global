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
      title: "Linhares Law, Advogados de Imigração Americana",
      description:
        "Escritório boutique de imigração americana. Há mais de 14 anos representamos profissionais, investidores e famílias, com escritórios em Orlando, Miami, New York e Salt Lake City.",

      ogImage,
    }),
  component: Home,
});
