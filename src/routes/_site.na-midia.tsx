import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  InstitutionalHero,
  InstitutionalButton,
  InstitutionalCard,
} from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

import cnbcLogo from "@/assets/media/cnbc.png.asset.json";
import jovemPanLogo from "@/assets/media/jovempan.png.asset.json";
import bandNewsLogo from "@/assets/media/bandnews.svg.asset.json";
import sbtLogo from "@/assets/media/sbt.png.asset.json";
import recordAmericasLogo from "@/assets/media/record-americas.jpg.asset.json";
import redeTvLogo from "@/assets/media/redetv.png.asset.json";

import bandNewsVideo from "@/assets/media/band-news.mp4.asset.json";
import sbtVideo from "@/assets/media/sbt-brasil.mp4.asset.json";
import recordVideo from "@/assets/media/record-americas.mp4.asset.json";
import redeTvVideo from "@/assets/media/rede-tv.mp4.asset.json";

const L = "pt" as const;

export const Route = createFileRoute("/_site/na-midia")({
  head: () =>
    buildLocaleHead({
      path: "/na-midia",
      locale: L,
      title: "Na Imprensa — Linhares Law",
      description:
        "Entrevistas, aparições e contribuições editoriais do Linhares Law e do Dr. André Linhares em veículos de referência: RedeTV News, Record Americas, SBT Brasil, Band News, Jovem Pan News e CNBC.",
    }),
  component: NaMidia,
});

type Veiculo = {
  name: string;
  category: string;
  description: string;
  logo: string;
  /** Use mix-blend-multiply to neutralize white JPG backgrounds on light cards. */
  blend?: boolean;
};

const veiculos: Veiculo[] = [
  {
    name: "RedeTV News",
    category: "Jornalismo Nacional",
    description:
      "Participação como especialista em legislação migratória americana, comentando atualizações regulatórias.",
    logo: redeTvLogo.url,
  },
  {
    name: "Record Americas",
    category: "Jornalismo Internacional",
    description:
      "Entrevistas recorrentes sobre estratégias migratórias para profissionais e investidores.",
    logo: recordAmericasLogo.url,
    blend: true,
  },
  {
    name: "SBT Brasil",
    category: "Jornalismo Nacional",
    description:
      "Contribuição como fonte técnica em reportagens sobre o cenário migratório brasileiro nos EUA.",
    logo: sbtLogo.url,
  },
  {
    name: "Band News",
    category: "Jornalismo Nacional",
    description:
      "Análises sobre mudanças nas políticas de imigração americana e seus impactos para o público brasileiro.",
    logo: bandNewsLogo.url,
  },
  {
    name: "Jovem Pan News",
    category: "Jornalismo Nacional",
    description:
      "Comentários sobre cenário migratório, vistos de trabalho e investimento, e atualizações regulatórias dos EUA.",
    logo: jovemPanLogo.url,
  },
  {
    name: "CNBC",
    category: "Jornalismo Internacional",
    description:
      "Contribuições editoriais em pautas sobre mobilidade global, investidores estrangeiros e o ambiente regulatório americano.",
    logo: cnbcLogo.url,
  },
];

type VideoItem = {
  title: string;
  outlet: string;
  src: string;
};

const videos: VideoItem[] = [
  { title: "RedeTV News", outlet: "Aparição editorial", src: redeTvVideo.url },
  { title: "Record Americas", outlet: "Entrevista", src: recordVideo.url },
  { title: "SBT Brasil", outlet: "Reportagem", src: sbtVideo.url },
  { title: "Band News", outlet: "Análise", src: bandNewsVideo.url },
];

