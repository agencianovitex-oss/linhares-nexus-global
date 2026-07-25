import { createFileRoute } from "@tanstack/react-router";
import { NaMidiaPage } from "./_site.na-midia";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/es/na-midia")({
  head: () =>
    buildLocaleHead({
      path: "/na-midia",
      locale: "es",
      title: "En los Medios, Linhares Law",
      description:
        "Entrevistas, apariciones y contribuciones editoriales de Linhares Law y André Linhares en medios de referencia: RedeTV News, Record Americas, SBT Brasil, Band News, Jovem Pan News y CNBC.",
    }),
  component: NaMidiaPage,
});
