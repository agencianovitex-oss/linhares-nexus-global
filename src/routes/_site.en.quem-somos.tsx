import { createFileRoute } from "@tanstack/react-router";
import { QuemSomosPage } from "./_site.quem-somos";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/en/quem-somos")({
  head: () =>
    buildLocaleHead({
      path: "/quem-somos",
      locale: "en",
      title: "About the Firm, Linhares Law",
      description:
        "Discover the history and values of Linhares Law — a boutique law firm dedicated exclusively to U.S. immigration, with over 14 years of practice and four offices across the United States.",
    }),
  component: QuemSomosPage,
});
