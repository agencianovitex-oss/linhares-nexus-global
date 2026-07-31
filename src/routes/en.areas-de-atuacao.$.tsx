import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy PT path used under an EN/ES prefix. Permanent redirect to the correct visa page.
export const Route = createFileRoute("/en/areas-de-atuacao/$")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/en/servicos/$slug", params: { slug: params._splat ?? "" }, statusCode: 301 });
  },
});
