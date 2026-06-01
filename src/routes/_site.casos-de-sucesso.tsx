import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { buildLocaleHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

const L = "pt" as const;

export const Route = createFileRoute("/_site/casos-de-sucesso")({
  head: () =>
    buildLocaleHead({
      path: "/casos-de-sucesso",
      locale: L,
      title: "Casos de Sucesso — Linhares Law",
      description:
        "Trajetórias representativas de aprovações conquistadas por clientes da Linhares Law em estratégias migratórias EB-2 NIW, EB-1, E-2, L-1, O-1, H1B e EB-5.",
    }),
  component: CasosSucesso,
});

const filtros = ["Todos", "EB-2 NIW", "EB-1", "E-2", "L-1", "O-1", "H1B", "EB-5"];

function CasosSucesso() {
  const [ativo, setAtivo] = useState("Todos");
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Casos de Sucesso"
        title="Trajetórias representadas pela Linhares Law."
        intro="Em breve publicaremos uma curadoria editorial de aprovações reais, com depoimentos, profissões representadas e estratégias migratórias adotadas em cada trajetória."
      />

      <SectionBlock>
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow mr-4">Filtrar por estratégia</span>
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setAtivo(f)}
              className={cn(
                "px-5 py-2 text-[11px] uppercase tracking-[0.26em] border transition-colors",
                ativo === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-ink hover:border-gold hover:text-gold",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="bg-background p-10 editorial-card">
              <div className="aspect-[4/3] bg-surface-2 border border-border mb-6 flex items-center justify-center">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Em curadoria
                </span>
              </div>
              <span className="eyebrow text-gold">Caso · Em preparação</span>
              <h3 className="mt-4 text-primary">Depoimento institucional</h3>
              <p className="mt-3 text-sm text-muted-foreground">Profissão · País de Origem · Estratégia</p>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-ink-soft text-sm leading-relaxed">
          Esta seção será publicada após autorização editorial de cada cliente representado.
          Nenhum conteúdo fictício é exibido na Linhares Law.
        </p>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">A Hora é Agora.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Descubra qual estratégia migratória faz sentido para sua trajetória.
          </p>
          <div className="mt-10">
            <InstitutionalButton to="/contato">Agendar Consulta</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
