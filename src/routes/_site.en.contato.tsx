import { createFileRoute } from "@tanstack/react-router";
import { ContatoPage } from "./_site.contato";
import { buildLocaleHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/en/contato")({
  head: () =>
    buildLocaleHead({
      path: "/contato",
      locale: "en",
      title: "Contact | Linhares Law",
      description:
        "Begin an institutional conversation with Linhares Law. Complimentary consultation for EB-2 NIW and paid strategic consultation for all other visa categories, with offices in Orlando, Miami, New York and Salt Lake City.",
    }),
  component: ContatoPage,
});
