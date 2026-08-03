import { createFileRoute } from "@tanstack/react-router";
import { NaMidiaPage } from "./_site.na-midia";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/en/na-midia")({
  head: () =>
    buildLocaleHead({
      path: "/na-midia",
      locale: "en",
      title: "In the Press | Linhares Law",
      description:
        "Interviews, features and editorial contributions from Linhares Law and André Linhares across leading outlets, including RedeTV News, Record Americas, SBT Brasil, Band News, Jovem Pan News and CNBC.",
    }),
  component: NaMidiaPage,
});
