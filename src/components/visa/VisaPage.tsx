import { Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { VISAS, VISA_ORDER, type VisaSlug } from "@/data/visas";
import type { Locale } from "@/i18n/locales";
import andreImg from "@/assets/andre-5.jpg";

interface Props {
  locale: Locale;
  slug: VisaSlug;
  servicesHref: string;
  contactHref: string;
  visaHref: (slug: VisaSlug) => string;
}

export function VisaPage({ locale, slug, servicesHref, contactHref, visaHref }: Props) {
  const v = VISAS[locale][slug];
  const related = VISA_ORDER.filter((s) => s !== slug).slice(0, 3);

  return (
    <>
      <InstitutionalHero
        eyebrow={`Áreas de Atuação · ${v.acronym}`}
        title={<>{v.title}<span className="block mt-4 font-display text-[clamp(1.5rem,2.6vw,2.5rem)] text-gold">{v.heroSubhead}</span></>}
        intro={v.tagline}
        meta={v.meta.map((m) => <span key={m}>{m}</span>)}
      >
        <div className="mt-12 flex flex-wrap gap-4">
          <InstitutionalButton to={contactHref}>Agendar Consulta</InstitutionalButton>
          <InstitutionalButton to={servicesHref} variant="onDark">Ver todas as áreas</InstitutionalButton>
        </div>
      </InstitutionalHero>

      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow="Visão Geral" title={v.what.title} />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="lead">{v.intro}</p>
            <p className="mt-6 lead text-ink-soft">{v.what.body}</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Elegibilidade" title={v.qualify.title} />
            <ul className="mt-10 space-y-5">
              {v.qualify.items?.map((i) => (
                <li key={i} className="flex gap-4 lead">
                  <span aria-hidden className="mt-3 h-px w-6 shrink-0 bg-gold" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Benefícios" title={v.benefits.title} />
            <ul className="mt-10 space-y-5">
              {v.benefits.items?.map((i) => (
                <li key={i} className="flex gap-4 lead">
                  <span aria-hidden className="mt-3 h-px w-6 shrink-0 bg-gold" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      {/* Intermediate CTA */}
      <SectionBlock tone="dark" size="default">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <span className="rule-gold" />
            <h3 className="mt-6 text-primary-foreground font-display text-3xl lg:text-4xl max-w-[24ch]">
              Fale com nossa equipe sobre {v.acronym}.
            </h3>
            <p className="mt-5 text-primary-foreground/75 lead max-w-2xl">
              Avalie com nossos advogados se {v.acronym} é a estratégia mais adequada à sua trajetória profissional e familiar.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <InstitutionalButton to={contactHref} variant="gold">Fale com nossa equipe</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle eyebrow="Processo" title={v.process.title} />
        <ol className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {v.process.items?.map((step, idx) => (
            <li
              key={step}
              className="relative bg-background p-10 editorial-card border-t-2 border-t-[rgb(223,164,89)]/0 hover:border-t-[rgb(223,164,89)] transition-colors"
            >
              <span className="font-display text-6xl text-[rgb(223,164,89)] leading-none">{String(idx + 1).padStart(2, "0")}</span>
              <p className="mt-6 lead text-primary font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </SectionBlock>

      {v.profiles && v.profiles.length > 0 && (
        <SectionBlock tone="surface">
          <SectionTitle eyebrow="Perfis Profissionais" title="Trajetórias representativas." />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {v.profiles.map((p) => (
              <div
                key={p.title}
                className="editorial-card p-10 border-l-2 border-l-[rgb(223,164,89)] bg-background shadow-[0_18px_50px_-32px_rgba(6,36,67,0.18)]"
              >
                <h3 className="font-display text-2xl lg:text-[1.75rem] text-primary leading-tight">
                  {p.title}
                </h3>
                <p className="mt-5 text-ink-soft leading-relaxed">{p.intro}</p>
                <ul className="mt-8 space-y-3 text-ink-soft text-[0.95rem]">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-[rgb(223,164,89)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

      <SectionBlock>
        <SectionTitle eyebrow="Processo" title={v.process.title} />
        <ol className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {v.process.items?.map((step, idx) => (
            <li key={step} className="bg-background p-10 editorial-card">
              <span className="font-display text-3xl text-gold">{String(idx + 1).padStart(2, "0")}</span>
              <p className="mt-6 lead">{step}</p>
            </li>
          ))}
        </ol>
      </SectionBlock>

      {v.profiles && v.profiles.length > 0 && (
        <SectionBlock tone="surface">
          <SectionTitle eyebrow="Perfis Profissionais" title="Trajetórias representativas." />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {v.profiles.map((p) => (
              <InstitutionalCard key={p.title} variant="light" className="editorial-card">
                <span className="eyebrow">{p.title}</span>
                <p className="mt-6 lead">{p.intro}</p>
                <ul className="mt-8 space-y-3 text-ink-soft">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </InstitutionalCard>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* Institutional block — Dr. André Linhares */}
      <SectionBlock>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="editorial-frame aspect-[4/5] w-full">
              <img src={andreImg} alt="Dr. André Linhares — Advogado Fundador" className="h-full w-full object-cover object-top" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="rule-gold" />
            <p className="mt-8 font-display text-2xl lg:text-3xl leading-[1.35] text-primary max-w-[34ch]">
              “A imigração é uma decisão estratégica. Cada trajetória exige uma análise individualizada e uma estrutura jurídica construída de acordo com os objetivos do cliente.”
            </p>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-base font-light text-primary tracking-tight">Dr. André Linhares</span>
              <span className="text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground">Advogado Fundador · Linhares Law</span>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow="Perguntas Frequentes" title={`Esclarecimentos sobre ${v.acronym}.`} />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {v.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-2xl text-primary py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="lead pb-8">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle eyebrow="Áreas Relacionadas" title="Outras estratégias migratórias." />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {related.map((r) => {
            const rv = VISAS[locale][r];
            return (
              <Link key={r} to={visaHref(r)} className="block editorial-card">
                <InstitutionalCard variant="light" className="h-full">
                  <span className="eyebrow">{rv.acronym}</span>
                  <h3 className="mt-4 text-primary font-display text-2xl">{rv.heroSubhead}</h3>
                  <p className="mt-6 text-ink-soft leading-relaxed">{rv.tagline}</p>
                </InstitutionalCard>
              </Link>
            );
          })}
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">Agende uma consulta estratégica.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Inicie uma conversa institucional com nossos advogados e avalie se {v.acronym} é a estratégia adequada aos seus objetivos.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <InstitutionalButton to={contactHref}>Agendar Consulta</InstitutionalButton>
            <InstitutionalButton to={servicesHref} variant="onDark">Comparar áreas</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}

export function buildVisaFaqSchema(locale: Locale, slug: VisaSlug) {
  const v = VISAS[locale][slug];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: v.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
