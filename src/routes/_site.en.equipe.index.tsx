import { createFileRoute } from "@tanstack/react-router";
import { EquipePage } from "./_site.equipe.index";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/en/equipe/")({
  head: () =>
    buildLocaleHead({
      path: "/equipe",
      locale: "en",
      title: "Team, Linhares Law",
      description:
        "Meet the specialized team behind Linhares Law: U.S.-licensed attorneys, legal managers, specialists and professionals devoted exclusively to U.S. immigration law.",
    }),
  component: EquipePage,
});
