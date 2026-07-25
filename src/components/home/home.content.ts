import type { Locale } from "@/i18n/locales";

type Item = { icon: "landmark" | "flag" | "scale" | "trophy" | "star"; label: string };

export type HomeContent = {
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    ctaContact: string;
    ctaStrategies: string;
    prevSlide: string;
    nextSlide: string;
    goToSlide: (t: string) => string;
  };
  authority: {
    overview: { eyebrow: string; title: string; items: Item[] };
    slides: Array<{
      id: string;
      eyebrow: string;
      name?: string;
      title: string;
      description: string;
      portrait?: "andre" | "nicholas" | "juliana";
      icon?: "award" | "scale" | "star";
    }>;
  };
  practice: { eyebrow: string; h2: string; p1: string; p2: string; author: string };
  awards: {
    eyebrow: string;
    h2: string;
    sub: string;
    ibiTag: string;
    ibiTitle: string;
    footerLine: string;
    ctaAll: string;
    items: Array<{ title: string; org: string; year: string; desc: string }>;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    ctaAll: string;
    featuredLabel: string;
    learn: string;
    strategies: Array<{ slug: string; code: string; title: string; profile: string; desc: string }>;
  };
  leadership: {
    eyebrow: string;
    title: string;
    description: string;
    ctaAll: string;
    founder: { name: string; role: string; cred: string; bio: string };
    others: Array<{ slug: string; name: string; role: string; cred: string; bio: string }>;
  };
  thought: {
    eyebrow: string;
    caption: string;
    h2: string;
    sub: string;
    blocks: Array<{ k: string; v: string }>;
  };
  culture: {
    eyebrow: string;
    h2: string;
    sub: string;
    dateLine: string;
    stat1: string;
    stat2: string;
    badgeAlt: string;
  };
  offices: {
    eyebrow: string;
    h2: string;
    sub: string;
    labelHQ: string;
    labelRegional: string;
    list: Array<{ city: string; state: string; role: string; address: string }>;
  };
  publications: {
    eyebrowLead: string;
    h2: string;
    sub: string;
    ctaAll: string;
    readCta: string;
    items: Array<{ cat: string; title: string; meta: string }>;
  };
  finalCTA: {
    eyebrow: string;
    h2: string;
    sub: string;
    cta: string;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  pt: {
    hero: {
      eyebrow: "Linhares Law · Escritório de Advocacia de Imigração Americana",
      h1: "Estratégias migratórias conduzidas por advogados premiados internacionalmente.",
      sub: "Garantimos representação jurídica de excelência para que profissionais qualificados, investidores e famílias alcancem seus objetivos nos Estados Unidos com segurança e confiança.",
      ctaContact: "Agendar Consulta",
      ctaStrategies: "Conhecer nossas estratégias",
      prevSlide: "Slide anterior",
      nextSlide: "Próximo slide",
      goToSlide: (t) => `Ver ${t}`,
    },
    authority: {
      overview: {
        eyebrow: "Autoridade Internacional",
        title: "Reconhecimento institucional em imigração americana",
        items: [
          { icon: "landmark", label: "Único advogado brasileiro convidado como palestrante da AILA" },
          { icon: "flag", label: "Nicholas Perry, USCIS, DHS, ICE, CBP e Department of Justice" },
          { icon: "scale", label: "Juliana Mosquera, Florida Bar · +18 anos em imigração corporativa" },
          { icon: "trophy", label: "Entre os 10 Best Immigration Law Firms" },
          { icon: "star", label: "Mais de 14 anos de prática jurídica em imigração americana" },
        ],
      },
      slides: [
        { id: "andre", eyebrow: "Liderança Jurídica", name: "André Linhares, Esq.", title: "Único advogado brasileiro convidado como palestrante da AILA", description: "Participação como palestrante na principal associação americana de advogados de imigração, reconhecendo sua contribuição técnica para a advocacia migratória internacional.", portrait: "andre" },
        { id: "nicholas", eyebrow: "Experiência Federal", name: "Nicholas Perry", title: "Atuação nas principais agências federais americanas", description: "Trajetória profissional no USCIS, DHS, ICE, CBP e Department of Justice, proporcionando uma compreensão aprofundada do sistema migratório americano.", portrait: "nicholas" },
        { id: "juliana", eyebrow: "Imigração Corporativa", name: "Juliana Mosquera", title: "Florida Bar e imigração corporativa", description: "Mais de 18 anos assessorando empresas, executivos e profissionais em processos de imigração corporativa internacional.", portrait: "juliana" },
        { id: "ten-best", eyebrow: "Reconhecimento Internacional", name: "10 Best Immigration Law Firms", title: "Entre os principais escritórios de imigração americana", description: "Reconhecimento internacional concedido aos escritórios de maior excelência técnica e reputação em imigração nos Estados Unidos.", icon: "award" },
        { id: "years", eyebrow: "Tradição Jurídica", name: "+14 anos de prática", title: "Atuação exclusiva em imigração americana", description: "Mais de uma década assessorando profissionais, empresários, investidores e famílias em estratégias migratórias para os Estados Unidos.", icon: "scale" },
      ],
    },
    practice: {
      eyebrow: "Nossa Prática",
      h2: "Representando profissionais qualificados, investidores e famílias em estratégias de imigração para os Estados Unidos.",
      p1: "A Linhares Law atua exclusivamente em direito de imigração americana. Cada estratégia é construída a partir de uma leitura técnica precisa do perfil profissional, patrimonial e familiar do cliente, sustentada pela autoridade institucional de um escritório de advocacia reconhecido nos Estados Unidos.",
      p2: "Nossa atuação é pautada por discrição, profundidade técnica e relacionamento de longo prazo com cada cliente representado.",
      author: "Dr. André Linhares · Founding Attorney",
    },
    awards: {
      eyebrow: "Autoridade & Reconhecimento",
      h2: "Reconhecimento institucional por entidades de referência.",
      sub: "Premiações nacionais e internacionais que refletem consistência técnica, postura ética e padrão de atendimento.",
      ibiTag: "INTERNATIONAL BUSINESS INSTITUTE · 2025, PRESENTE",
      ibiTitle: "Distinção internacional por excelência na prática jurídica de imigração americana.",
      footerLine: "Distinções institucionais · 2026, PRESENTE",
      ctaAll: "Ver todas as premiações",
      items: [
        { title: "10 Best Law Firms", org: "American Institute of Legal Professionals", year: "2026", desc: "Immigration Law, Linhares Law, Florida." },
        { title: "The Law Awards", org: "Winner, Immigration Practice", year: "2024", desc: "Distinção internacional pela excelência na prática de imigração americana." },
        { title: "Great Place To Work®", org: "Certified, Estados Unidos", year: "2024, 2026", desc: "Reconhecimento institucional pela cultura organizacional do escritório." },
      ],
    },
    services: {
      eyebrow: "Vistos",
      title: "Estratégias jurídicas para diferentes perfis internacionais.",
      description: "Cada categoria de visto exige uma leitura jurídica precisa. Definimos a estratégia adequada ao perfil profissional, patrimonial e familiar de cada cliente.",
      ctaAll: "Ver todos os vistos",
      featuredLabel: "Visto em destaque",
      learn: "Conhecer estratégia →",
      strategies: [
        { slug: "eb2-niw", code: "EB-2 NIW", title: "Dispensa por Interesse Nacional", profile: "Profissionais qualificados", desc: "Para profissionais altamente qualificados cuja atuação representa interesse nacional para os Estados Unidos. O EB-2 NIW permite solicitar o Green Card sem depender de uma oferta de emprego ou do patrocínio de uma empresa, oferecendo um caminho estratégico para pesquisadores, médicos, engenheiros, empresários, executivos e outros especialistas com trajetória de destaque." },
        { slug: "eb1", code: "EB-1", title: "Habilidade Extraordinária", profile: "Pesquisadores · Executivos", desc: "Residência permanente para profissionais com habilidades extraordinárias, pesquisadores de destaque e executivos multinacionais." },
        { slug: "e2", code: "E-2", title: "Investidor por Tratado Comercial", profile: "Investidores · Empresários", desc: "Para investidores que estabelecem ou adquirem negócios substanciais nos Estados Unidos." },
        { slug: "l1", code: "L-1", title: "Transferência entre Empresas", profile: "Executivos · Gestores", desc: "Transferência de executivos, gestores e profissionais com conhecimento especializado entre empresas multinacionais." },
        { slug: "o1", code: "O-1", title: "Profissionais com Habilidade Extraordinária", profile: "Talentos de destaque", desc: "Para profissionais com reconhecimento sustentado, nacional ou internacional, em suas áreas de atuação." },
        { slug: "eb5", code: "EB-5", title: "Investidor Imigrante", profile: "Investidores qualificados", desc: "Residência permanente por meio de investimento substancial em empreendimento gerador de empregos nos Estados Unidos." },
      ],
    },
    leadership: {
      eyebrow: "Liderança Jurídica",
      title: "Advogados dedicados à sua trajetória migratória.",
      description: "Uma equipe jurídica com atuação exclusiva em imigração americana, licenciada perante as autoridades federais dos Estados Unidos.",
      ctaAll: "Conhecer a equipe",
      founder: {
        name: "André Linhares, Esq.",
        role: "Advogado Fundador",
        cred: "NEW YORK / WASHINGTON D.C BAR · U.S. IMMIGRATION LAW",
        bio: "Fundador da Linhares Law e autoridade reconhecida em direito de imigração americana. Há mais de 14 anos representando profissionais, executivos, investidores e famílias internacionais perante as autoridades federais dos Estados Unidos.",
      },
      others: [
        { slug: "nicholas-perry", name: "Nicholas Perry, Esq.", role: "ADVOGADO", cred: "NEBRASKA BAR", bio: "Advogado de imigração com formação americana e atuação dedicada à elaboração e defesa de petições de visto perante as autoridades federais. Tendo atuado ao longo de sua carreira nas principais agências federais americanas, inclusive como diretor setorial do U.S. Citizenship and Immigration Services (USCIS)." },
        { slug: "juliana-mosquera-soler", name: "Juliana Mosquera Soler, Esq.", role: "ADVOGADA", cred: "Florida Bar · Puerto Rico Bar", bio: "Advogada especializada em imigração corporativa, com mais de 18 anos de experiência em casos baseados em emprego como EB-1, EB-2 NIW e O-1. Graduada em Direito nos EUA (Juris Doctor) com distinção Magna Cum Laude (Melhores 10%). Licenciada na Flórida e em Puerto Rico." },
      ],
    },
    thought: {
      eyebrow: "Conhecimento & Autoridade",
      caption: "The Next Chapter · Vistos Imigratórios para Profissionais e Empresários",
      h2: "Autoridade construída pela prática.",
      sub: "A presença do Dr. André Linhares em palestras, entrevistas e painéis institucionais é o reflexo direto da profundidade técnica e do impacto real de sua atuação no direito de imigração americano.",
      blocks: [
        { k: "Palestras", v: "Conferências para empresários, profissionais e investidores internacionais." },
        { k: "Mídia", v: "Entrevistas e contribuições editoriais em veículos qualificados." },
        { k: "Conteúdo Jurídico", v: "Publicações técnicas e análises sobre estratégia migratória americana." },
        { k: "Setor", v: "Participação em painéis e eventos especializados em imigração americana." },
      ],
    },
    culture: {
      eyebrow: "Excelência Organizacional",
      h2: "Great Place To Work® · Certificada nos Estados Unidos.",
      sub: "A consistência interna que sustenta o padrão de atendimento entregue a cada cliente, reconhecida por uma das mais respeitadas certificações organizacionais do mundo.",
      dateLine: "USA · Oct 2024, Oct 2026",
      stat1: "dos colaboradores se sentiram bem-vindos ao ingressar no escritório.",
      stat2: "consideram a Linhares Law um excelente lugar para trabalhar.",
      badgeAlt: "Great Place To Work Certified, Linhares Law USA",
    },
    offices: {
      eyebrow: "Presença nos Estados Unidos",
      h2: "Quatro escritórios em pontos estratégicos do território americano.",
      sub: "Uma estrutura nacional construída para representar clientes internacionais com proximidade institucional, alcance federal e atuação coordenada em todo território americano. Com sedes em locais estratégicos.",
      labelHQ: "Sede",
      labelRegional: "Escritório Regional",
      list: [
        { city: "Orlando", state: "Florida", role: "Sede", address: "2295 S Hiawassee Rd, Suite 414, Orlando, FL 32835" },
        { city: "Miami", state: "Florida", role: "Escritório Regional", address: "1200 Brickell Ave, Miami, FL 33131" },
        { city: "New York", state: "New York", role: "Escritório Regional", address: "77 Madison Ave, New York, NY 10022" },
        { city: "Salt Lake City", state: "Utah", role: "Escritório Regional", address: "136 E S Temple, Salt Lake City, UT 84111" },
      ],
    },
    publications: {
      eyebrowLead: "Linhares Law · Publicações",
      h2: "Análises jurídicas em imigração americana.",
      sub: "Artigos e análises técnicas sobre estratégia migratória, jurisprudência e práticas das autoridades federais de imigração dos Estados Unidos.",
      ctaAll: "Ver todas as publicações",
      readCta: "Ler análise →",
      items: [
        { cat: "Estratégia Migratória", title: "EB-2 NIW: o que caracteriza interesse nacional em uma petição americana.", meta: "Análise técnica" },
        { cat: "Investidores", title: "E-2 e EB-5: critérios jurídicos para escolher a estratégia adequada ao perfil patrimonial.", meta: "Investidores internacionais" },
        { cat: "Executivos", title: "L-1 e O-1: caminhos para executivos e talentos de destaque nos Estados Unidos.", meta: "Carreira internacional" },
      ],
    },
    finalCTA: {
      eyebrow: "Planejamento Imigratório",
      h2: "Planejamento migratório para objetivos de longo prazo.",
      sub: "Iniciar uma conversa institucional com a Linhares Law é o primeiro passo para construir uma estratégia jurídica sólida, orientada por advogados americanos e alinhada aos seus objetivos profissionais, patrimoniais e familiares.",
      cta: "Agendar Consulta",
    },
  },
  en: {
    hero: {
      eyebrow: "Linhares Law · U.S. Immigration Law Firm",
      h1: "U.S. immigration strategies led by internationally recognized attorneys.",
      sub: "We provide the highest standard of legal representation so that qualified professionals, investors and families reach their goals in the United States with confidence and security.",
      ctaContact: "Schedule a Consultation",
      ctaStrategies: "Explore our strategies",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: (t) => `View ${t}`,
    },
    authority: {
      overview: {
        eyebrow: "International Authority",
        title: "Institutional recognition in U.S. immigration law",
        items: [
          { icon: "landmark", label: "The only Brazilian attorney invited to speak at AILA" },
          { icon: "flag", label: "Nicholas Perry — USCIS, DHS, ICE, CBP and Department of Justice" },
          { icon: "scale", label: "Juliana Mosquera, Florida Bar · 18+ years in corporate immigration" },
          { icon: "trophy", label: "Ranked among the 10 Best Immigration Law Firms" },
          { icon: "star", label: "More than 14 years of exclusive U.S. immigration practice" },
        ],
      },
      slides: [
        { id: "andre", eyebrow: "Legal Leadership", name: "André Linhares, Esq.", title: "The only Brazilian attorney invited to speak at AILA", description: "A speaker at the leading U.S. association of immigration attorneys, in recognition of his technical contribution to international immigration advocacy.", portrait: "andre" },
        { id: "nicholas", eyebrow: "Federal Experience", name: "Nicholas Perry", title: "Career across the leading U.S. federal agencies", description: "Professional background at USCIS, DHS, ICE, CBP and the Department of Justice, offering deep insight into the U.S. immigration system.", portrait: "nicholas" },
        { id: "juliana", eyebrow: "Corporate Immigration", name: "Juliana Mosquera", title: "Florida Bar and corporate immigration", description: "More than 18 years advising companies, executives and professionals on international corporate immigration matters.", portrait: "juliana" },
        { id: "ten-best", eyebrow: "International Recognition", name: "10 Best Immigration Law Firms", title: "Among the leading U.S. immigration firms", description: "International recognition granted to firms with the highest technical excellence and reputation in U.S. immigration practice.", icon: "award" },
        { id: "years", eyebrow: "Legal Tradition", name: "14+ years of practice", title: "Exclusive focus on U.S. immigration", description: "More than a decade advising professionals, entrepreneurs, investors and families on immigration strategies for the United States.", icon: "scale" },
      ],
    },
    practice: {
      eyebrow: "Our Practice",
      h2: "Representing qualified professionals, investors and families in U.S. immigration strategies.",
      p1: "Linhares Law focuses exclusively on U.S. immigration law. Each strategy is built on a precise technical reading of the client's professional, financial and family profile, supported by the institutional authority of a recognized U.S. law firm.",
      p2: "Our practice is defined by discretion, technical depth and long-term relationships with every client we represent.",
      author: "André Linhares, Esq. · Founding Attorney",
    },
    awards: {
      eyebrow: "Authority & Recognition",
      h2: "Institutional recognition by leading organizations.",
      sub: "National and international honors that reflect technical consistency, ethical posture and standard of service.",
      ibiTag: "INTERNATIONAL BUSINESS INSTITUTE · 2025 – PRESENT",
      ibiTitle: "International distinction for excellence in U.S. immigration legal practice.",
      footerLine: "Institutional distinctions · 2026 – PRESENT",
      ctaAll: "View all recognitions",
      items: [
        { title: "10 Best Law Firms", org: "American Institute of Legal Professionals", year: "2026", desc: "Immigration Law · Linhares Law · Florida." },
        { title: "The Law Awards", org: "Winner, Immigration Practice", year: "2024", desc: "International distinction for excellence in U.S. immigration practice." },
        { title: "Great Place To Work®", org: "Certified, United States", year: "2024, 2026", desc: "Institutional recognition for the firm's organizational culture." },
      ],
    },
    services: {
      eyebrow: "Visas",
      title: "Legal strategies for different international profiles.",
      description: "Each visa category calls for a precise legal reading. We define the strategy that fits each client's professional, financial and family profile.",
      ctaAll: "View all visas",
      featuredLabel: "Featured visa",
      learn: "Explore strategy →",
      strategies: [
        { slug: "eb2-niw", code: "EB-2 NIW", title: "National Interest Waiver", profile: "Qualified professionals", desc: "For highly qualified professionals whose work is in the national interest of the United States. The EB-2 NIW allows a Green Card petition without an employer sponsor or job offer — a strategic path for researchers, physicians, engineers, entrepreneurs, executives and other specialists with outstanding trajectories." },
        { slug: "eb1", code: "EB-1", title: "Extraordinary Ability", profile: "Researchers · Executives", desc: "Permanent residence for professionals of extraordinary ability, outstanding researchers and multinational executives." },
        { slug: "e2", code: "E-2", title: "Treaty Investor", profile: "Investors · Entrepreneurs", desc: "For investors establishing or acquiring substantial businesses in the United States under a qualifying treaty." },
        { slug: "l1", code: "L-1", title: "Intracompany Transferee", profile: "Executives · Managers", desc: "Transfer of executives, managers and specialized-knowledge professionals within multinational companies." },
        { slug: "o1", code: "O-1", title: "Individuals of Extraordinary Ability", profile: "Distinguished talent", desc: "For professionals with sustained national or international recognition in their fields." },
        { slug: "eb5", code: "EB-5", title: "Immigrant Investor", profile: "Qualified investors", desc: "Permanent residence through substantial investment in a job-creating enterprise in the United States." },
      ],
    },
    leadership: {
      eyebrow: "Legal Leadership",
      title: "Attorneys dedicated to your immigration trajectory.",
      description: "A legal team focused exclusively on U.S. immigration, licensed before the federal authorities of the United States.",
      ctaAll: "Meet the team",
      founder: {
        name: "André Linhares, Esq.",
        role: "Founding Attorney",
        cred: "NEW YORK / WASHINGTON D.C. BAR · U.S. IMMIGRATION LAW",
        bio: "Founder of Linhares Law and a recognized authority in U.S. immigration law. For more than 14 years he has represented professionals, executives, investors and international families before U.S. federal authorities.",
      },
      others: [
        { slug: "nicholas-perry", name: "Nicholas Perry, Esq.", role: "ATTORNEY", cred: "NEBRASKA BAR", bio: "U.S.-trained immigration attorney dedicated to drafting and defending visa petitions before federal authorities. Throughout his career he has served at leading U.S. federal agencies, including as a sector director at U.S. Citizenship and Immigration Services (USCIS)." },
        { slug: "juliana-mosquera-soler", name: "Juliana Mosquera Soler, Esq.", role: "ATTORNEY", cred: "Florida Bar · Puerto Rico Bar", bio: "Attorney focused on corporate immigration, with more than 18 years of experience in employment-based cases such as EB-1, EB-2 NIW and O-1. Juris Doctor from a U.S. law school, Magna Cum Laude (Top 10%). Licensed in Florida and Puerto Rico." },
      ],
    },
    thought: {
      eyebrow: "Knowledge & Authority",
      caption: "The Next Chapter · U.S. Visas for Professionals and Entrepreneurs",
      h2: "Authority built through practice.",
      sub: "André Linhares's presence at conferences, interviews and institutional panels is a direct reflection of the technical depth and real impact of his work in U.S. immigration law.",
      blocks: [
        { k: "Speaking", v: "Conferences for international entrepreneurs, professionals and investors." },
        { k: "Media", v: "Interviews and editorial contributions in qualified outlets." },
        { k: "Legal Content", v: "Technical publications and analyses on U.S. immigration strategy." },
        { k: "Sector", v: "Participation in panels and events specialized in U.S. immigration." },
      ],
    },
    culture: {
      eyebrow: "Organizational Excellence",
      h2: "Great Place To Work® · Certified in the United States.",
      sub: "The internal consistency that supports the standard of service delivered to every client, recognized by one of the most respected organizational certifications in the world.",
      dateLine: "USA · Oct 2024, Oct 2026",
      stat1: "of team members felt welcomed when joining the firm.",
      stat2: "consider Linhares Law an excellent place to work.",
      badgeAlt: "Great Place To Work Certified · Linhares Law USA",
    },
    offices: {
      eyebrow: "Presence in the United States",
      h2: "Four offices at strategic points across the United States.",
      sub: "A national structure built to represent international clients with institutional proximity, federal reach and coordinated practice across the United States, with offices in strategic locations.",
      labelHQ: "Headquarters",
      labelRegional: "Regional Office",
      list: [
        { city: "Orlando", state: "Florida", role: "Headquarters", address: "2295 S Hiawassee Rd, Suite 414, Orlando, FL 32835" },
        { city: "Miami", state: "Florida", role: "Regional Office", address: "1200 Brickell Ave, Miami, FL 33131" },
        { city: "New York", state: "New York", role: "Regional Office", address: "77 Madison Ave, New York, NY 10022" },
        { city: "Salt Lake City", state: "Utah", role: "Regional Office", address: "136 E S Temple, Salt Lake City, UT 84111" },
      ],
    },
    publications: {
      eyebrowLead: "Linhares Law · Insights",
      h2: "Legal analyses on U.S. immigration.",
      sub: "Articles and technical analyses on immigration strategy, case law and the practices of U.S. federal immigration authorities.",
      ctaAll: "View all insights",
      readCta: "Read analysis →",
      items: [
        { cat: "Immigration Strategy", title: "EB-2 NIW: what qualifies as national interest in a U.S. petition.", meta: "Technical analysis" },
        { cat: "Investors", title: "E-2 and EB-5: legal criteria for choosing the right strategy for each investor profile.", meta: "International investors" },
        { cat: "Executives", title: "L-1 and O-1: paths for executives and distinguished talent to the United States.", meta: "International careers" },
      ],
    },
    finalCTA: {
      eyebrow: "Immigration Planning",
      h2: "Immigration planning for long-term objectives.",
      sub: "Beginning an institutional conversation with Linhares Law is the first step toward building a solid legal strategy — led by U.S. attorneys and aligned with your professional, financial and family goals.",
      cta: "Schedule a Consultation",
    },
  },
  es: {
    hero: {
      eyebrow: "Linhares Law · Despacho de Inmigración a EE. UU.",
      h1: "Estrategias migratorias conducidas por abogados reconocidos internacionalmente.",
      sub: "Garantizamos representación jurídica del más alto nivel para que profesionales calificados, inversionistas y familias alcancen sus objetivos en Estados Unidos con seguridad y confianza.",
      ctaContact: "Agendar Consulta",
      ctaStrategies: "Conocer nuestras estrategias",
      prevSlide: "Diapositiva anterior",
      nextSlide: "Diapositiva siguiente",
      goToSlide: (t) => `Ver ${t}`,
    },
    authority: {
      overview: {
        eyebrow: "Autoridad Internacional",
        title: "Reconocimiento institucional en inmigración a EE. UU.",
        items: [
          { icon: "landmark", label: "Único abogado brasileño invitado como conferencista de AILA" },
          { icon: "flag", label: "Nicholas Perry — USCIS, DHS, ICE, CBP y Department of Justice" },
          { icon: "scale", label: "Juliana Mosquera, Florida Bar · +18 años en inmigración corporativa" },
          { icon: "trophy", label: "Entre los 10 Best Immigration Law Firms" },
          { icon: "star", label: "Más de 14 años de práctica exclusiva en inmigración a EE. UU." },
        ],
      },
      slides: [
        { id: "andre", eyebrow: "Liderazgo Jurídico", name: "André Linhares, Esq.", title: "Único abogado brasileño invitado como conferencista de AILA", description: "Participación como conferencista en la principal asociación estadounidense de abogados de inmigración, en reconocimiento a su aporte técnico a la abogacía migratoria internacional.", portrait: "andre" },
        { id: "nicholas", eyebrow: "Experiencia Federal", name: "Nicholas Perry", title: "Trayectoria en las principales agencias federales", description: "Trayectoria profesional en USCIS, DHS, ICE, CBP y el Department of Justice, con una comprensión profunda del sistema migratorio estadounidense.", portrait: "nicholas" },
        { id: "juliana", eyebrow: "Inmigración Corporativa", name: "Juliana Mosquera", title: "Florida Bar e inmigración corporativa", description: "Más de 18 años asesorando empresas, ejecutivos y profesionales en procesos de inmigración corporativa internacional.", portrait: "juliana" },
        { id: "ten-best", eyebrow: "Reconocimiento Internacional", name: "10 Best Immigration Law Firms", title: "Entre los principales despachos de inmigración de EE. UU.", description: "Reconocimiento internacional otorgado a los despachos con mayor excelencia técnica y reputación en inmigración a EE. UU.", icon: "award" },
        { id: "years", eyebrow: "Tradición Jurídica", name: "+14 años de práctica", title: "Enfoque exclusivo en inmigración a EE. UU.", description: "Más de una década asesorando a profesionales, empresarios, inversionistas y familias en estrategias migratorias hacia Estados Unidos.", icon: "scale" },
      ],
    },
    practice: {
      eyebrow: "Nuestra Práctica",
      h2: "Representando a profesionales calificados, inversionistas y familias en estrategias de inmigración a EE. UU.",
      p1: "Linhares Law se dedica exclusivamente al derecho de inmigración estadounidense. Cada estrategia se construye a partir de una lectura técnica precisa del perfil profesional, patrimonial y familiar del cliente, respaldada por la autoridad institucional de un despacho reconocido en Estados Unidos.",
      p2: "Nuestra práctica se define por la discreción, la profundidad técnica y la relación de largo plazo con cada cliente representado.",
      author: "André Linhares, Esq. · Founding Attorney",
    },
    awards: {
      eyebrow: "Autoridad y Reconocimiento",
      h2: "Reconocimiento institucional por entidades de referencia.",
      sub: "Distinciones nacionales e internacionales que reflejan consistencia técnica, postura ética y estándar de servicio.",
      ibiTag: "INTERNATIONAL BUSINESS INSTITUTE · 2025 – PRESENTE",
      ibiTitle: "Distinción internacional por excelencia en la práctica jurídica de inmigración a EE. UU.",
      footerLine: "Distinciones institucionales · 2026 – PRESENTE",
      ctaAll: "Ver todos los reconocimientos",
      items: [
        { title: "10 Best Law Firms", org: "American Institute of Legal Professionals", year: "2026", desc: "Immigration Law · Linhares Law · Florida." },
        { title: "The Law Awards", org: "Ganador, Práctica de Inmigración", year: "2024", desc: "Distinción internacional por excelencia en la práctica de inmigración a EE. UU." },
        { title: "Great Place To Work®", org: "Certificado, Estados Unidos", year: "2024, 2026", desc: "Reconocimiento institucional por la cultura organizacional del despacho." },
      ],
    },
    services: {
      eyebrow: "Visas",
      title: "Estrategias jurídicas para distintos perfiles internacionales.",
      description: "Cada categoría de visa exige una lectura jurídica precisa. Definimos la estrategia adecuada al perfil profesional, patrimonial y familiar de cada cliente.",
      ctaAll: "Ver todas las visas",
      featuredLabel: "Visa destacada",
      learn: "Conocer estrategia →",
      strategies: [
        { slug: "eb2-niw", code: "EB-2 NIW", title: "Exención por Interés Nacional", profile: "Profesionales calificados", desc: "Para profesionales altamente calificados cuya labor representa un interés nacional para Estados Unidos. El EB-2 NIW permite solicitar la Green Card sin depender de una oferta de empleo ni del patrocinio de una empresa: una vía estratégica para investigadores, médicos, ingenieros, empresarios, ejecutivos y otros especialistas con trayectorias destacadas." },
        { slug: "eb1", code: "EB-1", title: "Habilidad Extraordinaria", profile: "Investigadores · Ejecutivos", desc: "Residencia permanente para profesionales con habilidades extraordinarias, investigadores destacados y ejecutivos multinacionales." },
        { slug: "e2", code: "E-2", title: "Inversionista por Tratado", profile: "Inversionistas · Empresarios", desc: "Para inversionistas que establecen o adquieren negocios sustanciales en Estados Unidos bajo un tratado comercial." },
        { slug: "l1", code: "L-1", title: "Transferencia Intraempresarial", profile: "Ejecutivos · Gerentes", desc: "Transferencia de ejecutivos, gerentes y profesionales con conocimiento especializado entre empresas multinacionales." },
        { slug: "o1", code: "O-1", title: "Habilidad Extraordinaria Individual", profile: "Talentos destacados", desc: "Para profesionales con reconocimiento sostenido, nacional o internacional, en sus áreas de actuación." },
        { slug: "eb5", code: "EB-5", title: "Inversionista Inmigrante", profile: "Inversionistas calificados", desc: "Residencia permanente mediante inversión sustancial en una empresa generadora de empleos en Estados Unidos." },
      ],
    },
    leadership: {
      eyebrow: "Liderazgo Jurídico",
      title: "Abogados dedicados a su trayectoria migratoria.",
      description: "Un equipo jurídico enfocado exclusivamente en inmigración a EE. UU., habilitado ante las autoridades federales de Estados Unidos.",
      ctaAll: "Conocer al equipo",
      founder: {
        name: "André Linhares, Esq.",
        role: "Abogado Fundador",
        cred: "NEW YORK / WASHINGTON D.C. BAR · U.S. IMMIGRATION LAW",
        bio: "Fundador de Linhares Law y autoridad reconocida en derecho de inmigración estadounidense. Durante más de 14 años ha representado a profesionales, ejecutivos, inversionistas y familias internacionales ante las autoridades federales de Estados Unidos.",
      },
      others: [
        { slug: "nicholas-perry", name: "Nicholas Perry, Esq.", role: "ABOGADO", cred: "NEBRASKA BAR", bio: "Abogado de inmigración con formación estadounidense y práctica dedicada a la elaboración y defensa de peticiones de visa ante las autoridades federales. A lo largo de su carrera ha ejercido en las principales agencias federales estadounidenses, incluyendo un cargo directivo en U.S. Citizenship and Immigration Services (USCIS)." },
        { slug: "juliana-mosquera-soler", name: "Juliana Mosquera Soler, Esq.", role: "ABOGADA", cred: "Florida Bar · Puerto Rico Bar", bio: "Abogada especializada en inmigración corporativa, con más de 18 años de experiencia en casos basados en empleo como EB-1, EB-2 NIW y O-1. Juris Doctor por una facultad estadounidense, Magna Cum Laude (Top 10%). Habilitada en Florida y Puerto Rico." },
      ],
    },
    thought: {
      eyebrow: "Conocimiento y Autoridad",
      caption: "The Next Chapter · Visas para Profesionales y Empresarios",
      h2: "Autoridad construida por la práctica.",
      sub: "La presencia del Dr. André Linhares en conferencias, entrevistas y paneles institucionales es reflejo directo de la profundidad técnica y el impacto real de su labor en el derecho de inmigración estadounidense.",
      blocks: [
        { k: "Conferencias", v: "Presentaciones para empresarios, profesionales e inversionistas internacionales." },
        { k: "Medios", v: "Entrevistas y contribuciones editoriales en medios calificados." },
        { k: "Contenido Jurídico", v: "Publicaciones técnicas y análisis sobre estrategia migratoria a EE. UU." },
        { k: "Sector", v: "Participación en paneles y eventos especializados en inmigración a EE. UU." },
      ],
    },
    culture: {
      eyebrow: "Excelencia Organizacional",
      h2: "Great Place To Work® · Certificado en Estados Unidos.",
      sub: "La consistencia interna que sostiene el estándar de servicio entregado a cada cliente, reconocida por una de las certificaciones organizacionales más respetadas del mundo.",
      dateLine: "USA · Oct 2024, Oct 2026",
      stat1: "de los colaboradores se sintieron bienvenidos al ingresar al despacho.",
      stat2: "consideran a Linhares Law un excelente lugar para trabajar.",
      badgeAlt: "Great Place To Work Certified · Linhares Law USA",
    },
    offices: {
      eyebrow: "Presencia en Estados Unidos",
      h2: "Cuatro oficinas en puntos estratégicos del territorio estadounidense.",
      sub: "Una estructura nacional construida para representar a clientes internacionales con proximidad institucional, alcance federal y práctica coordinada en todo Estados Unidos, con sedes en ubicaciones estratégicas.",
      labelHQ: "Sede Principal",
      labelRegional: "Oficina Regional",
      list: [
        { city: "Orlando", state: "Florida", role: "Sede Principal", address: "2295 S Hiawassee Rd, Suite 414, Orlando, FL 32835" },
        { city: "Miami", state: "Florida", role: "Oficina Regional", address: "1200 Brickell Ave, Miami, FL 33131" },
        { city: "New York", state: "New York", role: "Oficina Regional", address: "77 Madison Ave, New York, NY 10022" },
        { city: "Salt Lake City", state: "Utah", role: "Oficina Regional", address: "136 E S Temple, Salt Lake City, UT 84111" },
      ],
    },
    publications: {
      eyebrowLead: "Linhares Law · Publicaciones",
      h2: "Análisis jurídicos sobre inmigración a EE. UU.",
      sub: "Artículos y análisis técnicos sobre estrategia migratoria, jurisprudencia y prácticas de las autoridades federales de inmigración estadounidenses.",
      ctaAll: "Ver todas las publicaciones",
      readCta: "Leer análisis →",
      items: [
        { cat: "Estrategia Migratoria", title: "EB-2 NIW: qué caracteriza el interés nacional en una petición estadounidense.", meta: "Análisis técnico" },
        { cat: "Inversionistas", title: "E-2 y EB-5: criterios jurídicos para elegir la estrategia adecuada al perfil patrimonial.", meta: "Inversionistas internacionales" },
        { cat: "Ejecutivos", title: "L-1 y O-1: caminos para ejecutivos y talentos destacados hacia Estados Unidos.", meta: "Carrera internacional" },
      ],
    },
    finalCTA: {
      eyebrow: "Planificación Migratoria",
      h2: "Planificación migratoria para objetivos de largo plazo.",
      sub: "Iniciar una conversación institucional con Linhares Law es el primer paso para construir una estrategia jurídica sólida — orientada por abogados estadounidenses y alineada con sus objetivos profesionales, patrimoniales y familiares.",
      cta: "Agendar Consulta",
    },
  },
};
