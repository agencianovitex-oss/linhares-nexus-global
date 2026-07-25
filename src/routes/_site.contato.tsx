import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalHero, InstitutionalButton } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { buildLocaleHead } from "@/lib/seo";
import { useI18n, withLocale } from "@/i18n/useI18n";
import type { Locale } from "@/i18n/locales";
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
  component: ContatoPage,
});

type PageContent = {
  eyebrow: string; title: string; intro: string;
  sectionEyebrow: string; sectionTitle: string;
  freeEyebrow: string; freeTitle: string; freeBody: string; freeFormAria: string; freeNote?: string;
  paidEyebrow: string; paidTitle: string; paidBody: string;
  paidBullets: string[]; paidCta: string; paidCtaNote: string;
  emailLabel: string; whatsappLabel: string; whatsappBody: string; hoursLabel: string; hoursBody: string;
  officesEyebrow: string; officesTitle: string;
  ctaTitle: string; ctaSub: string; ctaTeam: string;
};

const content: Record<Locale, PageContent> = {
  pt: {
    eyebrow: "Linhares Law · Contato",
    title: "Inicie uma conversa institucional.",
    intro: "Oferecemos dois caminhos de atendimento: consulta preliminar gratuita para candidatos ao EB-2 NIW e consulta estratégica agendada para as demais categorias de visto.",
    sectionEyebrow: "Agendamento",
    sectionTitle: "Escolha o Caminho Adequado.",
    freeEyebrow: "Consulta Gratuita",
    freeTitle: "EB-2 NIW",
    freeBody: "Se seu objetivo é a imigração pela via de Interesse Nacional (EB-2 NIW), preencha o formulário abaixo. Nossa equipe fará uma análise preliminar e retornará com os próximos passos.",
    freeFormAria: "Linhares Law: Formulário EB-2 NIW.",
    paidEyebrow: "Consulta Estratégica",
    paidTitle: "Demais Vistos",
    paidBody: "Para EB-1, E-2, L-1, O-1, EB-5, imigração familiar e demais estratégias, agende uma consulta com um de nossos advogados. O agendamento é feito de forma segura pela plataforma Zoho Bookings e envolve pagamento antecipado.",
    paidBullets: [
      "· Análise personalizada da sua trajetória",
      "· Definição da estratégia migratória adequada",
      "· Atendimento com advogados sêniores do escritório",
      "· Pagamento e confirmação em ambiente seguro",
    ],
    paidCta: "Agendar Consulta",
    paidCtaNote: "Abre em uma nova aba, ambiente seguro do Zoho Bookings.",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
    whatsappBody: "Atendimento institucional",
    hoursLabel: "Atendimento",
    hoursBody: "Segunda a Sexta, 9h às 18h (EST). Resposta em até 24 horas úteis.",
    officesEyebrow: "Escritórios",
    officesTitle: "Endereços Institucionais.",
    ctaTitle: "A Hora é Agora.",
    ctaSub: "Descubra qual estratégia migratória faz sentido para seus objetivos.",
    ctaTeam: "Conhecer a Equipe",
  },
  en: {
    eyebrow: "Linhares Law · Contact",
    title: "Begin an institutional conversation.",
    intro: "We offer two consultation paths: a preliminary complimentary consultation for EB-2 NIW candidates and a paid strategic consultation for all other visa categories.",
    sectionEyebrow: "Scheduling",
    sectionTitle: "Choose the Right Path.",
    freeEyebrow: "Complimentary Consultation",
    freeTitle: "EB-2 NIW",
    freeBody: "If your goal is U.S. immigration through the National Interest Waiver (EB-2 NIW), complete the form below. Our team will conduct a preliminary review and follow up with next steps. The intake form is currently in Portuguese.",
    freeFormAria: "Linhares Law: EB-2 NIW Intake Form.",
    freeNote: "The intake form is currently in Portuguese. For assistance in English, please contact info@linhareslaw.com.",
    paidEyebrow: "Strategic Consultation",
    paidTitle: "Other Visa Categories",
    paidBody: "For EB-1, E-2, L-1, O-1, EB-5, family-based immigration and all other strategies, schedule a consultation with one of our attorneys. Scheduling is handled securely through Zoho Bookings and requires advance payment.",
    paidBullets: [
      "· Personalized analysis of your trajectory",
      "· Definition of the appropriate immigration strategy",
      "· Consultation with senior attorneys of the firm",
      "· Secure payment and confirmation",
    ],
    paidCta: "Schedule a Consultation",
    paidCtaNote: "Opens in a new tab — secure Zoho Bookings environment.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    whatsappBody: "Institutional line",
    hoursLabel: "Hours",
    hoursBody: "Monday to Friday, 9:00 AM – 6:00 PM (EST). Reply within 24 business hours.",
    officesEyebrow: "Offices",
    officesTitle: "Institutional Addresses.",
    ctaTitle: "The Time Is Now.",
    ctaSub: "Discover which immigration strategy fits your objectives.",
    ctaTeam: "Meet the Team",
  },
  es: {
    eyebrow: "Linhares Law · Contacto",
    title: "Inicie una conversación institucional.",
    intro: "Ofrecemos dos vías de atención: consulta preliminar gratuita para candidatos al EB-2 NIW y consulta estratégica agendada para las demás categorías de visa.",
    sectionEyebrow: "Agendamiento",
    sectionTitle: "Elija la Vía Adecuada.",
    freeEyebrow: "Consulta Gratuita",
    freeTitle: "EB-2 NIW",
    freeBody: "Si su objetivo es la inmigración por la vía de Interés Nacional (EB-2 NIW), complete el formulario a continuación. Nuestro equipo realizará un análisis preliminar y responderá con los próximos pasos. El formulario está actualmente en portugués.",
    freeFormAria: "Linhares Law: Formulario EB-2 NIW.",
    freeNote: "El formulario está actualmente en portugués. Para asistencia en español, escríbanos a info@linhareslaw.com.",
    paidEyebrow: "Consulta Estratégica",
    paidTitle: "Demás Visas",
    paidBody: "Para EB-1, E-2, L-1, O-1, EB-5, inmigración familiar y demás estrategias, agende una consulta con uno de nuestros abogados. El agendamiento se realiza de forma segura mediante Zoho Bookings e implica pago anticipado.",
    paidBullets: [
      "· Análisis personalizado de su trayectoria",
      "· Definición de la estrategia migratoria adecuada",
      "· Atención con abogados senior del despacho",
      "· Pago y confirmación en entorno seguro",
    ],
    paidCta: "Agendar Consulta",
    paidCtaNote: "Se abre en una nueva pestaña, entorno seguro de Zoho Bookings.",
    emailLabel: "Correo electrónico",
    whatsappLabel: "WhatsApp",
    whatsappBody: "Línea institucional",
    hoursLabel: "Horario",
    hoursBody: "Lunes a viernes, 9:00 – 18:00 (EST). Respuesta en hasta 24 horas hábiles.",
    officesEyebrow: "Oficinas",
    officesTitle: "Direcciones Institucionales.",
    ctaTitle: "La Hora es Ahora.",
    ctaSub: "Descubra qué estrategia migratoria se ajusta a sus objetivos.",
    ctaTeam: "Conocer al Equipo",
  },
};

