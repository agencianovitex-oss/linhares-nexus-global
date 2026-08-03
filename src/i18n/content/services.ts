import type { Locale } from "@/i18n/locales";

export type ServicesStrings = {
  hub: {
    eyebrow: string;
    title: string;
    intro: string;
    categoriesEyebrow: string;
    categoriesTitle: string;
    cardCta: string;
    planningEyebrow: string;
    planningTitle: string;
    planningBody: string;
    pillars: Array<{ title: string; body: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    faq: Array<{ q: string; a: string }>;
    seoTitle: string;
    seoDescription: string;
    seoFallbackDescription: string;
  };
  visa: {
    heroEyebrow: string;
    ctaSchedule: string;
    ctaAllAreas: string;
    overview: string;
    eligibility: string;
    benefits: string;
    process: string;
    profilesEyebrow: string;
    profilesTitle: string;
    midCtaTitle: (acronym: string) => string;
    midCtaBody: (acronym: string) => string;
    midCtaButton: string;
    quote: string;
    quoteName: string;
    quoteRole: string;
    faqEyebrow: string;
    faqTitle: (acronym: string) => string;
    relatedEyebrow: string;
    relatedTitle: string;
    finalTitle: string;
    finalBody: (acronym: string) => string;
    ctaCompare: string;
  };
};

export const servicesStrings: Record<Locale, ServicesStrings> = {
  pt: {
    hub: {
      eyebrow: "Linhares Law · Áreas de Atuação",
      title: "Estratégias migratórias para profissionais, empresários, investidores e famílias.",
      intro:
        "A Linhares Law atua exclusivamente em imigração americana, desenvolvendo estratégias jurídicas personalizadas para residência permanente, mobilidade executiva, expansão empresarial e oportunidades profissionais nos Estados Unidos.",
      categoriesEyebrow: "Categorias Migratórias",
      categoriesTitle: "Estratégias jurídicas conduzidas pelo escritório.",
      cardCta: "Conhecer Estratégia",
      planningEyebrow: "Planejamento Migratório",
      planningTitle: "A metodologia estratégica do escritório.",
      planningBody:
        "A Linhares Law assessora famílias que desejam construir uma nova vida nos Estados Unidos e, com a mesma profundidade técnica, empresários, investidores, executivos e profissionais qualificados que buscam expansão internacional, estruturação societária e oportunidades estratégicas no mercado americano.",
      pillars: [
        { title: "Estratégias profissionais e familiares", body: "Estruturação migratória para profissionais, executivos e núcleos familiares completos, alinhada aos objetivos de carreira, patrimônio e qualidade de vida." },
        { title: "Empresários e investidores", body: "Planejamento jurídico para expansão internacional de negócios, estruturação societária nos Estados Unidos e investimento qualificado." },
        { title: "Avaliação de elegibilidade", body: "Diagnóstico individualizado das categorias migratórias aderentes ao perfil profissional, empresarial e familiar do cliente." },
        { title: "Planejamento de longo prazo", body: "Trajetórias construídas com visão de residência permanente, cidadania, sucessão patrimonial e atuação internacional contínua." },
      ],
      ctaTitle: "Agende uma consulta estratégica.",
      ctaBody: "Descubra qual estratégia migratória faz sentido para seus objetivos profissionais, patrimoniais e familiares.",
      ctaButton: "Agendar Consulta",
      faq: [
        { q: "Qual estratégia migratória é a mais adequada ao meu perfil?", a: "A escolha depende da combinação entre formação, experiência, projeto profissional, estrutura familiar e horizonte patrimonial. A análise institucional da Linhares Law avalia todas as variáveis antes de qualquer recomendação." },
        { q: "É possível combinar diferentes estratégias migratórias?", a: "Sim. É comum que profissionais transitem entre vistos não-imigrantes (como L-1, O-1 ou E-2) e categorias de Green Card (EB-1, EB-2 NIW, EB-5) ao longo de sua trajetória." },
        { q: "A Linhares Law oferece consultoria migratória?", a: "Não. A Linhares Law é um escritório de advocacia americano com atuação exclusiva em imigração, atuando como conselho jurídico permanente." },
      ],
      seoTitle: "Áreas de Atuação | Linhares Law",
      seoDescription:
        "Estratégias migratórias para profissionais, empresários, investidores e famílias. EB-2 NIW, EB-1, E-2, L-1, O-1, H-1B e EB-5.",
      seoFallbackDescription: "Estratégias jurídicas de imigração americana.",
    },
    visa: {
      heroEyebrow: "Áreas de Atuação",
      ctaSchedule: "Agendar Consulta",
      ctaAllAreas: "Ver todas as áreas",
      overview: "Visão Geral",
      eligibility: "Elegibilidade",
      benefits: "Benefícios",
      process: "Processo",
      profilesEyebrow: "Perfis Profissionais",
      profilesTitle: "Trajetórias representativas.",
      midCtaTitle: (a) => `Fale com nossa equipe sobre ${a}.`,
      midCtaBody: (a) => `Avalie com nossos advogados se ${a} é a estratégia mais adequada à sua trajetória profissional e familiar.`,
      midCtaButton: "Fale com nossa equipe",
      quote:
        "“A imigração é uma decisão estratégica. Cada trajetória exige uma análise individualizada e uma estrutura jurídica construída de acordo com os objetivos do cliente.”",
      quoteName: "Dr. André Linhares",
      quoteRole: "Advogado Fundador · Linhares Law",
      faqEyebrow: "Perguntas Frequentes",
      faqTitle: (a) => `Esclarecimentos sobre ${a}.`,
      relatedEyebrow: "Áreas Relacionadas",
      relatedTitle: "Outras estratégias migratórias.",
      finalTitle: "Agende uma consulta estratégica.",
      finalBody: (a) => `Inicie uma conversa institucional com nossos advogados e avalie se ${a} é a estratégia adequada aos seus objetivos.`,
      ctaCompare: "Comparar áreas",
    },
  },

  en: {
    hub: {
      eyebrow: "Linhares Law · Practice Areas",
      title: "Immigration strategies for professionals, entrepreneurs, investors and families.",
      intro:
        "Linhares Law practices exclusively in U.S. immigration law, developing tailored legal strategies for permanent residence, executive mobility, business expansion and professional opportunities in the United States.",
      categoriesEyebrow: "Immigration Categories",
      categoriesTitle: "Legal strategies handled by the firm.",
      cardCta: "Explore Strategy",
      planningEyebrow: "Immigration Planning",
      planningTitle: "The firm's strategic methodology.",
      planningBody:
        "Linhares Law advises families seeking to build a new life in the United States and, with the same technical depth, entrepreneurs, investors, executives and qualified professionals pursuing international expansion, corporate structuring and strategic opportunities in the U.S. market.",
      pillars: [
        { title: "Professional and family strategies", body: "Immigration structuring for professionals, executives and entire family units, aligned with career, wealth and quality-of-life objectives." },
        { title: "Entrepreneurs and investors", body: "Legal planning for international business expansion, corporate structuring in the United States and qualified investment." },
        { title: "Eligibility assessment", body: "Individualized analysis of the immigration categories that match the client's professional, business and family profile." },
        { title: "Long-term planning", body: "Pathways designed with permanent residence, citizenship, wealth succession and continuous international activity in mind." },
      ],
      ctaTitle: "Schedule a strategic consultation.",
      ctaBody: "Find out which immigration strategy fits your professional, financial and family objectives.",
      ctaButton: "Schedule a Consultation",
      faq: [
        { q: "Which immigration strategy is best suited to my profile?", a: "The answer depends on the combination of education, experience, professional project, family structure and long-term financial horizon. Linhares Law reviews every variable before making any recommendation." },
        { q: "Is it possible to combine different immigration strategies?", a: "Yes. Professionals frequently move between nonimmigrant visas (such as L-1, O-1 or E-2) and Green Card categories (EB-1, EB-2 NIW, EB-5) over the course of their journey." },
        { q: "Does Linhares Law provide immigration consulting?", a: "No. Linhares Law is a U.S. law firm practicing exclusively in immigration law, acting as permanent legal counsel." },
      ],
      seoTitle: "Practice Areas | Linhares Law",
      seoDescription:
        "U.S. immigration strategies for professionals, entrepreneurs, investors and families. EB-2 NIW, EB-1, E-2, L-1, O-1, H-1B and EB-5.",
      seoFallbackDescription: "U.S. immigration legal strategies.",
    },
    visa: {
      heroEyebrow: "Practice Areas",
      ctaSchedule: "Schedule a Consultation",
      ctaAllAreas: "View all practice areas",
      overview: "Overview",
      eligibility: "Eligibility",
      benefits: "Benefits",
      process: "Process",
      profilesEyebrow: "Professional Profiles",
      profilesTitle: "Representative trajectories.",
      midCtaTitle: (a) => `Talk to our team about ${a}.`,
      midCtaBody: (a) => `Assess with our attorneys whether ${a} is the most suitable strategy for your professional and family trajectory.`,
      midCtaButton: "Talk to our team",
      quote:
        "“Immigration is a strategic decision. Every trajectory requires an individualized analysis and a legal structure built around the client's objectives.”",
      quoteName: "André Linhares, Esq.",
      quoteRole: "Founding Attorney · Linhares Law",
      faqEyebrow: "Frequently Asked Questions",
      faqTitle: (a) => `Clarifications on ${a}.`,
      relatedEyebrow: "Related Areas",
      relatedTitle: "Other immigration strategies.",
      finalTitle: "Schedule a strategic consultation.",
      finalBody: (a) => `Start an institutional conversation with our attorneys and assess whether ${a} is the right strategy for your objectives.`,
      ctaCompare: "Compare practice areas",
    },
  },

  es: {
    hub: {
      eyebrow: "Linhares Law · Áreas de Práctica",
      title: "Estrategias migratorias para profesionales, empresarios, inversionistas y familias.",
      intro:
        "Linhares Law actúa exclusivamente en inmigración estadounidense, desarrollando estrategias jurídicas personalizadas para residencia permanente, movilidad ejecutiva, expansión empresarial y oportunidades profesionales en Estados Unidos.",
      categoriesEyebrow: "Categorías Migratorias",
      categoriesTitle: "Estrategias jurídicas conducidas por el despacho.",
      cardCta: "Conocer Estrategia",
      planningEyebrow: "Planificación Migratoria",
      planningTitle: "La metodología estratégica del despacho.",
      planningBody:
        "Linhares Law asesora a familias que desean construir una nueva vida en Estados Unidos y, con la misma profundidad técnica, a empresarios, inversionistas, ejecutivos y profesionales calificados que buscan expansión internacional, estructuración societaria y oportunidades estratégicas en el mercado estadounidense.",
      pillars: [
        { title: "Estrategias profesionales y familiares", body: "Estructuración migratoria para profesionales, ejecutivos y núcleos familiares completos, alineada con los objetivos de carrera, patrimonio y calidad de vida." },
        { title: "Empresarios e inversionistas", body: "Planificación jurídica para la expansión internacional de negocios, estructuración societaria en Estados Unidos e inversión calificada." },
        { title: "Evaluación de elegibilidad", body: "Diagnóstico individualizado de las categorías migratorias acordes al perfil profesional, empresarial y familiar del cliente." },
        { title: "Planificación a largo plazo", body: "Trayectorias construidas con visión de residencia permanente, ciudadanía, sucesión patrimonial y actuación internacional continua." },
      ],
      ctaTitle: "Agende una consulta estratégica.",
      ctaBody: "Descubra qué estrategia migratoria se ajusta a sus objetivos profesionales, patrimoniales y familiares.",
      ctaButton: "Agendar Consulta",
      faq: [
        { q: "¿Qué estrategia migratoria es la más adecuada para mi perfil?", a: "La elección depende de la combinación entre formación, experiencia, proyecto profesional, estructura familiar y horizonte patrimonial. Linhares Law evalúa todas las variables antes de cualquier recomendación." },
        { q: "¿Es posible combinar diferentes estrategias migratorias?", a: "Sí. Es común que los profesionales transiten entre visas de no inmigrante (como L-1, O-1 o E-2) y categorías de Green Card (EB-1, EB-2 NIW, EB-5) a lo largo de su trayectoria." },
        { q: "¿Linhares Law ofrece consultoría migratoria?", a: "No. Linhares Law es un despacho de abogados estadounidense con actuación exclusiva en inmigración, actuando como consejo jurídico permanente." },
      ],
      seoTitle: "Áreas de Práctica | Linhares Law",
      seoDescription:
        "Estrategias migratorias para profesionales, empresarios, inversionistas y familias. EB-2 NIW, EB-1, E-2, L-1, O-1, H-1B y EB-5.",
      seoFallbackDescription: "Estrategias jurídicas de inmigración estadounidense.",
    },
    visa: {
      heroEyebrow: "Áreas de Práctica",
      ctaSchedule: "Agendar Consulta",
      ctaAllAreas: "Ver todas las áreas",
      overview: "Visión General",
      eligibility: "Elegibilidad",
      benefits: "Beneficios",
      process: "Proceso",
      profilesEyebrow: "Perfiles Profesionales",
      profilesTitle: "Trayectorias representativas.",
      midCtaTitle: (a) => `Hable con nuestro equipo sobre ${a}.`,
      midCtaBody: (a) => `Evalúe con nuestros abogados si ${a} es la estrategia más adecuada para su trayectoria profesional y familiar.`,
      midCtaButton: "Hablar con nuestro equipo",
      quote:
        "“La inmigración es una decisión estratégica. Cada trayectoria exige un análisis individualizado y una estructura jurídica construida de acuerdo con los objetivos del cliente.”",
      quoteName: "Dr. André Linhares",
      quoteRole: "Abogado Fundador · Linhares Law",
      faqEyebrow: "Preguntas Frecuentes",
      faqTitle: (a) => `Aclaraciones sobre ${a}.`,
      relatedEyebrow: "Áreas Relacionadas",
      relatedTitle: "Otras estrategias migratorias.",
      finalTitle: "Agende una consulta estratégica.",
      finalBody: (a) => `Inicie una conversación institucional con nuestros abogados y evalúe si ${a} es la estrategia adecuada para sus objetivos.`,
      ctaCompare: "Comparar áreas",
    },
  },
};
