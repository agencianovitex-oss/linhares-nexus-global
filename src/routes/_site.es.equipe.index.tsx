import { createFileRoute } from "@tanstack/react-router";
import { EquipePage } from "./_site.equipe.index";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/es/equipe/")({
  head: () =>
    buildLocaleHead({
      path: "/equipe",
      locale: "es",
      title: "Equipo | Linhares Law",
      description:
        "Conozca al equipo especializado de Linhares Law: abogados habilitados en Estados Unidos, gestores jurídicos, especialistas y profesionales dedicados exclusivamente a la inmigración a EE. UU.",
    }),
  component: EquipePage,
});
