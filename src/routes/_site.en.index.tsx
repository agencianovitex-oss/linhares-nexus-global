import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";
import { homeFeaturedPostsQuery } from "@/lib/blog/home-posts";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/en/")({
  head: () =>
    buildLocaleHead({
      path: "/",
      locale: "en",
      title: "Linhares Law, U.S. Immigration Boutique Law Firm",
      description:
        "Linhares Law is a boutique U.S. immigration firm serving international professionals, executives, investors and families with institutional presence in Orlando, Miami, New York and Salt Lake City.",
    }),
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(homeFeaturedPostsQuery("en"));
  },
  errorComponent: ({ error }) => <div className="p-10 text-center">{(error as Error).message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">404</div>,
  component: Home,
});
