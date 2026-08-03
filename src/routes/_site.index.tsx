import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";
import { homeFeaturedPostsQuery } from "@/lib/blog/home-posts";
import { buildLocaleHead } from "@/lib/seo";
import { dict } from "@/i18n/locales";

export const Route = createFileRoute("/_site/")({
  head: () =>
    buildLocaleHead({
      path: "/",
      locale: "pt",
      title: "Linhares Law: Advogados Especialistas em Imigração Americana e Green Card",
      description:
        "Escritório de advocacia dedicado exclusivamente à imigração para os EUA. Assessoramos profissionais qualificados (Vistos EB-2 NIW, EB-1), executivos (L-1), investidores (EB-5) e famílias em suas jornadas para viver legalmente na América.",
    }),
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(homeFeaturedPostsQuery("pt"));
  },
  errorComponent: ({ error }) => <div className="p-10 text-center">{(error as Error).message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">404</div>,
  component: Home,
});
