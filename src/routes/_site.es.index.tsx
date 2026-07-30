import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";
import { homeFeaturedPostsQuery } from "@/lib/blog/home-posts";
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
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(homeFeaturedPostsQuery("es"));
  },
  errorComponent: ({ error }) => <div className="p-10 text-center">{(error as Error).message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">404</div>,
  component: Home,
});
