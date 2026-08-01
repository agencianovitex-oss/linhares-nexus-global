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
      title: "Linhares Law, Advogados de Imigração Americana",
      description:
        "Escritório boutique de imigração americana. Há mais de 14 anos representamos profissionais, investidores e famílias, com escritórios em Orlando, Miami, New York e Salt Lake City.",
    }),
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(homeFeaturedPostsQuery("pt"));
  },
  errorComponent: ({ error }) => <div className="p-10 text-center">{(error as Error).message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">404</div>,
  component: Home,
});
