import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { offices } from "@/data/offices";

const L = "pt" as const;

export const Route = createFileRoute("/_site/contato")({
  head: () =>
    buildLocaleHead({
      path: "/contato",
      locale: L,
      title: "Contato — Linhares Law",
      description:
        "Inicie uma conversa institucional com a Linhares Law. Formulário de atendimento, agendamento, telefone, e-mail e WhatsApp dos quatro escritórios nos Estados Unidos.",
    }),
  component: Contato,
});

function Contato() {
  const [enviado, setEnviado] = useState(false);
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Contato"
        title="Inicie uma conversa institucional."
        intro="A primeira consulta é o início de uma relação de longo prazo. Nossa equipe responde a cada solicitação com a discrição e o rigor que cada trajetória exige."
      />

      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Formulário */}
          <div className="lg:col-span-7">
            <SectionTitle eyebrow="Formulário" title="Solicitar Atendimento" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEnviado(true);
              }}
              className="mt-12 grid gap-6"
            >
              <Field label="Nome Completo" name="nome" required />
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="E-mail" name="email" type="email" required />
                <Field label="Telefone / WhatsApp" name="telefone" />
              </div>
              <Field label="País de Residência Atual" name="pais" />
              <div>
                <label className="eyebrow">Estratégia de Interesse</label>
                <select
                  name="estrategia"
                  className="mt-3 w-full border border-border bg-background px-5 py-4 text-ink focus:border-gold focus:outline-none"
                >
                  <option>Não tenho certeza</option>
                  <option>EB-2 NIW</option>
                  <option>EB-1</option>
                  <option>E-2</option>
                  <option>L-1</option>
                  <option>O-1</option>
                  <option>EB-5</option>
                  <option>Imigração Familiar</option>
                </select>
              </div>
              <div>
                <label className="eyebrow">Mensagem</label>
                <textarea
                  name="mensagem"
                  rows={5}
                  className="mt-3 w-full border border-border bg-background px-5 py-4 text-ink focus:border-gold focus:outline-none resize-none"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {"\n"}
              </p>
              <div>
                <InstitutionalButton type="submit">
                  {enviado ? "Solicitação Enviada" : "Enviar Solicitação"}
                </InstitutionalButton>
              </div>
            </form>
          </div>

          {/* Canais diretos */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-10">
            <div className="border border-border p-10 bg-surface">
              <span className="eyebrow">Canais Diretos</span>
              <ul className="mt-6 space-y-5">
                <li>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">E-mail</p>
                  <a href="mailto:info@linhareslaw.com" className="mt-1 block text-ink hover:text-gold">
                    info@linhareslaw.com
                  </a>
                </li>
                <li>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">WhatsApp</p>
                  <p className="mt-1 text-ink">Atendimento institucional</p>
                </li>
                <li>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Agendamento</p>
                  <p className="mt-1 text-ink">Koalendar · Em integração</p>
                </li>
              </ul>
            </div>

            <div className="border border-border p-10 bg-primary text-primary-foreground">
              <span className="eyebrow eyebrow-on-dark">Atendimento</span>
              <h3 className="mt-4 text-primary-foreground">Segunda a Sexta · 9h às 18h (EST)</h3>
              <p className="mt-4 text-sm text-primary-foreground/75">
                Resposta em até 24 horas úteis.
              </p>
            </div>
          </aside>
        </div>
      </SectionBlock>

      {/* Escritórios */}
      <SectionBlock tone="surface">
        <SectionTitle eyebrow="Escritórios" title="Endereços Institucionais." />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
          {offices.map((o) => (
            <div key={o.city} className="bg-background p-8 editorial-card">
              <span className="eyebrow">{o.role}</span>
              <h3 className="mt-4 text-primary">{o.city}</h3>
              <div className="mt-6 text-sm text-ink-soft space-y-1">
                <p>{o.address}</p>
                <p>{o.zip}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">A Hora é Agora.</h2>
          <p className="mt-6 lead text-primary-foreground/80">
            Descubra qual estratégia migratória faz sentido para seus objetivos.
          </p>
          <div className="mt-10">
            <InstitutionalButton to="/equipe">Conhecer a Equipe</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">
        {label}
        {required && <span className="text-gold ml-1">·</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border border-border bg-background px-5 py-4 text-ink focus:border-gold focus:outline-none"
      />
    </div>
  );
}
