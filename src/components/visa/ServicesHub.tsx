import { Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { VISAS, VISA_ORDER, PLANNING_PILLARS, type VisaSlug } from "@/data/visas";
import type { Locale } from "@/i18n/locales";

interface Props {
  locale: Locale;
  contactHref: string;
  visaHref: (slug: VisaSlug) => string;
}

// Hub-level FAQ kept only for schema / SEO — not rendered.
const HUB_FAQ = [
  { q: "Qual estratégia migratória é a mais adequada ao meu perfil?", a: "A escolha depende da combinação entre formação, experiência, projeto profissional, estrutura familiar e horizonte patrimonial. A análise institucional da Linhares Law avalia todas as variáveis antes de qualquer recomendação." },
  { q: "É possível combinar diferentes estratégias migratórias?", a: "Sim. É comum que profissionais transitem entre vistos não-imigrantes (como L-1, O-1 ou E-2) e categorias de Green Card (EB-1, EB-2 NIW, EB-5) ao longo de sua trajetória." },
  { q: "A Linhares Law oferece consultoria migratória?", a: "Não. A Linhares Law é um escritório de advocacia americano com atuação exclusiva em imigração, atuando como conselho jurídico permanente." },
];

export function ServicesHub({ locale, contactHref, visaHref }: Props) {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Áreas de Atuação"
        title="Estratégias migratórias para profissionais, empresários, investidores e famílias."
        intro="A Linhares Law atua exclusivamente em imigração americana, desenvolvendo estratégias jurídicas personalizadas para residência permanente, mobilidade executiva, expansão empresarial e oportunidades profissionais nos Estados Unidos."
        meta={<><span>EB-2 NIW</span><span>EB-1</span><span>E-2</span><span>L-1</span><span>O-1</span><span>H-1B</span><span>EB-5</span><span>EB-3</span><span>I-130</span><span>VAWA</span></>}
      />

      {/* Single premium grid — 7 visa categories */}
      <SectionBlock>
        <SectionTitle eyebrow="Categorias Migratórias" title="Estratégias jurídicas conduzidas pelo escritório." />
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
                  Conhecer Estratégia <span className="cta-arrow">→</span>
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
          <p className="mt-6 eyebrow eyebrow-on-dark">Planejamento Migratório</p>
          <h2 className="mt-6 text-primary-foreground">
            A metodologia estratégica do escritório.
          </h2>
          <p className="mt-6 lead text-primary-foreground/80">
            A Linhares Law assessora famílias que desejam construir uma nova vida nos Estados Unidos e, com a mesma profundidade técnica, empresários, investidores, executivos e profissionais qualificados que buscam expansão internacional, estruturação societária e oportunidades estratégicas no mercado americano.
          </p>
        </div>
        <div className="mt-16 grid gap-px bg-primary-foreground/15 border border-primary-foreground/15 md:grid-cols-2 lg:grid-cols-4">
          {PLANNING_PILLARS.map((p, i) => (
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
          <h2 className="mt-8 text-primary">Agende uma consulta estratégica.</h2>
          <p className="mt-6 lead">
            Descubra qual estratégia migratória faz sentido para seus objetivos profissionais, patrimoniais e familiares.
          </p>
          <div className="mt-10">
            <InstitutionalButton to={contactHref}>Agendar Consulta</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}

export function buildHubFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HUB_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
