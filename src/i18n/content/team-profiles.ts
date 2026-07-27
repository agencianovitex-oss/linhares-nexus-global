import type { Locale } from "@/i18n/locales";
import andre from "@/assets/team-andre.jpg";
import andreAlt from "@/assets/andre-5.jpg";
import andreSpeaking from "@/assets/andre-speaking-01.jpg";
import nicholas from "@/assets/team-nicholas.jpg";
import juliana from "@/assets/team-juliana.avif";

export interface AttorneyProfile {
  name: string;
  title: string;
  shortBio: string;
  hero: string;
  portrait: string;
  gallery?: { src: string; caption: string }[];
  bars: string[];
  education: { school: string; detail?: string }[];
  experience: string[];
  practice: string[];
  recognition?: string[];
  longBio: string[];
  mission?: string;
}

export interface ProfileLabels {
  heroEyebrow: string;
  bio: string;
  bars: string;
  education: string;
  experienceEyebrow: string;
  experienceTitle: string;
  practiceEyebrow: string;
  practiceTitle: string;
  recognitionEyebrow: string;
  recognitionTitle: string;
  galleryEyebrow: string;
  galleryTitle: string;
  ctaTitle: string;
  ctaIntro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  notFound: string;
  metaFallback: string;
}

export const profileLabels: Record<Locale, ProfileLabels> = {
  pt: {
    heroEyebrow: "Linhares Law · Equipe",
    bio: "Biografia",
    bars: "Licenças Profissionais",
    education: "Formação Acadêmica",
    experienceEyebrow: "Experiência",
    experienceTitle: "Trajetória Profissional",
    practiceEyebrow: "Áreas de Atuação",
    practiceTitle: "Estratégias Migratórias",
    recognitionEyebrow: "Reconhecimento Institucional",
    recognitionTitle: "Premiações",
    galleryEyebrow: "Galeria",
    galleryTitle: "Presença Institucional",
    ctaTitle: "A Hora é Agora.",
    ctaIntro: "Inicie uma conversa institucional com a equipe Linhares Law.",
    ctaPrimary: "Agendar Consulta",
    ctaSecondary: "Conhecer a Equipe",
    notFound: "Perfil não encontrado.",
    metaFallback: "Perfil institucional Linhares Law.",
  },
  en: {
    heroEyebrow: "Linhares Law · Team",
    bio: "Biography",
    bars: "Bar Admissions",
    education: "Education",
    experienceEyebrow: "Experience",
    experienceTitle: "Professional Background",
    practiceEyebrow: "Practice Areas",
    practiceTitle: "Immigration Strategies",
    recognitionEyebrow: "Institutional Recognition",
    recognitionTitle: "Awards",
    galleryEyebrow: "Gallery",
    galleryTitle: "Institutional Presence",
    ctaTitle: "The Time Is Now.",
    ctaIntro: "Begin an institutional conversation with the Linhares Law team.",
    ctaPrimary: "Schedule a Consultation",
    ctaSecondary: "Meet the Team",
    notFound: "Profile not found.",
    metaFallback: "Linhares Law institutional profile.",
  },
  es: {
    heroEyebrow: "Linhares Law · Equipo",
    bio: "Biografía",
    bars: "Colegiaturas Profesionales",
    education: "Formación Académica",
    experienceEyebrow: "Experiencia",
    experienceTitle: "Trayectoria Profesional",
    practiceEyebrow: "Áreas de Práctica",
    practiceTitle: "Estrategias Migratorias",
    recognitionEyebrow: "Reconocimiento Institucional",
    recognitionTitle: "Premiaciones",
    galleryEyebrow: "Galería",
    galleryTitle: "Presencia Institucional",
    ctaTitle: "La Hora es Ahora.",
    ctaIntro: "Inicie una conversación institucional con el equipo de Linhares Law.",
    ctaPrimary: "Agendar Consulta",
    ctaSecondary: "Conocer al Equipo",
    notFound: "Perfil no encontrado.",
    metaFallback: "Perfil institucional de Linhares Law.",
  },
};

