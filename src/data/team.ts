import andre from "@/assets/team-andre.jpg";
import nicholas from "@/assets/team-nicholas.jpg";
import juliana from "@/assets/team-juliana.avif";
import fernanda from "@/assets/team-fernanda-ruiz.png";
import andrea from "@/assets/team-andrea-almeida.jpg";
import sheron from "@/assets/team-sheron-carvalho.jpg";
import andressa from "@/assets/team-andressa-hughes.jpg";
import gabriele from "@/assets/team-gabriele-souza.jpg";
import joao from "@/assets/team-joao-miranda.jpg";
import daniel from "@/assets/team-daniel-mendes.jpg";
import rafaelaAsset from "@/assets/team-rafaela-barbosa.jpg.asset.json";
import deborahAsset from "@/assets/team-deborah-carvalho.jpg.asset.json";
import alineAsset from "@/assets/team-aline-mayer.jpg.asset.json";
import rafaelAsset from "@/assets/team-rafael-frinhani.jpg.asset.json";
import brunaCAsset from "@/assets/team-bruna-carvalho.jpg.asset.json";
import nadyneAsset from "@/assets/team-nadyne-santos.jpg.asset.json";
import julyanaAsset from "@/assets/team-julyana-fama.jpg.asset.json";
import brunaAAsset from "@/assets/team-bruna-alves.jpg.asset.json";
import samaraAsset from "@/assets/team-samara-silvestre.jpg.asset.json";
import vyvianAsset from "@/assets/team-vyvian-bastos.jpg.asset.json";
import renataAsset from "@/assets/renata-liberman.jpg.asset.json";
import edsonAsset from "@/assets/edson-matunaga.jpg.asset.json";
import paolaAsset from "@/assets/paola-irvin.jpg.asset.json";
import gabrielAsset from "@/assets/gabriel-mothe.avif.asset.json";
import manuelaAsset from "@/assets/manuela-truschelli.jpg.asset.json";

const rafaela = rafaelaAsset.url;
const deborah = deborahAsset.url;
const aline = alineAsset.url;
const rafael = rafaelAsset.url;
const brunaC = brunaCAsset.url;
const nadyne = nadyneAsset.url;
const julyana = julyanaAsset.url;
const brunaA = brunaAAsset.url;
const samara = samaraAsset.url;
const vyvian = vyvianAsset.url;
const renata = renataAsset.url;
const edson = edsonAsset.url;
const paola = paolaAsset.url;
const gabriel = gabrielAsset.url;
const manuela = manuelaAsset.url;

