import { createFileRoute } from "@tanstack/react-router";
import { PremiacoesPage } from "./_site.premiacoes";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/es/premiacoes")({
  head: () =>
    buildLocaleHead({
      path: "/premiacoes",
      locale: "es",
      title: "Reconocimientos, Linhares Law",
      description:
        "Premios y reconocimientos institucionales recibidos por Linhares Law, incluyendo IBI Award, 10 Best Law Firms, The Law Awards, Great Place To Work y el Premio Quality Justiça.",
    }),
  component: PremiacoesPage,
});
