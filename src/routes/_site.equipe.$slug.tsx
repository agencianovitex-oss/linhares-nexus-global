import { createFileRoute, notFound } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard, EditorialImage } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import andre from "@/assets/andre-6.jpg";
import andreAlt from "@/assets/andre-5.jpg";
import andreSpeaking from "@/assets/andre-speaking-01.jpg";
import nicholas from "@/assets/nicholas-3.jpg";

const L = "pt" as const;

interface AttorneyProfile {
  name: string;
  title: string;
  shortBio: string;
  hero: string;
  portrait: string;
  gallery?: { src: string; caption: string }[];
  bars: string[];
  education: { school: string; detail?: string }[];
  experience: string[];
  practice: string[];
  recognition?: string[];
  longBio: string[];
  mission?: string;
}

const profiles: Record<string, AttorneyProfile> = {
  "andre-linhares": {
    name: "André Linhares, Esq.",
    title: "Advogado Fundador e CEO",
    shortBio:
      "Advogado licenciado nos Estados Unidos com mais de 14 anos de prática exclusiva em imigração americana, referência reconhecida entre profissionais e investidores brasileiros.",
    hero: andre,
    portrait: andreAlt,
    gallery: [
      { src: andreSpeaking, caption: "Painel · Evento internacional de imigração" },
      { src: andreAlt, caption: "Retrato institucional · Linhares Law" },
    ],
    bars: ["District of Columbia Bar", "New York State Bar"],
    education: [{ school: "Faculdade de Direito nos Estados Unidos" }],
    experience: [
      "Mais de 14 anos de prática exclusiva em imigração americana",
      "Fundador e CEO da Linhares Law",
      "Presidência da LIDE Orlando",
      "Palestrante recorrente em eventos internacionais de imigração",
    ],
    practice: ["EB-2 NIW", "EB-1A", "E-2", "L-1", "O-1", "EB-5"],
    recognition: [
      "International Business Institute · IBI Award",
      "The Law Awards",
      "10 Best Law Firms",
      "Top Empreendedor",
    ],
    longBio: [
      "Dr. André Linhares é o advogado fundador da Linhares Law. Em mais de uma década de prática exclusiva em imigração americana, construiu uma reputação reconhecida por advogados, executivos, investidores e famílias internacionais que buscam representação técnica nos Estados Unidos.",
      "Sua atuação se concentra em estratégias migratórias de alto valor agregado — vistos de habilidade extraordinária, dispensa por interesse nacional, investimento e transferência intracompanhia — sempre conduzidas com leitura individualizada de cada trajetória profissional e patrimonial.",
      "Como presidente da LIDE Orlando, articula o relacionamento entre lideranças empresariais brasileiras e o ecossistema institucional norte-americano. Sua presença em painéis, entrevistas e eventos do setor consolida a Linhares Law como referência no mercado.",
    ],
    mission:
      "Representar com rigor jurídico e discrição as trajetórias de quem escolheu os Estados Unidos como destino profissional, familiar e patrimonial.",
  },
  "nicholas-perry": {
    name: "Nicholas Perry, Esq.",
    title: "Advogado de Imigração",
    shortBio:
      "Advogado com trajetória nas principais instituições do governo federal americano dedicadas à imigração e à aplicação da lei.",
    hero: nicholas,
    portrait: nicholas,
    bars: ["Nebraska Bar", "North Carolina Bar", "U.S. Supreme Court"],
    education: [
      { school: "North Carolina Central School of Law", detail: "Valedictorian" },
      { school: "University of Notre Dame" },
    ],
    experience: [
      "U.S. Citizenship and Immigration Services · USCIS",
      "Department of Homeland Security · DHS",
      "Immigration and Customs Enforcement · ICE",
      "U.S. Customs and Border Protection · CBP",
      "U.S. Department of Justice",
    ],
    practice: ["EB-1", "EB-2 NIW", "Ajuste de Status", "Imigração Familiar"],
    longBio: [
      "Nicholas Perry traz para a Linhares Law uma trajetória rara: passagem pelas principais agências federais americanas responsáveis pela imigração — USCIS, DHS, ICE, CBP e o Department of Justice.",
      "Essa vivência institucional confere à sua atuação um entendimento técnico aprofundado dos critérios adotados pelos analistas e oficiais federais que avaliam petições migratórias.",
      "Formado como Valedictorian pela North Carolina Central School of Law, é graduado pela University of Notre Dame e licenciado em Nebraska, North Carolina e perante a Suprema Corte dos Estados Unidos.",
    ],
  },
};

