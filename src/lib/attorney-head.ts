import { buildLocaleHead } from "@/lib/seo";
import { attorneyProfiles, profileLabels } from "@/i18n/content/team-profiles";
import { attorneySchema, breadcrumbSchema, FOUNDER_ID } from "@/lib/schema";
import { withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";

/** head() for an attorney profile route, with Attorney + BreadcrumbList JSON-LD. */
export function attorneyHead(locale: Locale, slug: string) {
  const p = attorneyProfiles[locale][slug];
  const path = `/equipe/${slug}`;
  const labels = profileLabels[locale];

  if (!p) {
    return buildLocaleHead({
      path,
      locale,
      title: `${labels.notFound}, Linhares Law`,
      description: labels.metaFallback,
      noindex: true,
    });
  }

  return buildLocaleHead({
    path,
    locale,
    title: `${p.name}, ${p.title} | Linhares Law`,
    description: p.shortBio,
    type: "profile",
    ogImage: p.hero,
    jsonLd: [
      attorneySchema({
        id: slug === "andre-linhares" ? FOUNDER_ID : undefined,
        name: p.name,
        jobTitle: p.title,
        description: p.shortBio,
        image: p.hero,
        url: withLocale(locale, path),
        bars: p.bars,
      }),
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: labels.heroEyebrow.split("·").pop()!.trim(), path: "/equipe" },
          { name: p.name, path },
        ],
        locale,
      ),
    ],
  });
}
