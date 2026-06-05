import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import gptw from "@/assets/gptw-2026.jpg";
import gptwBadge from "@/assets/gptw-badge.webp";
import lawAwards from "@/assets/law-awards-2024.jpg";
import tenBest from "@/assets/10-best-law-firms.png";
import ibi from "@/assets/ibi-3.jpg";

const L = "pt" as const;

export const Route = createFileRoute("/_site/premiacoes")({
  head: () =>
    buildLocaleHead({
      path: "/premiacoes",
      locale: L,
      title: "Reconhecimentos — Linhares Law",
      description:
        "Premiações e reconhecimentos institucionais recebidos pela Linhares Law, incluindo Great Place To Work, The Law Awards, 10 Best Law Firms e International Business Institute.",
    }),
  component: Premiacoes,
});

interface Award {
  title: string;
  year: string;
  institution: string;
  description: string;
  image?: string;
  featured?: boolean;
}

const awards: Award[] = [
  {
    title: "Great Place To Work",
    year: "2026",
    institution: "Great Place To Work Institute",
    description:
      "Certificação concedida com 100% de aprovação da equipe interna, refletindo o ambiente institucional construído pela Linhares Law.",
    image: gptw,
    featured: true,
  },
  {
    title: "The Law Awards",
    year: "2026",
    institution: "The Law Awards",
    description:
      "Reconhecimento entre os escritórios de imigração de maior destaque na atuação junto ao público brasileiro nos Estados Unidos.",
    image: lawAwards,
    featured: true,
  },
  {
    title: "10 Best Law Firms",
    year: "2026",
    institution: "American Institute of Legal Professionals",
    description:
      "Inclusão entre os dez melhores escritórios na categoria de satisfação do cliente em prática de imigração.",
    image: tenBest,
  },
  {
    title: "International Business Institute · IBI Award",
    year: "2026",
    institution: "International Business Institute",
    description:
      "Distinção concedida pela contribuição da Linhares Law ao ecossistema empresarial internacional.",
    image: ibi,
  },
  {
    title: "Top Empreendedor",
    year: "2025",
    institution: "Premiação Empresarial Brasil–EUA",
    description:
      "Reconhecimento à trajetória empreendedora do Dr. André Linhares à frente da Linhares Law.",
  },
  {
    title: "LIDE Orlando · Presidência",
    year: "2026 – Presente",
    institution: "LIDE — Grupo de Líderes Empresariais",
    description:
      "Eleição do Dr. André Linhares para a presidência do capítulo de Orlando, articulando lideranças empresariais brasileiras e americanas.",
  },
];

function Premiacoes() {
  const featured = awards.filter((a) => a.featured);
  const rest = awards.filter((a) => !a.featured);
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Reconhecimentos"
        title="Distinções concedidas por instituições jurídicas e empresariais."
        intro="As premiações recebidas pela Linhares Law refletem a consistência de uma prática construída sobre rigor técnico, ética profissional e compromisso institucional com seus clientes."
      />

      <SectionBlock>
        <SectionTitle eyebrow="Destaques" title="Reconhecimentos Recentes" />
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {featured.map((a) => (
            <article key={a.title} className="group">
              {a.image && (
                <div className="editorial-frame aspect-[16/10]">
                  <img src={a.image} alt={a.title} />
                </div>
              )}
              <div className="mt-8">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  <span className="text-gold">{a.year}</span>
                  <span>·</span>
                  <span>{a.institution}</span>
                </div>
                <h3 className="mt-4 text-primary">{a.title}</h3>
                <p className="mt-4 lead">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Demais Reconhecimentos" title="Trajetória de Distinções." />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 border border-border">
          {rest.map((a) => (
            <InstitutionalCard key={a.title} variant="light" className="border-0 p-10 bg-background editorial-card">
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                <span className="text-gold">{a.year}</span>
                <span>·</span>
                <span>{a.institution}</span>
              </div>
              <h3 className="mt-5 text-primary">{a.title}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed">{a.description}</p>
            </InstitutionalCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <span className="rule-gold" />
            <h2 className="mt-8 text-primary-foreground">
              Excelência reconhecida pelas instituições do setor.
            </h2>
            <p className="mt-6 lead text-primary-foreground/80">
              Cada distinção reflete o compromisso da Linhares Law com a representação técnica e
              institucional de seus clientes diante das autoridades americanas.
            </p>
            <div className="mt-10">
              <InstitutionalButton to="/contato">Agendar Consulta</InstitutionalButton>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <img src={gptwBadge} alt="Great Place To Work Badge" className="w-full max-w-[260px] mx-auto" />
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
