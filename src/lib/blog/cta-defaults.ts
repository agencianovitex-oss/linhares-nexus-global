import type { Locale } from "@/i18n/locales";

/**
 * Contextual CTA fallback when an article has no custom CTA.
 * Keyed by category slug (lowercased) with locale-aware copy.
 */
type CTACopy = { title: string; description: string; button: string; url: string };

const defaults: Record<Locale, CTACopy> = {
  pt: {
    title: "Avalie a sua trajetória com a Linhares Law",
    description:
      "Receba uma análise estratégica do seu caso com um advogado dedicado à imigração americana.",
    button: "Agendar consulta",
    url: "/contato",
  },
  en: {
    title: "Discuss your strategy with Linhares Law",
    description:
      "Speak with an attorney dedicated to U.S. immigration and receive a personalized case assessment.",
    button: "Schedule a consultation",
    url: "/en/contato",
  },
  es: {
    title: "Evalúe su estrategia con Linhares Law",
    description:
      "Hable con un abogado dedicado a inmigración estadounidense y reciba un análisis personalizado.",
    button: "Agendar consulta",
    url: "/es/contato",
  },
};

const byCategory: Record<string, Partial<Record<Locale, CTACopy>>> = {
  "eb-2-niw": {
    pt: { title: "EB-2 NIW", description: "Solicite uma avaliação de elegibilidade EB-2 NIW.", button: "Avaliar elegibilidade", url: "/contato" },
    en: { title: "EB-2 NIW", description: "Request an EB-2 NIW eligibility assessment.", button: "Assess eligibility", url: "/en/contato" },
    es: { title: "EB-2 NIW", description: "Solicite una evaluación de elegibilidad EB-2 NIW.", button: "Evaluar elegibilidad", url: "/es/contato" },
  },
  "eb-1": {
    pt: { title: "EB-1", description: "Fale com nossa equipe especializada em EB-1.", button: "Falar com especialista", url: "/contato" },
    en: { title: "EB-1", description: "Speak with our EB-1 specialists.", button: "Talk to a specialist", url: "/en/contato" },
    es: { title: "EB-1", description: "Hable con nuestro equipo EB-1.", button: "Hablar con especialista", url: "/es/contato" },
  },
  "dentistas": {
    pt: { title: "Dentistas", description: "Descubra suas opções de imigração profissional.", button: "Ver caminhos disponíveis", url: "/contato" },
    en: { title: "Dentists", description: "Discover immigration pathways for dental professionals.", button: "Explore pathways", url: "/en/contato" },
    es: { title: "Dentistas", description: "Descubra rutas de inmigración para profesionales odontólogos.", button: "Explorar opciones", url: "/es/contato" },
  },
  "empresarios": {
    pt: { title: "Empresários", description: "Planeje sua expansão para os Estados Unidos.", button: "Planejar expansão", url: "/contato" },
    en: { title: "Entrepreneurs", description: "Plan your U.S. business expansion.", button: "Plan expansion", url: "/en/contato" },
    es: { title: "Empresarios", description: "Planee su expansión a Estados Unidos.", button: "Planear expansión", url: "/es/contato" },
  },
};

export function resolveCTA(args: {
  locale: Locale;
  categorySlug?: string | null;
  cta_title?: string | null;
  cta_description?: string | null;
  cta_button_text?: string | null;
  cta_url?: string | null;
}): CTACopy {
  if (args.cta_title || args.cta_description || args.cta_url || args.cta_button_text) {
    const fb = defaults[args.locale];
    return {
      title: args.cta_title ?? fb.title,
      description: args.cta_description ?? fb.description,
      button: args.cta_button_text ?? fb.button,
      url: args.cta_url ?? fb.url,
    };
  }
  const cat = (args.categorySlug ?? "").toLowerCase();
  const m = cat && byCategory[cat]?.[args.locale];
  if (m) return m;
  return defaults[args.locale];
}
