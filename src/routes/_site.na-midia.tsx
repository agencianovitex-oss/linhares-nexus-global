import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";

const L = "pt" as const;

export const Route = createFileRoute("/_site/na-midia")({
  head: () =>
    buildLocaleHead({
      path: "/na-midia",
      locale: L,
      title: "Na Imprensa — Linhares Law",
      description:
        "Entrevistas, aparições e contribuições editoriais da Linhares Law e do Dr. André Linhares em veículos de referência: RedeTV News, Domingo Espetacular, Record Americas, SBT Brasil e Band News.",
    }),
  component: NaMidia,
});

const veiculos = [
  {
    name: "RedeTV News",
    category: "Jornalismo Nacional",
    description:
      "Participação como especialista em legislação migratória americana, comentando atualizações regulatórias.",
  },
  {
    name: "Domingo Espetacular",
    category: "Record TV",
    description:
      "Reportagem especial sobre profissionais e empreendedores brasileiros nos Estados Unidos.",
  },
  {
    name: "Record Americas",
    category: "Jornalismo Internacional",
    description:
      "Entrevistas recorrentes sobre estratégias migratórias para profissionais e investidores.",
  },
  {
    name: "SBT Brasil",
    category: "Jornalismo Nacional",
    description:
      "Contribuição como fonte técnica em reportagens sobre o cenário migratório brasileiro nos EUA.",
  },
  {
    name: "Band News",
    category: "Jornalismo Nacional",
    description:
      "Análises sobre mudanças nas políticas de imigração americana e seus impactos para o público brasileiro.",
  },
];

function NaMidia() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Na Imprensa"
        title="Referência editorial em imigração americana."
        intro="A Linhares Law é fonte recorrente em veículos brasileiros e americanos sobre temas relacionados à legislação migratória, atualizações regulatórias e estratégias jurídicas voltadas a profissionais e investidores."
      />

      <SectionBlock>
        <SectionTitle eyebrow="Veículos" title="Aparições e Contribuições Editoriais." />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {veiculos.map((v) => (
            <InstitutionalCard
              key={v.name}
              variant="light"
              className="border-0 p-10 bg-background editorial-card group"
            >
              <span className="rule-gold" />
              <p className="mt-5 eyebrow">{v.category}</p>
              <h3 className="mt-3 text-primary group-hover:text-gold transition-colors">{v.name}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed">{v.description}</p>
            </InstitutionalCard>
          ))}
        </div>
      </SectionBlock>

      {/* Galeria / Vídeos placeholder */}
      <SectionBlock tone="surface">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow="Galeria" title="Aparições em Vídeo" />
            <p className="mt-6 lead">
              Em breve disponibilizaremos uma curadoria de entrevistas e participações em vídeo
              integrada ao nosso canal institucional.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-px bg-border sm:grid-cols-2 border border-border">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-background aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <span
                      aria-hidden
                      className="block mx-auto h-16 w-16 border border-border-strong rounded-full flex items-center justify-center text-gold text-xl"
                    >
                      ▶
                    </span>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      Vídeo · Em curadoria
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">
            Para imprensa e demandas editoriais.
          </h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Solicitações de entrevista, comentários técnicos ou participações em pautas editoriais
            podem ser encaminhadas diretamente à nossa equipe.
          </p>
          <div className="mt-10">
            <InstitutionalButton to="/contato">Contato Institucional</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
