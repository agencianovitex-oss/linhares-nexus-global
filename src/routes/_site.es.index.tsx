import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/es/")({
  head: () =>
    buildLocaleHead({
      path: "/",
      locale: "es",
      title: "Linhares Law, Despacho Boutique de Inmigración a EE. UU.",
      description:
        "Linhares Law es un despacho boutique de inmigración a EE. UU. que representa a profesionales, ejecutivos, inversionistas y familias internacionales, con presencia institucional en Orlando, Miami, New York y Salt Lake City.",
    }),
  component: Home,
});
