import { createFileRoute, Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { buildLocaleHead } from "@/lib/seo";
import { teamGroups } from "@/data/team";

const L = "pt" as const;

export const Route = createFileRoute("/_site/equipe")({
  head: () =>
    buildLocaleHead({
      path: "/equipe",
      locale: L,
      title: "Equipe — Linhares Law",
      description:
        "Conheça a equipe especializada da Linhares Law: advogados licenciados nos Estados Unidos, gestores jurídicos, especialistas e profissionais dedicados exclusivamente à imigração americana.",
    }),
  component: EquipePage,
});

function EquipePage() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Equipe"
        title="Equipe Especializada Linhares Law."
        intro="A Linhares Law reúne advogados, especialistas jurídicos e profissionais dedicados exclusivamente ao atendimento de clientes que buscam caminhos legais para viver, trabalhar, investir e construir seu futuro nos Estados Unidos."
        meta={
          <>
            <span>3 Advogados</span>
            <span>2 Legal Managers</span>
            <span>Equipe Multidisciplinar</span>
          </>
        }
      />

      {teamGroups.map((group, idx) => (
        <SectionBlock key={group.eyebrow} tone={idx % 2 === 0 ? "light" : "surface"}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="rule-gold" />
              <p className="mt-5 eyebrow">{group.eyebrow}</p>
              <h2 className="mt-6 text-primary">{group.title}</h2>
              {group.description && <p className="mt-6 lead">{group.description}</p>}
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-px bg-border border border-border sm:grid-cols-2">
                {group.members.map((m) => {
                  const card = (
                    <div className="bg-background p-8 h-full editorial-card group">
                      <h3 className="text-primary group-hover:text-gold transition-colors">{m.name}</h3>
                      <p className="mt-2 text-[12px] uppercase tracking-[0.24em] text-muted-foreground">
                        {m.role}
                      </p>
                      {m.credentials && (
                        <ul className="mt-6 space-y-1.5 text-sm text-ink-soft">
                          {m.credentials.map((c) => (
                            <li key={c} className="flex gap-2">
                              <span className="text-gold">·</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {m.slug && (
                        <p className="mt-6 text-[11px] uppercase tracking-[0.26em] text-primary">
                          Ver perfil <span className="cta-arrow">→</span>
                        </p>
                      )}
                    </div>
                  );
                  return m.slug ? (
                    <Link key={m.name} to="/equipe/$slug" params={{ slug: m.slug }} className="block">
                      {card}
                    </Link>
                  ) : (
                    <div key={m.name}>{card}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionBlock>
      ))}

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">
            Uma equipe construída para acompanhar cada etapa da jornada migratória.
          </h2>
          <div className="mt-10">
            <InstitutionalButton to="/contato">Agendar Consulta</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
