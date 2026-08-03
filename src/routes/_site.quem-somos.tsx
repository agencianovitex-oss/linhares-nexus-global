import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard, EditorialImage } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { useI18n, withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";
import andrePortraitAsset from "@/assets/andre-linhares-new.jpg.asset.json";
import gptwAsset from "@/assets/company-badge.webp.asset.json";

const andrePortrait = andrePortraitAsset.url;
const gptw = gptwAsset.url;

const L = "pt" as const;

export const Route = createFileRoute("/_site/quem-somos")({
  head: () =>
    buildLocaleHead({
      path: "/quem-somos",
      locale: L,
      title: "Quem Somos | Linhares Law",
      description:
        "Conheça a história e os valores da Linhares Law, escritório de advocacia dedicado exclusivamente à imigração americana, com mais de 14 anos de atuação e quatro escritórios nos Estados Unidos.",
    }),
  component: QuemSomosPage,
});

type PageContent = {
  eyebrow: string; title: string; intro: string;
  meta: [string, string, string];
  historyEyebrow: string; historyTitle: string; history: string[];
  missionEyebrow: string; missionTitle: string; missionLead: string;
  stats: Array<[string, string]>;
  valuesEyebrow: string; valuesTitle: string;
  values: Array<{ title: string; body: string }>;
  timelineEyebrow: string; timelineTitle: string;
  timeline: Array<{ year: string; title: string; body: string }>;
  recognitionEyebrow: string; recognitionTitle: string; recognitionLead: string;
  recognitionCta: string; gptwEyebrow: string; gptwTitle: string;
  ctaTitle: string; ctaSub: string; ctaContact: string; ctaTeam: string;
};

const content: Record<Locale, PageContent> = {
  pt: {
    eyebrow: "Linhares Law · Quem Somos",
    title: "Uma trajetória construída pela representação jurídica de quem busca morar e trabalhar nos EUA.",
    intro: "A Linhares Law é um escritório de advocacia dedicado exclusivamente à imigração americana. Há mais de 14 anos representamos profissionais, executivos, investidores e famílias internacionais em estratégias migratórias para os Estados Unidos.",
    meta: ["Mais de 14 anos", "4 Escritórios nos EUA", "Atuação Global"],
    historyEyebrow: "Nossa História",
    historyTitle: "Um escritório fundado sobre rigor jurídico e propósito.",
    history: [
      "A Linhares Law nasceu da convicção de que a imigração americana exige mais do que processo. Exige estratégia jurídica, leitura técnica de cenário e o acompanhamento contínuo de cada etapa.",
      "Ao longo de mais de uma década, consolidamos uma prática institucional reconhecida por advogados, investidores e famílias que escolheram os Estados Unidos como destino profissional e patrimonial.",
      "Hoje, mantemos quatro escritórios nos Estados Unidos e atendemos clientes em mais de vinte países, sustentados por uma equipe multidisciplinar de advogados, especialistas e gestores de casos.",
    ],
    missionEyebrow: "Missão",
    missionTitle: "Representar trajetórias de excelência diante das autoridades americanas.",
    missionLead: "Atuamos como conselheiros jurídicos permanentes. Construímos cada estratégia migratória com base nos objetivos profissionais, familiares e patrimoniais do cliente, não em fórmulas pré-estabelecidas.",
    stats: [["+14", "Anos de atuação"], ["4", "Escritórios nos EUA"], ["20+", "Países representados"]],
    valuesEyebrow: "Valores Institucionais",
    valuesTitle: "Princípios que orientam cada representação.",
    values: [
      { title: "Rigor Técnico", body: "Cada petição é construída com fundamentação jurídica precisa e curadoria documental exigente." },
      { title: "Discrição", body: "Atuação confidencial e personalizada, respeitando a complexidade de cada trajetória profissional e familiar." },
      { title: "Excelência Jurídica", body: "Compromisso institucional com o mais alto padrão de representação legal nos Estados Unidos." },
      { title: "Permanência", body: "Construímos relações de longo prazo, acompanhando o cliente até a obtenção da residência permanente." },
    ],
    timelineEyebrow: "Trajetória Institucional",
    timelineTitle: "Marcos relevantes da Linhares Law.",
    timeline: [
      { year: "2012", title: "Início da Prática Jurídica", body: "Dr. André Linhares inicia sua trajetória na advocacia americana de imigração." },
      { year: "2016", title: "Fundação da Linhares Law", body: "O escritório nasce com o propósito de representar profissionais qualificados e famílias nos Estados Unidos." },
      { year: "2023", title: "Expansão", body: "Abertura de novos escritórios e ampliação da estrutura institucional." },
      { year: "2024", title: "Reconhecimento Internacional", body: "Premiação no International Business Institute e nomeação para o The Law Awards." },
      { year: "2024", title: "Great Place to Work", body: "Certificação como Great Place to Work com alto índice de satisfação interna." },
      { year: "2025", title: "Palestrante AILA", body: "Atuação como palestrante em conferências da American Immigration Lawyers Association." },
      { year: "2026", title: "Premiações", body: "Reconhecimento institucional consolidado por entidades jurídicas e empresariais internacionais." },
      { year: "2026", title: "Contratação de Nicholas Perry e Juliana Mosquera", body: "Reforço estratégico do quadro de advogados com trajetória federal e atuação corporativa internacional." },
    ],
    recognitionEyebrow: "Reconhecimento Institucional",
    recognitionTitle: "Distinções que refletem nossa consistência.",
    recognitionLead: "Premiações concedidas por instituições jurídicas, empresariais e de cultura organizacional reconhecem o trabalho técnico, ético e humano da Linhares Law.",
    recognitionCta: "Ver Reconhecimentos",
    gptwEyebrow: "Great Place To Work · 2024",
    gptwTitle: "95% de aprovação histórica até 2022.",
    ctaTitle: "A Hora é Agora.",
    ctaSub: "Descubra qual estratégia migratória faz sentido para seus objetivos.",
    ctaContact: "Agendar Consulta",
    ctaTeam: "Conhecer a Equipe",
  },
  en: {
    eyebrow: "Linhares Law · About the Firm",
    title: "A trajectory built by representing those who seek to live and work in the U.S.",
    intro: "Linhares Law is a boutique law firm dedicated exclusively to U.S. immigration. For more than 14 years we have represented professionals, executives, investors and international families in immigration strategies for the United States.",
    meta: ["14+ years", "4 U.S. offices", "Global practice"],
    historyEyebrow: "Our History",
    historyTitle: "A firm founded on legal rigor and purpose.",
    history: [
      "Linhares Law was born from the conviction that U.S. immigration demands more than paperwork. It demands legal strategy, precise reading of the landscape and continuous guidance through every stage.",
      "Over more than a decade, we have built an institutional practice recognized by attorneys, investors and families who chose the United States as their professional and financial destination.",
      "Today we maintain four offices in the United States and serve clients from more than twenty countries, supported by a multidisciplinary team of attorneys, specialists and case managers.",
    ],
    missionEyebrow: "Mission",
    missionTitle: "Representing trajectories of excellence before U.S. authorities.",
    missionLead: "We act as ongoing legal counsel. Each immigration strategy is built around the client's professional, family and financial objectives — not around ready-made formulas.",
    stats: [["14+", "Years of practice"], ["4", "U.S. offices"], ["20+", "Countries represented"]],
    valuesEyebrow: "Institutional Values",
    valuesTitle: "Principles that guide every representation.",
    values: [
      { title: "Technical Rigor", body: "Every petition is built on precise legal reasoning and exacting documentary curation." },
      { title: "Discretion", body: "Confidential and personalized practice, respecting the complexity of each professional and family trajectory." },
      { title: "Legal Excellence", body: "Institutional commitment to the highest standard of legal representation in the United States." },
      { title: "Continuity", body: "We build long-term relationships, standing with the client through to permanent residence." },
    ],
    timelineEyebrow: "Institutional Trajectory",
    timelineTitle: "Milestones of Linhares Law.",
    timeline: [
      { year: "2012", title: "Legal Practice Begins", body: "André Linhares begins his career in U.S. immigration law." },
      { year: "2016", title: "Founding of Linhares Law", body: "The firm is founded to represent qualified professionals and families in the United States." },
      { year: "2023", title: "Expansion", body: "New offices open and the institutional structure grows." },
      { year: "2024", title: "International Recognition", body: "Recognition by the International Business Institute and nomination for The Law Awards." },
      { year: "2024", title: "Great Place to Work", body: "Great Place to Work certification with a high internal-satisfaction index." },
      { year: "2025", title: "AILA Speaker", body: "Speaking engagements at American Immigration Lawyers Association conferences." },
      { year: "2026", title: "Recognition", body: "Consolidated institutional recognition by international legal and business entities." },
      { year: "2026", title: "Nicholas Perry and Juliana Mosquera join", body: "Strategic reinforcement of the attorney team with federal experience and international corporate practice." },
    ],
    recognitionEyebrow: "Institutional Recognition",
    recognitionTitle: "Distinctions that reflect our consistency.",
    recognitionLead: "Awards granted by legal, business and organizational-culture institutions recognize the technical, ethical and human work of Linhares Law.",
    recognitionCta: "View Recognition",
    gptwEyebrow: "Great Place To Work · 2024",
    gptwTitle: "95% historical approval through 2022.",
    ctaTitle: "The Time Is Now.",
    ctaSub: "Discover which immigration strategy fits your objectives.",
    ctaContact: "Schedule a Consultation",
    ctaTeam: "Meet the Team",
  },
  es: {
    eyebrow: "Linhares Law · Nosotros",
    title: "Una trayectoria construida representando a quienes buscan vivir y trabajar en EE. UU.",
    intro: "Linhares Law es un despacho boutique dedicado exclusivamente a la inmigración a EE. UU. Durante más de 14 años hemos representado a profesionales, ejecutivos, inversionistas y familias internacionales en estrategias migratorias hacia Estados Unidos.",
    meta: ["+14 años", "4 oficinas en EE. UU.", "Práctica global"],
    historyEyebrow: "Nuestra Historia",
    historyTitle: "Un despacho fundado sobre rigor jurídico y propósito.",
    history: [
      "Linhares Law nació de la convicción de que la inmigración a EE. UU. exige más que trámites. Exige estrategia jurídica, lectura técnica del escenario y acompañamiento continuo en cada etapa.",
      "A lo largo de más de una década consolidamos una práctica institucional reconocida por abogados, inversionistas y familias que eligieron Estados Unidos como destino profesional y patrimonial.",
      "Hoy mantenemos cuatro oficinas en Estados Unidos y atendemos clientes en más de veinte países, con un equipo multidisciplinario de abogados, especialistas y case managers.",
    ],
    missionEyebrow: "Misión",
    missionTitle: "Representar trayectorias de excelencia ante las autoridades estadounidenses.",
    missionLead: "Actuamos como consejeros jurídicos permanentes. Construimos cada estrategia migratoria con base en los objetivos profesionales, familiares y patrimoniales del cliente, no en fórmulas preestablecidas.",
    stats: [["+14", "Años de práctica"], ["4", "Oficinas en EE. UU."], ["20+", "Países representados"]],
    valuesEyebrow: "Valores Institucionales",
    valuesTitle: "Principios que orientan cada representación.",
    values: [
      { title: "Rigor Técnico", body: "Cada petición se construye con fundamentación jurídica precisa y curaduría documental exigente." },
      { title: "Discreción", body: "Práctica confidencial y personalizada, respetando la complejidad de cada trayectoria profesional y familiar." },
      { title: "Excelencia Jurídica", body: "Compromiso institucional con el más alto estándar de representación legal en Estados Unidos." },
      { title: "Permanencia", body: "Construimos relaciones de largo plazo, acompañando al cliente hasta la residencia permanente." },
    ],
    timelineEyebrow: "Trayectoria Institucional",
    timelineTitle: "Hitos de Linhares Law.",
    timeline: [
      { year: "2012", title: "Inicio de la Práctica Jurídica", body: "André Linhares inicia su trayectoria en la abogacía estadounidense de inmigración." },
      { year: "2016", title: "Fundación de Linhares Law", body: "El despacho nace con el propósito de representar a profesionales calificados y familias en Estados Unidos." },
      { year: "2023", title: "Expansión", body: "Apertura de nuevas oficinas y ampliación de la estructura institucional." },
      { year: "2024", title: "Reconocimiento Internacional", body: "Reconocimiento del International Business Institute y nominación a The Law Awards." },
      { year: "2024", title: "Great Place to Work", body: "Certificación Great Place to Work con alto índice de satisfacción interna." },
      { year: "2025", title: "Conferencista AILA", body: "Participación como conferencista en congresos de la American Immigration Lawyers Association." },
      { year: "2026", title: "Reconocimientos", body: "Reconocimiento institucional consolidado por entidades jurídicas y empresariales internacionales." },
      { year: "2026", title: "Incorporación de Nicholas Perry y Juliana Mosquera", body: "Refuerzo estratégico del equipo jurídico con trayectoria federal y práctica corporativa internacional." },
    ],
    recognitionEyebrow: "Reconocimiento Institucional",
    recognitionTitle: "Distinciones que reflejan nuestra consistencia.",
    recognitionLead: "Los premios otorgados por instituciones jurídicas, empresariales y de cultura organizacional reconocen el trabajo técnico, ético y humano de Linhares Law.",
    recognitionCta: "Ver Reconocimientos",
    gptwEyebrow: "Great Place To Work · 2024",
    gptwTitle: "95% de aprobación histórica hasta 2022.",
    ctaTitle: "La Hora es Ahora.",
    ctaSub: "Descubra qué estrategia migratoria se ajusta a sus objetivos.",
    ctaContact: "Agendar Consulta",
    ctaTeam: "Conocer al Equipo",
  },
};

export function QuemSomosPage() {
  const { locale } = useI18n();
  const c = content[locale];
  return (
    <>
      <InstitutionalHero
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
        meta={<><span>{c.meta[0]}</span><span>{c.meta[1]}</span><span>{c.meta[2]}</span></>}
      />

      <SectionBlock>
        <SectionTitle eyebrow={c.historyEyebrow} title={c.historyTitle} />
        <div className="mt-12 grid gap-12 lg:grid-cols-1 items-center">
          <div className="space-y-5 lead max-w-3xl">
            {c.history.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <EditorialImage src={andrePortrait} ratio="portrait" alt="André Linhares" className="editorial-frame" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionTitle eyebrow={c.missionEyebrow} title={c.missionTitle} onDark />
            <p className="mt-8 lead text-primary-foreground/80">{c.missionLead}</p>
            <div className="mt-12 grid gap-px bg-primary-foreground/15 sm:grid-cols-3 border border-primary-foreground/15">
              {c.stats.map(([n, l]) => (
                <div key={l} className="bg-primary p-8">
                  <div className="font-display text-5xl text-gold">{n}</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-primary-foreground/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle eyebrow={c.valuesEyebrow} title={c.valuesTitle} />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
          {c.values.map((v) => (
            <div key={v.title} className="bg-background p-10 editorial-card">
              <span className="rule-gold" />
              <h3 className="mt-6 text-primary">{v.title}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <section className="relative isolate py-20 md:py-24" style={{ backgroundColor: "rgb(179, 134, 66)" }}>
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
            <div style={{ color: "rgb(255, 255, 255)" }}>
              <span className="eyebrow" style={{ color: "rgb(255, 255, 255)", opacity: 0.85 }}>{c.timelineEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ color: "rgb(255, 255, 255)" }}>
                {c.timelineTitle}
              </h2>
              <span className="mt-5 block h-px w-16" style={{ backgroundColor: "rgb(255, 255, 255)" }} />
            </div>
            <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {c.timeline.map((m, i) => (
                <div key={`${m.year}-${i}`} className="grid grid-cols-[5rem_1fr] gap-5 items-start border-t pt-5" style={{ borderColor: "rgba(255, 255, 255, 0.35)" }}>
                  <div className="font-display text-3xl md:text-4xl leading-none" style={{ color: "rgb(255, 255, 255)" }}>{m.year}</div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl leading-tight" style={{ color: "rgb(255, 255, 255)" }}>{m.title}</h3>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.9)" }}>{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionBlock>
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow={c.recognitionEyebrow} title={c.recognitionTitle} />
            <p className="mt-6 lead">{c.recognitionLead}</p>
            <InstitutionalButton to={withLocale(locale, "/premiacoes")} variant="outline" className="mt-10">
              {c.recognitionCta}
            </InstitutionalButton>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <InstitutionalCard variant="light" className="p-0 overflow-hidden">
              <div className="w-full aspect-[16/10] bg-surface flex items-center justify-center p-8">
                <img loading="lazy" decoding="async" src={gptw} alt="Great Place To Work 2024" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-10">
                <span className="eyebrow">{c.gptwEyebrow}</span>
                <h3 className="mt-4 text-primary">{c.gptwTitle}</h3>
              </div>
            </InstitutionalCard>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">{c.ctaTitle}</h2>
          <p className="mt-6 lead text-primary-foreground/80">{c.ctaSub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <InstitutionalButton to={withLocale(locale, "/contato")}>{c.ctaContact}</InstitutionalButton>
            <InstitutionalButton to={withLocale(locale, "/equipe")} variant="onDark">{c.ctaTeam}</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
