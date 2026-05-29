import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/layout/Placeholder";
import { buildLocaleHead } from "@/lib/seo";
import { dict } from "@/i18n/locales";

const L = "es" as const;
const t = dict[L].pages.blog;

export const Route = createFileRoute("/_site/es/blog/$slug")({
  head: ({ params }: { params: { slug: string } }) =>
    buildLocaleHead({
      path: `/blog/${params.slug}`,
      locale: L,
      title: `${params.slug} — Linhares Law`,
      description: t.intro,
    }),
  component: function Page() {
    const { slug } = Route.useParams();
    return <Placeholder title={`${t.title} · ${slug}`} intro={t.intro} eyebrow={dict[L].brand} />;
  },
});
