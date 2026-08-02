import { absUrl, SITE_ORIGIN } from "@/lib/site";
import { offices } from "@/data/offices";
import { withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";

const STATE_CODE: Record<string, string> = {
  Orlando: "FL",
  Miami: "FL",
  "New York": "NY",
  "Salt Lake City": "UT",
};

export const ORG_ID = `${SITE_ORIGIN}/#organization`;
/** Stable @id for the founder Person entity, referenced from the LegalService. */
export const FOUNDER_ID = `${SITE_ORIGIN}/#andre-linhares`;
const PHONE = "+1-407-725-4988";

export const SAME_AS = [
  "https://www.instagram.com/linhareslaw",
  "https://www.linkedin.com/company/linhares-law",
  "https://www.youtube.com/@linhareslaw",
];

function postalAddress(city: string) {
  const office = offices.find((o) => o.city === city)!;
  return {
    "@type": "PostalAddress",
    streetAddress: office.address,
    addressLocality: office.city,
    addressRegion: STATE_CODE[office.city],
    postalCode: office.zip.split(" ").pop(),
    addressCountry: "US",
  };
}

/** Full LegalService / LocalBusiness description of the firm. */
export function organizationSchema(logoUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": ORG_ID,
    name: "Linhares Law",
    url: SITE_ORIGIN,
    logo: absUrl(logoUrl),
    image: absUrl(logoUrl),
    telephone: PHONE,
    priceRange: "$$$",
    areaServed: { "@type": "Country", name: "United States" },
    availableLanguage: ["pt-BR", "en", "es"],
    sameAs: SAME_AS,
    address: postalAddress("Orlando"),
    founder: { "@id": FOUNDER_ID },
    employee: { "@id": FOUNDER_ID },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: 90,
      bestRating: "5",
      worstRating: "1",
    },
    location: offices.map((o) => ({
      "@type": "Place",
      name: `${o.city} Office`,
      address: postalAddress(o.city),
    })),
    knowsAbout: [
      "U.S. Immigration Law",
      "EB-2 NIW",
      "EB-1",
      "EB-3",
      "EB-5",
      "O-1",
      "L-1",
      "H-1B",
      "E-2",
      "I-130",
      "VAWA",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        availableLanguage: ["Portuguese", "English", "Spanish"],
      },
    ],
  };
}

/**
 * Person entity for the founding attorney, populated strictly from the
 * front-end profile content (src/i18n/content/team-profiles.ts) and linked to
 * the firm's LegalService entity.
 */
export function founderSchema(input: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url: string;
  bars?: string[];
  knowsAbout?: string[];
  awards?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "Attorney"],
    "@id": FOUNDER_ID,
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    image: input.image ? absUrl(input.image) : undefined,
    url: absUrl(input.url),
    knowsLanguage: ["pt-BR", "en", "es"],
    knowsAbout: input.knowsAbout,
    award: input.awards,
    memberOf: input.bars?.map((b) => ({ "@type": "Organization", name: b })),
    worksFor: { "@id": ORG_ID },
    founderOf: { "@id": ORG_ID },
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: "Linhares Law",
    inLanguage: ["pt-BR", "en", "es"],
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/blog/busca?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** BreadcrumbList from [name, locale-less path] pairs (already localized paths). */
export function breadcrumbSchema(items: Array<{ name: string; path: string }>, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(withLocale(locale, item.path)),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: absUrl(input.url),
    inLanguage: input.locale === "pt" ? "pt-BR" : input.locale,
    areaServed: { "@type": "Country", name: "United States" },
    provider: { "@id": ORG_ID },
  };
}

export function attorneySchema(input: {
  id?: string;
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url: string;
  bars?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": input.id,
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    image: input.image ? absUrl(input.image) : undefined,
    url: absUrl(input.url),
    knowsLanguage: ["pt-BR", "en", "es"],
    memberOf: input.bars?.map((b) => ({ "@type": "Organization", name: b })),
    worksFor: { "@id": ORG_ID },
  };
}
