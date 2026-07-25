import { createFileRoute } from "@tanstack/react-router";
import { ContatoPage } from "./_site.contato";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/es/contato")({
  head: () =>
    buildLocaleHead({
      path: "/contato",
      locale: "es",
      title: "Contacto, Linhares Law",
      description:
        "Inicie una conversación institucional con Linhares Law. Consulta gratuita para EB-2 NIW y consulta estratégica pagada para las demás categorías de visa, con oficinas en Orlando, Miami, New York y Salt Lake City.",
    }),
  component: ContatoPage,
});