const PT: Record<string, AttorneyProfile> = {
  "andre-linhares": {
    name: "André Linhares, Esq.",
    title: "Advogado Fundador e CEO",
    shortBio:
      "Advogado licenciado nos Estados Unidos com mais de 14 anos de prática exclusiva em imigração americana, referência reconhecida entre profissionais e investidores brasileiros.",
    hero: andre,
    portrait: andreAlt,
    gallery: [
      { src: andreSpeaking, caption: "Painel · Evento internacional de imigração" },
      { src: andreAlt, caption: "Retrato institucional · Linhares Law" },
    ],
    bars: ["District of Columbia Bar", "New York State Bar"],
    education: [{ school: "Faculdade de Direito nos Estados Unidos" }],
    experience: [
      "Mais de 14 anos de prática exclusiva em imigração americana",
      "Fundador e CEO da Linhares Law",
      "Presidência da LIDE Orlando",
      "Palestrante recorrente em eventos internacionais de imigração",
    ],
    practice: ["EB-2 NIW", "EB-1A", "E-2", "L-1", "O-1", "EB-5"],
    recognition: [
      "International Business Institute · IBI Award",
      "The Law Awards",
      "10 Best Law Firms",
      "Top Empreendedor",
    ],
    longBio: [
      "Fundador da Linhares Law, o Dr. André Linhares atua há mais de 14 anos no direito imigratório, sendo referência em vistos para profissionais qualificados e empresários que desejam viver ou investir nos Estados Unidos.",
      "O Dr. Linhares consolidou-se como uma das principais autoridades no visto EB-2 NIW nos EUA, atuando como palestrante na conferência nacional da American Immigration Lawyers Association (AILA), onde compartilha sua experiência e conhecimento com outros advogados militantes na área de imigração.",
      "Como presidente da LIDE Orlando, articula o relacionamento entre lideranças empresariais brasileiras e o ecossistema institucional norte-americano. Sua presença em painéis, entrevistas e eventos do setor consolida a Linhares Law como referência no mercado.",
    ],
    mission:
      "Representar com rigor jurídico e discrição as trajetórias de quem escolheu os Estados Unidos como destino profissional, familiar e patrimonial.",
  },
  "nicholas-perry": {
    name: "Nicholas Perry, Esq.",
    title: "ADVOGADO",
    shortBio:
      "Advogado com trajetória nas principais instituições do governo federal americano dedicadas à imigração e à aplicação da lei.",
    hero: nicholas,
    portrait: nicholas,
    bars: ["Nebraska Bar", "North Carolina Bar", "U.S. Supreme Court"],
    education: [
      { school: "North Carolina Central School of Law", detail: "Valedictorian" },
      { school: "University of Notre Dame" },
    ],
    experience: [
      "U.S. Citizenship and Immigration Services · USCIS",
      "Department of Homeland Security · DHS",
      "Immigration and Customs Enforcement · ICE",
      "U.S. Customs and Border Protection · CBP",
      "U.S. Department of Justice",
    ],
    practice: ["EB-1", "EB-2 NIW", "Ajuste de Status", "Imigração Familiar"],
    longBio: [
      "Nicholas Perry traz para a Linhares Law uma trajetória rara: passagem pelas principais agências federais americanas responsáveis pela imigração, USCIS, DHS, ICE, CBP e o Department of Justice.",
      "Essa vivência institucional confere à sua atuação um entendimento técnico aprofundado dos critérios adotados pelos analistas e oficiais federais que avaliam petições migratórias.",
      "Formado como Valedictorian pela North Carolina Central School of Law, é graduado pela University of Notre Dame e licenciado em Nebraska, North Carolina e perante a Suprema Corte dos Estados Unidos.",
    ],
  },
  "juliana-mosquera-soler": {
    name: "Juliana Mosquera Soler, Esq.",
    title: "ADVOGADA",
    shortBio:
      "Advogada especializada em imigração corporativa, com mais de 18 anos de experiência nos setores público e privado, atuando principalmente em casos baseados em emprego, como EB-1, EB-2 (NIW) e O-1.",
    hero: juliana,
    portrait: juliana,
    bars: ["Florida Bar", "Puerto Rico Bar"],
    education: [
      { school: "Juris Doctor", detail: "Magna Cum Laude" },
      { school: "Bacharelado em Economia" },
    ],
    experience: [
      "Mais de 18 anos de experiência nos setores público e privado",
      "Atuação prévia em direito empresarial, administrativo e público",
      "Experiência em tribunais e cortes superiores",
      "Atendimento multilíngue (português, espanhol e inglês)",
    ],
    practice: ["EB-1", "EB-2 NIW", "O-1", "Imigração Corporativa"],
    longBio: [
      "Dra. Juliana Mosquera Soler é advogada especializada em imigração corporativa, com mais de 18 anos de experiência nos setores público e privado, atuando principalmente em casos baseados em emprego, como EB-1, EB-2 (NIW) e O-1.",
      "É bacharel em Economia e possui Juris Doctor com distinção Magna Cum Laude. Graduado em Direito nos EUA (Juris Doctor) com distinção Magna Cum Laude (Melhores 10%).",
      "Antes de atuar com imigração, trabalhou em direito empresarial, administrativo e público, além de experiência em tribunais e cortes superiores, o que fortaleceu sua capacidade de análise estratégica de casos e elaboração de peças jurídicas.",
      "Fluente em espanhol, atende clientes de diversas origens com foco em clareza e acompanhamento próximo durante todo o processo.",
      "É licenciada para exercer a advocacia na Flórida e em Porto Rico.",
    ],
  },
};

