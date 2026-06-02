import { Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  VISA_MATRIX,
  VISAS,
  VISA_ORDER,
  VISA_CATEGORIES,
  PLANNING_PILLARS,
  type VisaSlug,
} from "@/data/visas";
import type { Locale } from "@/i18n/locales";

interface Props {
  locale: Locale;
  contactHref: string;
  visaHref: (slug: VisaSlug) => string;
}

const HUB_FAQ = [
  { q: "Qual estratégia migratória é a mais adequada ao meu perfil?", a: "Não existe resposta única. A escolha depende da combinação entre formação, experiência, projeto profissional, estrutura familiar e horizonte patrimonial. A análise institucional da Linhares Law avalia todas as variáveis antes de qualquer recomendação." },
  { q: "É possível combinar diferentes estratégias migratórias?", a: "Sim. É comum que profissionais transitem entre vistos não-imigrantes (como L-1, O-1 ou E-2) e categorias de Green Card (EB-1, EB-2 NIW, EB-5) ao longo de sua trajetória." },
  { q: "A Linhares Law oferece consultoria migratória?", a: "Não. A Linhares Law é um escritório de advocacia americano com atuação exclusiva em imigração. Atuamos como conselho jurídico permanente, não como agência de assessoria." },
  { q: "É necessário morar nos Estados Unidos durante o processo?", a: "Depende da categoria. Diversas estratégias permitem que o peticionário permaneça em seu país de origem durante grande parte do processo." },
];

export function ServicesHub({ locale, contactHref, visaHref }: Props) {
  const matrix = VISA_MATRIX[locale];
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Áreas de Atuação"
        title="Estratégias migratórias para profissionais, empresários, investidores e famílias."
        intro="A Linhares Law atua exclusivamente em imigração americana, desenvolvendo estratégias jurídicas personalizadas para residência permanente, mobilidade executiva, expansão empresarial e oportunidades profissionais nos Estados Unidos."
        meta={<><span>EB-2 NIW</span><span>EB-1</span><span>E-2</span><span>L-1</span><span>O-1</span><span>H-1B</span><span>EB-5</span></>}
      />

      {/* 4 Category Groupings */}
      <SectionBlock>
        <SectionTitle eyebrow="Quatro frentes de atuação" title="Como organizamos nossas estratégias migratórias." />
        <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-2">
          {VISA_CATEGORIES.map((cat) => (
            <div key={cat.id} className="bg-background p-10 editorial-card">
              <span className="eyebrow">{cat.title}</span>
              <p className="mt-6 lead">{cat.description}</p>
              <ul className="mt-8 space-y-3">
                {cat.slugs.map((s) => {
                  const v = VISAS[locale][s];
                  return (
                    <li key={s}>
                      <Link
                        to={visaHref(s)}
                        className="flex items-baseline justify-between gap-4 border-t border-border pt-3 text-sm hover:text-gold transition-colors"
                      >
                        <span className="font-display text-lg text-primary group-hover:text-gold">{v.acronym}</span>
                        <span className="text-ink-soft">{v.heroSubhead}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {/* Planning column */}
          <div className="bg-primary text-primary-foreground p-10 editorial-card md:col-span-2">
            <span className="eyebrow eyebrow-on-dark">Planejamento Migratório</span>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {PLANNING_PILLARS.map((p) => (
                <div key={p.title}>
                  <h4 className="font-display text-lg text-primary-foreground">{p.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Matriz Comparativa" title="Categorias migratórias atendidas pelo escritório." />
        <div className="mt-16 overflow-x-auto border border-border">
          <table className="w-full text-sm">
            <thead className="bg-background">
              <tr className="text-left text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <th className="p-5 font-medium">Categoria</th>
                <th className="p-5 font-medium">Designação</th>
                <th className="p-5 font-medium">Perfil indicado</th>
                <th className="p-5 font-medium">Natureza</th>
                <th className="p-5 font-medium">Resultado</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.slug} className="border-t border-border align-top bg-background">
                  <td className="p-5 font-display text-xl text-primary">{row.acronym}</td>
                  <td className="p-5 text-ink">{row.name}</td>
                  <td className="p-5 text-ink-soft">{row.audience}</td>
                  <td className="p-5 text-ink-soft">{row.type}</td>
                  <td className="p-5 text-ink-soft">{row.outcome}</td>
                  <td className="p-5">
                    <Link to={visaHref(row.slug)} className="nav-link text-[11px] uppercase tracking-[0.22em] text-primary hover:text-gold">
                      Ver detalhes →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle eyebrow="Áreas de Atuação" title="Estratégias migratórias estruturadas." />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VISA_ORDER.map((s) => {
            const v = VISAS[locale][s];
            return (
              <Link key={s} to={visaHref(s)} className="block editorial-card group">
                <InstitutionalCard variant="light" className="h-full">
                  <span className="eyebrow">{v.acronym}</span>
                  <h3 className="mt-4 text-primary font-display text-2xl">{v.heroSubhead}</h3>
                  <p className="mt-6 text-ink-soft leading-relaxed">{v.tagline}</p>
                  <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-primary group-hover:text-gold transition-colors">
                    Conhecer →
                  </div>
                </InstitutionalCard>
              </Link>
            );
          })}
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow="Perguntas Frequentes" title="Esclarecimentos institucionais." />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {HUB_FAQ.map((f, i) => (
                <AccordionItem key={f.q} value={`hub-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-2xl text-primary py-6">{f.q}</AccordionTrigger>
                  <AccordionContent className="lead pb-8">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">Agende uma consulta estratégica.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
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
