import andre from "@/assets/team-andre.jpg";
import nicholas from "@/assets/team-nicholas.jpg";
import juliana from "@/assets/team-juliana.avif";
import fernanda from "@/assets/team-fernanda-ruiz.png";
import andrea from "@/assets/team-andrea-almeida.jpg";
import sheron from "@/assets/team-sheron-carvalho.jpg";
import gabrieleAsset from "@/assets/team-gabriele-souza.jpg.asset.json";
const gabriele = gabrieleAsset.url;
import joao from "@/assets/team-joao-miranda.jpg";
import danielAsset from "@/assets/team-daniel-mendes.png.asset.json";
const daniel = danielAsset.url;
import rafaelaAsset from "@/assets/team-rafaela-barbosa.jpg.asset.json";
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
import manuelaAsset from "@/assets/manuela-truschelli.jpg.asset.json";

const rafaela = rafaelaAsset.url;
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
    eyebrow: "I. Attorneys",
    title: "Attorneys",
    description:
      "Advogados licenciados nos Estados Unidos que conduzem a estratégia jurídica de cada cliente da Linhares Law.",
    members: [
      {
        name: "André Linhares, Esq.",
        role: "Advogado Fundador e CEO",
        credentials: ["D.C. Bar", "New York Bar"],
        slug: "andre-linhares",
        portrait: andre,
        bio: "Fundador da Linhares Law, o Dr. André Linhares atua há mais de 14 anos no direito imigratório, sendo referência em vistos para profissionais qualificados e empresários que desejam viver ou investir nos Estados Unidos.",
      },
      {
        name: "Nicholas Perry, Esq.",
        role: "ADVOGADO",
        credentials: ["Nebraska Bar", "North Carolina Bar", "U.S. Supreme Court"],
        slug: "nicholas-perry",
        portrait: nicholas,
        bio: "Trajetória nas principais agências federais americanas dedicadas à imigração, USCIS, DHS, ICE, CBP e Department of Justice.",
      },
      {
        name: "Juliana Mosquera Soler, Esq.",
        role: "ADVOGADA",
        credentials: ["Florida Bar", "Puerto Rico Bar"],
        slug: "juliana-mosquera-soler",
        portrait: juliana,
        bio: "Advogada especializada em imigração corporativa, com mais de 18 anos de experiência em casos baseados em emprego, como EB-1, EB-2 (NIW) e O-1.",
      },
    ],
  },
  {
    eyebrow: "II. Case Managers",
    title: "Case Managers",
    description:
      "Responsáveis pela condução integral de cada caso, do protocolo inicial à aprovação final.",
    members: [
      { name: "Vivyan Bastos", role: "Case Manager", portrait: vyvian },
      { name: "Edson Matunaga", role: "Case Manager", portrait: edson },
      { name: "Bruna Carvalho", role: "Case Manager", portrait: brunaC },
    ],
  },
  {
    eyebrow: "III. Paralegals",
    title: "Paralegals",
    description:
      "Profissionais responsáveis pela construção argumentativa e pela curadoria documental de cada caso.",
    members: [
      { name: "Andrea Almeida", role: "Paralegal", portrait: andrea },
      { name: "Sheron Carvalho", role: "Paralegal", portrait: sheron },
      { name: "Fernanda Ruiz", role: "Paralegal", portrait: fernanda },
      { name: "Rafaela Barbosa", role: "Paralegal", portrait: rafaela },
      { name: "Samara Silvestre", role: "Paralegal", portrait: samara },
      { name: "Heitor", role: "Paralegal" },
    ],
  },
  {
    eyebrow: "IV. Legal Assistants",
    title: "Legal Assistants",
    description:
      "Equipe ampliada de suporte técnico que sustenta a operação jurídica em volume e detalhamento.",
    members: [
      { name: "Julyana Fama", role: "Legal Assistant", portrait: julyana },
      { name: "Bruna Mayara Alves", role: "Legal Assistant", portrait: brunaA },
      { name: "Rafael Frinhani", role: "Legal Assistant", portrait: rafael },
      { name: "Nadyne Santos", role: "Legal Assistant", portrait: nadyne },
    ],
  },
  {
    eyebrow: "V. Business Plan Specialists",
    title: "Business Plan Specialists",
    description:
      "Coordenação de projetos institucionais e iniciativas estratégicas do escritório.",
    members: [
      { name: "João Miranda", role: "Business Plan Specialist", portrait: joao },
      { name: "Daniel Mendes", role: "Business Plan Specialist", portrait: daniel },
    ],
  },
  {
    eyebrow: "VI. Equipe Administrativa",
    title: "Equipe Administrativa",
    description:
      "Estrutura administrativa que sustenta a experiência de atendimento e a operação dos escritórios.",
    members: [
      { name: "Gabriele Souza", role: "Office Manager", portrait: gabriele },
      { name: "Paola Irvin", role: "Office Assistant", portrait: paola },
      { name: "Aline Mayer", role: "Immigration Client Specialist", portrait: aline },
      { name: "Renata Liberman", role: "Immigration Client Specialist", portrait: renata },
      { name: "Manuela Truschelli", role: "Immigration Client Specialist", portrait: manuela },
    ],
  },
];
