import { Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { VISAS, VISA_ORDER, type VisaSlug } from "@/data/visas";
import type { Locale } from "@/i18n/locales";
import { servicesStrings } from "@/i18n/content/services";

interface Props {
  locale: Locale;
  contactHref: string;
  visaHref: (slug: VisaSlug) => string;
}

export function ServicesHub({ locale, contactHref, visaHref }: Props) {
  const t = servicesStrings[locale].hub;
  return (
    <>
      <InstitutionalHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={t.intro}
        meta={<><span>EB-2 NIW</span><span>EB-1</span><span>E-2</span><span>L-1</span><span>O-1</span><span>H-1B</span><span>EB-5</span><span>EB-3</span><span>I-130</span><span>VAWA</span></>}
      />

      {/* Single premium grid — 7 visa categories */}
      <SectionBlock>
        <SectionTitle eyebrow={t.categoriesEyebrow} title={t.categoriesTitle} />
        <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {VISA_ORDER.map((s) => {
            const v = VISAS[locale][s];
            const featured = s === "eb2-niw" || s === "eb5" || s === "e2";
            return (
              <Link
                key={s}
                to={visaHref(s)}
                className={
                  "group relative p-10 editorial-card flex flex-col overflow-hidden " +
                  (featured
                    ? "bg-[rgb(179,134,66)] text-white"
                    : "bg-background hover:bg-[rgba(179,134,66,0.06)]")
                }
              >
                <span
                  aria-hidden
                  className={
                    "absolute top-0 left-0 h-[3px] w-16 " +
                    (featured ? "bg-background" : "bg-[rgb(179,134,66)]")
                  }
                />
                <div
                  className={
                    "mt-8 font-display text-4xl transition-colors " +
                    (featured
                      ? "text-white"
                      : "text-primary group-hover:text-[rgb(179,134,66)]")
                  }
                >
                  {v.acronym}
                </div>
                <p
                  className={
                    "mt-3 text-[12px] uppercase tracking-[0.22em] " +
                    (featured ? "text-white/85" : "text-muted-foreground")
                  }
                >
                  {v.heroSubhead}
                </p>
                <p
                  className={
                    "mt-8 leading-relaxed flex-1 " +
                    (featured ? "text-white/90" : "text-ink-soft")
                  }
                >
                  {v.tagline}
                </p>
                <div
                  className={
                    "mt-10 text-[11px] uppercase tracking-[0.26em] transition-colors " +
                    (featured
                      ? "text-white"
                      : "text-primary group-hover:text-[rgb(179,134,66)]")
                  }
                >
                  {t.cardCta} <span className="cta-arrow">→</span>
                </div>
              </Link>
            );
          })}
          {/* trailing filler so the grid keeps clean alignment when count % 3 !== 0 */}
          <div aria-hidden className="hidden md:block lg:hidden surface-premium-light" />
          <div aria-hidden className="hidden lg:block surface-premium-light" />
          <div aria-hidden className="hidden lg:block surface-premium-light" />
        </div>
      </SectionBlock>

      {/* Planejamento Migratório — preserved institutional block */}
      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <p className="mt-6 eyebrow eyebrow-on-dark">{t.planningEyebrow}</p>
          <h2 className="mt-6 text-primary-foreground">{t.planningTitle}</h2>
          <p className="mt-6 lead text-primary-foreground/80">{t.planningBody}</p>
        </div>
        <div className="mt-16 grid gap-px bg-primary-foreground/15 border border-primary-foreground/15 md:grid-cols-2 lg:grid-cols-4">
          {t.pillars.map((p, i) => (
            <div key={p.title} className="bg-primary p-10">
              <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="mt-6 font-display text-xl text-primary-foreground">{p.title}</h4>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">{p.body}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Final CTA */}
      <SectionBlock>
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary">{t.ctaTitle}</h2>
          <p className="mt-6 lead">{t.ctaBody}</p>
          <div className="mt-10">
            <InstitutionalButton to={contactHref}>{t.ctaButton}</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}

export function buildHubFaqSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servicesStrings[locale].hub.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
