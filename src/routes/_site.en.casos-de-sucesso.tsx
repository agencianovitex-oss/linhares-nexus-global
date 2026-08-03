import { createFileRoute } from "@tanstack/react-router";
import { DepoimentosPage } from "./_site.casos-de-sucesso";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/en/casos-de-sucesso")({
  head: () =>
    buildLocaleHead({
      path: "/casos-de-sucesso",
      locale: "en",
      title: "Testimonials | Linhares Law",
      description:
        "Real stories from Linhares Law clients about their U.S. immigration journeys and the approvals they secured with our representation.",
    }),
  component: DepoimentosPage,
});
