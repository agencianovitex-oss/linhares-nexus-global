import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import tenBestAsset from "@/assets/10-best-law-firms-2.png.asset.json";
import ibiAsset from "@/assets/ibi-awards-2.jpg.asset.json";

const tenBest = tenBestAsset.url;
const ibi = ibiAsset.url;

const L = "pt" as const;

export const Route = createFileRoute("/_site/premiacoes")({
  head: () =>
    buildLocaleHead({
      path: "/premiacoes",
      locale: L,
      title: "Reconhecimentos — Linhares Law",
      description:
        "Premiações e reconhecimentos institucionais recebidos pela Linhares Law, incluindo IBI Award, 10 Best Law Firms, The Law Awards, Great Place To Work e Prêmio Quality Justiça.",
    }),
  component: Premiacoes,
});

interface Award {
  title: string;
  year: string;
  institution: string;
  description: string;
  image?: string;
}

const featuredAwards: Award[] = [
  {
    title: "International Business Institute · IBI Award",
    year: "2025",
    institution: "International Business Institute",
    description:
      "Distinção concedida pela contribuição da Linhares Law ao ecossistema empresarial internacional, reconhecendo a relevância da prática institucional do escritório no cenário global.",
    image: ibi,
  },
  {
    title: "10 Best Law Firms",
    year: "2025",
    institution: "American Institute of Legal Counsel",
    description:
      "Inclusão entre os dez melhores escritórios de imigração nos Estados Unidos, com base em critérios independentes de excelência e satisfação do cliente.",
    image: tenBest,
  },
];

const textualAwards: Award[] = [
  {
    title: "Great Place To Work",
    year: "2025",
    institution: "Great Place To Work Institute",
    description:
      "Certificação concedida com 100% de aprovação da equipe interna, refletindo o ambiente institucional construído pela Linhares Law.",
  },
  {
    title: "The Law Awards",
    year: "2025",
    institution: "The Law Awards",
    description:
      "Reconhecimento entre os escritórios de imigração de maior destaque na atuação junto ao público brasileiro nos Estados Unidos.",
  },
  {
    title: "Prêmio Quality Justiça",
    year: "2025",
    institution: "Quality Justiça",
    description:
      "O Prêmio Quality Justiça reconhece organizações e profissionais que se destacam pela excelência na prestação de serviços, qualidade institucional e compromisso contínuo com padrões elevados de atuação. A premiação busca dar visibilidade a empresas e profissionais que se diferenciam em seus respectivos mercados por sua credibilidade, reputação e busca permanente pela excelência.",
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
    year: "2026 – PRESENTE",
    institution: "LIDE — Grupo de Líderes Empresariais",
    description:
      "Eleição do Dr. André Linhares para a presidência do capítulo de Orlando, articulando lideranças empresariais brasileiras e americanas.",
  },
];

// Suavização do dourado institucional rgb(223,164,89) para fundo de card
const cardBg = "color-mix(in oklab, rgb(223 164 89) 14%, white)";
const cardBorder = "color-mix(in oklab, rgb(223 164 89) 38%, white)";
const titleColor = "rgb(6, 36, 67)";

function Premiacoes() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Reconhecimentos"
        title="Distinções concedidas por instituições jurídicas e empresariais."
        intro="As premiações recebidas pela Linhares Law refletem a consistência de uma prática construída sobre rigor técnico, ética profissional e compromisso institucional com seus clientes."
      />

      <SectionBlock>
        <SectionTitle eyebrow="Destaques" title="Reconhecimentos Principais" />
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {featuredAwards.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden border transition-colors duration-300"
              style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
              {a.image && (
                <div className="aspect-[4/5] overflow-hidden bg-[rgb(6,36,67)]">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="p-10">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em]" style={{ color: titleColor }}>
                  <span className="font-semibold">{a.year}</span>
                  <span className="opacity-40">·</span>
                  <span className="opacity-80">{a.institution}</span>
                </div>
                <h3 className="mt-5 font-semibold" style={{ color: titleColor }}>
                  {a.title}
                </h3>
                <p className="mt-5 leading-relaxed" style={{ color: "rgb(6 36 67 / 0.82)" }}>
                  {a.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Demais Reconhecimentos" title="Trajetória de Distinções." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {textualAwards.map((a) => (
            <article
              key={a.title}
              className="p-10 border transition-colors duration-300"
              style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em]" style={{ color: titleColor }}>
                <span className="font-semibold">{a.year}</span>
                <span className="opacity-40">·</span>
                <span className="opacity-80">{a.institution}</span>
              </div>
              <h3 className="mt-5 font-semibold" style={{ color: titleColor }}>
                {a.title}
              </h3>
              <p className="mt-4 leading-relaxed" style={{ color: "rgb(6 36 67 / 0.82)" }}>
                {a.description}
              </p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rule-gold mx-auto" />
          <h2 className="mt-8 text-primary-foreground">
            Excelência reconhecida pelas instituições do setor.
          </h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Cada distinção reflete o compromisso da Linhares Law com a representação técnica e
            institucional de seus clientes diante das autoridades americanas.
          </p>
          <div className="mt-10 flex justify-center">
            <InstitutionalButton variant="gold" to="/contato">
              Agendar Consulta
            </InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
