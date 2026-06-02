import { createFileRoute } from "@tanstack/react-router";
import { VisaPage } from "@/components/visa/VisaPage";
import { notFoundIfInvalid, visaHead, visaHrefFor } from "@/lib/servicos";
import { withLocale } from "@/i18n/useI18n";

const L = "pt" as const;

export const Route = createFileRoute("/_site/servicos/$slug")({
  beforeLoad: ({ params }) => notFoundIfInvalid(params.slug),
  head: ({ params }) => visaHead(L, params.slug),
  component: function Page() {
    const { slug } = Route.useParams();
    notFoundIfInvalid(slug);
    return (
      <VisaPage
        locale={L}
        slug={slug}
        servicesHref={withLocale(L, "/servicos")}
        contactHref={withLocale(L, "/contato")}
        visaHref={visaHrefFor(L)}
      />
    );
  },
});
