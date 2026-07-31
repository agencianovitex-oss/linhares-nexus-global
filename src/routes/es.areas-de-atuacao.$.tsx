import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy PT path used under an EN/ES prefix. Permanent redirect to the correct visa page.
export const Route = createFileRoute("/es/areas-de-atuacao/$")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/es/servicos/$slug", params: { slug: params._splat ?? "" }, statusCode: 301 });
  },
});
