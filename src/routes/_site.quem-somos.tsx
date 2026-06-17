import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton, InstitutionalCard, EditorialImage } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import andrePortraitAsset from "@/assets/andre-linhares-new.jpg.asset.json";
import officeAsset from "@/assets/linhares-law-office.jpg.asset.json";
import gptwAsset from "@/assets/company-badge.webp.asset.json";
const andrePortrait = andrePortraitAsset.url;
const office = officeAsset.url;
const gptw = gptwAsset.url;

const L = "pt" as const;

export const Route = createFileRoute("/_site/quem-somos")({
  head: () =>
    buildLocaleHead({
      path: "/quem-somos",
      locale: L,
      title: "Quem Somos — Linhares Law",
      description:
        "Conheça a história e os valores da Linhares Law, escritório de advocacia dedicado exclusivamente à imigração americana, com mais de 14 anos de atuação e quatro escritórios nos Estados Unidos.",
    }),
  component: QuemSomos,
});

const valores = [
  { title: "Rigor Técnico", body: "Cada petição é construída com fundamentação jurídica precisa e curadoria documental exigente." },
  { title: "Discrição", body: "Atuação confidencial e personalizada, respeitando a complexidade de cada trajetória profissional e familiar." },
  { title: "Excelência Jurídica", body: "Compromisso institucional com o mais alto padrão de representação legal nos Estados Unidos." },
  { title: "Permanência", body: "Construímos relações de longo prazo, acompanhando o cliente até a obtenção da residência permanente." },
];

const linhaTempo = [
  { ano: "2011", titulo: "Início da prática jurídica", body: "Dr. André Linhares inicia sua trajetória na advocacia americana de imigração." },
  { ano: "2017", titulo: "Fundação da Linhares Law", body: "O escritório nasce com o propósito de representar profissionais e famílias brasileiras nos Estados Unidos." },
  { ano: "2020", titulo: "Expansão Nacional", body: "Abertura de escritórios em Miami, New York e Salt Lake City a partir da sede em Orlando." },
  { ano: "2024", titulo: "Reconhecimento Internacional", body: "Premiação no International Business Institute e nomeação para o The Law Awards." },
  { ano: "2026", titulo: "Great Place To Work", body: "Certificação como Great Place To Work com 100% de satisfação interna." },
];

function QuemSomos() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Quem Somos"
        title="Uma trajetória construída pela representação jurídica de quem busca os Estados Unidos."
        intro="A Linhares Law é um escritório de advocacia dedicado exclusivamente à imigração americana. Há mais de 14 anos representamos profissionais, executivos, investidores e famílias internacionais em estratégias migratórias para os Estados Unidos."
        meta={
          <>
            <span>Mais de 14 anos</span>
            <span>4 Escritórios nos EUA</span>
            <span>Atuação Global</span>
          </>
        }
      />

      {/* História */}
      <SectionBlock>
        <SectionTitle eyebrow="Nossa História" title="Um escritório fundado sobre rigor jurídico e propósito." />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <EditorialImage src={office} ratio="landscape" alt="Recepção institucional Linhares Law" className="editorial-frame" />
          </div>
          <div className="lg:col-span-6 space-y-5 lead">
            <p>
              A Linhares Law nasceu da convicção de que a imigração americana exige mais do que processo. Exige
              estratégia jurídica, leitura técnica de cenário e o acompanhamento contínuo de cada etapa.
            </p>
            <p>
              Ao longo de mais de uma década, consolidamos uma prática institucional reconhecida por advogados,
              investidores e famílias que escolheram os Estados Unidos como destino profissional e patrimonial.
            </p>
            <p>
              Hoje, mantemos quatro escritórios nos Estados Unidos e atendemos clientes em mais de vinte países,
              sustentados por uma equipe multidisciplinar de advogados, especialistas e gestores de casos.
            </p>
          </div>
        </div>
      </SectionBlock>

      {/* Missão & Compromisso */}
      <SectionBlock tone="dark">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <EditorialImage src={andrePortrait} ratio="portrait" alt="André Linhares" className="editorial-frame" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionTitle eyebrow="Missão" title="Representar trajetórias de excelência diante das autoridades americanas." onDark />
            <p className="mt-8 lead text-primary-foreground/80">
              Atuamos como conselheiros jurídicos permanentes. Construímos cada estratégia migratória com base nos
              objetivos profissionais, familiares e patrimoniais do cliente — não em fórmulas pré-estabelecidas.
            </p>
            <div className="mt-12 grid gap-px bg-primary-foreground/15 sm:grid-cols-3 border border-primary-foreground/15">
              {[
                ["+14", "Anos de atuação"],
                ["4", "Escritórios nos EUA"],
                ["20+", "Países representados"],
              ].map(([n, l]) => (
                <div key={l} className="bg-primary p-8">
                  <div className="font-display text-5xl text-gold">{n}</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-primary-foreground/60">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* Valores */}
      <SectionBlock>
        <SectionTitle eyebrow="Valores Institucionais" title="Princípios que orientam cada representação." />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
          {valores.map((v) => (
            <div key={v.title} className="bg-background p-10 editorial-card">
              <span className="rule-gold" />
              <h3 className="mt-6 text-primary">{v.title}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Linha do tempo */}
      <section className="relative isolate py-20 md:py-24" style={{ backgroundColor: "rgb(223, 164, 89)" }}>
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
            <div style={{ color: "rgb(6, 36, 67)" }}>
              <span className="eyebrow" style={{ color: "rgb(6, 36, 67)", opacity: 0.75 }}>Trajetória Institucional</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ color: "rgb(6, 36, 67)" }}>
                Marcos relevantes da Linhares Law.
              </h2>
              <span className="mt-5 block h-px w-16" style={{ backgroundColor: "rgb(6, 36, 67)" }} />
            </div>
            <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {linhaTempo.map((m) => (
                <div
                  key={m.ano}
                  className="grid grid-cols-[5rem_1fr] gap-5 items-start border-t pt-5"
                  style={{ borderColor: "rgba(6, 36, 67, 0.25)" }}
                >
                  <div className="font-display text-3xl md:text-4xl leading-none" style={{ color: "rgb(6, 36, 67)" }}>
                    {m.ano}
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl leading-tight" style={{ color: "rgb(6, 36, 67)" }}>
                      {m.titulo}
                    </h3>
                    <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: "rgba(6, 36, 67, 0.82)" }}>
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reconhecimentos */}
      <SectionBlock>
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow="Reconhecimento Institucional" title="Distinções que refletem nossa consistência." />
            <p className="mt-6 lead">
              Premiações concedidas por instituições jurídicas, empresariais e de cultura organizacional reconhecem
              o trabalho técnico, ético e humano da Linhares Law.
            </p>
            <InstitutionalButton to="/premiacoes" variant="outline" className="mt-10">
              Ver Reconhecimentos
            </InstitutionalButton>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <InstitutionalCard variant="light" className="p-0 overflow-hidden">
              <div className="w-full aspect-[16/10] bg-surface flex items-center justify-center p-8">
                <img src={gptw} alt="Great Place To Work 2026" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-10">
                <span className="eyebrow">Great Place To Work · 2026</span>
                <h3 className="mt-4 text-primary">Certificação com 100% de aprovação interna.</h3>
              </div>
            </InstitutionalCard>
          </div>
        </div>
      </SectionBlock>

      {/* CTA */}
      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">A Hora é Agora.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Descubra qual estratégia migratória faz sentido para seus objetivos.
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
