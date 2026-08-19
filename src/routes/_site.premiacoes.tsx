import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { useI18n, withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";
import tenBestAsset from "@/assets/10-best-law-firms-2.png.asset.json";
import ibiAsset from "@/assets/ibi-awards-2.jpg.asset.json";
import ailaAsset from "@/assets/aila-2025-andre-linhares.jpg.asset.json";
import topBusinessAsset from "@/assets/top-of-business-roma-2026.jpg.asset.json";

const tenBest = tenBestAsset.url;
const ibi = ibiAsset.url;
const aila = ailaAsset.url;
const topBusiness = topBusinessAsset.url;

const L = "pt" as const;

export const Route = createFileRoute("/_site/premiacoes")({
  head: () =>
    buildLocaleHead({
      path: "/premiacoes",
      locale: L,
      title: "Reconhecimentos | Linhares Law",
      description:
        "Premiações e reconhecimentos institucionais recebidos pela Linhares Law, incluindo IBI Award, 10 Best Law Firms, The Law Awards, Great Place To Work e Prêmio Quality Justiça.",
    }),
  component: PremiacoesPage,
});

interface Award { title: string; year: string; institution: string; description: string; image?: string; }

type PageContent = {
  eyebrow: string; title: string; intro: string;
  featuredEyebrow: string; featuredTitle: string;
  moreEyebrow: string; moreTitle: string;
  ctaTitle: string; ctaSub: string; cta: string;
  featured: Award[]; textual: Award[];
};

const content: Record<Locale, PageContent> = {
  pt: {
    eyebrow: "Linhares Law · Reconhecimentos",
    title: "Distinções concedidas por instituições jurídicas e empresariais.",
    intro: "As premiações recebidas pela Linhares Law refletem a consistência de uma prática construída sobre rigor técnico, ética profissional e compromisso institucional com seus clientes.",
    featuredEyebrow: "Destaques",
    featuredTitle: "Reconhecimentos Principais",
    moreEyebrow: "Demais Reconhecimentos",
    moreTitle: "Trajetória de Distinções.",
    ctaTitle: "Excelência reconhecida pelas instituições do setor.",
    ctaSub: "Cada distinção reflete o compromisso da Linhares Law com a representação técnica e institucional de seus clientes diante das autoridades americanas.",
    cta: "Agendar Consulta",
    featured: [
      { title: "International Business Institute · IBI Award", year: "2025", institution: "International Business Institute", description: "Distinção concedida pela contribuição da Linhares Law ao ecossistema empresarial internacional, reconhecendo a relevância da prática institucional do escritório no cenário global.", image: ibi },
      { title: "10 Best Law Firms", year: "2026", institution: "American Institute of Legal Counsel", description: "Inclusão entre os dez melhores escritórios de imigração nos Estados Unidos, com base em critérios independentes de excelência e satisfação do cliente. Mostrando o comprometimento constante do escritório com os resultados dos seus clientes.", image: tenBest },
      { title: "Palestrante na AILA 2025", year: "2025", institution: "American Immigration Lawyers Association", description: "Em 2025, o Dr. André Linhares tornou-se o único advogado de nacionalidade brasileira a ser convidado a atuar como palestrante na conferência anual da AILA (Associação Americana de Advogados de Imigração), uma das mais importantes organizações jurídicas especializadas em imigração dos Estados Unidos.\u00a0", image: aila },
      { title: "Top of Business 2026 · Homenagem em Roma", year: "2026", institution: "International Business Institute", description: "Realizada em Roma, na Itália, a premiação internacional Top of Business 2026 reuniu empresários, executivos e lideranças globais. Entre os homenageados da edição, o Dr. André Linhares recebeu destaque por sua trajetória de excelência e impacto nos ambientes corporativo e jurídico. A honraria se soma ao prêmio Top Empreendedor, também concedido pelo IBI, e celebra um momento de forte expansão institucional e de liderança no debate público sobre políticas migratórias e investimentos internacionais.", image: topBusiness },
    ],
    textual: [
      { title: "Great Place To Work", year: "2025", institution: "Great Place To Work Institute", description: "Certificação concedida com 100% de aprovação da equipe interna, refletindo o ambiente institucional construído pela Linhares Law." },
      { title: "The Law Awards", year: "2024", institution: "The Law Awards", description: "Reconhecimento entre os escritórios de imigração de maior destaque na atuação junto ao público brasileiro nos Estados Unidos." },
      { title: "Prêmio Quality Justiça", year: "2024", institution: "Quality Justiça", description: "O Prêmio Quality Justiça reconhece organizações e profissionais que se destacam pela excelência na prestação de serviços, qualidade institucional e compromisso contínuo com padrões elevados de atuação." },
      { title: "Top Empreendedor", year: "2025", institution: "Premiação Empresarial Brasil e EUA", description: "Reconhecimento à trajetória empreendedora do Dr. André Linhares à frente da Linhares Law." },
      { title: "LIDE Orlando · Presidência", year: "2025, PRESENTE", institution: "LIDE, Grupo de Líderes Empresariais", description: "Eleição do Dr. André Linhares para a presidência da sede de Orlando, articulando lideranças empresariais brasileiras e americanas." },
    ],
  },
  en: {
    eyebrow: "Linhares Law · Recognition",
    title: "Distinctions granted by leading legal and business institutions.",
    intro: "The honors received by Linhares Law reflect the consistency of a practice built on technical rigor, professional ethics and institutional commitment to every client we represent.",
    featuredEyebrow: "Highlights",
    featuredTitle: "Principal Recognitions",
    moreEyebrow: "Additional Recognitions",
    moreTitle: "A Trajectory of Distinctions.",
    ctaTitle: "Excellence recognized by the leading institutions of the sector.",
    ctaSub: "Each distinction reflects the commitment of Linhares Law to the technical and institutional representation of clients before U.S. authorities.",
    cta: "Schedule a Consultation",
    featured: [
      { title: "International Business Institute · IBI Award", year: "2025", institution: "International Business Institute", description: "Distinction granted for Linhares Law's contribution to the international business ecosystem, recognizing the relevance of the firm's institutional practice on the global stage.", image: ibi },
      { title: "10 Best Law Firms", year: "2026", institution: "American Institute of Legal Counsel", description: "Ranked among the ten best immigration law firms in the United States, based on independent criteria of excellence and client satisfaction — a mark of the firm's ongoing commitment to results.", image: tenBest },
      { title: "AILA Speaker 2025", year: "2025", institution: "American Immigration Lawyers Association", description: "In 2025, André Linhares became the only Brazilian-born attorney invited to speak at the annual AILA conference — one of the leading U.S. legal organizations dedicated to immigration law.", image: aila },
      { title: "Top of Business 2026 · Honoree in Rome", year: "2026", institution: "International Business Institute", description: "Held in Rome, Italy, the international Top of Business 2026 awards brought together entrepreneurs, executives and global leaders. Among the honorees of the edition, André Linhares was recognized for his trajectory of excellence and his impact on the corporate and legal environments. The distinction adds to the Top Entrepreneur award, also granted by the IBI, and marks a moment of strong institutional expansion and leadership in the public debate on immigration policy and international investment.", image: topBusiness },
    ],
    textual: [
      { title: "Great Place To Work", year: "2025", institution: "Great Place To Work Institute", description: "Certification granted with 100% approval from the internal team, reflecting the institutional environment built at Linhares Law." },
      { title: "The Law Awards", year: "2024", institution: "The Law Awards", description: "Recognition among the leading immigration firms serving the Brazilian community in the United States." },
      { title: "Quality Justiça Award", year: "2024", institution: "Quality Justiça", description: "The Quality Justiça Award recognizes organizations and professionals distinguished by service excellence, institutional quality and a sustained commitment to high standards of practice." },
      { title: "Top Entrepreneur", year: "2025", institution: "Brazil, U.S. Business Awards", description: "Recognition of André Linhares's entrepreneurial trajectory at the helm of Linhares Law." },
      { title: "LIDE Orlando · Presidency", year: "2025 – PRESENT", institution: "LIDE, Group of Business Leaders", description: "André Linhares's election to the presidency of the Orlando chapter, bringing together Brazilian and American business leadership." },
    ],
  },
  es: {
    eyebrow: "Linhares Law · Reconocimientos",
    title: "Distinciones otorgadas por instituciones jurídicas y empresariales.",
    intro: "Los reconocimientos recibidos por Linhares Law reflejan la consistencia de una práctica construida sobre rigor técnico, ética profesional y compromiso institucional con cada cliente representado.",
    featuredEyebrow: "Destacados",
    featuredTitle: "Reconocimientos Principales",
    moreEyebrow: "Otros Reconocimientos",
    moreTitle: "Trayectoria de Distinciones.",
    ctaTitle: "Excelencia reconocida por las instituciones del sector.",
    ctaSub: "Cada distinción refleja el compromiso de Linhares Law con la representación técnica e institucional de sus clientes ante las autoridades estadounidenses.",
    cta: "Agendar Consulta",
    featured: [
      { title: "International Business Institute · IBI Award", year: "2025", institution: "International Business Institute", description: "Distinción otorgada por la contribución de Linhares Law al ecosistema empresarial internacional, reconociendo la relevancia de la práctica institucional del despacho en el escenario global.", image: ibi },
      { title: "10 Best Law Firms", year: "2026", institution: "American Institute of Legal Counsel", description: "Inclusión entre los diez mejores despachos de inmigración de Estados Unidos, con base en criterios independientes de excelencia y satisfacción del cliente — reflejo del compromiso constante del despacho con los resultados de sus clientes.", image: tenBest },
      { title: "Conferencista en AILA 2025", year: "2025", institution: "American Immigration Lawyers Association", description: "En 2025, André Linhares se convirtió en el único abogado de nacionalidad brasileña invitado a actuar como conferencista en la conferencia anual de AILA — una de las organizaciones jurídicas más importantes de EE. UU. especializadas en inmigración.", image: aila },
      { title: "Top of Business 2026 · Homenaje en Roma", year: "2026", institution: "International Business Institute", description: "Realizada en Roma, Italia, la premiación internacional Top of Business 2026 reunió a empresarios, ejecutivos y liderazgos globales. Entre los homenajeados de la edición, André Linhares recibió un destaque por su trayectoria de excelencia y su impacto en los ámbitos corporativo y jurídico. Esta distinción se suma al premio Top Empreendedor, también otorgado por el IBI, y celebra un momento de fuerte expansión institucional y de liderazgo en el debate público sobre políticas migratorias e inversiones internacionales.", image: topBusiness },
    ],
    textual: [
      { title: "Great Place To Work", year: "2025", institution: "Great Place To Work Institute", description: "Certificación otorgada con 100% de aprobación del equipo interno, reflejando el ambiente institucional construido en Linhares Law." },
      { title: "The Law Awards", year: "2024", institution: "The Law Awards", description: "Reconocimiento entre los despachos de inmigración más destacados en la atención al público brasileño en Estados Unidos." },
      { title: "Premio Quality Justiça", year: "2024", institution: "Quality Justiça", description: "El Premio Quality Justiça reconoce a organizaciones y profesionales que se destacan por la excelencia en la prestación de servicios, la calidad institucional y el compromiso continuo con estándares elevados de práctica." },
      { title: "Top Empreendedor", year: "2025", institution: "Premio Empresarial Brasil y EE. UU.", description: "Reconocimiento a la trayectoria empresarial de André Linhares al frente de Linhares Law." },
      { title: "LIDE Orlando · Presidencia", year: "2025 – PRESENTE", institution: "LIDE, Grupo de Líderes Empresariales", description: "Elección de André Linhares a la presidencia de la sede de Orlando, articulando liderazgos empresariales brasileños y estadounidenses." },
    ],
  },
};

const cardBg = "color-mix(in oklab, rgb(179 134 66) 14%, white)";
const cardBorder = "color-mix(in oklab, rgb(179 134 66) 38%, white)";
const titleColor = "rgb(6, 36, 67)";

export function PremiacoesPage() {
  const { locale } = useI18n();
  const c = content[locale];
  return (
    <>
      <InstitutionalHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <SectionBlock>
        <SectionTitle eyebrow={c.featuredEyebrow} title={c.featuredTitle} />
        <div className="mt-16 mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {c.featured.map((a) => (
            <article key={a.title} className="group flex flex-col overflow-hidden border transition-colors duration-300" style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
              {a.image && (
                <div className="aspect-[4/5] overflow-hidden bg-[rgb(6,36,67)]">
                  <img loading="lazy" decoding="async" src={a.image} alt={a.title} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              )}
              <div className="p-10">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em]" style={{ color: titleColor }}>
                  <span className="font-semibold">{a.year}</span>
                  <span className="opacity-40">·</span>
                  <span className="opacity-80">{a.institution}</span>
                </div>
                <h3 className="mt-5 font-semibold" style={{ color: titleColor }}>{a.title}</h3>
                <p className="mt-5 leading-relaxed" style={{ color: "rgb(6 36 67 / 0.82)" }}>{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow={c.moreEyebrow} title={c.moreTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {c.textual.map((a) => (
            <article key={a.title} className="p-10 border transition-colors duration-300" style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.28em]" style={{ color: titleColor }}>
                <span className="font-semibold">{a.year}</span>
                <span className="opacity-40">·</span>
                <span className="opacity-80">{a.institution}</span>
              </div>
              <h3 className="mt-5 font-semibold" style={{ color: titleColor }}>{a.title}</h3>
              <p className="mt-4 leading-relaxed" style={{ color: "rgb(6 36 67 / 0.82)" }}>{a.description}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rule-gold mx-auto" />
          <h2 className="mt-8 text-primary-foreground">{c.ctaTitle}</h2>
          <p className="mt-6 lead text-primary-foreground/80">{c.ctaSub}</p>
          <div className="mt-10 flex justify-center">
            <InstitutionalButton variant="gold" to={withLocale(locale, "/contato")}>{c.cta}</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