export const Route = createFileRoute("/_site/equipe/$slug")({
  loader: ({ params }) => {
    const p = profiles[params.slug];
    if (!p) throw notFound();
    return p;
  },
  head: ({ params, loaderData }) => {
    const p = loaderData ?? profiles[params.slug];
    const name = p?.name ?? params.slug;
    return buildLocaleHead({
      path: `/equipe/${params.slug}`,
      locale: L,
      title: `${name} — Linhares Law`,
      description: p?.shortBio ?? "Perfil institucional Linhares Law.",
      type: "profile",
    });
  },
  component: AttorneyPage,
  notFoundComponent: () => (
    <SectionBlock>
      <h1 className="text-primary">Perfil não encontrado.</h1>
    </SectionBlock>
  ),
});

function AttorneyPage() {
  const p = Route.useLoaderData();
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Equipe"
        title={p.name}
        intro={p.shortBio}
        meta={
          <>
            <span>{p.title}</span>
            {p.bars.slice(0, 2).map((b) => (
              <span key={b}>{b}</span>
            ))}
          </>
        }
      />

      {/* Retrato + Bio */}
      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EditorialImage src={p.hero} ratio="portrait" alt={p.name} className="editorial-frame" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionTitle eyebrow="Biografia" title={p.title} />
            <div className="mt-8 space-y-6 lead">
              {p.longBio.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
            {p.mission && (
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl text-primary leading-snug">
                “{p.mission}”
              </blockquote>
            )}
          </div>
        </div>
      </SectionBlock>

      {/* Licenças & Formação */}
      <SectionBlock tone="surface">
        <div className="grid gap-px bg-border border border-border md:grid-cols-2">
          <div className="bg-background p-10">
            <span className="eyebrow">Licenças Profissionais</span>
            <ul className="mt-6 space-y-3">
              {p.bars.map((b) => (
                <li key={b} className="flex gap-3 text-ink">
                  <span className="text-gold">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-10">
            <span className="eyebrow">Formação Acadêmica</span>
            <ul className="mt-6 space-y-3">
              {p.education.map((e) => (
                <li key={e.school} className="flex gap-3 text-ink">
                  <span className="text-gold">—</span>
                  <span>
                    {e.school}
                    {e.detail && (
                      <span className="block text-sm text-muted-foreground mt-1">{e.detail}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      {/* Experiência */}
      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow="Experiência" title="Trajetória Profissional" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-5">
              {p.experience.map((x) => (
                <li key={x} className="flex gap-4 text-lg text-ink border-b border-border pb-5">
                  <span className="text-gold font-display text-2xl leading-none">·</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      {/* Atuação */}
      <SectionBlock tone="dark">
        <SectionTitle eyebrow="Áreas de Atuação" title="Estratégias Migratórias" onDark />
        <div className="mt-12 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3 border border-primary-foreground/15">
          {p.practice.map((s) => (
            <div key={s} className="bg-primary p-8">
              <div className="font-display text-3xl text-gold">{s}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Reconhecimentos */}
      {p.recognition && (
        <SectionBlock>
          <SectionTitle eyebrow="Reconhecimento Institucional" title="Premiações" />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 border border-border">
            {p.recognition.map((r) => (
              <InstitutionalCard key={r} variant="light" className="border-0 p-10 bg-background editorial-card">
                <span className="rule-gold" />
                <h3 className="mt-5 text-primary">{r}</h3>
              </InstitutionalCard>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* Galeria */}
      {p.gallery && p.gallery.length > 0 && (
        <SectionBlock tone="surface">
          <SectionTitle eyebrow="Galeria" title="Presença Institucional" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {p.gallery.map((g) => (
              <EditorialImage key={g.src} src={g.src} caption={g.caption} ratio="landscape" className="editorial-frame" />
            ))}
          </div>
        </SectionBlock>
      )}

      {/* CTA */}
      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">A Hora é Agora.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Inicie uma conversa institucional com a equipe Linhares Law.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <InstitutionalButton to="/contato">Agendar Consulta</InstitutionalButton>
            <InstitutionalButton to="/equipe" variant="onDark">Conhecer a Equipe</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