export interface TeamMember {
  name: string;
  role: string;
  credentials?: string[];
  slug?: string;
  portrait?: string;
  bio?: string;
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
        portrait: andre,
        bio: "Fundador da Linhares Law, com mais de 14 anos de prática exclusiva em imigração americana e referência reconhecida entre profissionais e investidores brasileiros.",
      },
      {
        name: "Nicholas Perry, Esq.",
        role: "Advogado de Imigração",
        credentials: ["Nebraska Bar", "North Carolina Bar", "U.S. Supreme Court"],
        slug: "nicholas-perry",
        portrait: nicholas,
        bio: "Trajetória nas principais agências federais americanas dedicadas à imigração — USCIS, DHS, ICE, CBP e Department of Justice.",
      },
      {
        name: "Juliana Mosquera Soler, Esq.",
        role: "Of Counsel",
        credentials: ["Florida Bar", "Puerto Rico Bar"],
        slug: "juliana-mosquera-soler",
        portrait: juliana,
        bio: "Of Counsel da Linhares Law, com atuação em direito migratório e experiência multijurisdicional entre Florida e Puerto Rico.",
      },
    ],
  },
  {
    eyebrow: "II. Gestão Jurídica",
    title: "Coordenação Jurídica",
    description:
      "Coordenação técnica das equipes jurídicas, garantindo consistência editorial e rigor em cada petição apresentada.",
    members: [
      {
        name: "Fernanda Ruiz",
        role: "Legal Manager",
        portrait: fernanda,
        bio: "Coordenadora de equipe jurídica, especialista em imigração e responsável pelo padrão técnico das petições do escritório.",
      },
      {
        name: "Andrea Almeida",
        role: "Legal Manager",
        portrait: andrea,
        bio: "Paralegal sênior e coordenadora jurídica, com atuação ampla em processos de imigração baseada em emprego.",
      },
    ],
  },
  {
    eyebrow: "III. Especialistas Jurídicos",
    title: "Especialistas Jurídicos",
    description:
      "Profissionais responsáveis pela construção argumentativa e pela curadoria documental de cada caso.",
    members: [
      {
        name: "Sheron Carvalho",
        role: "Immigration Specialist",
        portrait: sheron,
        bio: "Especialista em imigração dedicada à preparação técnica de petições e ao acompanhamento estratégico de cada cliente.",
      },
      { name: "Deborah Carvalho", role: "Legal Specialist", portrait: deborah },
      { name: "Rafaela Barbosa", role: "Legal Specialist", portrait: rafaela },
    ],
  },
  {
    eyebrow: "IV. Assistência Jurídica",
    title: "Assistência Jurídica",
    description:
      "Equipe ampliada de suporte técnico que sustenta a operação jurídica em volume e detalhamento.",
    members: [
      { name: "Vivyan Bastos", role: "Senior Legal Assistant", portrait: vyvian },
      { name: "Samara Silvestre", role: "Senior Legal Assistant", portrait: samara },
      { name: "Bruna Alves", role: "Junior Legal Assistant", portrait: brunaA },
      { name: "Julyana Fama", role: "Junior Legal Assistant", portrait: julyana },
      { name: "Nadyne Santos", role: "Junior Legal Assistant", portrait: nadyne },
      { name: "Bruna Carvalho", role: "Junior Legal Assistant", portrait: brunaC },
      { name: "Rafael Frinhani", role: "Junior Legal Assistant", portrait: rafael },
    ],
  },
  {
    eyebrow: "V. Gestão de Casos",
    title: "Gestão de Casos",
    description:
      "Responsáveis pelo acompanhamento integral de cada processo, do protocolo inicial à aprovação final.",
    members: [
      {
        name: "Andressa Hughes",
        role: "Assistant Case Manager",
        portrait: andressa,
        bio: "Responsável pelo acompanhamento operacional de processos migratórios, com foco em comunicação institucional com o cliente.",
      },
      { name: "Aline Mayer", role: "Assistant Case Manager", portrait: aline },
      { name: "Manuela Truschelli", role: "Assistant Case Manager", portrait: manuela },
      { name: "Gabriel Mothe", role: "Assistant Case Manager", portrait: gabriel },
      { name: "Renata Liberman", role: "Assistant Case Manager", portrait: renata },
    ],
  },
  {
    eyebrow: "VI. Operações e Suporte",
    title: "Operações Institucionais",
    description:
      "Estrutura administrativa que sustenta a experiência de atendimento e a operação dos escritórios.",
    members: [
      {
        name: "Gabriele Souza",
        role: "Office Manager",
        portrait: gabriele,
        bio: "Responsável pela operação institucional dos escritórios e pela experiência presencial de clientes da Linhares Law.",
      },
      { name: "Edson Matunaga", role: "Operations & Customer Experience", portrait: edson },
      { name: "Paola Irvin", role: "Office Assistant", portrait: paola },
      {
        name: "João Miranda",
        role: "Project Manager",
        portrait: joao,
        bio: "Coordenação de projetos institucionais e iniciativas estratégicas internas do escritório.",
      },
      {
        name: "Daniel Mendes",
        role: "Project Manager",
        portrait: daniel,
        bio: "Gestão de projetos operacionais e implementação de processos jurídicos internos.",
      },
    ],
  },
];
