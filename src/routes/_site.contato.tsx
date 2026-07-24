import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { offices } from "@/data/offices";

const L = "pt" as const;

const ZOHO_FORM_URL =
  "https://forms.zohopublic.com/linhareslaw/form/LinharesLawFormulrioEB2NIW4/formperma/5dh53UTsQ8ZAbvB9N3egaAxOhZ4cdkorEqAkYPmhi5Y";
const ZOHO_BOOKINGS_URL =
  "https://linhareslaw.zohobookings.com/#/4689936000000037054";

export const Route = createFileRoute("/_site/contato")({
  head: () =>
    buildLocaleHead({
      path: "/contato",
      locale: L,
      title: "Contato, Linhares Law",
      description:
        "Inicie uma conversa institucional com a Linhares Law. Consulta gratuita para EB-2 NIW e agendamento de consulta paga para os demais vistos, com atendimento nos quatro escritórios nos Estados Unidos.",
    }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <InstitutionalHero
        eyebrow="Linhares Law · Contato"
        title="Inicie uma conversa institucional."
        intro="Oferecemos dois caminhos de atendimento: consulta preliminar gratuita para candidatos ao EB-2 NIW e consulta estratégica agendada para as demais categorias de visto."
      />

      <SectionBlock>
        <SectionTitle eyebrow="Agendamento" title="Escolha o Caminho Adequado." />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Card 1 — Consulta Gratuita EB-2 NIW */}
          <div className="border border-border bg-surface p-8 md:p-10 flex flex-col">
            <span className="eyebrow">Consulta Gratuita</span>
            <h3 className="mt-4 text-primary">EB-2 NIW</h3>
            <p className="mt-4 text-sm text-ink-soft">
              Se seu objetivo é a imigração pela via de Interesse Nacional
              (EB-2 NIW), preencha o formulário abaixo. Nossa equipe fará uma
              análise preliminar e retornará com os próximos passos.
            </p>
            <span className="rule-gold mt-8" />
            <div className="mt-8 flex-1">
              <iframe
                aria-label="Linhares Law: Formulário EB-2 NIW."
                src={ZOHO_FORM_URL}
                allow="geolocation;"
                className="w-full border-0 bg-background"
                style={{ height: 620, minHeight: 620 }}
              />
            </div>
          </div>

          {/* Card 2 — Consulta Paga (demais vistos) */}
          <div className="border border-border bg-surface p-8 md:p-10 flex flex-col">
            <span className="eyebrow">Consulta Estratégica</span>
            <h3 className="mt-4 text-primary">Demais Vistos</h3>
            <p className="mt-4 text-sm text-ink-soft">
              Para EB-1, E-2, L-1, O-1, EB-5, imigração familiar e demais
              estratégias, agende uma consulta com um de nossos advogados. O
              agendamento é feito de forma segura pela plataforma Zoho
              Bookings e envolve pagamento antecipado.
            </p>
            <span className="rule-gold mt-8" />

            <ul className="mt-8 space-y-3 text-sm text-ink-soft">
              <li>· Análise personalizada da sua trajetória</li>
              <li>· Definição da estratégia migratória adequada</li>
              <li>· Atendimento com advogados sêniores do escritório</li>
              <li>· Pagamento e confirmação em ambiente seguro</li>
            </ul>

            <div className="mt-auto pt-10">
              <a
                href={ZOHO_BOOKINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-semibold tracking-[0.26em] uppercase transition-[background-color,color,border-color,transform] duration-300 ease-out will-change-transform bg-gold text-gold-foreground hover:bg-[rgb(153_108_40)] hover:-translate-y-[1px] shadow-[0_10px_30px_-18px_rgba(179,134,66,0.65)]"
              >
                <span>Agendar Consulta</span>
                <span
                  aria-hidden="true"
                  className="inline-block translate-x-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-[5px]"
                >
                  →
                </span>
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Abre em uma nova aba, ambiente seguro do Zoho Bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Canais diretos, faixa enxuta */}
        <div className="mt-16 border border-border bg-background p-8 md:p-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              E-mail
            </p>
            <a
              href="mailto:info@linhareslaw.com"
              className="mt-2 block text-ink hover:text-gold"
            >
              info@linhareslaw.com
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              WhatsApp
            </p>
            <p className="mt-2 text-ink">Atendimento institucional</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Atendimento
            </p>
            <p className="mt-2 text-ink">
              Segunda a Sexta, 9h às 18h (EST). Resposta em até 24 horas úteis.
            </p>
          </div>
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
