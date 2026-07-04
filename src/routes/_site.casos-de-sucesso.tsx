import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { PhotoCarousel } from "@/components/home/PhotoCarousel";
import { mosaicPhotos } from "@/data/mosaic";

import { buildLocaleHead } from "@/lib/seo";

const L = "pt" as const;

export const Route = createFileRoute("/_site/casos-de-sucesso")({
  head: () =>
    buildLocaleHead({
      path: "/casos-de-sucesso",
      locale: L,
      title: "Depoimentos — Linhares Law",
      description:
        "Depoimentos reais de clientes do Linhares Law sobre suas trajetórias migratórias e aprovações conquistadas.",
    }),
  component: Depoimentos,
});

const videos = [
  "MEibnyEUuu8",
  "Qd9nAU33MqU",
  "hlaOIMN8Tf8",
  "z7VKW_c79T0",
  "eRolKV05C_8",
  "1O3oiEEA5cM",
  "euo_ztXe5ds",
  "ZCSAYc3ofek",
  "IQWgPLBSeM4",
  "AyGVkwn9kQI",
];

function Depoimentos() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Depoimentos"
        title="Depoimentos de quem viveu a experiência Linhares Law."
        intro="Histórias reais de clientes representados pelo Linhares Law, contadas por quem conquistou sua aprovação e construiu uma nova trajetória nos Estados Unidos."
      />

      <SectionBlock>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {videos.map((id) => (
            <article key={id} className="bg-background p-6 editorial-card">
              <div className="aspect-video w-full overflow-hidden border border-border bg-surface-2">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Depoimento Linhares Law"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="max-w-3xl mb-10">
          <span className="rule-gold" />
          <p className="mt-6 eyebrow">Entregas de Green Card</p>
          <h2 className="mt-4">Momentos de conquista dos nossos clientes.</h2>
          <p className="mt-4 lead">
            Registros do Dr. André Linhares ao lado de clientes do Linhares Law
            no momento da entrega de seus Green Cards.
          </p>
        </div>
      </SectionBlock>
      <PhotoMosaic photos={mosaicPhotos} />



      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">A Hora é Agora.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Descubra qual estratégia migratória faz sentido para sua trajetória.
          </p>
          <div className="mt-10">
            <InstitutionalButton to="/contato">Agendar Consulta</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
