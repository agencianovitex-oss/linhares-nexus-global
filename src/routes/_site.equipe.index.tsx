import { createFileRoute, Link } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { buildLocaleHead } from "@/lib/seo";
import { teamGroups, type TeamMember } from "@/data/team";

const L = "pt" as const;

export const Route = createFileRoute("/_site/equipe/")({
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

function MemberCard({ m, cardBg }: { m: TeamMember; cardBg: string }) {
  const card = (
    <article
      className="group border border-border h-full flex flex-col transition-colors hover:border-border-strong"
      style={{ backgroundColor: cardBg }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
        {m.portrait ? (
          <img
            src={m.portrait}
            alt={m.name}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Foto institucional
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl text-primary group-hover:text-gold transition-colors">
          {m.name}
        </h3>
        <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {m.role}
        </p>
        {m.bio && (
          <p className="mt-5 text-[13.5px] leading-[1.7] text-ink-soft flex-1">
            {m.bio}
          </p>
        )}
        {m.credentials && (
          <ul className="mt-6 space-y-1.5 text-[12.5px] text-ink-soft">
            {m.credentials.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-gold">·</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        )}
        {m.slug && (
          <p className="mt-6 text-[10.5px] uppercase tracking-[0.28em] text-primary">
            Ver perfil <span className="cta-arrow">→</span>
          </p>
        )}
      </div>
    </article>
  );
  return m.slug ? (
    <Link to="/equipe/$slug" params={{ slug: m.slug }} className="block h-full">
      {card}
    </Link>
  ) : (
    <div className="h-full">{card}</div>
  );
}

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

      {teamGroups.map((group, idx) => {
        const isLeadership = idx === 0;
        const isWhite = idx % 2 === 0;
        return (
          <div
            key={group.eyebrow}
            style={{ backgroundColor: isWhite ? "#ffffff" : "#eef0f3" }}
          >
            <SectionBlock tone={isWhite ? "light" : "surface"} className="!bg-transparent !bg-none">
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="rule-gold" />
                  <p className="mt-5 eyebrow">{group.eyebrow}</p>
                  <h2 className="mt-6 text-gold font-semibold">{group.title}</h2>
                  {group.description && <p className="mt-6 lead">{group.description}</p>}
                </div>
                <div className="lg:col-span-8">
                  <div
                    className={
                      isLeadership
                        ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                    }
                  >
                    {group.members.map((m) => (
                      <div key={m.name} className="reveal-up">
                        <MemberCard m={m} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionBlock>
          </div>
        );
      })}

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
