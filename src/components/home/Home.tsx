import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { InstitutionalButton } from "@/components/institutional/Button";
import andre6 from "@/assets/andre-6.jpg";
import andre5 from "@/assets/andre-5.jpg";
import nicholas3 from "@/assets/nicholas-3.jpg";
import ibi3 from "@/assets/ibi-3.jpg";
import tenBest from "@/assets/10-best-law-firms.png";
import lawAwards from "@/assets/law-awards-2024.jpg";
import gptwBadge from "@/assets/gptw-badge.webp";
import andreSpeaking from "@/assets/andre-speaking-01.jpg";
import eventoImigracao from "@/assets/evento-imigracao-01.jpg";

/* ------------------------------------------------------------------ */
/* 1 — Hero                                                            */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">
                Linhares Law · Escritório de Advocacia de Imigração Americana
              </span>
            </div>
            <h1 className="mt-8 text-balance text-primary-foreground max-w-[18ch]">
              Advogados de imigração americana para profissionais, executivos, investidores e famílias.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-[1.8] text-primary-foreground/75">
              Representação jurídica estratégica perante as autoridades federais de imigração dos Estados Unidos. Conduzimos cada caso com profundidade técnica, discrição e visão de longo prazo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <InstitutionalButton
                to="/contato"
                variant="onDark"
                className="bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground"
              >
                Agendar Consulta
              </InstitutionalButton>
              <InstitutionalButton to="/servicos" variant="onDark">
                Conhecer nossas estratégias
              </InstitutionalButton>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <span className="absolute -top-3 left-0 h-px w-16 bg-gold" />
              <div className="editorial-frame aspect-[4/5] w-full">
                <img
                  src={andre6}
                  alt="Dr. André Linhares — Founding Attorney, Linhares Law"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-primary-foreground/15 pt-5">
                <div>
                  <div className="text-base font-light text-primary-foreground tracking-tight">Dr. André Linhares</div>
                  <div className="mt-1 text-[10.5px] uppercase tracking-[0.28em] text-primary-foreground/55">
                    Advogado Fundador
                  </div>
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.28em] text-gold">USA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-10 gap-x-8 border-t border-primary-foreground/15 pt-12 lg:grid-cols-4">
          {[
            { k: "14+", l: "Anos de prática jurídica" },
            { k: "04", l: "Escritórios nos Estados Unidos" },
            { k: "USA", l: "Firma de advocacia licenciada" },
            { k: "Global", l: "Clientes em três continentes" },
          ].map((it) => (
            <div key={it.l}>
              <div className="text-4xl font-light text-primary-foreground tracking-tight">{it.k}</div>
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
/* 2 — Authority Statement                                             */
/* ------------------------------------------------------------------ */

function AuthoritySection() {
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <div className="editorial-frame aspect-[4/5] w-full">
              <img
                src={andre5}
                alt="Dr. André Linhares"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Nossa Prática</span>
            </div>
            <h2 className="mt-7 text-balance text-primary max-w-[20ch]">
              Representando profissionais, investidores e famílias em estratégias migratórias para os Estados Unidos.
            </h2>
            <p className="mt-8 text-lg leading-[1.8] text-ink-soft max-w-xl">
              A Linhares Law atua exclusivamente em direito de imigração americana. Cada estratégia é construída a partir de uma leitura técnica precisa do perfil profissional, patrimonial e familiar do cliente — sustentada pela autoridade institucional de uma firma reconhecida nos Estados Unidos.
            </p>
            <p className="mt-6 text-lg leading-[1.8] text-ink-soft max-w-xl">
              Nossa atuação é pautada por discrição, profundidade técnica e relacionamento de longo prazo com cada cliente representado.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-px bg-border border border-border">
              {[
                { k: "Federal", v: "Atuação perante USCIS, DOS e DOL" },
                { k: "Nacional", v: "Quatro escritórios nos Estados Unidos" },
                { k: "Internacional", v: "Clientes em três continentes" },
              ].map((i) => (
                <div key={i.k} className="bg-background p-6">
                  <div className="text-[10.5px] uppercase tracking-[0.28em] text-gold">{i.k}</div>
                  <div className="mt-3 text-sm leading-[1.6] text-ink-soft">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — Awards & Recognition (editorial grid)                           */
/* ------------------------------------------------------------------ */

function AwardsSection() {
  return (
    <section className="section-y-lg bg-primary text-primary-foreground">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">Autoridade & Reconhecimento</span>
            </div>
            <h2 className="mt-7 text-balance text-primary-foreground max-w-[22ch]">
              Reconhecimento institucional por entidades de referência.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-[1.8] text-primary-foreground/75">
              Premiações nacionais e internacionais que refletem consistência técnica, ética profissional e padrão de atendimento.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-primary-foreground/10 border border-primary-foreground/10 lg:grid-cols-12">
          {/* Main editorial visual */}
          <div className="lg:col-span-7 bg-primary">
            <div className="editorial-frame aspect-[4/5] lg:aspect-[5/6] w-full">
              <img src={ibi3} alt="International Business Institute — Award Ceremony" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Right column: stacked recognition cards */}
          <div className="lg:col-span-5 grid grid-rows-3 gap-px bg-primary-foreground/10">
            <div className="bg-primary p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.3em] text-gold">International Business Institute</div>
                <div className="mt-4 text-xl lg:text-2xl font-light text-primary-foreground tracking-tight max-w-[22ch]">
                  Distinção internacional em práticas de excelência jurídica.
                </div>
              </div>
              <div className="mt-6 text-[10.5px] uppercase tracking-[0.28em] text-primary-foreground/55">
                IBI Awards · 2024
              </div>
            </div>

            <div className="bg-primary p-8 lg:p-10 flex items-center gap-6">
              <div className="editorial-frame w-24 h-32 shrink-0">
                <img src={tenBest} alt="10 Best Law Firms — American Institute of Legal Counsel" className="h-full w-full object-cover object-center" />
              </div>
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.3em] text-gold">10 Best Law Firms · 2026</div>
                <div className="mt-3 text-lg font-light text-primary-foreground tracking-tight max-w-[24ch]">
                  Immigration Law — Linhares Law, Florida.
                </div>
                <div className="mt-3 text-[10.5px] uppercase tracking-[0.28em] text-primary-foreground/55">
                  American Institute of Legal Counsel
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 lg:p-10 flex items-center gap-6">
              <div className="editorial-frame w-28 h-20 shrink-0">
                <img src={lawAwards} alt="The Law Awards 2024" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.3em] text-gold">The Law Awards · 2024</div>
                <div className="mt-3 text-lg font-light text-primary-foreground tracking-tight">
                  Winner — Immigration Practice
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/55">
            Distinções institucionais · 2024 — 2026
          </p>
          <Link
            to="/premiacoes"
            className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground hover:text-gold transition-colors"
          >
            Ver todas as premiações →
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — Practice Areas / Strategies                                     */
/* ------------------------------------------------------------------ */

const strategies = [
  { slug: "eb2-niw", code: "EB-2 NIW", title: "National Interest Waiver", profile: "Profissionais qualificados", desc: "Para profissionais cuja atuação represente interesse nacional dos Estados Unidos — sem necessidade de oferta de emprego.", featured: true },
  { slug: "eb1", code: "EB-1", title: "Extraordinary Ability", profile: "Pesquisadores · Executivos", desc: "Residência permanente para indivíduos com habilidades extraordinárias, pesquisadores de destaque e executivos multinacionais." },
  { slug: "e2", code: "E-2", title: "Treaty Investor", profile: "Investidores · Empresários", desc: "Para investidores que estabelecem ou adquirem negócios substanciais nos Estados Unidos." },
  { slug: "l1", code: "L-1", title: "Intracompany Transferee", profile: "Executivos · Gestores", desc: "Transferência de executivos, gestores e profissionais com conhecimento especializado entre empresas multinacionais." },
  { slug: "o1", code: "O-1", title: "Extraordinary Ability", profile: "Talentos de destaque", desc: "Para indivíduos com reconhecimento sustentado nacional ou internacional em suas áreas de atuação." },
  { slug: "eb5", code: "EB-5", title: "Immigrant Investor", profile: "Investidores qualificados", desc: "Residência permanente por meio de investimento substancial em empreendimento gerador de empregos nos Estados Unidos." },
];

function ServicesSection() {
  const featured = strategies[0];
  const rest = strategies.slice(1);
  return (
    <section className="section-y-lg bg-surface">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Áreas de Atuação"
            title="Pathways estratégicos para diferentes perfis internacionais."
            description="Cada categoria de visto exige uma leitura jurídica precisa. Definimos a estratégia adequada ao perfil profissional, patrimonial e familiar de cada cliente."
          />
          <InstitutionalButton to="/servicos" variant="outline">
            Ver todas as estratégias
          </InstitutionalButton>
        </div>

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-3 border border-border">
          <Link
            to="/servicos/$slug"
            params={{ slug: featured.slug }}
            className="group editorial-card relative bg-primary text-primary-foreground p-10 lg:p-14 lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[460px] overflow-hidden"
          >
            <span className="absolute top-0 left-0 h-px w-24 bg-gold" />
            <div>
              <div className="flex items-center gap-4">
                <span className="rule-gold" />
                <span className="eyebrow eyebrow-on-dark">Estratégia em destaque</span>
              </div>
              <div className="mt-10 text-[13px] uppercase tracking-[0.32em] text-gold">{featured.code}</div>
              <h3 className="mt-5 text-3xl lg:text-5xl font-light text-primary-foreground tracking-tight max-w-[16ch] leading-[1.1]">
                {featured.title}
              </h3>
              <p className="mt-8 max-w-xl text-base lg:text-lg leading-[1.8] text-primary-foreground/75">
                {featured.desc}
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between gap-6 border-t border-primary-foreground/15 pt-6">
              <span className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/55">
                {featured.profile}
              </span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground group-hover:text-gold transition-colors">
                Conhecer estratégia →
              </span>
            </div>
          </Link>

          {rest.map((v) => (
            <Link
              key={v.slug}
              to="/servicos/$slug"
              params={{ slug: v.slug }}
              className="group editorial-card bg-background p-8 lg:p-10 flex flex-col justify-between min-h-[240px] hover:bg-surface-2"
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
/* 5 — Leadership (two-column premium)                                 */
/* ------------------------------------------------------------------ */

function LeadershipSection() {
  const leaders = [
    {
      slug: "andre-linhares",
      name: "Dr. André Linhares",
      role: "Founding Attorney",
      cred: "U.S. Immigration · Founder",
      img: andre5,
      bio: "Fundador da Linhares Law e autoridade reconhecida em direito de imigração americana. Há mais de 14 anos representando profissionais, executivos, investidores e famílias internacionais.",
    },
    {
      slug: "nicholas-perry",
      name: "Nicholas Perry, Esq.",
      role: "Senior Immigration Attorney",
      cred: "U.S. Immigration Counsel",
      img: nicholas3,
      bio: "Advogado de imigração com formação americana e atuação dedicada à elaboração e defesa de petições de visto perante as autoridades federais.",
    },
  ];
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Liderança Jurídica"
            title="Advogados que sustentam a autoridade da firma."
            description="Sob a liderança de Dr. André Linhares, a equipe da Linhares Law reúne advogados dedicados exclusivamente à representação jurídica em imigração americana."
          />
          <InstitutionalButton to="/equipe" variant="outline">
            Conhecer toda a equipe
          </InstitutionalButton>
        </div>

        <div className="mt-16 grid gap-px bg-border border border-border lg:grid-cols-2">
          {leaders.map((a) => (
            <Link
              key={a.slug}
              to="/equipe/$slug"
              params={{ slug: a.slug }}
              className="group editorial-card block bg-background"
            >
              <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 sm:col-span-7">
                  <div className="editorial-frame aspect-[4/5] w-full">
                    <img
                      src={a.img}
                      alt={a.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-surface">
                  <div>
                    <div className="text-[10.5px] uppercase tracking-[0.3em] text-gold">{a.cred}</div>
                    <div className="mt-5 text-2xl lg:text-3xl font-light text-primary tracking-tight leading-[1.15] group-hover:text-gold transition-colors">
                      {a.name}
                    </div>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      {a.role}
                    </div>
                    <p className="mt-6 text-sm leading-[1.7] text-ink-soft">{a.bio}</p>
                  </div>
                  <div className="mt-8 text-[10.5px] uppercase tracking-[0.28em] text-primary group-hover:text-gold transition-colors border-t border-border pt-5">
                    Ver perfil completo →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6 — Thought Leadership                                              */
/* ------------------------------------------------------------------ */

function ThoughtLeadershipSection() {
  return (
    <section className="section-y-lg bg-primary text-primary-foreground">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">Thought Leadership</span>
            </div>
            <h2 className="mt-7 text-balance text-primary-foreground max-w-[18ch]">
              Reconhecimento que nasce da experiência.
            </h2>
            <p className="mt-8 text-lg leading-[1.8] text-primary-foreground/75 max-w-xl">
              André Linhares é convidado a palestrar, conceder entrevistas e participar de painéis institucionais como consequência da profundidade técnica de sua prática em imigração americana — não o contrário.
            </p>
            <div className="mt-10 space-y-6 border-t border-primary-foreground/15 pt-8">
              {[
                { k: "Speaking", v: "Palestras para empresários, profissionais e investidores internacionais." },
                { k: "Media", v: "Entrevistas e contribuições editoriais em veículos qualificados." },
                { k: "Industry", v: "Participação em painéis e eventos especializados." },
              ].map((b) => (
                <div key={b.k} className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 text-[11px] uppercase tracking-[0.28em] text-gold pt-1">{b.k}</div>
                  <div className="col-span-8 text-base leading-[1.7] text-primary-foreground/80">{b.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 lg:gap-4">
              <div className="col-span-12">
                <div className="editorial-frame aspect-[16/10] w-full">
                  <img src={andreSpeaking} alt="André Linhares · The Next Chapter — Vistos Imigratórios" className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <span className="rule-gold" />
                  <span className="text-[10.5px] uppercase tracking-[0.28em] text-primary-foreground/60">
                    The Next Chapter · Vistos Imigratórios para Profissionais e Empresários
                  </span>
                </div>
              </div>
              <div className="col-span-12 mt-4">
                <div className="editorial-frame aspect-[16/10] w-full">
                  <img src={eventoImigracao} alt="Painel institucional · Dois Caminhos na Imigração Americana" className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <span className="rule-gold" />
                  <span className="text-[10.5px] uppercase tracking-[0.28em] text-primary-foreground/60">
                    Painel institucional · Dois Caminhos na Imigração Americana
                  </span>
                </div>
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
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="bg-surface p-10 lg:p-14 flex items-center justify-center border border-border">
              <img
                src={gptwBadge}
                alt="Great Place To Work Certified — Linhares Law USA"
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Excelência Organizacional</span>
            </div>
            <h2 className="mt-7 text-balance text-primary max-w-[22ch]">
              Great Place To Work® · Certificada nos Estados Unidos.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-[1.8] text-ink-soft">
              A consistência interna que sustenta o padrão de atendimento entregue a cada cliente — reconhecida por uma das mais respeitadas certificações organizacionais do mundo.
            </p>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-surface p-10">
                <dt className="text-5xl lg:text-6xl font-light text-primary tracking-tight">100%</dt>
                <dd className="mt-5 text-sm leading-[1.7] text-ink-soft max-w-[26ch]">
                  dos colaboradores se sentiram bem-vindos ao ingressar na firma.
                </dd>
              </div>
              <div className="bg-surface p-10">
                <dt className="text-5xl lg:text-6xl font-light text-primary tracking-tight">100%</dt>
                <dd className="mt-5 text-sm leading-[1.7] text-ink-soft max-w-[28ch]">
                  consideram a Linhares Law um excelente lugar para trabalhar.
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground">
              Great Place To Work · USA · Oct 2024 — Oct 2025
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8 — Offices (no interior images)                                    */
/* ------------------------------------------------------------------ */

function OfficesSection() {
  const offices = [
    { city: "Orlando", state: "Florida", role: "Headquarters", coord: "28.5° N · 81.3° W" },
    { city: "Miami", state: "Florida", role: "Regional Office", coord: "25.7° N · 80.1° W" },
    { city: "New York", state: "New York", role: "Regional Office", coord: "40.7° N · 74.0° W" },
    { city: "Salt Lake City", state: "Utah", role: "Regional Office", coord: "40.7° N · 111.8° W" },
  ];
  return (
    <section className="section-y-lg bg-surface">
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

        <div className="mt-16 grid gap-px bg-border border border-border lg:grid-cols-4">
          {offices.map((o, idx) => (
            <Link
              key={o.city}
              to="/escritorios"
              className="group editorial-card bg-background p-8 lg:p-10 min-h-[260px] flex flex-col justify-between hover:bg-surface-2"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-[10.5px] uppercase tracking-[0.3em] text-gold">{o.state}</div>
                  <div className="text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground">
                    0{idx + 1}
                  </div>
                </div>
                <div className="mt-6 text-3xl font-light text-primary tracking-tight group-hover:text-gold transition-colors">
                  {o.city}
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                  {o.role}
                </div>
              </div>
              <div className="mt-10 border-t border-border pt-5">
                <div className="text-[10.5px] uppercase tracking-[0.26em] text-ink-soft">
                  {o.coord}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9 — Publications (editorial, typography only)                       */
/* ------------------------------------------------------------------ */

function PublicationsSection() {
  const items = [
    {
      cat: "Estratégia Migratória",
      title: "EB-2 NIW: o que caracteriza interesse nacional em uma petição americana.",
      meta: "Análise técnica",
    },
    {
      cat: "Investidores",
      title: "E-2 e EB-5: critérios jurídicos para escolher a estratégia adequada ao perfil patrimonial.",
      meta: "Investidores internacionais",
    },
    {
      cat: "Executivos",
      title: "L-1 e O-1: caminhos para executivos e talentos de destaque nos Estados Unidos.",
      meta: "Carreira internacional",
    },
  ];
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Linhares Law · Publicações"
            title="Análises jurídicas em imigração americana."
            description="Artigos e análises técnicas sobre estratégia migratória, jurisprudência e práticas das autoridades federais de imigração dos Estados Unidos."
          />
          <InstitutionalButton to="/blog" variant="outline">
            Ver todas as publicações
          </InstitutionalButton>
        </div>

        <div className="mt-16 grid gap-px bg-border border border-border lg:grid-cols-3">
          {items.map((p, i) => (
            <Link
              key={i}
              to="/blog"
              className="group editorial-card bg-background p-10 flex flex-col justify-between min-h-[320px] hover:bg-surface"
            >
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.3em] text-gold">{p.cat}</div>
                <h3 className="mt-8 text-xl lg:text-2xl font-light text-primary tracking-tight leading-[1.3] group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                <span className="text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.meta}
                </span>
                <span className="text-[10.5px] uppercase tracking-[0.28em] text-primary group-hover:text-gold transition-colors">
                  Ler análise →
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
          <h2 className="mt-10 text-primary-foreground text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-tight max-w-[16ch] mx-auto">
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
      <AuthoritySection />
      <AwardsSection />
      <ServicesSection />
      <LeadershipSection />
      <ThoughtLeadershipSection />
      <CultureSection />
      <OfficesSection />
      <PublicationsSection />
      <FinalCTA />
    </>
  );
}