const EN: Record<string, AttorneyProfile> = {
  "andre-linhares": {
    ...PT["andre-linhares"],
    title: "Founding Attorney and CEO",
    shortBio:
      "A U.S.-licensed attorney with more than 14 years devoted exclusively to United States immigration law, and a recognized reference for international professionals and investors.",
    gallery: [
      { src: andreSpeaking, caption: "Panel · International immigration conference" },
      { src: andreAlt, caption: "Institutional portrait · Linhares Law" },
    ],
    education: [{ school: "Juris Doctor · United States" }],
    experience: [
      "More than 14 years of practice devoted exclusively to U.S. immigration law",
      "Founder and CEO of Linhares Law",
      "President of the LIDE Orlando chapter",
      "Recurring speaker at international immigration conferences",
    ],
    practice: ["EB-2 NIW", "EB-1A", "E-2", "L-1", "O-1", "EB-5"],
    longBio: [
      "Founder of Linhares Law, André Linhares has practiced immigration law for more than 14 years and is a recognized authority on visa strategies for highly qualified professionals and entrepreneurs seeking to live or invest in the United States.",
      "Mr. Linhares has established himself as one of the leading voices on the EB-2 National Interest Waiver, serving as a speaker at the national conference of the American Immigration Lawyers Association (AILA), where he shares his experience and case strategy with fellow immigration practitioners.",
      "As president of the LIDE Orlando chapter, he bridges Brazilian business leadership and the American institutional ecosystem. His presence on panels, in interviews and at industry events has consolidated Linhares Law as a reference in the market.",
    ],
    mission:
      "To represent, with legal rigor and discretion, the trajectories of those who have chosen the United States as their professional, family and financial destination.",
  },
  "nicholas-perry": {
    ...PT["nicholas-perry"],
    title: "ATTORNEY",
    shortBio:
      "An attorney whose career spans the principal United States federal agencies responsible for immigration and law enforcement.",
    practice: ["EB-1", "EB-2 NIW", "Adjustment of Status", "Family-Based Immigration"],
    longBio: [
      "Nicholas Perry brings to Linhares Law an uncommon background: service across the principal U.S. federal agencies responsible for immigration, including USCIS, DHS, ICE, CBP and the Department of Justice.",
      "That institutional experience gives his practice a detailed technical understanding of the standards applied by the adjudicators and federal officers who review immigration petitions.",
      "He graduated as Valedictorian from North Carolina Central School of Law, holds a degree from the University of Notre Dame, and is admitted in Nebraska, North Carolina and before the Supreme Court of the United States.",
    ],
  },
  "juliana-mosquera-soler": {
    ...PT["juliana-mosquera-soler"],
    title: "ATTORNEY",
    shortBio:
      "An attorney focused on corporate immigration, with more than 18 years of experience across the public and private sectors, concentrating on employment-based matters such as EB-1, EB-2 (NIW) and O-1.",
    education: [
      { school: "Juris Doctor", detail: "Magna Cum Laude" },
      { school: "B.A. in Economics" },
    ],
    experience: [
      "More than 18 years of experience across the public and private sectors",
      "Prior practice in corporate, administrative and public law",
      "Litigation experience before trial and appellate courts",
      "Multilingual counsel (Portuguese, Spanish and English)",
    ],
    practice: ["EB-1", "EB-2 NIW", "O-1", "Corporate Immigration"],
    longBio: [
      "Juliana Mosquera Soler is an attorney focused on corporate immigration, with more than 18 years of experience across the public and private sectors, concentrating on employment-based matters such as EB-1, EB-2 (NIW) and O-1.",
      "She holds a degree in Economics and earned her Juris Doctor in the United States Magna Cum Laude, graduating in the top 10% of her class.",
      "Before dedicating her practice to immigration, she worked in corporate, administrative and public law, with litigation experience before trial and appellate courts, which strengthened her strategic case analysis and legal drafting.",
      "Fluent in Spanish, she advises clients from a wide range of backgrounds with an emphasis on clarity and close guidance throughout the entire process.",
      "She is admitted to practice law in Florida and Puerto Rico.",
    ],
  },
};

