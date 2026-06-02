import { Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { VISA_MATRIX, VISAS, VISA_ORDER, PROFESSIONS, type VisaSlug } from "@/data/visas";
import type { Locale } from "@/i18n/locales";

interface Props {
  locale: Locale;
  contactHref: string;
  visaHref: (slug: VisaSlug) => string;
}

const FATORES = [
  { title: "Formação Acadêmica", body: "Graduação, mestrado, doutorado, residências e qualificações técnicas reconhecidas." },
  { title: "Experiência Profissional", body: "Trajetória consolidada, responsabilidade institucional e reconhecimento por pares." },
  { title: "Histórico Empresarial", body: "Estrutura societária, governança, internacionalização e capacidade operacional." },
  { title: "Objetivos Familiares", body: "Mobilidade familiar, educação dos filhos, planejamento patrimonial de longo prazo." },
  { title: "Planejamento de Longo Prazo", body: "Visão sobre residência permanente, cidadania, sucessão e atuação internacional." },
];

const HUB_FAQ = [
  { q: "Qual visto é o mais adequado para o meu perfil?", a: "Não existe resposta única. A escolha depende da combinação entre formação, experiência, projeto profissional, estrutura familiar e horizonte patrimonial. A análise institucional da Linhares Law avalia todas as variáveis antes de qualquer recomendação." },
  { q: "É possível combinar diferentes estratégias migratórias?", a: "Sim. É comum que profissionais transitem entre vistos não-imigrantes (como L-1, O-1 ou E-2) e categorias de Green Card (EB-1, EB-2 NIW, EB-5) ao longo de sua trajetória." },
  { q: "O escritório oferece consultoria migratória?", a: "Não. A Linhares Law é um escritório de advocacia americano com prática exclusiva em imigração. Atuamos como conselho jurídico permanente, não como agência de assessoria." },
  { q: "É necessário morar nos Estados Unidos durante o processo?", a: "Depende da categoria. Diversas estratégias permitem que o peticionário permaneça em seu país de origem durante grande parte do processo." },
];

export function ServicesHub({ locale, contactHref, visaHref }: Props) {
  const matrix = VISA_MATRIX[locale];
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Áreas de Atuação"
        title="Estratégias de imigração americana para profissionais, executivos, investidores e famílias."
        intro="Cada trajetória migratória exige análise jurídica criteriosa. A Linhares Law atua na construção de estratégias personalizadas, sustentadas por mais de 14 anos de prática institucional em imigração americana."
        meta={<><span>EB-2 NIW</span><span>EB-1</span><span>E-2</span><span>L-1</span><span>O-1</span><span>H-1B</span><span>EB-5</span></>}
      />

      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow="Análise Institucional" title="A escolha da estratégia migratória é um exercício jurídico." />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 lead">
            <p>Não existe categoria universalmente superior. A estratégia adequada nasce da leitura técnica entre o perfil do cliente, os objetivos familiares e o cenário regulatório vigente.</p>
            <p>Cada estratégia migratória depende da combinação entre cinco fatores estruturantes — formação, experiência, histórico empresarial, objetivos familiares e horizonte de longo prazo.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Fatores de Decisão" title="Cinco variáveis que orientam a estratégia." />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5 border border-border">
          {FATORES.map((f, i) => (
            <div key={f.title} className="bg-background p-8 editorial-card">
              <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-primary text-lg">{f.title}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle eyebrow="Matriz Comparativa" title="Categorias migratórias atendidas pela Linhares Law." />
        <div className="mt-16 overflow-x-auto border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface">
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
                <tr key={row.slug} className="border-t border-border align-top">
                  <td className="p-5 font-display text-xl text-primary">{row.acronym}</td>
                  <td className="p-5 text-ink">{row.name}</td>
                  <td className="p-5 text-ink-soft">{row.audience}</td>
                  <td className="p-5 text-ink-soft">{row.type}</td>
                  <td className="p-5 text-ink-soft">{row.outcome}</td>
                  <td className="p-5">
                    <Link to={visaHref(row.slug)} className="nav-link text-[11px] uppercase tracking-[0.22em] text-primary hover:text-gold">
                      Ver Detalhes →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Áreas de Atuação" title="Estratégias migratórias estruturadas." />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VISA_ORDER.map((s) => {
            const v = VISAS[locale][s];
            return (
              <Link key={s} to={visaHref(s)} className="block editorial-card group">
                <InstitutionalCard variant="light" className="h-full">
                  <span className="eyebrow">{v.acronym}</span>
                  <h3 className="mt-4 text-primary font-display text-2xl">{v.title}</h3>
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

      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow="Centro de Conhecimento" title="Perspectivas por profissão." />
            <p className="mt-6 lead">
              A Linhares Law prepara conteúdo institucional segmentado por trajetórias profissionais.
              Em breve, cada profissão contará com sua própria perspectiva analítica sobre as estratégias migratórias mais aderentes.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-px bg-border sm:grid-cols-2 border border-border">
              {PROFESSIONS.map((p) => (
                <div key={p.slug} className="bg-background p-6 editorial-card">
                  <span className="font-display text-xl text-primary">{p.label}</span>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Em preparação</div>
                </div>
              ))}
            </div>
          </div>
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
          <h2 className="mt-8 text-primary-foreground">A Hora é Agora.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Descubra qual estratégia migratória faz sentido para seus objetivos.
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
