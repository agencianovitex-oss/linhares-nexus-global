import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { useI18n, withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";

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
      title: "Na Imprensa, Linhares Law",
      description:
        "Entrevistas, aparições e contribuições editoriais da Linhares Law e do Dr. André Linhares em veículos de referência: RedeTV News, Record Americas, SBT Brasil, Band News, Jovem Pan News e CNBC.",
    }),
  component: NaMidiaPage,
});

type Veiculo = { name: string; category: string; description: string; logo: string; blend?: boolean };
type VideoItem = { title: string; outlet: string; src: string };

type PageContent = {
  eyebrow: string; title: string; intro: string;
  outletsEyebrow: string; outletsTitle: string;
  galleryEyebrow: string; galleryTitle: string; gallerySub: string;
  ctaTitle: string; ctaSub: string; cta: string;
  labels: { logoAlt: (n: string) => string; prevVideo: string; nextVideo: string; selectVideo: (t: string) => string; toDot: (i: number) => string };
  outlets: Veiculo[];
  videos: VideoItem[];
};

const buildContent = (l: Locale): PageContent => {
  const cats: Record<Locale, Record<string, string>> = {
    pt: {
      nat: "Jornalismo Nacional",
      intl: "Jornalismo Internacional",
      redeTvDesc: "Participação como especialista em legislação migratória americana, comentando atualizações regulatórias.",
      recordDesc: "Entrevistas recorrentes sobre estratégias migratórias para profissionais e investidores.",
      sbtDesc: "Contribuição como fonte técnica em reportagens sobre o cenário migratório brasileiro nos EUA.",
      bandDesc: "Análises sobre mudanças nas políticas de imigração americana e seus impactos para o público brasileiro.",
      jpDesc: "Comentários sobre cenário migratório, vistos de trabalho e investimento, e atualizações regulatórias dos EUA.",
      cnbcDesc: "Contribuições editoriais em pautas sobre mobilidade global, investidores estrangeiros e o ambiente regulatório americano.",
      vRede: "Aparição editorial", vRecord: "Entrevista", vSbt: "Reportagem", vBand: "Análise",
    },
    en: {
      nat: "Brazilian Broadcast Journalism",
      intl: "International Broadcast Journalism",
      redeTvDesc: "Featured as an expert in U.S. immigration law, commenting on regulatory updates.",
      recordDesc: "Recurring interviews on immigration strategies for professionals and investors.",
      sbtDesc: "Cited as a technical source in reports on the Brazilian immigration landscape in the U.S.",
      bandDesc: "Analyses on shifts in U.S. immigration policy and their impact on the Brazilian community.",
      jpDesc: "Commentary on the immigration landscape, work and investment visas, and U.S. regulatory updates.",
      cnbcDesc: "Editorial contributions on global mobility, foreign investors and the U.S. regulatory environment.",
      vRede: "Editorial feature", vRecord: "Interview", vSbt: "News segment", vBand: "Analysis",
    },
    es: {
      nat: "Periodismo Brasileño",
      intl: "Periodismo Internacional",
      redeTvDesc: "Participación como experto en legislación migratoria estadounidense, comentando actualizaciones regulatorias.",
      recordDesc: "Entrevistas recurrentes sobre estrategias migratorias para profesionales e inversionistas.",
      sbtDesc: "Contribución como fuente técnica en reportajes sobre el panorama migratorio brasileño en EE. UU.",
      bandDesc: "Análisis sobre cambios en las políticas de inmigración estadounidenses y su impacto en la comunidad brasileña.",
      jpDesc: "Comentarios sobre el panorama migratorio, visas de trabajo e inversión, y actualizaciones regulatorias de EE. UU.",
      cnbcDesc: "Contribuciones editoriales sobre movilidad global, inversionistas extranjeros y el entorno regulatorio estadounidense.",
      vRede: "Aparición editorial", vRecord: "Entrevista", vSbt: "Reportaje", vBand: "Análisis",
    },
  };
  const cc = cats[l];
  const outlets: Veiculo[] = [
    { name: "RedeTV News", category: cc.nat, description: cc.redeTvDesc, logo: redeTvLogo.url },
    { name: "Record Americas", category: cc.intl, description: cc.recordDesc, logo: recordAmericasLogo.url, blend: true },
    { name: "SBT Brasil", category: cc.nat, description: cc.sbtDesc, logo: sbtLogo.url },
    { name: "Band News", category: cc.nat, description: cc.bandDesc, logo: bandNewsLogo.url },
    { name: "Jovem Pan News", category: cc.nat, description: cc.jpDesc, logo: jovemPanLogo.url },
    { name: "CNBC", category: cc.intl, description: cc.cnbcDesc, logo: cnbcLogo.url },
  ];
  const videos: VideoItem[] = [
    { title: "RedeTV News", outlet: cc.vRede, src: redeTvVideo.url },
    { title: "Record Americas", outlet: cc.vRecord, src: recordVideo.url },
    { title: "SBT Brasil", outlet: cc.vSbt, src: sbtVideo.url },
    { title: "Band News", outlet: cc.vBand, src: bandNewsVideo.url },
  ];
  const staticParts: Record<Locale, Omit<PageContent, "outlets" | "videos">> = {
    pt: {
      eyebrow: "Linhares Law · Na Imprensa",
      title: "Referência editorial em imigração americana.",
      intro: "A Linhares Law é fonte recorrente em veículos brasileiros e americanos sobre temas relacionados à legislação migratória, atualizações regulatórias e estratégias jurídicas voltadas a profissionais e investidores.",
      outletsEyebrow: "Veículos",
      outletsTitle: "Aparições e Contribuições Editoriais.",
      galleryEyebrow: "Galeria",
      galleryTitle: "Aparições em Vídeo.",
      gallerySub: "Curadoria de participações e entrevistas em veículos de referência.",
      ctaTitle: "Para imprensa e demandas editoriais.",
      ctaSub: "Solicitações de entrevista, comentários técnicos ou participações em pautas editoriais podem ser encaminhadas diretamente à nossa equipe.",
      cta: "Contato Institucional",
      labels: { logoAlt: (n) => `Logotipo ${n}`, prevVideo: "Vídeo anterior", nextVideo: "Próximo vídeo", selectVideo: (t) => `Selecionar vídeo ${t}`, toDot: (i) => `Ir para vídeo ${i}` },
    },
    en: {
      eyebrow: "Linhares Law · In the Press",
      title: "An editorial reference on U.S. immigration.",
      intro: "Linhares Law is a recurring source for Brazilian and American outlets on U.S. immigration law, regulatory updates and legal strategies for professionals and investors.",
      outletsEyebrow: "Outlets",
      outletsTitle: "Appearances and Editorial Contributions.",
      galleryEyebrow: "Gallery",
      galleryTitle: "Video Appearances.",
      gallerySub: "A curated selection of features and interviews across leading outlets.",
      ctaTitle: "For press and editorial requests.",
      ctaSub: "Interview requests, expert commentary or participation in editorial features can be directed to our team.",
      cta: "Institutional Contact",
      labels: { logoAlt: (n) => `${n} logo`, prevVideo: "Previous video", nextVideo: "Next video", selectVideo: (t) => `Select video ${t}`, toDot: (i) => `Go to video ${i}` },
    },
    es: {
      eyebrow: "Linhares Law · En los Medios",
      title: "Una referencia editorial en inmigración a EE. UU.",
      intro: "Linhares Law es fuente recurrente en medios brasileños y estadounidenses sobre legislación migratoria, actualizaciones regulatorias y estrategias jurídicas para profesionales e inversionistas.",
      outletsEyebrow: "Medios",
      outletsTitle: "Apariciones y Contribuciones Editoriales.",
      galleryEyebrow: "Galería",
      galleryTitle: "Apariciones en Video.",
      gallerySub: "Selección curada de participaciones y entrevistas en medios de referencia.",
      ctaTitle: "Para prensa y solicitudes editoriales.",
      ctaSub: "Solicitudes de entrevista, comentarios técnicos o participaciones editoriales pueden dirigirse directamente a nuestro equipo.",
      cta: "Contacto Institucional",
      labels: { logoAlt: (n) => `Logotipo de ${n}`, prevVideo: "Video anterior", nextVideo: "Siguiente video", selectVideo: (t) => `Seleccionar video ${t}`, toDot: (i) => `Ir al video ${i}` },
    },
  };
  return { ...staticParts[l], outlets, videos };
};

