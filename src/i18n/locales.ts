export type Locale = "pt" | "en" | "es";

export const LOCALES: Locale[] = ["pt", "en", "es"];
export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_LABEL: Record<Locale, string> = { pt: "PT", en: "EN", es: "ES" };
export const LOCALE_HREFLANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es",
};
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-US",
};

export const dict = {
  pt: {
    brand: "Linhares Law",
    slogan: "A Hora é Agora.",
    tagline: "Imigração Americana · Escritório de Advocacia",
    cta: "Agendar Consulta",
    comingSoon: "Em preparação",
    comingSoonBody:
      "Esta seção do nosso site institucional está em curadoria final. Em breve publicaremos o conteúdo completo.",
    nav: {
      about: "Quem Somos",
      services: "Vistos",
      team: "Equipe",
      awards: "Reconhecimentos",
      media: "Na Mídia",
      success: "Depoimentos",
      blog: "Publicações",
      contact: "Contato",
      offices: "Escritórios",
      visasSubmenu: "Vistos Imigratórios",
      seeAllVisas: "Ver todos os vistos",
    },
    footer: {
      about:
        "A Linhares Law é um escritório de advocacia dedicado exclusivamente à imigração americana, representando profissionais, executivos, investidores e famílias.",
      navigation: "Navegação",
      offices: "Escritórios",
      contact: "Contato",
      rights: "Todos os direitos reservados.",
      attribution:
        "Atuação institucional · Orlando · Miami · New York · Salt Lake City",
    },
    pages: {
      home: { title: "Linhares Law", intro: "Escritório de advocacia dedicado à imigração americana, com atuação institucional em Orlando, Miami, New York e Salt Lake City." },
      about: { title: "Quem Somos", intro: "Uma prática jurídica fundamentada em rigor técnico, discrição e atendimento personalizado." },
      services: { title: "Vistos", intro: "Estratégias de imigração para profissionais, executivos, investidores e famílias internacionais." },
      team: { title: "Equipe", intro: "Advogados e profissionais dedicados a representar trajetórias de excelência." },
      awards: { title: "Reconhecimentos", intro: "Distinções institucionais que refletem nossa reputação e consistência." },
      media: { title: "Na Mídia", intro: "Entrevistas, aparições e contribuições editoriais em veículos de referência." },
      success: { title: "Depoimentos", intro: "Trajetórias representativas de aprovações conquistadas por nossos clientes." },
      blog: { title: "Publicações", intro: "Análises jurídicas, atualizações regulatórias e perspectivas institucionais." },
      contact: { title: "Contato", intro: "Inicie uma conversa institucional com nossa equipe." },
      offices: { title: "Escritórios", intro: "Orlando · Miami · New York · Salt Lake City." },
    },
  },
  en: {
    brand: "Linhares Law",
    slogan: "The Time Is Now.",
    tagline: "U.S. Immigration · Boutique Law Firm",
    cta: "Schedule a Consultation",
    comingSoon: "Forthcoming",
    comingSoonBody:
      "This section of our institutional site is in final editorial preparation. The full content will be published shortly.",
    nav: {
      about: "About",
      services: "Visas",
      team: "Team",
      awards: "Recognition",
      media: "Press",
      success: "Testimonials",
      blog: "Insights",
      contact: "Contact",
      offices: "Offices",
      visasSubmenu: "U.S. Visa Categories",
      seeAllVisas: "View all visa categories",
    },
    footer: {
      about:
        "Linhares Law is a boutique U.S. immigration law firm serving international professionals, executives, investors and families.",
      navigation: "Navigation",
      offices: "Offices",
      contact: "Contact",
      rights: "All rights reserved.",
      attribution:
        "Institutional practice · Orlando · Miami · New York · Salt Lake City",
    },
    pages: {
      home: { title: "Linhares Law", intro: "A boutique U.S. immigration law firm with institutional presence in Orlando, Miami, New York and Salt Lake City." },
      about: { title: "About the Firm", intro: "A boutique practice grounded in legal rigor, discretion and personal counsel." },
      services: { title: "Visas", intro: "Immigration strategies for international professionals, executives, investors and families." },
      team: { title: "Team", intro: "Attorneys and specialists devoted to representing trajectories of excellence." },
      awards: { title: "Recognition", intro: "Institutional honors reflecting our reputation and consistency." },
      media: { title: "Press", intro: "Features, interviews and editorial contributions across leading outlets." },
      success: { title: "Testimonials", intro: "Real stories from clients who built their U.S. trajectory with Linhares Law." },
      blog: { title: "Insights", intro: "Legal analyses, regulatory updates and institutional perspectives." },
      contact: { title: "Contact", intro: "Begin an institutional conversation with our team." },
      offices: { title: "Offices", intro: "Orlando · Miami · New York · Salt Lake City." },
    },
  },
  es: {
    brand: "Linhares Law",
    slogan: "La Hora es Ahora.",
    tagline: "Inmigración a EE. UU. · Despacho Boutique",
    cta: "Agendar Consulta",
    comingSoon: "Próximamente",
    comingSoonBody:
      "Esta sección de nuestro sitio institucional está en preparación editorial final. El contenido completo se publicará en breve.",
    nav: {
      about: "Nosotros",
      services: "Visas",
      team: "Equipo",
      awards: "Reconocimientos",
      media: "En los Medios",
      success: "Testimonios",
      blog: "Publicaciones",
      contact: "Contacto",
      offices: "Oficinas",
      visasSubmenu: "Categorías de Visa",
      seeAllVisas: "Ver todas las visas",
    },
    footer: {
      about:
        "Linhares Law es un despacho boutique de inmigración a Estados Unidos para profesionales, ejecutivos, inversionistas y familias internacionales.",
      navigation: "Navegación",
      offices: "Oficinas",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      attribution:
        "Práctica institucional · Orlando · Miami · New York · Salt Lake City",
    },
    pages: {
      home: { title: "Linhares Law", intro: "Un despacho boutique de inmigración a EE. UU. con presencia institucional en Orlando, Miami, New York y Salt Lake City." },
      about: { title: "Nosotros", intro: "Una práctica boutique fundada en rigor jurídico, discreción y atención personalizada." },
      services: { title: "Visas", intro: "Estrategias de inmigración para profesionales, ejecutivos, inversionistas y familias internacionales." },
      team: { title: "Equipo", intro: "Abogados y especialistas dedicados a representar trayectorias de excelencia." },
      awards: { title: "Reconocimientos", intro: "Distinciones institucionales que reflejan nuestra reputación y consistencia." },
      media: { title: "En los Medios", intro: "Apariciones, entrevistas y contribuciones editoriales en medios relevantes." },
      success: { title: "Testimonios", intro: "Historias reales de clientes que construyeron su trayectoria en EE. UU. con Linhares Law." },
      blog: { title: "Publicaciones", intro: "Análisis, actualizaciones regulatorias y perspectivas institucionales." },
      contact: { title: "Contacto", intro: "Inicie una conversación institucional con nuestro equipo." },
      offices: { title: "Oficinas", intro: "Orlando · Miami · New York · Salt Lake City." },
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];
