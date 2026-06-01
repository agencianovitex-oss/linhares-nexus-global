export interface TeamMember {
  name: string;
  role: string;
  credentials?: string[];
  slug?: string;
}

export interface TeamGroup {
  eyebrow: string;
  title: string;
  description?: string;
  members: TeamMember[];
}

export const teamGroups: TeamGroup[] = [
  {
    eyebrow: "I. Liderança Jurídica",
    title: "Advogados Responsáveis",
    description:
      "Advogados licenciados nos Estados Unidos que coordenam a estratégia jurídica de cada cliente da Linhares Law.",
    members: [
      {
        name: "André Linhares, Esq.",
        role: "Advogado Fundador e CEO",
        credentials: ["D.C. Bar", "New York Bar"],
        slug: "andre-linhares",
      },
      {
        name: "Nicholas Perry, Esq.",
        role: "Advogado de Imigração",
        credentials: ["Nebraska Bar", "North Carolina Bar", "U.S. Supreme Court"],
        slug: "nicholas-perry",
      },
      {
        name: "Juliana Mosquera Soler, Esq.",
        role: "Of Counsel",
        credentials: ["Florida Bar", "Puerto Rico Bar"],
      },
    ],
  },
  {
    eyebrow: "II. Gestão Jurídica",
    title: "Legal Managers",
    description:
      "Coordenação técnica das equipes jurídicas, garantindo consistência editorial e rigor em cada petição apresentada.",
    members: [
      { name: "Fernanda Ruiz", role: "Legal Manager" },
      { name: "Andrea Almeida", role: "Legal Manager" },
    ],
  },
  {
    eyebrow: "III. Especialistas Jurídicos",
    title: "Legal Specialists",
    description:
      "Profissionais responsáveis pela construção argumentativa e pela curadoria documental de cada caso.",
    members: [
      { name: "Deborah Carvalho", role: "Legal Specialist" },
      { name: "Sheron Carvalho", role: "Legal Specialist" },
      { name: "Rafaela Barbosa", role: "Legal Specialist" },
    ],
  },
  {
    eyebrow: "IV. Assistência Jurídica",
    title: "Legal Assistants",
    description:
      "Equipe ampliada de suporte técnico que sustenta a operação jurídica em volume e detalhamento.",
    members: [
      { name: "Vivyan Bastos", role: "Senior Legal Assistant" },
      { name: "Samara Silvestre", role: "Senior Legal Assistant" },
      { name: "Bruna Alves", role: "Junior Legal Assistant" },
      { name: "Julyana Fama", role: "Junior Legal Assistant" },
      { name: "Nadyne Santos", role: "Junior Legal Assistant" },
      { name: "Bruna Carvalho", role: "Junior Legal Assistant" },
      { name: "Rafael Frinhani", role: "Junior Legal Assistant" },
    ],
  },
  {
    eyebrow: "V. Gestão de Casos",
    title: "Case Management",
    description:
      "Responsáveis pelo acompanhamento integral de cada processo, do protocolo inicial à aprovação final.",
    members: [
      { name: "Andressa Hughes", role: "Case Manager" },
      { name: "Aline Mayer", role: "Assistant Case Manager" },
      { name: "Manuela Truschelli", role: "Assistant Case Manager" },
      { name: "Gabriel Mothe", role: "Assistant Case Manager" },
      { name: "Renata Liberman", role: "Assistant Case Manager" },
    ],
  },
  {
    eyebrow: "VI. Operações e Suporte",
    title: "Operações Institucionais",
    description:
      "Estrutura administrativa que sustenta a experiência de atendimento e a operação dos escritórios.",
    members: [
      { name: "Gabriele Souza", role: "Office Manager" },
      { name: "Edson Matunaga", role: "Operations & Customer Experience" },
      { name: "Paola Irvin", role: "Office Assistant" },
      { name: "João Miranda", role: "Project Manager" },
      { name: "Daniel Mendes", role: "Project Manager" },
    ],
  },
];
