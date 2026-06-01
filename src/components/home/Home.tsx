import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { EditorialImage } from "@/components/institutional/EditorialImage";
import { InstitutionalButton } from "@/components/institutional/Button";
import { cn } from "@/lib/utils";
import andrePortrait from "@/assets/andre-portrait.jpg";
import nicholasPortrait from "@/assets/nicholas-portrait.jpg";
import andreSpeaking from "@/assets/andre-speaking-01.jpg";
import ibiAward from "@/assets/ibi-award-01.jpg";
import gptwBadge from "@/assets/gptw-badge.webp";
import gptw2026 from "@/assets/gptw-2026.jpg";
import lawAwards from "@/assets/law-awards-2024.jpg";

/* ------------------------------------------------------------------ */
/* Section 1 — Hero                                                   */
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
                Linhares Law · U.S. Immigration Attorneys
              </span>
            </div>
            <h1 className="mt-10 text-balance text-primary-foreground max-w-[18ch]">
              Ajudando profissionais, empresários e famílias a construírem seu futuro nos Estados Unidos.
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-[1.8] text-primary-foreground/75">
              Há mais de 14 anos oferecendo estratégias migratórias sólidas, orientação jurídica especializada e atendimento personalizado para clientes ao redor do mundo.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <InstitutionalButton to="/contato" variant="onDark" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground">
                Agendar Consulta
              </InstitutionalButton>
              <InstitutionalButton to="/quem-somos" variant="onDark">
                Conheça a Linhares Law
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

        {/* Trust indicators */}
        <div className="mt-24 grid grid-cols-2 gap-y-10 gap-x-8 border-t border-primary-foreground/15 pt-12 lg:grid-cols-4">
          {[
            { k: "14", l: "Anos de experiência" },
            { k: "04", l: "Escritórios nos EUA" },
            { k: "—", l: "Equipe internacional" },
            { k: "US", l: "Escritório licenciado nos Estados Unidos" },
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
/* Section 2 — Authority Bar                                          */
/* ------------------------------------------------------------------ */

function AuthorityBar() {
  const items = [
    { k: "14+", l: "Anos de atuação" },
    { k: "04", l: "Escritórios nos Estados Unidos" },
    { k: "—", l: "Equipe jurídica internacional" },
    { k: "—", l: "Atuação global" },
  ];
  return (
    <section className="bg-background border-y border-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-border lg:divide-y-0 lg:divide-x lg:divide-border">
          {items.map((i, idx) => (
            <div
              key={i.l}
              className={cn(
                "px-2 py-10 lg:py-14 lg:px-10",
                idx % 2 === 1 && "border-l border-border lg:border-l-0",
              )}
            >
              <div className="text-4xl font-light text-primary">{i.k}</div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground leading-relaxed max-w-[22ch]">
                {i.l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Why Linhares Law                                       */
/* ------------------------------------------------------------------ */

function WhySection() {
  const pillars = [
    {
      n: "01",
      t: "Escritório de advocacia americano",
      d: "Atuamos como firma de advocacia constituída nos Estados Unidos — não como consultoria migratória.",
    },
    {
      n: "02",
      t: "Advogados licenciados",
      d: "Nossa equipe é formada por advogados devidamente licenciados para representar clientes perante as autoridades de imigração americanas.",
    },
    {
      n: "03",
      t: "Atuação internacional",
      d: "Representamos clientes da América Latina, Europa e Ásia em estratégias migratórias para os Estados Unidos.",
    },
    {
      n: "04",
      t: "Compromisso com excelência",
      d: "Cada caso é conduzido com rigor jurídico, discrição e o padrão de atendimento que reservamos a cada cliente.",
    },
  ];
  return (
    <section className="section-y bg-surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Por que Linhares Law"
              title="Um escritório boutique de imigração americana."
              description="Combinamos a profundidade técnica de uma firma americana com a sensibilidade internacional necessária para representar trajetórias relevantes."
            />
          </div>
          <div className="lg:col-span-7">
            <dl className="divide-y divide-border border-y border-border">
              {pillars.map((p) => (
                <div key={p.n} className="grid grid-cols-12 gap-6 py-10">
                  <dt className="col-span-2 text-[11px] uppercase tracking-[0.28em] text-gold pt-1">
                    {p.n}
                  </dt>
                  <div className="col-span-10">
                    <div className="text-xl font-medium text-primary tracking-tight">{p.t}</div>
                    <dd className="mt-3 text-base leading-[1.8] text-ink-soft">{p.d}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — Immigration Solutions                                  */
/* ------------------------------------------------------------------ */

const visas = [
  { slug: "eb2-niw", code: "EB-2 NIW", title: "National Interest Waiver", desc: "Para profissionais cuja atuação represente interesse nacional dos Estados Unidos.", featured: true },
  { slug: "eb1", code: "EB-1", title: "Extraordinary Ability", desc: "Para indivíduos com habilidades extraordinárias, pesquisadores e executivos." },
  { slug: "e2", code: "E-2", title: "Treaty Investor", desc: "Investidores que estabelecem ou adquirem negócios substanciais nos EUA." },
  { slug: "l1", code: "L-1", title: "Intracompany Transferee", desc: "Transferência de executivos e gestores entre empresas multinacionais." },
  { slug: "h1b", code: "H-1B", title: "Specialty Occupation", desc: "Profissionais qualificados em ocupações especializadas." },
  { slug: "o1", code: "O-1", title: "Individuals of Extraordinary Ability", desc: "Reconhecimento sustentado nacional ou internacional em sua área." },
  { slug: "eb5", code: "EB-5", title: "Immigrant Investor", desc: "Residência permanente por meio de investimento substancial." },
];

function ServicesSection() {
  const featured = visas[0];
  const rest = visas.slice(1);
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Áreas de Atuação"
            title="Estratégias migratórias para trajetórias internacionais."
            description="Cada visto exige uma leitura jurídica precisa. Conduzimos cada caso com a profundidade técnica e a discrição que ele requer."
          />
          <InstitutionalButton to="/servicos" variant="outline">
            Ver todos os serviços
          </InstitutionalButton>
        </div>

        <div className="mt-20 grid gap-px bg-border lg:grid-cols-3 border border-border">
          {/* Featured EB-2 NIW spans 2 columns */}
          <Link
            to="/servicos/$slug"
            params={{ slug: featured.slug }}
            className="group bg-primary text-primary-foreground p-12 lg:p-16 lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[420px] transition-colors"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="rule-gold" />
                <span className="eyebrow eyebrow-on-dark">Destaque</span>
              </div>
              <div className="mt-10 text-[13px] uppercase tracking-[0.3em] text-gold">{featured.code}</div>
              <h3 className="mt-5 text-3xl lg:text-4xl font-light text-primary-foreground tracking-tight max-w-[18ch]">
                {featured.title}
              </h3>
              <p className="mt-7 max-w-xl text-base leading-[1.8] text-primary-foreground/75">
                {featured.desc}
              </p>
            </div>
            <div className="mt-12 text-[11px] uppercase tracking-[0.28em] text-primary-foreground/70 group-hover:text-gold transition-colors">
              Conhecer estratégia →
            </div>
          </Link>

          {rest.map((v) => (
            <Link
              key={v.slug}
              to="/servicos/$slug"
              params={{ slug: v.slug }}
              className="group bg-background p-10 flex flex-col justify-between min-h-[200px] transition-colors hover:bg-surface"
            >
              <div>
                <div className="text-[12px] uppercase tracking-[0.3em] text-gold">{v.code}</div>
                <div className="mt-4 text-xl font-medium text-primary tracking-tight">{v.title}</div>
                <p className="mt-3 text-sm leading-[1.7] text-ink-soft">{v.desc}</p>
              </div>
              <div className="mt-6 text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground group-hover:text-primary transition-colors">
                Ver mais →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 — Legal Leadership                                        */
/* ------------------------------------------------------------------ */

function LeadershipSection() {
  const attorneys = [
    {
      slug: "andre-linhares",
      name: "Dr. André Linhares",
      role: "Founding Attorney",
      bio: "Fundador da Linhares Law. Há mais de 14 anos representando profissionais, executivos, investidores e famílias internacionais em processos migratórios para os Estados Unidos.",
      img: andrePortrait,
    },
    {
      slug: "nicholas-perry",
      name: "Nicholas Perry, Esq.",
      role: "Senior Immigration Attorney",
      bio: "Advogado de imigração com sólida formação americana e atuação dedicada à elaboração e defesa de petições de visto perante as autoridades federais.",
      img: nicholasPortrait,
    },
  ];
  return (
    <section className="section-y-lg bg-surface">
      <Container>
        <SectionTitle
          eyebrow="Liderança Jurídica"
          title="Conduzido por advogados dedicados à excelência."
          description="A Linhares Law é liderada por profissionais com formação americana e perspectiva internacional, comprometidos com a representação jurídica de alto padrão."
        />
        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-20">
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
                <div className="mt-7 text-[11px] uppercase tracking-[0.28em] text-muted-foreground group-hover:text-primary transition-colors">
                  Ver perfil completo →
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
/* Section 6 — Thought Leadership                                      */
/* ------------------------------------------------------------------ */

function ThoughtLeadershipSection() {
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Liderança Editorial"
              title="Educação, conferências e voz institucional."
              description="Levamos análise jurídica qualificada a auditórios, painéis e veículos institucionais — contribuindo para um debate maduro sobre imigração americana."
            />
            <div className="mt-12 space-y-8 border-t border-border pt-10">
              {[
                { k: "Conferências", v: "Eventos institucionais e palestras a empresários e profissionais internacionais." },
                { k: "Educação", v: "Materiais didáticos e formação técnica sobre estratégias migratórias." },
                { k: "Mídia", v: "Participações em veículos especializados e entrevistas institucionais." },
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
                <EditorialImage src={andreSpeaking} ratio="landscape" alt="André Linhares palestrando em evento institucional" caption="The Next Chapter · Vistos Imigratórios para Profissionais e Empresários" />
              </div>
              <div className="col-span-3">
                <EditorialImage ratio="portrait" caption="Evento institucional · 2024" />
              </div>
              <div className="col-span-3">
                <EditorialImage ratio="portrait" caption="Painel de imigração · 2024" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 7 — Awards & Recognition                                    */
/* ------------------------------------------------------------------ */

function AwardsSection() {
  return (
    <section className="section-y-lg bg-primary text-primary-foreground">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow eyebrow-on-dark">Premiações & Reconhecimentos</span>
          </div>
          <h2 className="mt-7 text-balance text-primary-foreground">
            Reconhecidos por instituições de referência no setor jurídico e empresarial.
          </h2>
          <p className="mt-7 text-lg leading-[1.8] text-primary-foreground/75 max-w-2xl">
            Nossas distinções refletem a consistência de uma prática boutique fundamentada em rigor jurídico, ética e excelência no atendimento.
          </p>
        </div>

        <div className="mt-20 grid gap-px bg-primary-foreground/10 lg:grid-cols-12 border border-primary-foreground/10">
          {/* Large feature: IBI award */}
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

          {/* Stack right column */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-px bg-primary-foreground/10">
            <div className="bg-primary p-10 flex flex-col justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">10 Best Law Firms</div>
                <div className="mt-4 text-xl font-light text-primary-foreground tracking-tight max-w-[20ch]">
                  Reconhecimento entre os principais escritórios de imigração.
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

          {/* Bottom row: GPTW + IBI 02 + extra label */}
          <div className="lg:col-span-4 bg-primary p-10 flex items-center gap-6">
            <img src={gptwBadge} alt="Great Place To Work Certified" className="h-28 w-auto object-contain" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Great Place To Work</div>
              <div className="mt-3 text-lg font-light text-primary-foreground tracking-tight">
                Certified · USA · 2025–2026
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary p-2">
            <div className="aspect-[4/3] w-full overflow-hidden bg-primary-foreground/5" />
            <div className="px-6 pt-6 pb-2">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">IBI Awards Ceremony</div>
              <div className="mt-3 text-base text-primary-foreground/80">Reconhecimento internacional · 2024</div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-primary p-10 flex flex-col justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Reconhecimentos</div>
              <div className="mt-4 text-xl font-light text-primary-foreground tracking-tight">
                Múltiplas distinções institucionais em prática de imigração nos Estados Unidos.
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
/* Section 8 — Culture & Excellence                                    */
/* ------------------------------------------------------------------ */

function CultureSection() {
  return (
    <section className="section-y-lg bg-surface">
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
              <span className="eyebrow">Cultura & Excelência</span>
            </div>
            <h2 className="mt-7 text-balance text-primary max-w-[20ch]">
              Great Place To Work® USA · 2025–2026
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-[1.8] text-ink-soft">
              A Linhares Law foi certificada como Great Place To Work nos Estados Unidos. Uma distinção que reflete o ambiente que construímos para nossa equipe — e o padrão que entregamos a cada cliente.
            </p>
            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-background p-10">
                <dt className="text-5xl font-light text-primary tracking-tight">100%</dt>
                <dd className="mt-5 text-sm leading-[1.7] text-ink-soft max-w-[24ch]">
                  dos colaboradores se sentiram bem-vindos ao ingressar na firma.
                </dd>
              </div>
              <div className="bg-background p-10">
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
/* Section 9 — Offices                                                 */
/* ------------------------------------------------------------------ */

function OfficesSection() {
  const offices = [
    { city: "Orlando", state: "Florida", featured: true },
    { city: "Miami", state: "Florida" },
    { city: "New York", state: "New York" },
    { city: "Salt Lake City", state: "Utah" },
  ];
  return (
    <section className="section-y-lg bg-background">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Presença Institucional"
            title="Quatro escritórios nos Estados Unidos."
            description="Orlando · Miami · New York · Salt Lake City. Uma estrutura nacional para representar clientes internacionais."
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
                {o.featured ? "Headquarters" : "Escritório regional"}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 10 — Latest Insights                                        */
/* ------------------------------------------------------------------ */

function InsightsSection() {
  const posts = [
    { cat: "EB-2 NIW", title: "O National Interest Waiver como estratégia para profissionais qualificados.", date: "Em breve" },
    { cat: "Investidores", title: "E-2 e EB-5: estruturando o investimento internacional nos Estados Unidos.", date: "Em breve" },
    { cat: "Atualizações", title: "Mudanças regulatórias recentes em vistos de trabalho americanos.", date: "Em breve" },
  ];
  return (
    <section className="section-y-lg bg-surface">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Publicações"
            title="Análises e perspectivas institucionais."
            description="Conteúdo editorial preparado pela equipe da Linhares Law para profissionais, empresários e investidores internacionais."
          />
          <InstitutionalButton to="/blog" variant="outline">
            Ver todas as publicações
          </InstitutionalButton>
        </div>

        <div className="mt-20 grid gap-px bg-border border border-border lg:grid-cols-3">
          {posts.map((p, i) => (
            <article key={i} className="bg-background p-10 min-h-[340px] flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface-2 mb-8" />
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{p.cat}</div>
                <h3 className="mt-5 text-xl font-medium text-primary tracking-tight leading-[1.35]">
                  {p.title}
                </h3>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{p.date}</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-primary">Ler artigo →</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 11 — Institutional CTA                                      */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="section-y-lg bg-primary text-primary-foreground">
      <Container width="narrow">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow eyebrow-on-dark">Linhares Law</span>
            <span className="rule-gold" />
          </div>
          <h2 className="mt-10 text-primary-foreground text-[clamp(3rem,7vw,6rem)] font-light leading-[1] tracking-tight">
            A Hora é Agora.
          </h2>
          <p className="mt-10 text-lg leading-[1.8] text-primary-foreground/75 max-w-2xl mx-auto">
            Descubra qual estratégia migratória faz sentido para seus objetivos. Inicie uma conversa institucional com nossa equipe.
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
      <AuthorityBar />
      <WhySection />
      <ServicesSection />
      <LeadershipSection />
      <ThoughtLeadershipSection />
      <AwardsSection />
      <CultureSection />
      <OfficesSection />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}