const ES: Record<string, AttorneyProfile> = {
  "andre-linhares": {
    ...PT["andre-linhares"],
    title: "Abogado Fundador y CEO",
    shortBio:
      "Abogado habilitado en Estados Unidos con más de 14 años de práctica dedicada exclusivamente a la inmigración estadounidense, y referencia reconocida entre profesionales e inversionistas internacionales.",
    gallery: [
      { src: andreSpeaking, caption: "Panel · Conferencia internacional de inmigración" },
      { src: andreAlt, caption: "Retrato institucional · Linhares Law" },
    ],
    education: [{ school: "Juris Doctor · Estados Unidos" }],
    experience: [
      "Más de 14 años de práctica dedicada exclusivamente a la inmigración estadounidense",
      "Fundador y CEO de Linhares Law",
      "Presidencia del capítulo LIDE Orlando",
      "Conferencista recurrente en eventos internacionales de inmigración",
    ],
    practice: ["EB-2 NIW", "EB-1A", "E-2", "L-1", "O-1", "EB-5"],
    longBio: [
      "Fundador de Linhares Law, André Linhares ejerce el derecho migratorio desde hace más de 14 años y es una referencia en estrategias de visa para profesionales altamente calificados y empresarios que desean vivir o invertir en Estados Unidos.",
      "El abogado Linhares se ha consolidado como una de las principales autoridades en la visa EB-2 NIW (National Interest Waiver, exención por interés nacional), participando como conferencista en la conferencia nacional de la American Immigration Lawyers Association (AILA), donde comparte su experiencia y estrategia de casos con otros abogados de inmigración.",
      "Como presidente del capítulo LIDE Orlando, articula la relación entre el liderazgo empresarial brasileño y el ecosistema institucional estadounidense. Su presencia en paneles, entrevistas y eventos del sector consolida a Linhares Law como referencia en el mercado.",
    ],
    mission:
      "Representar con rigor jurídico y discreción las trayectorias de quienes eligieron Estados Unidos como destino profesional, familiar y patrimonial.",
  },
  "nicholas-perry": {
    ...PT["nicholas-perry"],
    title: "ABOGADO",
    shortBio:
      "Abogado con trayectoria en las principales instituciones del gobierno federal estadounidense dedicadas a la inmigración y a la aplicación de la ley.",
    practice: ["EB-1", "EB-2 NIW", "Ajuste de Estatus", "Inmigración Familiar"],
    longBio: [
      "Nicholas Perry aporta a Linhares Law una trayectoria poco común: servicio en las principales agencias federales estadounidenses responsables de la inmigración, entre ellas USCIS, DHS, ICE, CBP y el Department of Justice.",
      "Esa experiencia institucional otorga a su práctica una comprensión técnica profunda de los criterios que aplican los analistas y oficiales federales que evalúan las peticiones migratorias.",
      "Se graduó como Valedictorian de North Carolina Central School of Law, es egresado de la University of Notre Dame y está habilitado en Nebraska, North Carolina y ante la Corte Suprema de Estados Unidos.",
    ],
  },
  "juliana-mosquera-soler": {
    ...PT["juliana-mosquera-soler"],
    title: "ABOGADA",
    shortBio:
      "Abogada especializada en inmigración corporativa, con más de 18 años de experiencia en los sectores público y privado, enfocada en casos basados en empleo como EB-1, EB-2 (NIW) y O-1.",
    education: [
      { school: "Juris Doctor", detail: "Magna Cum Laude" },
      { school: "Licenciatura en Economía" },
    ],
    experience: [
      "Más de 18 años de experiencia en los sectores público y privado",
      "Práctica previa en derecho empresarial, administrativo y público",
      "Experiencia ante tribunales de primera instancia y cortes superiores",
      "Atención multilingüe (portugués, español e inglés)",
    ],
    practice: ["EB-1", "EB-2 NIW", "O-1", "Inmigración Corporativa"],
    longBio: [
      "Juliana Mosquera Soler es abogada especializada en inmigración corporativa, con más de 18 años de experiencia en los sectores público y privado, enfocada principalmente en casos basados en empleo como EB-1, EB-2 (NIW) y O-1.",
      "Es licenciada en Economía y obtuvo su Juris Doctor en Estados Unidos con distinción Magna Cum Laude, entre el 10% superior de su promoción.",
      "Antes de dedicarse a la inmigración, ejerció en derecho empresarial, administrativo y público, con experiencia ante tribunales y cortes superiores, lo que fortaleció su análisis estratégico de casos y su redacción jurídica.",
      "Con dominio nativo del español, asesora a clientes de orígenes diversos con énfasis en la claridad y el acompañamiento cercano durante todo el proceso.",
      "Está habilitada para ejercer la abogacía en Florida y Puerto Rico.",
    ],
  },
};

export const attorneyProfiles: Record<Locale, Record<string, AttorneyProfile>> = {
  pt: PT,
  en: EN,
  es: ES,
};

export function getProfile(locale: Locale, slug: string): AttorneyProfile | undefined {
  return attorneyProfiles[locale]?.[slug] ?? PT[slug];
}
