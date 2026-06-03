import { createFileRoute } from "@tanstack/react-router";
import { ServicesHub } from "@/components/visa/ServicesHub";
import { hubHead, visaHrefFor } from "@/lib/servicos";
import { withLocale } from "@/i18n/useI18n";

const L = "es" as const;

export const Route = createFileRoute("/_site/es/servicos/")({
  head: () => hubHead(L),
  component: () => (
    <ServicesHub locale={L} contactHref={withLocale(L, "/contato")} visaHref={visaHrefFor(L)} />
  ),
});