function NaMidia() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Na Imprensa"
        title="Referência editorial em imigração americana."
        intro="O Linhares Law é fonte recorrente em veículos brasileiros e americanos sobre temas relacionados à legislação migratória, atualizações regulatórias e estratégias jurídicas voltadas a profissionais e investidores."
      />

      <SectionBlock>
        <SectionTitle eyebrow="Veículos" title="Aparições e Contribuições Editoriais." />
        <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {veiculos.map((v) => (
            <InstitutionalCard
              key={v.name}
              variant="light"
              className="group relative border-0 bg-background p-10"
            >
              {/* Logo — canto superior direito, tamanho normalizado */}
              <div className="absolute right-8 top-8 flex h-10 w-24 items-center justify-end">
                <img
                  src={v.logo}
                  alt={`Logotipo ${v.name}`}
                  loading="lazy"
                  className={cn(
                    "max-h-10 max-w-full object-contain opacity-90 transition-opacity group-hover:opacity-100",
                    v.blend && "mix-blend-multiply",
                  )}
                />
              </div>

              <span className="rule-gold" />
              <p className="mt-5 eyebrow">{v.category}</p>
              <h3 className="mt-3 pr-28 text-primary transition-colors group-hover:text-gold">
                {v.name}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{v.description}</p>
            </InstitutionalCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Galeria" title="Aparições em Vídeo." />
        <p className="mt-6 max-w-2xl lead text-ink-soft">
          Curadoria de participações e entrevistas em veículos de referência.
        </p>
        <div className="mt-16">
          <VideoCarousel items={videos} />
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">
            Para imprensa e demandas editoriais.
          </h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Solicitações de entrevista, comentários técnicos ou participações em pautas
            editoriais podem ser encaminhadas diretamente à nossa equipe.
          </p>
          <div className="mt-10">
            <InstitutionalButton to="/contato">Contato Institucional</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Premium 3-up video carousel: prev | main | next                     */
/* ------------------------------------------------------------------ */

function VideoCarousel({ items }: { items: VideoItem[] }) {
  const [active, setActive] = useState(0);
  const total = items.length;
  const wrap = (i: number) => (i + total) % total;

  const prev = () => setActive((i) => wrap(i - 1));
  const next = () => setActive((i) => wrap(i + 1));

  return (
    <div className="relative">
      {/* Desktop: 3-up showcase */}
      <div className="relative hidden md:block">
        <div className="relative mx-auto flex h-[640px] w-full max-w-5xl items-center justify-center overflow-hidden">
          {items.map((item, i) => {
            let pos: -1 | 0 | 1 | "hidden" = "hidden";
            if (i === active) pos = 0;
            else if (i === wrap(active - 1)) pos = -1;
            else if (i === wrap(active + 1)) pos = 1;

            const isMain = pos === 0;
            const isSide = pos === -1 || pos === 1;
            const translate =
              pos === -1
                ? "-translate-x-[105%] -translate-y-1/2 scale-[0.72]"
                : pos === 1
                  ? "translate-x-[5%] -translate-y-1/2 scale-[0.72]"
                  : pos === 0
                    ? "-translate-x-1/2 -translate-y-1/2 scale-100"
                    : "-translate-x-1/2 -translate-y-1/2 scale-90 opacity-0 pointer-events-none";

            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Selecionar vídeo ${item.title}`}
                className={cn(
                  "absolute top-1/2 left-1/2 aspect-[9/16] h-full",
                  "transform-gpu transition-all duration-700 ease-out",
                  translate,
                  isMain ? "z-20" : "z-10",
                )}
              >
                <div
                  className={cn(
                    "relative h-full w-full overflow-hidden border border-border bg-black shadow-2xl",
                    isSide && "opacity-60",
                  )}
                >
                  <video
                    key={item.src}
                    src={item.src}
                    controls={isMain}
                    playsInline
                    preload={isMain ? "auto" : "metadata"}
                    muted={!isMain}
                    className={cn(
                      "h-full w-full object-cover",
                      isSide && "blur-[2px]",
                    )}
                  />
                  {isSide && (
                    <div className="pointer-events-none absolute inset-0 bg-primary/30" />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                      {item.outlet}
                    </p>
                    <p className="mt-1 font-display text-base text-primary-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <CarouselNav onPrev={prev} onNext={next} />
        <Dots count={total} active={active} onSelect={setActive} />
      </div>

      {/* Mobile: peek carousel with swipe */}
      <MobileVideoCarousel items={items} active={active} setActive={setActive} />
    </div>
  );
}

function CarouselNav({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Vídeo anterior"
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 grid h-12 w-12 place-items-center border border-border bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Próximo vídeo"
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 grid h-12 w-12 place-items-center border border-border bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </>
  );
}

function Dots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mt-8 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Ir para vídeo ${i + 1}`}
          onClick={() => onSelect(i)}
          className={cn(
            "h-[2px] transition-all duration-500",
            i === active ? "w-10 bg-gold" : "w-6 bg-border",
          )}
        />
      ))}
    </div>
  );
}

function MobileVideoCarousel({
  items,
  active,
  setActive,
}: {
  items: VideoItem[];
  active: number;
  setActive: (i: number) => void;
}) {
  const total = items.length;
  const wrap = (i: number) => (i + total) % total;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).dataset.x = String(e.touches[0].clientX);
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = Number((e.currentTarget as HTMLDivElement).dataset.x ?? 0);
    const delta = e.changedTouches[0].clientX - start;
    if (delta > 40) setActive(wrap(active - 1));
    else if (delta < -40) setActive(wrap(active + 1));
  };

  const prevI = wrap(active - 1);
  const nextI = wrap(active + 1);

  return (
    <div className="md:hidden">
      <div
        className="relative h-[560px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* prev peek */}
        <PeekVideo item={items[prevI]} side="left" />
        {/* next peek */}
        <PeekVideo item={items[nextI]} side="right" />
        {/* main */}
        <div className="absolute left-1/2 top-1/2 z-20 aspect-[9/16] h-full -translate-x-1/2 -translate-y-1/2 border border-border bg-primary shadow-2xl">

          <video
            key={items[active].src}
            src={items[active].src}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold">
              {items[active].outlet}
            </p>
            <p className="mt-1 font-display text-sm text-primary-foreground">
              {items[active].title}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => setActive(prevI)}
          aria-label="Vídeo anterior"
          className="grid h-10 w-10 place-items-center border border-border text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <Dots count={total} active={active} onSelect={setActive} />
        <button
          type="button"
          onClick={() => setActive(nextI)}
          aria-label="Próximo vídeo"
          className="grid h-10 w-10 place-items-center border border-border text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function PeekVideo({ item, side }: { item: VideoItem; side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "absolute top-1/2 z-10 aspect-[9/16] h-[80%] -translate-y-1/2 overflow-hidden border border-border bg-primary opacity-50",
        side === "left" ? "-left-[18%]" : "-right-[18%]",
      )}
      aria-hidden
    >
      <video
        src={item.src}
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover blur-[3px]"
      />
      <div className="absolute inset-0 bg-primary/40" />
    </div>
  );
}