export function NaMidiaPage() {
  const { locale } = useI18n();
  const c = buildContent(locale);
  return (
    <>
      <InstitutionalHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <SectionBlock>
        <SectionTitle eyebrow={c.outletsEyebrow} title={c.outletsTitle} />
        <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {c.outlets.map((v) => (
            <InstitutionalCard key={v.name} variant="light" className="group relative border-0 bg-background p-10">
              <div className="absolute right-8 top-8 flex h-10 w-24 items-center justify-end">
                <img src={v.logo} alt={c.labels.logoAlt(v.name)} loading="lazy" className={cn("max-h-10 max-w-full object-contain opacity-90 transition-opacity group-hover:opacity-100", v.blend && "mix-blend-multiply")} />
              </div>
              <span className="rule-gold" />
              <p className="mt-5 eyebrow">{v.category}</p>
              <h3 className="mt-3 pr-28 text-primary transition-colors group-hover:text-gold">{v.name}</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{v.description}</p>
            </InstitutionalCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow={c.galleryEyebrow} title={c.galleryTitle} />
        <p className="mt-6 max-w-2xl lead text-ink-soft">{c.gallerySub}</p>
        <div className="mt-16">
          <VideoCarousel items={c.videos} labels={c.labels} />
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">{c.ctaTitle}</h2>
          <p className="mt-6 lead text-primary-foreground/80">{c.ctaSub}</p>
          <div className="mt-10">
            <InstitutionalButton to={withLocale(locale, "/contato")}>{c.cta}</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}

function VideoCarousel({ items, labels }: { items: VideoItem[]; labels: PageContent["labels"] }) {
  const [active, setActive] = useState(0);
  const total = items.length;
  const wrap = (i: number) => (i + total) % total;
  const prev = () => setActive((i) => wrap(i - 1));
  const next = () => setActive((i) => wrap(i + 1));

  return (
    <div className="relative">
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
              pos === -1 ? "-translate-x-[140%] -translate-y-1/2 scale-[0.72]" :
              pos === 1 ? "translate-x-[40%] -translate-y-1/2 scale-[0.72]" :
              pos === 0 ? "-translate-x-1/2 -translate-y-1/2 scale-100" :
              "-translate-x-1/2 -translate-y-1/2 scale-90 opacity-0 pointer-events-none";
            return (
              <button key={item.src} type="button" onClick={() => setActive(i)} aria-label={labels.selectVideo(item.title)} className={cn("absolute top-1/2 left-1/2 aspect-[9/16] h-full transform-gpu transition-all duration-700 ease-out", translate, isMain ? "z-20" : "z-10")}>
                <div className={cn("relative h-full w-full overflow-hidden border border-border bg-black shadow-2xl", isSide && "opacity-60")}>
                  <video key={item.src} src={item.src} controls={isMain} playsInline preload={isMain ? "auto" : "metadata"} muted={!isMain} className={cn("h-full w-full object-cover", isSide && "blur-[2px]")} />
                  {isSide && <div className="pointer-events-none absolute inset-0 bg-primary/30" />}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-gold">{item.outlet}</p>
                    <p className="mt-1 font-display text-base text-primary-foreground">{item.title}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <button type="button" onClick={prev} aria-label={labels.prevVideo} className="absolute left-2 top-1/2 z-30 -translate-y-1/2 grid h-12 w-12 place-items-center border border-border bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={next} aria-label={labels.nextVideo} className="absolute right-2 top-1/2 z-30 -translate-y-1/2 grid h-12 w-12 place-items-center border border-border bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} type="button" aria-label={labels.toDot(i + 1)} onClick={() => setActive(i)} className={cn("h-[2px] transition-all duration-500", i === active ? "w-10 bg-gold" : "w-6 bg-border")} />
          ))}
        </div>
      </div>
      <MobileVideoCarousel items={items} active={active} setActive={setActive} labels={labels} />
    </div>
  );
}

function MobileVideoCarousel({ items, active, setActive, labels }: { items: VideoItem[]; active: number; setActive: (i: number) => void; labels: PageContent["labels"] }) {
  const total = items.length;
  const wrap = (i: number) => (i + total) % total;
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { (e.currentTarget as HTMLDivElement).dataset.x = String(e.touches[0].clientX); };
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
      <div className="relative h-[560px] overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <PeekVideo item={items[prevI]} side="left" />
        <PeekVideo item={items[nextI]} side="right" />
        <div className="absolute left-1/2 top-1/2 z-20 aspect-[9/16] h-full -translate-x-1/2 -translate-y-1/2 border border-border bg-primary shadow-2xl">
          <video key={items[active].src} src={items[active].src} controls playsInline preload="metadata" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{items[active].outlet}</p>
            <p className="mt-1 font-display text-sm text-primary-foreground">{items[active].title}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-6">
        <button type="button" onClick={() => setActive(prevI)} aria-label={labels.prevVideo} className="grid h-10 w-10 place-items-center border border-border text-primary">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} type="button" aria-label={labels.toDot(i + 1)} onClick={() => setActive(i)} className={cn("h-[2px] transition-all duration-500", i === active ? "w-10 bg-gold" : "w-6 bg-border")} />
          ))}
        </div>
        <button type="button" onClick={() => setActive(nextI)} aria-label={labels.nextVideo} className="grid h-10 w-10 place-items-center border border-border text-primary">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function PeekVideo({ item, side }: { item: VideoItem; side: "left" | "right" }) {
  return (
    <div className={cn("absolute top-1/2 z-10 aspect-[9/16] h-[80%] -translate-y-1/2 overflow-hidden border border-border bg-primary opacity-50", side === "left" ? "-left-[18%]" : "-right-[18%]")} aria-hidden>
      <video src={item.src} muted playsInline preload="metadata" className="h-full w-full object-cover blur-[3px]" />
      <div className="absolute inset-0 bg-primary/40" />
    </div>
  );
}
