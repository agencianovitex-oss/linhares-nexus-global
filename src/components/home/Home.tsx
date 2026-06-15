import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { InstitutionalButton } from "@/components/institutional/Button";
import andre6 from "@/assets/andre-6.jpg";
import andre5 from "@/assets/andre-5.jpg";
import nicholas3 from "@/assets/nicholas-3.jpg";
import juliana from "@/assets/team-juliana.avif";
import ibiCeremonyAsset from "@/assets/ibi-award-ceremony-2.jpg.asset.json";
const ibiCeremony = ibiCeremonyAsset.url;
import gptwBadgeAsset from "@/assets/company-badge.webp.asset.json";
const gptwBadge = gptwBadgeAsset.url;
import skylineAsset from "@/assets/skyline-us.jpg.asset.json";
const skylineUs = skylineAsset.url;
import andreSpeaking from "@/assets/andre-speaking-01.jpg";
import heroFlagDesktopAsset from "@/assets/hero-flag-desktop.jpg.asset.json";
import heroFlagMobileAsset from "@/assets/hero-flag-mobile.jpg.asset.json";
const heroFlagDesktop = heroFlagDesktopAsset.url;
const heroFlagMobile = heroFlagMobileAsset.url;

/* ------------------------------------------------------------------ */
/* 1 — Hero                                                            */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative surface-premium-dark pt-32 pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Real US flag photography — desktop (Chris) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url("${heroFlagDesktop}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Real US flag photography — mobile (Andrew, vertical) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url("${heroFlagMobile}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Navy institutional overlay — keeps the photo legible and on-brand */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.17 0.06 258 / 0.86) 0%, oklch(0.22 0.07 258 / 0.74) 50%, oklch(0.17 0.06 258 / 0.88) 100%)",
        }}
      />


      {/* Radial highlight, faint paper grain via existing texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 80% 20%, oklch(1 0 0 / 0.06), transparent 60%)",
        }}
      />
      <span className="fade-edge-bottom" aria-hidden />


      <Container>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="rule-gold" />
            <span className="eyebrow eyebrow-on-dark">
              Linhares Law · Escritório de Advocacia de Imigração Americana
            </span>
            <span className="rule-gold" />
          </div>
          <h1 className="mt-10 text-balance text-primary-foreground mx-auto max-w-[22ch]">
            Advogados de imigração americana para profissionais, executivos, investidores e famílias.
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg leading-[1.85] text-primary-foreground/75">
            Representação jurídica estratégica perante as autoridades federais de imigração dos Estados Unidos. Conduzimos cada caso com profundidade técnica, discrição e visão de longo prazo.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <InstitutionalButton
              to="/contato"
              variant="onDark"
              className="bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground"
            >
              Agendar Consulta
            </InstitutionalButton>
            <InstitutionalButton to="/areas-de-atuacao" variant="onDark">
              Conhecer nossas estratégias
            </InstitutionalButton>
          </div>
        </div>

        <div className="relative mt-24 grid grid-cols-2 gap-y-12 gap-x-8 border-t border-primary-foreground/15 pt-12 lg:grid-cols-4">
          {[
            { k: "14+", l: "Anos de prática jurídica" },
            { k: "04", l: "Escritórios nos Estados Unidos" },
            { k: "USA", l: "Escritório licenciado nos EUA" },
            { k: "INT.", l: "ATUAÇÃO INTERNACIONAL" },
          ].map((it) => (
            <div key={it.l}>
              <div className="font-display text-[clamp(3rem,5.5vw,5rem)] font-light text-primary-foreground tracking-[-0.03em] leading-[0.95]">
                {it.k}
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.26em] text-primary-foreground/65 max-w-[22ch] leading-relaxed">
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
    <section className="relative overflow-hidden bg-[oklch(0.13_0.04_258)] texture-grain pt-0 pb-20 lg:section-y">
      <span className="section-seam absolute top-0 left-0 right-0 z-20" aria-hidden />

      {/* DESKTOP portrait — waist-up, anchored bottom-left, blended into the canvas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute inset-y-0 left-0 lg:w-[46%] xl:w-[42%]">
          <img
            src={andre5}
            alt=""
            className="absolute inset-0 h-full w-full object-contain object-left-bottom opacity-95"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(90deg, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.13 0.04 258 / 0.45) 0%, oklch(0.13 0.04 258 / 0.35) 30%, oklch(0.13 0.04 258 / 0.85) 52%, oklch(0.13 0.04 258) 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 85% 20%, oklch(1 0 0 / 0.05), transparent 60%)",
          }}
        />
      </div>

      {/* MOBILE portrait — cinematic top hero, fades into the dark canvas */}
      <div className="relative lg:hidden">
        <div className="relative h-[62vh] min-h-[420px] max-h-[560px] w-full overflow-hidden">
          <img
            src={andre5}
            alt="Dr. André Linhares"
            className="absolute inset-0 h-full w-full object-cover object-[30%_top]"
          />
          {/* Side + bottom navy wash so the portrait dissolves into the section */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.13 0.04 258 / 0.25) 0%, oklch(0.13 0.04 258 / 0.15) 45%, oklch(0.13 0.04 258 / 0.85) 82%, oklch(0.13 0.04 258) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.13 0.04 258 / 0.35) 0%, transparent 35%, transparent 65%, oklch(0.13 0.04 258 / 0.35) 100%)",
            }}
          />
        </div>
      </div>

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-24 items-center lg:min-h-[560px]">
          {/* Spacer where the portrait reads through on desktop */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden />

          <div className="lg:col-span-7 lg:pt-12 relative -mt-10 lg:mt-0">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">Nossa Prática</span>
            </div>
            <h2 className="mt-7 text-balance text-primary-foreground max-w-[22ch]">
              Representando profissionais, investidores e famílias em estratégias de imigração para os Estados Unidos.
            </h2>
            <p className="mt-8 lg:mt-10 text-base lg:text-lg leading-[1.85] text-primary-foreground/80 max-w-[58ch]">
              A Linhares Law atua exclusivamente em direito de imigração americana. Cada estratégia é construída a partir de uma leitura técnica precisa do perfil profissional, patrimonial e familiar do cliente — sustentada pela autoridade institucional de um escritório de advocacia reconhecido nos Estados Unidos.
            </p>
            <p className="mt-6 text-base lg:text-lg leading-[1.85] text-primary-foreground/75 max-w-[58ch]">
              Nossa atuação é pautada por discrição, profundidade técnica e relacionamento de longo prazo com cada cliente representado.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="rule-gold" />
              <span className="text-[10.5px] uppercase tracking-[0.28em] text-primary-foreground/60">
                Dr. André Linhares · Founding Attorney
              </span>
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
  const recognitions = [
    {
      title: "10 Best Law Firms",
      org: "American Institute of Legal Professionals",
      year: "2026",
      desc: "Immigration Law — Linhares Law, Florida.",
    },
    {
      title: "The Law Awards",
      org: "Winner — Immigration Practice",
      year: "2024",
      desc: "Distinção internacional pela excelência na prática de imigração americana.",
    },

    {
      title: "Great Place To Work®",
      org: "Certified — Estados Unidos",
      year: "2025 — 2026",
      desc: "Reconhecimento institucional pela cultura organizacional do escritório.",
    },
  ];
  return (
    <section className="section-y surface-premium-dark texture-grain relative overflow-hidden">
      <span className="fade-edge-top" aria-hidden />
      <span className="fade-edge-bottom" aria-hidden />

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">Autoridade & Reconhecimento</span>
            </div>
            <h2 className="mt-7 text-balance text-primary-foreground max-w-[22ch]">
              Reconhecimento institucional por entidades de referência.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-[1.8] text-primary-foreground/75 max-w-[58ch]">
              Premiações nacionais e internacionais que refletem consistência técnica, postura ética e padrão de atendimento.
            </p>
          </div>
        </div>


        <div className="mt-16 grid gap-12 lg:gap-20 lg:grid-cols-12 items-start">
          {/* IBI flagship — single ceremony photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <span className="absolute -top-3 -left-3 h-px w-16 bg-gold z-10" />
              <div className="editorial-frame photo-vignette aspect-[4/5] w-full">
                <img src={ibiCeremony} alt="Dr. André Linhares · International Business Institute Awards" className="h-full w-full object-cover object-center" />
              </div>
              <div className="mt-6">
                <div className="text-[13px] uppercase tracking-[0.32em] text-gold">International Business Institute · 2026</div>
                <h3 className="mt-4 text-2xl lg:text-[1.75rem] font-light text-primary-foreground tracking-tight leading-[1.25] max-w-[26ch]">
                  Distinção internacional por excelência na prática jurídica de imigração americana.
                </h3>
              </div>
            </div>
          </div>

          {/* Other recognitions — typography only, no thumbnails */}
          <div className="lg:col-span-7 lg:pt-4">
            <div className="border-t border-primary-foreground/15">
              {recognitions.map((r) => (
                <div key={r.title} className="grid grid-cols-12 gap-6 py-8 lg:py-10 border-b border-primary-foreground/15 items-baseline">
                  <div className="col-span-12 sm:col-span-3 font-display text-2xl lg:text-3xl font-light text-gold tracking-tight leading-none">
                    {r.year}
                  </div>

                  <div className="col-span-12 sm:col-span-9">
                    <h3 className="text-2xl lg:text-[1.6rem] font-light text-primary-foreground tracking-tight leading-[1.25]">
                      {r.title}
                    </h3>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-primary-foreground/55">
                      {r.org}
                    </div>
                    <p className="mt-3 text-base leading-[1.7] text-primary-foreground/75 max-w-[48ch]">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/55">
            Distinções institucionais · 2026 — Presente
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
  { slug: "eb2-niw", code: "EB-2 NIW", title: "Dispensa por Interesse Nacional", profile: "Profissionais qualificados", desc: "Para profissionais cuja atuação represente interesse nacional dos Estados Unidos — sem necessidade de oferta de emprego.", featured: true },
  { slug: "eb1", code: "EB-1", title: "Habilidade Extraordinária", profile: "Pesquisadores · Executivos", desc: "Residência permanente para profissionais com habilidades extraordinárias, pesquisadores de destaque e executivos multinacionais." },
  { slug: "e2", code: "E-2", title: "Investidor por Tratado Comercial", profile: "Investidores · Empresários", desc: "Para investidores que estabelecem ou adquirem negócios substanciais nos Estados Unidos." },
  { slug: "l1", code: "L-1", title: "Transferência entre Empresas", profile: "Executivos · Gestores", desc: "Transferência de executivos, gestores e profissionais com conhecimento especializado entre empresas multinacionais." },
  { slug: "o1", code: "O-1", title: "Profissionais com Habilidade Extraordinária", profile: "Talentos de destaque", desc: "Para profissionais com reconhecimento sustentado, nacional ou internacional, em suas áreas de atuação." },
  { slug: "eb5", code: "EB-5", title: "Investidor Imigrante", profile: "Investidores qualificados", desc: "Residência permanente por meio de investimento substancial em empreendimento gerador de empregos nos Estados Unidos." },
];

function ServicesSection() {
  const featured = strategies[0];
  const rest = strategies.slice(1);
  return (
    <section className="section-y surface-premium-surface relative">
      <span className="section-seam absolute top-0 left-0 right-0" aria-hidden />

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Áreas de Atuação"
            title="Estratégias jurídicas para diferentes perfis internacionais."
            description="Cada categoria de visto exige uma leitura jurídica precisa. Definimos a estratégia adequada ao perfil profissional, patrimonial e familiar de cada cliente."
          />
          <InstitutionalButton to="/areas-de-atuacao" variant="outline">
            Ver todas as estratégias
          </InstitutionalButton>
        </div>

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-3 border border-border">
          <Link
            to="/areas-de-atuacao/$slug"
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
              to="/areas-de-atuacao/$slug"
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
      role: "Advogado Fundador",
      cred: "Imigração Americana · Fundador",
      img: andre5,
      bio: "Fundador da Linhares Law e autoridade reconhecida em direito de imigração americana. Há mais de 14 anos representando profissionais, executivos, investidores e famílias internacionais.",
    },
    {
      slug: "nicholas-perry",
      name: "Nicholas Perry, Esq.",
      role: "Advogado Sênior de Imigração",
      cred: "Advogado de Imigração",
      img: nicholas3,
      bio: "Advogado de imigração com formação americana e atuação dedicada à elaboração e defesa de petições de visto perante as autoridades federais.",
    },
    {
      slug: "juliana-mosquera-soler",
      name: "Juliana Mosquera Soler, Esq.",
      role: "Of Counsel",
      cred: "Florida Bar · Puerto Rico Bar",
      img: juliana,
      bio: "Of Counsel da Linhares Law, com atuação em direito migratório e experiência multijurisdicional entre Florida e Puerto Rico.",
    },
  ];
  const founder = leaders[0];
  const others = leaders.slice(1);
  return (
    <section className="section-y surface-premium-light relative">
      <span className="section-seam absolute top-0 left-0 right-0" aria-hidden />

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Liderança Jurídica"
            title="Advogados que sustentam a autoridade do escritório."
            description="Sob a liderança de Dr. André Linhares, a equipe da Linhares Law reúne advogados dedicados exclusivamente à representação jurídica em imigração americana."
          />
          <InstitutionalButton to="/equipe" variant="outline">
            Conhecer toda a equipe
          </InstitutionalButton>
        </div>

        <div className="mt-16 grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
          {/* Founder — dominant column */}
          <Link
            to="/equipe/$slug"
            params={{ slug: founder.slug }}
            className="group block reveal-up lg:col-span-7"
          >
            <div className="relative">
              <span className="absolute -top-3 -left-3 h-px w-20 bg-gold z-10" />
              <div className="editorial-frame photo-vignette aspect-[4/5] lg:aspect-[5/6] w-full">
                <img src={founder.img} alt={founder.name} className="h-full w-full object-cover object-top" />
              </div>
            </div>
            <div className="mt-7 max-w-[52ch]">
              <div className="text-[10.5px] uppercase tracking-[0.3em] text-gold">{founder.cred}</div>
              <div className="mt-4 text-3xl lg:text-[2.25rem] font-light text-primary tracking-tight leading-[1.1] group-hover:text-gold transition-colors">
                {founder.name}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{founder.role}</div>
              <p className="mt-5 text-base leading-[1.75] text-ink-soft">{founder.bio}</p>
              <div className="mt-6 text-[10.5px] uppercase tracking-[0.28em] text-primary group-hover:text-gold transition-colors border-t border-border pt-5">
                Ver perfil completo →
              </div>
            </div>
          </Link>

          {/* Other leaders — horizontal cards stacked */}
          <div className="lg:col-span-5 space-y-8">
            {others.map((a) => (
              <Link
                key={a.slug}
                to="/equipe/$slug"
                params={{ slug: a.slug }}
                className="group block reveal-up"
              >
                <div className="grid grid-cols-12 gap-5 items-start border-t border-border pt-7">
                  <div className="col-span-5 relative">
                    <span className="absolute -top-2 -left-2 h-px w-10 bg-gold z-10" />
                    <div className="editorial-frame aspect-[4/5] w-full">
                      <img src={a.img} alt={a.name} className="h-full w-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="col-span-7">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{a.cred}</div>
                    <div className="mt-2 text-lg lg:text-xl font-light text-primary tracking-tight leading-[1.2] group-hover:text-gold transition-colors">
                      {a.name}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{a.role}</div>
                    <p className="mt-3 text-[13px] leading-[1.65] text-ink-soft">{a.bio}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
    <section className="section-y surface-premium-dark texture-grain relative overflow-hidden">
      <span className="fade-edge-top" aria-hidden />
      <span className="fade-edge-bottom" aria-hidden />

      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Single dominant image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <span className="absolute -top-3 -left-3 h-px w-20 bg-gold z-10" />
              <div className="editorial-frame photo-vignette aspect-[4/5] w-full">
                <img src={andreSpeaking} alt="André Linhares · The Next Chapter — Vistos Imigratórios" className="h-full w-full object-cover" />
              </div>
              <div className="mt-5 flex items-center gap-4">
                <span className="rule-gold" />
                <span className="text-[10.5px] uppercase tracking-[0.28em] text-primary-foreground/60">
                  The Next Chapter · Vistos Imigratórios para Profissionais e Empresários
                </span>
              </div>
            </div>
          </div>

          {/* Institutional content column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">Conhecimento & Autoridade</span>
            </div>
            <h2 className="mt-7 text-balance text-primary-foreground max-w-[20ch]">
              Autoridade construída pela prática.
            </h2>
            <p className="mt-7 text-lg leading-[1.8] text-primary-foreground/75 max-w-xl">
              Dr. André Linhares é convidado a proferir palestras, conceder entrevistas e integrar painéis institucionais como consequência da profundidade técnica de sua atuação em imigração americana — e não o contrário.
            </p>
            <div className="mt-10 border-t border-primary-foreground/15">
              {[
                { k: "Palestras", v: "Conferências para empresários, profissionais e investidores internacionais." },
                { k: "Mídia", v: "Entrevistas e contribuições editoriais em veículos qualificados." },
                { k: "Conteúdo Jurídico", v: "Publicações técnicas e análises sobre estratégia migratória americana." },
                { k: "Setor", v: "Participação em painéis e eventos especializados em imigração americana." },
              ].map((b) => (
                <div key={b.k} className="grid grid-cols-12 gap-4 py-5 border-b border-primary-foreground/10 items-baseline">
                  <div className="col-span-4 text-[11px] uppercase tracking-[0.28em] text-gold">{b.k}</div>
                  <div className="col-span-8 text-[15px] leading-[1.65] text-primary-foreground/80">{b.v}</div>
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
/* 7 — Great Place To Work                                             */
/* ------------------------------------------------------------------ */

function CultureSection() {
  return (
    <section className="section-y surface-premium-light relative">
      <span className="section-seam absolute top-0 left-0 right-0" aria-hidden />

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* Badge — full, never cropped */}
          <div className="lg:col-span-4">
            <div className="h-full bg-surface border border-border p-10 lg:p-12 flex items-center justify-center">
              <img
                src={gptwBadge}
                alt="Great Place To Work Certified — Linhares Law USA"
                className="w-full max-w-[320px] h-auto object-contain"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Statement column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow">Excelência Organizacional</span>
            </div>
            <h2 className="mt-6 text-balance text-primary max-w-[18ch] text-[clamp(1.5rem,2vw,2rem)] leading-[1.15]">
              Great Place To Work® · Certificada nos Estados Unidos.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-ink-soft">
              A consistência interna que sustenta o padrão de atendimento entregue a cada cliente — reconhecida por uma das mais respeitadas certificações organizacionais do mundo.
            </p>
            <p className="mt-6 text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground">
              USA · Oct 2025 — Oct 2026
            </p>
          </div>

          {/* Two differentiated stat cards stacked */}
          <div className="lg:col-span-4 flex flex-col gap-px bg-border border border-border">
            <div className="bg-primary text-primary-foreground p-8 lg:p-10 flex-1 flex flex-col justify-center">
              <div className="font-display text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-none">100%</div>
              <div className="mt-4 text-[13px] leading-[1.6] text-primary-foreground/80 max-w-[26ch]">
                dos colaboradores se sentiram bem-vindos ao ingressar no escritório.
              </div>
            </div>
            <div className="bg-gold text-gold-foreground p-8 lg:p-10 flex-1 flex flex-col justify-center">
              <div className="font-display text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-none">100%</div>
              <div className="mt-4 text-[13px] leading-[1.6] text-gold-foreground/85 max-w-[28ch]">
                consideram a Linhares Law um excelente lugar para trabalhar.
              </div>
            </div>
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
    { city: "Orlando", state: "Florida", role: "Sede", address: "2295 S Hiawassee Rd, Suite 414, Orlando, FL 32835" },
    { city: "Miami", state: "Florida", role: "Escritório Regional", address: "1200 Brickell Ave, Miami, FL 33131" },
    { city: "New York", state: "New York", role: "Escritório Regional", address: "77 Madison Ave, New York, NY 10022" },
    { city: "Salt Lake City", state: "Utah", role: "Escritório Regional", address: "136 E S Temple, Salt Lake City, UT 84111" },
  ];
  return (
    <section className="relative surface-premium-dark overflow-hidden">
      {/* Skyline backdrop — more present, softer overlay */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={skylineUs}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover object-center opacity-[0.6]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.16 0.06 258 / 0.72) 0%, oklch(0.20 0.07 258 / 0.6) 50%, oklch(0.16 0.06 258 / 0.85) 100%)",
          }}
        />
      </div>

      <span className="section-seam-dark absolute top-0 left-0 right-0" aria-hidden />

      <div className="relative section-y">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="rule-gold" />
                <span className="eyebrow eyebrow-on-dark">Presença nos Estados Unidos</span>
              </div>
              <h2 className="mt-7 text-balance text-primary-foreground max-w-[22ch]">
                Quatro escritórios em pontos estratégicos do território americano.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-[1.85] text-primary-foreground/75">
                Uma estrutura nacional construída para representar clientes internacionais com proximidade institucional, alcance federal e atuação coordenada entre Florida, New York e Utah.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <InstitutionalButton to="/escritorios" variant="onDark">
                Ver todos os escritórios
              </InstitutionalButton>
            </div>
          </div>

          {/* Editorial roster — typographic, hairline rules, no boxes */}
          <div className="mt-16 border-t border-primary-foreground/15">
            {offices.map((o, idx) => (
              <Link
                key={o.city}
                to="/escritorios"
                className="group grid grid-cols-12 gap-6 items-baseline py-7 lg:py-8 border-b border-primary-foreground/15 transition-colors"
              >
                <div className="col-span-2 sm:col-span-1 text-[10.5px] uppercase tracking-[0.32em] text-gold">
                  0{idx + 1}
                </div>
                <div className="col-span-10 sm:col-span-4">
                  <div className="text-2xl lg:text-[1.75rem] font-light text-primary-foreground tracking-tight leading-[1.1] group-hover:text-gold transition-colors">
                    {o.city}
                  </div>
                  <div className="mt-1 text-[10.5px] uppercase tracking-[0.26em] text-primary-foreground/55">
                    {o.state}
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 text-[12px] uppercase tracking-[0.26em] text-primary-foreground/75">
                  {o.role}
                </div>
                <div className="col-span-12 sm:col-span-3 text-right text-[11px] uppercase tracking-[0.22em] text-primary-foreground/65 leading-snug">
                  {o.address}
                </div>

              </Link>
            ))}
          </div>
        </Container>
      </div>
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
    <section
      className="section-y relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.025 80) 0%, oklch(0.94 0.035 78) 60%, oklch(0.92 0.045 78) 100%)",
      }}
    >
      <span className="section-seam absolute top-0 left-0 right-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, oklch(0.72 0.08 78), transparent 55%)",
        }}
      />

      <Container>
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionTitle
            eyebrow="Linhares Law · Publicações"
            title="Análises jurídicas em imigração americana."
            description="Artigos e análises técnicas sobre estratégia migratória, jurisprudência e práticas das autoridades federais de imigração dos Estados Unidos."
          />
          <InstitutionalButton to="/blog" variant="outline">
            Ver todas as publicações
          </InstitutionalButton>
        </div>

        <div className="relative mt-14 grid gap-px bg-gold/30 border border-gold/30 lg:grid-cols-3">
          {items.map((p, i) => (
            <Link
              key={i}
              to="/blog"
              className="group editorial-card bg-background/80 backdrop-blur-sm p-10 flex flex-col justify-between min-h-[300px] hover:bg-background"
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
    <section className="section-y surface-premium-dark texture-grain relative overflow-hidden">
      <span className="fade-edge-top" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 50%, oklch(0.72 0.08 78 / 0.6), transparent 55%)",
        }}
      />

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <span className="eyebrow eyebrow-on-dark">Planejamento Imigratório</span>
            </div>
            <h2 className="mt-8 text-primary-foreground text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-tight max-w-[18ch]">
              Planejamento migratório para objetivos de longo prazo.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-primary-foreground/15 lg:pl-12">
            <p className="text-lg leading-[1.8] text-primary-foreground/75">
              Iniciar uma conversa institucional com a Linhares Law é o primeiro passo para construir uma estratégia jurídica sólida — orientada por advogados americanos e alinhada aos seus objetivos profissionais, patrimoniais e familiares.
            </p>
            <div className="mt-10">
              <InstitutionalButton
                to="/contato"
                variant="onDark"
                className="bg-primary-foreground text-primary border-primary-foreground hover:bg-transparent hover:text-primary-foreground"
              >
                Agendar Consulta
              </InstitutionalButton>
            </div>
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
