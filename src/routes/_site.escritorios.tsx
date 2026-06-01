import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { offices } from "@/data/offices";

const L = "pt" as const;

export const Route = createFileRoute("/_site/escritorios")({
  head: () =>
    buildLocaleHead({
      path: "/escritorios",
      locale: L,
      title: "Escritórios — Linhares Law",
      description:
        "A Linhares Law mantém quatro escritórios nos Estados Unidos: Orlando (sede), Miami, New York e Salt Lake City. Conheça nossa presença institucional.",
    }),
  component: Escritorios,
});

function Escritorios() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Escritórios"
        title="Presença institucional em quatro cidades dos Estados Unidos."
        intro="Sede em Orlando e escritórios regionais em Miami, New York e Salt Lake City. Uma estrutura nacional construída para atender com proximidade os clientes que escolheram os Estados Unidos como destino profissional e familiar."
        meta={
          <>
            <span>4 Escritórios</span>
            <span>Sede · Orlando</span>
            <span>Atendimento Nacional</span>
          </>
        }
      />

      <SectionBlock>
        <div className="grid gap-px bg-border md:grid-cols-2 border border-border">
          {offices.map((o) => (
            <article key={o.city} className="bg-background p-12 editorial-card">
              <div className="flex items-center justify-between">
                <span className="eyebrow">{o.role}</span>
                <span className="text-[11px] tracking-[0.26em] text-gold font-mono">{o.coords}</span>
              </div>
              <h2 className="mt-6 text-primary">{o.city}</h2>
              <p className="mt-2 text-muted-foreground">{o.state}</p>
              <div className="mt-10 pt-8 border-t border-border space-y-1 text-ink">
                <p>{o.address}</p>
                <p>{o.zip}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* Mapa institucional */}
      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Presença Nacional" title="Mapa Institucional." />
        <div className="mt-12 aspect-[21/9] bg-background border border-border relative overflow-hidden">
          <svg
            viewBox="0 0 1000 420"
            className="absolute inset-0 w-full h-full"
            aria-hidden
          >
            {/* simplified continental US silhouette */}
            <path
              d="M 100 180 Q 180 120 280 130 L 420 110 Q 520 100 620 130 L 780 150 L 880 200 L 900 260 L 820 320 L 700 350 L 560 360 L 420 350 L 300 340 L 200 320 L 130 280 Z"
              fill="oklch(0.93 0.004 255)"
              stroke="oklch(0.85 0.005 255)"
              strokeWidth="1"
            />
          </svg>
          {/* office dots — approximate positions */}
          {[
            { name: "Salt Lake City", x: "32%", y: "42%" },
            { name: "Orlando", x: "74%", y: "72%" },
            { name: "Miami", x: "78%", y: "78%" },
            { name: "New York", x: "80%", y: "38%" },
          ].map((p) => (
            <div
              key={p.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: p.x, top: p.y }}
            >
              <div className="relative">
                <span className="block w-2.5 h-2.5 bg-gold rounded-full" />
                <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
                  {p.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">
            Atendimento em qualquer um dos nossos escritórios.
          </h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Inicie uma conversa institucional com nossa equipe e escolha a sede mais próxima.
          </p>
          <div className="mt-10">
            <InstitutionalButton to="/contato">Agendar Consulta</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
