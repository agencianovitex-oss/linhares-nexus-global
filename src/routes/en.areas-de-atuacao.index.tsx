import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy PT path used under an EN/ES prefix. Permanent redirect to the correct hub.
export const Route = createFileRoute("/en/areas-de-atuacao/")({
  beforeLoad: () => {
    throw redirect({ to: "/en/servicos", statusCode: 301 });
  },
});
