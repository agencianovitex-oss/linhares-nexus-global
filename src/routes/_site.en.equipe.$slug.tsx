import { createFileRoute, notFound } from "@tanstack/react-router";
import { attorneyHead } from "@/lib/attorney-head";
import { AttorneyProfilePage } from "@/components/team/AttorneyProfilePage";
import { attorneyProfiles, profileLabels } from "@/i18n/content/team-profiles";

const L = "en" as const;

export const Route = createFileRoute("/_site/en/equipe/$slug")({
  loader: ({ params }) => {
    if (!attorneyProfiles[L][params.slug]) throw notFound();
    return null;
  },
  head: ({ params }) => attorneyHead(L, params.slug),
  component: function Page() {
    const { slug } = Route.useParams();
    return <AttorneyProfilePage slug={slug} />;
  },
  notFoundComponent: () => <h1 className="p-20 text-primary">{profileLabels[L].notFound}</h1>,
});
