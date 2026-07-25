import { createFileRoute } from "@tanstack/react-router";
import { DepoimentosPage } from "./_site.casos-de-sucesso";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/es/casos-de-sucesso")({
  head: () =>
    buildLocaleHead({
      path: "/casos-de-sucesso",
      locale: "es",
      title: "Testimonios, Linhares Law",
      description:
        "Historias reales de clientes de Linhares Law sobre sus trayectorias migratorias y las aprobaciones conquistadas con nuestra representación.",
    }),
  component: DepoimentosPage,
});
