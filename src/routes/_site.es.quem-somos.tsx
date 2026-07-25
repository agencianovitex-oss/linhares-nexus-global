import { createFileRoute } from "@tanstack/react-router";
import { QuemSomosPage } from "./_site.quem-somos";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/es/quem-somos")({
  head: () =>
    buildLocaleHead({
      path: "/quem-somos",
      locale: "es",
      title: "Nosotros, Linhares Law",
      description:
        "Conozca la historia y los valores de Linhares Law — un despacho boutique dedicado exclusivamente a la inmigración a EE. UU., con más de 14 años de práctica y cuatro oficinas en Estados Unidos.",
    }),
  component: QuemSomosPage,
});
