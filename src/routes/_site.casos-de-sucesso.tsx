import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { PhotoCarousel } from "@/components/home/PhotoCarousel";
import { mosaicPhotos } from "@/data/mosaic";
import { buildLocaleHead } from "@/lib/seo";
import { useI18n, withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";

const L = "pt" as const;

export const Route = createFileRoute("/_site/casos-de-sucesso")({
  head: () =>
    buildLocaleHead({
      path: "/casos-de-sucesso",
      locale: L,
      title: "Depoimentos | Linhares Law",
      description:
        "Depoimentos reais de clientes da Linhares Law sobre suas trajetórias migratórias e aprovações conquistadas.",
    }),
  component: DepoimentosPage,
});

const videos = [
  "MEibnyEUuu8", "Qd9nAU33MqU", "hlaOIMN8Tf8", "z7VKW_c79T0", "eRolKV05C_8",
  "1O3oiEEA5cM", "euo_ztXe5ds", "ZCSAYc3ofek", "IQWgPLBSeM4", "AyGVkwn9kQI",
];

const content: Record<Locale, {
  eyebrow: string; title: string; intro: string;
  gcEyebrow: string; gcTitle: string; gcSub: string;
  ctaTitle: string; ctaSub: string; cta: string;
  videoTitle: string;
}> = {
  pt: {
    eyebrow: "Linhares Law · Depoimentos",
    title: "Depoimentos de quem viveu a experiência Linhares Law.",
    intro: "Histórias reais de clientes representados pela Linhares Law, contadas por quem conquistou sua aprovação e construiu uma nova trajetória nos Estados Unidos.",
    gcEyebrow: "Entregas de Green Card",
    gcTitle: "Momentos de conquista dos nossos clientes.",
    gcSub: "Registros do Dr. André Linhares ao lado de clientes da Linhares Law no momento da entrega de seus Green Cards.",
    ctaTitle: "A Hora é Agora.",
    ctaSub: "Descubra qual estratégia migratória faz sentido para sua trajetória.",
    cta: "Agendar Consulta",
    videoTitle: "Depoimento Linhares Law",
  },
  en: {
    eyebrow: "Linhares Law · Testimonials",
    title: "Voices from those who experienced Linhares Law.",
    intro: "Real stories from clients represented by Linhares Law, told by those who secured their approvals and built a new trajectory in the United States.",
    gcEyebrow: "Green Card Deliveries",
    gcTitle: "Moments of achievement with our clients.",
    gcSub: "André Linhares alongside Linhares Law clients at the moment they received their Green Cards.",
    ctaTitle: "The Time Is Now.",
    ctaSub: "Discover which immigration strategy fits your trajectory.",
    cta: "Schedule a Consultation",
    videoTitle: "Linhares Law Testimonial",
  },
  es: {
    eyebrow: "Linhares Law · Testimonios",
    title: "Voces de quienes vivieron la experiencia Linhares Law.",
    intro: "Historias reales de clientes representados por Linhares Law, contadas por quienes lograron su aprobación y construyeron una nueva trayectoria en Estados Unidos.",
    gcEyebrow: "Entregas de Green Card",
    gcTitle: "Momentos de logro junto a nuestros clientes.",
    gcSub: "André Linhares junto a clientes de Linhares Law en el momento de recibir sus Green Cards.",
    ctaTitle: "La Hora es Ahora.",
    ctaSub: "Descubra qué estrategia migratoria se ajusta a su trayectoria.",
    cta: "Agendar Consulta",
    videoTitle: "Testimonio Linhares Law",
  },
};

export function DepoimentosPage() {
  const { locale } = useI18n();
  const c = content[locale];
  return (
    <>
      <InstitutionalHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <SectionBlock>
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {videos.map((id) => (
            <article key={id} className="bg-background p-6 editorial-card">
              <div className="aspect-video w-full overflow-hidden border border-border bg-surface-2">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={c.videoTitle}
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
          <p className="mt-6 eyebrow">{c.gcEyebrow}</p>
          <h2 className="mt-4">{c.gcTitle}</h2>
          <p className="mt-4 lead">{c.gcSub}</p>
        </div>
        <PhotoCarousel photos={mosaicPhotos} />
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

function DepoimentosRouteComponent() { return <DepoimentosPage />; }
export default DepoimentosRouteComponent;
