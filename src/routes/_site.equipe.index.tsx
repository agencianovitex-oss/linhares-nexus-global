import { createFileRoute, Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { buildLocaleHead } from "@/lib/seo";
import { useI18n, withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";
import { teamGroups, type TeamMember } from "@/data/team";

const L = "pt" as const;

export const Route = createFileRoute("/_site/equipe/")({
  head: () =>
    buildLocaleHead({
      path: "/equipe",
      locale: L,
      title: "Equipe | Linhares Law",
      description:
        "Conheça a equipe especializada da Linhares Law: advogados licenciados nos Estados Unidos, gestores jurídicos, especialistas e profissionais dedicados exclusivamente à imigração americana.",
    }),
  component: EquipePage,
});

type PageContent = {
  eyebrow: string; title: string; intro: string;
  metaAttorneys: string; metaTeam: string;
  seeProfile: string; portraitFallback: string;
  ctaTitle: string; cta: string;
  groups: Array<{ eyebrow: string; title: string; description: string }>;
};

const content: Record<Locale, PageContent> = {
  pt: {
    eyebrow: "Linhares Law · Equipe",
    title: "Equipe Especializada Linhares Law.",
    intro: "A Linhares Law reúne advogados, especialistas jurídicos e profissionais dedicados exclusivamente ao atendimento de clientes que buscam caminhos legais para viver, trabalhar, investir e construir seu futuro nos Estados Unidos.",
    metaAttorneys: "3 Advogados",
    metaTeam: "Equipe Multidisciplinar",
    seeProfile: "Ver perfil",
    portraitFallback: "Foto institucional",
    ctaTitle: "Uma equipe construída para acompanhar cada etapa da jornada migratória.",
    cta: "Agendar Consulta",
    groups: [
      { eyebrow: "I. Attorneys", title: "Attorneys", description: "Advogados licenciados nos Estados Unidos que conduzem a estratégia jurídica de cada cliente da Linhares Law." },
      { eyebrow: "II. Case Managers", title: "Case Managers", description: "Responsáveis pela condução integral de cada caso, do protocolo inicial à aprovação final." },
      { eyebrow: "III. Paralegals", title: "Paralegals", description: "Profissionais responsáveis pela construção argumentativa e pela curadoria documental de cada caso." },
      { eyebrow: "IV. Legal Assistants", title: "Legal Assistants", description: "Equipe ampliada de suporte técnico que sustenta a operação jurídica em volume e detalhamento." },
      { eyebrow: "V. Business Plan Specialists", title: "Business Plan Specialists", description: "Coordenação de projetos institucionais e iniciativas estratégicas do escritório." },
      { eyebrow: "VI. Equipe Administrativa", title: "Equipe Administrativa", description: "Estrutura administrativa que sustenta a experiência de atendimento e a operação dos escritórios." },
    ],
  },
  en: {
    eyebrow: "Linhares Law · Team",
    title: "The Linhares Law Team.",
    intro: "Linhares Law brings together attorneys, legal specialists and professionals devoted exclusively to serving clients who seek legal pathways to live, work, invest and build their future in the United States.",
    metaAttorneys: "3 Attorneys",
    metaTeam: "Multidisciplinary Team",
    seeProfile: "View profile",
    portraitFallback: "Institutional photo",
    ctaTitle: "A team built to accompany every stage of the immigration journey.",
    cta: "Schedule a Consultation",
    groups: [
      { eyebrow: "I. Attorneys", title: "Attorneys", description: "U.S.-licensed attorneys who lead the legal strategy for each Linhares Law client." },
      { eyebrow: "II. Case Managers", title: "Case Managers", description: "Responsible for the end-to-end management of each case, from initial filing to final approval." },
      { eyebrow: "III. Paralegals", title: "Paralegals", description: "Professionals responsible for the legal argumentation and documentary curation of each case." },
      { eyebrow: "IV. Legal Assistants", title: "Legal Assistants", description: "An extended technical-support team that sustains the legal operation in both volume and detail." },
      { eyebrow: "V. Business Plan Specialists", title: "Business Plan Specialists", description: "Coordination of institutional projects and strategic initiatives of the firm." },
      { eyebrow: "VI. Administrative Team", title: "Administrative Team", description: "The administrative structure that supports the client experience and the operation of our offices." },
    ],
  },
  es: {
    eyebrow: "Linhares Law · Equipo",
    title: "El Equipo de Linhares Law.",
    intro: "Linhares Law reúne a abogados, especialistas jurídicos y profesionales dedicados exclusivamente a atender a clientes que buscan vías legales para vivir, trabajar, invertir y construir su futuro en Estados Unidos.",
    metaAttorneys: "3 Abogados",
    metaTeam: "Equipo Multidisciplinario",
    seeProfile: "Ver perfil",
    portraitFallback: "Foto institucional",
    ctaTitle: "Un equipo construido para acompañar cada etapa del recorrido migratorio.",
    cta: "Agendar Consulta",
    groups: [
      { eyebrow: "I. Attorneys", title: "Attorneys", description: "Abogados habilitados en Estados Unidos que conducen la estrategia jurídica de cada cliente de Linhares Law." },
      { eyebrow: "II. Case Managers", title: "Case Managers", description: "Responsables de la gestión integral de cada caso, desde el protocolo inicial hasta la aprobación final." },
      { eyebrow: "III. Paralegals", title: "Paralegals", description: "Profesionales responsables de la construcción argumentativa y la curaduría documental de cada caso." },
      { eyebrow: "IV. Legal Assistants", title: "Legal Assistants", description: "Equipo ampliado de soporte técnico que sostiene la operación jurídica en volumen y detalle." },
      { eyebrow: "V. Business Plan Specialists", title: "Business Plan Specialists", description: "Coordinación de proyectos institucionales e iniciativas estratégicas del despacho." },
      { eyebrow: "VI. Equipo Administrativo", title: "Equipo Administrativo", description: "Estructura administrativa que sostiene la experiencia de atención y la operación de las oficinas." },
    ],
  },
};

function MemberCard({ m, cardBg, seeProfile, fallbackLabel, locale }: { m: TeamMember; cardBg: string; seeProfile: string; fallbackLabel: string; locale: Locale }) {
  const card = (
    <article className="group border border-border h-full flex flex-col transition-colors hover:border-border-strong" style={{ backgroundColor: cardBg }}>
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
        {m.portrait ? (
          <img src={m.portrait} alt={m.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] transform-gpu [backface-visibility:hidden] [image-rendering:auto]" style={{ willChange: "transform" }} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{fallbackLabel}</div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl text-primary group-hover:text-gold transition-colors">{m.name}</h3>
        <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {(locale !== "pt" && m.roleI18n?.[locale]) || m.role}
        </p>
        {(() => {
          const bio = (locale !== "pt" && m.bioI18n?.[locale]) || m.bio;
          return bio ? <p className="mt-5 text-[13.5px] leading-[1.7] text-ink-soft flex-1">{bio}</p> : null;
        })()}
        {m.credentials && (
          <ul className="mt-6 space-y-1.5 text-[12.5px] text-ink-soft">
            {m.credentials.map((c) => (
              <li key={c} className="flex gap-2"><span className="text-gold">·</span><span>{c}</span></li>
            ))}
          </ul>
        )}
        {m.slug && <p className="mt-6 text-[10.5px] uppercase tracking-[0.28em] text-primary">{seeProfile} <span className="cta-arrow">→</span></p>}
      </div>
    </article>
  );
  return m.slug ? (
    <Link to={`${withLocale(locale, "/equipe")}/${m.slug}` as "/"} className="block h-full">{card}</Link>
  ) : (
    <div className="h-full">{card}</div>
  );
}

export function EquipePage() {
  const { locale } = useI18n();
  const c = content[locale];
  return (
    <>
      <InstitutionalHero
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
        meta={<><span>{c.metaAttorneys}</span><span>{c.metaTeam}</span></>}
      />

      {teamGroups.map((group, idx) => {
        const isLeadership = idx === 0;
        const isWhite = idx % 2 === 0;
        const localized = c.groups[idx] ?? { eyebrow: group.eyebrow, title: group.title, description: group.description ?? "" };
        return (
          <div key={group.eyebrow} style={{ backgroundColor: isWhite ? "#ffffff" : "#eef0f3" }}>
            <SectionBlock tone={isWhite ? "light" : "surface"} className="!bg-transparent !bg-none">
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="rule-gold" />
                  <p className="mt-5 eyebrow">{localized.eyebrow}</p>
                  <h2 className="mt-6 text-gold font-semibold">{localized.title}</h2>
                  {localized.description && <p className="mt-6 lead">{localized.description}</p>}
                </div>
                <div className="lg:col-span-8">
                  <div className={isLeadership ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"}>
                    {group.members.map((m) => (
                      <div key={m.name} className="reveal-up">
                        <MemberCard
                          m={m}
                          cardBg={isWhite ? "color-mix(in oklab, var(--color-primary) 16%, white)" : "#ffffff"}
                          seeProfile={c.seeProfile}
                          fallbackLabel={c.portraitFallback}
                          locale={locale}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionBlock>
          </div>
        );
      })}

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">{c.ctaTitle}</h2>
          <div className="mt-10">
            <InstitutionalButton to={withLocale(locale, "/contato")}>{c.cta}</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
