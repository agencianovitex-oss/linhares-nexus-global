import { createFileRoute } from "@tanstack/react-router";
import { PremiacoesPage } from "./_site.premiacoes";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/en/premiacoes")({
  head: () =>
    buildLocaleHead({
      path: "/premiacoes",
      locale: "en",
      title: "Recognition, Linhares Law",
      description:
        "Awards and institutional recognition received by Linhares Law, including the IBI Award, 10 Best Law Firms, The Law Awards, Great Place To Work and the Quality Justiça Award.",
    }),
  component: PremiacoesPage,
});
