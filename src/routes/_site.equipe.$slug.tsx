import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/seo";
import { AttorneyProfilePage } from "@/components/team/AttorneyProfilePage";
import { attorneyProfiles, profileLabels } from "@/i18n/content/team-profiles";

const L = "pt" as const;

export const Route = createFileRoute("/_site/equipe/$slug")({
  loader: ({ params }) => {
    if (!attorneyProfiles[L][params.slug]) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const p = attorneyProfiles[L][params.slug];
    return buildLocaleHead({
      path: `/equipe/${params.slug}`,
      locale: L,
      title: `${p?.name ?? params.slug}, Linhares Law`,
      description: p?.shortBio ?? profileLabels[L].metaFallback,
      type: "profile",
    });
  },
  component: function Page() {
    const { slug } = Route.useParams();
    return <AttorneyProfilePage slug={slug} />;
  },
  notFoundComponent: () => <h1 className="p-20 text-primary">{profileLabels[L].notFound}</h1>,
});
