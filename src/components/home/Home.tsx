import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { EditorialImage } from "@/components/institutional/EditorialImage";
import { InstitutionalButton } from "@/components/institutional/Button";
import andrePortrait from "@/assets/andre-portrait.jpg";
import nicholasPortrait from "@/assets/nicholas-portrait.jpg";
import andreSpeaking from "@/assets/andre-speaking-01.jpg";
import ibiAward from "@/assets/ibi-award-01.jpg";
import gptwBadge from "@/assets/gptw-badge.webp";
import gptw2026 from "@/assets/gptw-2026.jpg";
import lawAwards from "@/assets/law-awards-2024.jpg";

/* ------------------------------------------------------------------ */
/* 1 — Hero                                                            */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">
                Linhares Law · U.S. Immigration Law Firm
              </span>
            </div>
            <h1 className="mt-10 text-balance text-primary-foreground max-w-[20ch]">
              Direito de Imigração Americano para profissionais, executivos, investidores e famílias.
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8] text-primary-foreground/75">
              Representação jurídica estratégica perante as autoridades federais de imigração dos Estados Unidos. Conduzimos cada caso com rigor técnico, discrição e visão de longo prazo.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <InstitutionalButton
                to="/contato"
                variant="onDark"
                className="bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground"
              >
                Agendar Consulta
              </InstitutionalButton>
              <InstitutionalButton to="/servicos" variant="onDark">
                Explorar Estratégias Migratórias
              </InstitutionalButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-surface-2">
                <img
                  src={andrePortrait}
                  alt="Dr. André Linhares — Founding Attorney, Linhares Law"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-5 flex items-center gap-4">
                <span className="rule-gold" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/60">
                  Dr. André Linhares · Founding Attorney
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-y-10 gap-x-8 border-t border-primary-foreground/15 pt-12 lg:grid-cols-4">
          {[
            { k: "14+", l: "Anos de prática jurídica" },
            { k: "04", l: "Escritórios nos Estados Unidos" },
            { k: "USA", l: "Firma de advocacia licenciada" },
            { k: "Global", l: "Clientes em três continentes" },
          ].map((it) => (
            <div key={it.l}>
              <div className="text-3xl font-light text-primary-foreground tracking-tight">{it.k}</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-primary-foreground/60 max-w-[22ch] leading-relaxed">
                {it.l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2 — Authority & Recognition                                         */
/* ------------------------------------------------------------------ */

function AwardsSection() {
  return (
    <section className="section-y-lg bg-primary text-primary-foreground">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow eyebrow-on-dark">Autoridade & Reconhecimento</span>
          </div>
          <h2 className="mt-7 text-balance text-primary-foreground">
            Uma firma de imigração americana reconhecida por instituições de referência.
          </h2>
          <p className="mt-7 text-lg leading-[1.8] text-primary-foreground/75 max-w-2xl">
            Premiações e certificações que refletem a consistência da nossa prática jurídica, a ética profissional e o padrão de atendimento que entregamos a cada cliente.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-primary-foreground/10 lg:grid-cols-12 border border-primary-foreground/10">
          <div className="lg:col-span-7 bg-primary p-2">
            <div className="aspect-[5/4] w-full overflow-hidden">
              <img src={ibiAward} alt="International Business Institute — Premiação" className="h-full w-full object-cover" />
            </div>
            <div className="px-6 pt-8 pb-4">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">International Business Institute · 2024</div>
              <div className="mt-3 text-2xl font-light text-primary-foreground tracking-tight max-w-md">
                Reconhecimento institucional em premiação internacional.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-rows-2 gap-px bg-primary-foreground/10">
            <div className="bg-primary p-10 flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">10 Best Law Firms</div>
                <div className="mt-4 text-xl font-light text-primary-foreground tracking-tight max-w-[20ch]">
                  Entre os principais escritórios de imigração dos Estados Unidos.
                </div>
              </div>
              <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-primary-foreground/55">
                American Institute of Legal Counsel
              </div>
            </div>

            <div className="bg-primary p-10 flex items-center gap-8">
              <img src={lawAwards} alt="The Law Awards 2024" className="h-24 w-auto object-contain" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">The Law Awards · 2024</div>
                <div className="mt-3 text-lg font-light text-primary-foreground tracking-tight">
                  Winner — Immigration Practice
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary p-10 flex items-center gap-6">
            <img src={gptwBadge} alt="Great Place To Work Certified" className="h-28 w-auto object-contain" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Great Place To Work</div>
              <div className="mt-3 text-lg font-light text-primary-foreground tracking-tight">
                Certified · USA · 2025–2026
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary p-10 flex flex-col justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">IBI · Award-Winning Firm</div>
              <div className="mt-4 text-xl font-light text-primary-foreground tracking-tight">
                Distinção internacional em práticas de excelência jurídica.
              </div>
            </div>
            <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-primary-foreground/55">
              International Business Institute · 2024
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary p-10 flex flex-col justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Reconhecimentos</div>
              <div className="mt-4 text-xl font-light text-primary-foreground tracking-tight">
                Múltiplas distinções institucionais em imigração americana.
              </div>
            </div>
            <Link
              to="/premiacoes"
              className="mt-8 text-[11px] uppercase tracking-[0.28em] text-primary-foreground/75 hover:text-gold transition-colors"
            >
              Ver todas as premiações →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — Immigration Strategies                                          */
/* ------------------------------------------------------------------ */

const strategies = [
  {
    slug: "eb2-niw",
    code: "EB-2 NIW",
    title: "National Interest Waiver",
    profile: "Profissionais qualificados",
    desc: "Para profissionais cuja atuação represente interesse nacional dos Estados Unidos — sem necessidade de oferta de emprego.",
    featured: true,
  },
  {
    slug: "eb1",
    code: "EB-1",
    title: "Extraordinary Ability",
    profile: "Pesquisadores · Executivos",
    desc: "Residência permanente para indivíduos com habilidades extraordinárias, pesquisadores de destaque e executivos multinacionais.",
  },
  {
    slug: "e2",
    code: "E-2",
    title: "Treaty Investor",
    profile: "Investidores · Empresários",
    desc: "Para investidores que estabelecem ou adquirem negócios substanciais nos Estados Unidos.",
  },
  {
    slug: "l1",
    code: "L-1",
    title: "Intracompany Transferee",
    profile: "Executivos · Gestores",
    desc: "Transferência de executivos, gestores e profissionais com conhecimento especializado entre empresas multinacionais.",
  },
  {
    slug: "o1",
    code: "O-1",
    title: "Extraordinary Ability",
    profile: "Talentos de destaque",
    desc: "Para indivíduos com reconhecimento sustentado nacional ou internacional em suas áreas de atuação.",
  },
  {
    slug: "eb5",
    code: "EB-5",
    title: "Immigrant Investor",
    profile: "Investidores qualificados",
    desc: "Residência permanente por meio de investimento substancial em empreendimento gerador de empregos nos Estados Unidos.",
  },
];

function ServicesSection() {
  const featured = strategies[0];
  const rest = strategies.slice(1);
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Estratégias Migratórias"
            title="Pathways estratégicos para diferentes perfis internacionais."
            description="Cada categoria de visto exige uma leitura jurídica precisa. Definimos a estratégia adequada ao perfil profissional, patrimonial e familiar de cada cliente."
          />
          <InstitutionalButton to="/servicos" variant="outline">
            Ver todas as estratégias
          </InstitutionalButton>
        </div>

        <div className="mt-20 grid gap-px bg-border lg:grid-cols-3 border border-border">
          <Link
            to="/servicos/$slug"
            params={{ slug: featured.slug }}
            className="group bg-primary text-primary-foreground p-12 lg:p-16 lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[420px] transition-colors"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="rule-gold" />
                <span className="eyebrow eyebrow-on-dark">Estratégia em destaque</span>
              </div>
              <div className="mt-10 text-[13px] uppercase tracking-[0.3em] text-gold">{featured.code}</div>
              <h3 className="mt-5 text-3xl lg:text-4xl font-light text-primary-foreground tracking-tight max-w-[18ch]">
                {featured.title}
              </h3>
              <p className="mt-7 max-w-xl text-base leading-[1.8] text-primary-foreground/75">
                {featured.desc}
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between gap-6">
              <span className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/55">
                {featured.profile}
              </span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/70 group-hover:text-gold transition-colors">
                Conhecer estratégia →
              </span>
            </div>
          </Link>

          {rest.map((v) => (
            <Link
              key={v.slug}
              to="/servicos/$slug"
              params={{ slug: v.slug }}
              className="group bg-background p-10 flex flex-col justify-between min-h-[220px] transition-colors hover:bg-surface"
            >
              <div>
                <div className="text-[12px] uppercase tracking-[0.3em] text-gold">{v.code}</div>
                <div className="mt-4 text-xl font-medium text-primary tracking-tight">{v.title}</div>
                <p className="mt-3 text-sm leading-[1.7] text-ink-soft">{v.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                <span className="text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground">
                  {v.profile}
                </span>
                <span className="text-[10.5px] uppercase tracking-[0.28em] text-primary group-hover:text-gold transition-colors">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — Dr. André Linhares — Founder                                    */
/* ------------------------------------------------------------------ */

function FounderSection() {
  return (
    <section className="section-y-lg bg-surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden bg-surface-2">
              <img
                src={andrePortrait}
                alt="Dr. André Linhares — Founder, Linhares Law"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="rule-gold" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Founder · U.S. Immigration Attorney
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Liderança Fundadora</span>
            </div>
            <h2 className="mt-7 text-balance text-primary max-w-[20ch]">
              Dr. André Linhares.
            </h2>
            <p className="mt-7 text-lg leading-[1.8] text-ink-soft max-w-2xl">
              Fundador da Linhares Law e autoridade reconhecida em direito de imigração americana. Há mais de 14 anos representando profissionais, executivos, investidores e famílias internacionais em suas trajetórias para os Estados Unidos.
            </p>
            <p className="mt-6 text-lg leading-[1.8] text-ink-soft max-w-2xl">
              Sua atuação combina profundidade técnica, leitura estratégica de cada perfil e a discrição que casos de alta relevância exigem — características que consolidaram a firma como referência institucional no setor.
            </p>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
              {[
                { k: "Founder", v: "Linhares Law — U.S. Immigration" },
                { k: "Authority", v: "Reconhecido como referência no setor" },
                { k: "Counsel", v: "Trusted advisor de clientes internacionais" },
              ].map((i) => (
                <div key={i.k} className="bg-background p-8">
                  <dt className="text-[11px] uppercase tracking-[0.3em] text-gold">{i.k}</dt>
                  <dd className="mt-4 text-sm leading-[1.7] text-ink-soft">{i.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <InstitutionalButton to="/equipe/$slug" params={{ slug: "andre-linhares" }} variant="outline">
                Conhecer trajetória completa
              </InstitutionalButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5 — National Presence                                               */
/* ------------------------------------------------------------------ */

function OfficesSection() {
  const offices = [
    { city: "Orlando", state: "Florida", role: "Headquarters" },
    { city: "Miami", state: "Florida", role: "Regional Office" },
    { city: "New York", state: "New York", role: "Regional Office" },
    { city: "Salt Lake City", state: "Utah", role: "Regional Office" },
  ];
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Presença Nacional"
            title="Quatro escritórios nos Estados Unidos."
            description="Uma estrutura nacional construída para representar clientes internacionais com proximidade institucional em pontos estratégicos do território americano."
          />
          <InstitutionalButton to="/escritorios" variant="outline">
            Ver todos os escritórios
          </InstitutionalButton>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <EditorialImage ratio="landscape" caption="Orlando · Linhares Law Headquarters" />
          </div>
          <div className="lg:col-span-5">
            <EditorialImage ratio="portrait" caption="Orlando · Interior Institucional" />
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-border border border-border lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city} className="bg-background p-10 min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{o.state}</div>
                <div className="mt-4 text-2xl font-light text-primary tracking-tight">{o.city}</div>
              </div>
              <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                {o.role}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6 — Thought Leadership & Industry Presence                          */
/* ------------------------------------------------------------------ */

function ThoughtLeadershipSection() {
  return (
    <section className="section-y-lg bg-surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Thought Leadership"
              title="Expertise que se traduz em presença institucional."
              description="A profundidade técnica de Dr. André em direito de imigração americana naturalmente se desdobra em participações editoriais, palestras e contribuições institucionais ao setor."
            />
            <div className="mt-12 space-y-8 border-t border-border pt-10">
              {[
                { k: "Speaking", v: "Palestras a empresários, profissionais e investidores internacionais." },
                { k: "Industry Events", v: "Participação em eventos institucionais e painéis especializados." },
                { k: "Media", v: "Entrevistas e contribuições editoriais em veículos qualificados." },
                { k: "Recognition", v: "Distinções institucionais que validam a relevância da prática." },
              ].map((b) => (
                <div key={b.k} className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 text-[11px] uppercase tracking-[0.28em] text-gold pt-1">{b.k}</div>
                  <div className="col-span-8 text-base leading-[1.75] text-ink-soft">{b.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-6 gap-4 lg:gap-5">
              <div className="col-span-6">
                <EditorialImage
                  src={andreSpeaking}
                  ratio="landscape"
                  alt="André Linhares em participação institucional"
                  caption="The Next Chapter · Vistos Imigratórios para Profissionais e Empresários"
                />
              </div>
              <div className="col-span-3">
                <EditorialImage ratio="portrait" caption="Painel institucional · 2024" />
              </div>
              <div className="col-span-3">
                <EditorialImage ratio="portrait" caption="Conferência de imigração · 2024" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7 — Great Place To Work                                             */
/* ------------------------------------------------------------------ */

function CultureSection() {
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden bg-surface-2">
              <img src={gptw2026} alt="Great Place To Work Certified — Linhares Law" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Excelência Organizacional</span>
            </div>
            <h2 className="mt-7 text-balance text-primary max-w-[20ch]">
              Great Place To Work® USA · 2025–2026
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-[1.8] text-ink-soft">
              A Linhares Law foi certificada como Great Place To Work nos Estados Unidos — uma evidência objetiva da consistência interna que sustenta o padrão de atendimento entregue a cada cliente.
            </p>
            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-surface p-10">
                <dt className="text-5xl font-light text-primary tracking-tight">100%</dt>
                <dd className="mt-5 text-sm leading-[1.7] text-ink-soft max-w-[24ch]">
                  dos colaboradores se sentiram bem-vindos ao ingressar na firma.
                </dd>
              </div>
              <div className="bg-surface p-10">
                <dt className="text-5xl font-light text-primary tracking-tight">100%</dt>
                <dd className="mt-5 text-sm leading-[1.7] text-ink-soft max-w-[28ch]">
                  consideram a Linhares Law um excelente lugar para trabalhar.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8 — Team                                                            */
/* ------------------------------------------------------------------ */

function TeamSection() {
  const attorneys = [
    {
      slug: "nicholas-perry",
      name: "Nicholas Perry, Esq.",
      role: "Senior Immigration Attorney",
      bio: "Advogado de imigração com formação americana e atuação dedicada à elaboração e defesa de petições de visto perante as autoridades federais.",
      img: nicholasPortrait,
    },
  ];
  return (
    <section className="section-y-lg bg-surface">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Equipe Jurídica"
            title="Uma equipe que sustenta a autoridade da firma."
            description="Sob a liderança de Dr. André Linhares, a equipe da Linhares Law reúne advogados e profissionais dedicados à representação jurídica de alto padrão em imigração americana."
          />
          <InstitutionalButton to="/equipe" variant="outline">
            Conhecer toda a equipe
          </InstitutionalButton>
        </div>
        <div className="mt-20 grid gap-16 lg:grid-cols-3 lg:gap-12">
          {attorneys.map((a) => (
            <Link
              key={a.slug}
              to="/equipe/$slug"
              params={{ slug: a.slug }}
              className="group block"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-surface-2">
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-8 border-t border-border pt-8">
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{a.role}</div>
                <div className="mt-4 text-2xl font-light text-primary tracking-tight group-hover:text-gold transition-colors">
                  {a.name}
                </div>
                <p className="mt-5 text-base leading-[1.8] text-ink-soft max-w-xl">{a.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10 — Final CTA                                                      */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="section-y-lg bg-primary text-primary-foreground">
      <Container width="narrow">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow eyebrow-on-dark">Strategic Immigration Counsel</span>
            <span className="rule-gold" />
          </div>
          <h2 className="mt-10 text-primary-foreground text-[clamp(2.75rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-tight max-w-[16ch] mx-auto">
            Planejamento migratório para objetivos de longo prazo.
          </h2>
          <p className="mt-10 text-lg leading-[1.8] text-primary-foreground/75 max-w-2xl mx-auto">
            Iniciar uma conversa institucional com a Linhares Law é o primeiro passo para construir uma estratégia jurídica sólida — orientada por advogados americanos e fundamentada nos seus objetivos profissionais, patrimoniais e familiares.
          </p>
          <div className="mt-12 flex justify-center">
            <InstitutionalButton
              to="/contato"
              variant="onDark"
              className="bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground"
            >
              Agendar Consulta
            </InstitutionalButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Home() {
  return (
    <>
      <HeroSection />
      <AwardsSection />
      <ServicesSection />
      <FounderSection />
      <OfficesSection />
      <ThoughtLeadershipSection />
      <CultureSection />
      <TeamSection />
      {/* Publications section intentionally hidden until real articles exist */}
      <FinalCTA />
    </>
  );
}