const OFFICE_ROLE_LABEL: Record<Locale, Record<"Sede" | "Escritório Regional", string>> = {
  pt: { "Sede": "Sede", "Escritório Regional": "Escritório Regional" },
  en: { "Sede": "Headquarters", "Escritório Regional": "Regional Office" },
  es: { "Sede": "Sede Principal", "Escritório Regional": "Oficina Regional" },
};

export function ContatoPage() {
  const { locale } = useI18n();
  const c = content[locale];
  return (
    <>
      <InstitutionalHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <SectionBlock>
        <SectionTitle eyebrow={c.sectionEyebrow} title={c.sectionTitle} />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
          <div className="border border-border bg-surface p-8 md:p-10 flex flex-col">
            <span className="eyebrow">{c.freeEyebrow}</span>
            <h3 className="mt-4 text-primary">{c.freeTitle}</h3>
            <p className="mt-4 text-sm text-ink-soft">{c.freeBody}</p>
            {c.freeNote && (
              <p className="mt-3 text-xs text-muted-foreground italic">{c.freeNote}</p>
            )}
            <span className="rule-gold mt-8" />
            <div className="mt-8 flex-1">
              <iframe
                aria-label={c.freeFormAria}
                src={ZOHO_FORM_URL}
                allow="geolocation;"
                className="w-full border-0 bg-background"
                style={{ height: 620, minHeight: 620 }}
              />
            </div>
          </div>

          <div className="border border-border bg-surface p-8 md:p-10 flex flex-col">
            <span className="eyebrow">{c.paidEyebrow}</span>
            <h3 className="mt-4 text-primary">{c.paidTitle}</h3>
            <p className="mt-4 text-sm text-ink-soft">{c.paidBody}</p>
            <span className="rule-gold mt-8" />
            <ul className="mt-8 space-y-3 text-sm text-ink-soft">
              {c.paidBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <div className="mt-8">
              <a
                href={ZOHO_BOOKINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex w-full items-center justify-center gap-4 px-10 py-6 text-[13px] font-semibold tracking-[0.28em] uppercase transition-[background-color,color,border-color,transform] duration-300 ease-out will-change-transform bg-gold text-gold-foreground hover:bg-[rgb(153_108_40)] hover:-translate-y-[1px] shadow-[0_14px_38px_-18px_rgba(179,134,66,0.7)]"
              >
                <span>{c.paidCta}</span>
                <span aria-hidden="true" className="inline-block translate-x-0 text-base transition-transform duration-300 ease-out group-hover/btn:translate-x-[5px]">→</span>
              </a>
              <p className="mt-4 text-xs text-muted-foreground">{c.paidCtaNote}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-border bg-background p-8 md:p-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{c.emailLabel}</p>
            <a href="mailto:info@linhareslaw.com" className="mt-2 block text-ink hover:text-gold">info@linhareslaw.com</a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{c.whatsappLabel}</p>
            <p className="mt-2 text-ink">{c.whatsappBody}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{c.hoursLabel}</p>
            <p className="mt-2 text-ink">{c.hoursBody}</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <SectionTitle eyebrow={c.officesEyebrow} title={c.officesTitle} />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
          {offices.map((o) => (
            <div key={o.city} className="bg-background p-8 editorial-card">
              <span className="eyebrow">{OFFICE_ROLE_LABEL[locale][o.role]}</span>
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
          <h2 className="mt-8 text-primary-foreground">{c.ctaTitle}</h2>
          <p className="mt-6 lead text-primary-foreground/80">{c.ctaSub}</p>
          <div className="mt-10">
            <InstitutionalButton to={withLocale(locale, "/equipe")}>{c.ctaTeam}</InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
