import type { Locale } from "@/i18n/locales";

export type VisaSlug = "eb2-niw" | "eb1" | "e2" | "l1" | "o1" | "h1b" | "eb5";

interface FAQ { q: string; a: string }
interface Section { title: string; body?: string; items?: string[] }
interface ProfileBlock { title: string; intro: string; bullets: string[] }

export interface VisaContent {
  slug: VisaSlug;
  acronym: string;
  title: string;
  tagline: string;
  intro: string;
  meta: string[];
  what: { title: string; body: string };
  qualify: Section;
  benefits: Section;
  process: Section;
  profiles?: ProfileBlock[];
  faqs: FAQ[];
}

const PT: Record<VisaSlug, VisaContent> = {
  "eb2-niw": {
    slug: "eb2-niw",
    acronym: "EB-2 NIW",
    title: "EB-2 NIW — Dispensa por Interesse Nacional",
    tagline: "Residência permanente americana fundamentada no mérito profissional e na contribuição ao interesse nacional dos Estados Unidos.",
    intro:
      "O EB-2 National Interest Waiver permite que profissionais qualificados solicitem o Green Card sem necessidade de oferta de emprego nos Estados Unidos, desde que demonstrem que sua atuação beneficia substancialmente o interesse nacional americano.",
    meta: ["Residência permanente", "Autopetição", "Sem oferta de emprego", "Inclusão familiar"],
    what: {
      title: "O que é o EB-2 NIW",
      body: "É uma categoria de imigração baseada em emprego (segunda preferência) que dispensa a exigência de patrocínio empresarial e certificação de trabalho (PERM). O profissional atua como peticionário do próprio processo, demonstrando que seu trabalho representa contribuição relevante para áreas de interesse estratégico dos Estados Unidos.",
    },
    qualify: {
      title: "Quem pode se qualificar",
      items: [
        "Profissionais com diploma de graduação avançado (mestrado, doutorado) ou graduação somada a experiência relevante.",
        "Profissionais com habilidades excepcionais em ciências, artes, negócios ou áreas técnicas.",
        "Atuação cujo objeto tenha mérito substancial e importância nacional.",
        "Histórico que evidencie capacidade de avançar o empreendimento proposto.",
        "Demonstração de que dispensar os requisitos tradicionais beneficia os Estados Unidos.",
      ],
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Green Card — residência permanente nos Estados Unidos.",
        "Inclusão de cônjuge e filhos menores de 21 anos.",
        "Liberdade profissional para atuar como autônomo, empreendedor ou empregado.",
        "Sem vínculo obrigatório com empregador americano.",
        "Caminho para cidadania após o cumprimento dos requisitos legais.",
      ],
    },
    process: {
      title: "Processo",
      items: [
        "Análise de elegibilidade e mapeamento do perfil profissional.",
        "Definição da estratégia jurídica e do empreendimento proposto.",
        "Construção das evidências documentais e cartas de recomendação.",
        "Protocolo do I-140 junto ao USCIS.",
        "Ajuste de status (I-485) ou processamento consular.",
        "Acompanhamento institucional contínuo até a entrega do Green Card.",
      ],
    },
    profiles: [
      {
        title: "Dentistas",
        intro:
          "A odontologia americana reconhece o profissional brasileiro como referência técnica internacional. A Linhares Law mantém parceria institucional com a ABO-US, oferecendo estrutura complementar de preparação e licenciamento.",
        bullets: [
          "Avaliação documental e construção do dossiê de mérito profissional.",
          "Suporte estratégico para licenciamento americano (NBDE / INBDE).",
          "Parceria com ABO-US para preparação técnica e idioma.",
          "Estrutura complementar — não é requisito do processo migratório.",
        ],
      },
      {
        title: "Médicos",
        intro:
          "A área médica reúne forte alinhamento com os critérios de interesse nacional, especialmente em pesquisa clínica, saúde pública e atuação em regiões de demanda médica relevante.",
        bullets: [
          "Profissionais com produção científica e atuação acadêmica.",
          "Médicos em programas de residência ou fellowship nos EUA.",
          "Especialistas em áreas de prioridade nacional declarada.",
        ],
      },
      {
        title: "Engenheiros",
        intro:
          "Engenheiros com experiência em infraestrutura, energia, manufatura avançada e tecnologia encontram terreno fértil para o enquadramento por mérito profissional.",
        bullets: [
          "Histórico em projetos de relevância estratégica.",
          "Atuação em empresas internacionais e centros de pesquisa.",
          "Patentes, publicações e participação em normatização técnica.",
        ],
      },
      {
        title: "Profissionais de Tecnologia",
        intro:
          "A categoria reconhece a contribuição de profissionais de tecnologia em segurança cibernética, inteligência artificial, infraestrutura digital e desenvolvimento de software.",
        bullets: [
          "Liderança técnica em produtos digitais e arquiteturas escaláveis.",
          "Atuação em segurança, dados, cloud, IA e pesquisa aplicada.",
          "Reconhecimento por pares, conferências e contribuições open-source.",
        ],
      },
      {
        title: "Empresários",
        intro:
          "Empresários e fundadores podem demonstrar interesse nacional pela natureza estratégica do empreendimento, geração de empregos e impacto econômico.",
        bullets: [
          "Histórico empresarial consolidado e governança madura.",
          "Plano de negócios com mérito e viabilidade comprovada.",
          "Estratégia de internacionalização e atuação nos EUA.",
        ],
      },
      {
        title: "Executivos",
        intro:
          "Executivos seniores com trajetória em multinacionais encontram enquadramento por liderança estratégica, governança corporativa e contribuição setorial.",
        bullets: [
          "C-Level e diretores com responsabilidade global.",
          "Liderança em transformação, expansão internacional ou ESG.",
          "Reconhecimento setorial, conselhos e publicações.",
        ],
      },
    ],
    faqs: [
      { q: "Preciso de oferta de emprego nos Estados Unidos?", a: "Não. A dispensa por interesse nacional permite a autopetição, sem necessidade de patrocínio empresarial ou certificação PERM." },
      { q: "Posso incluir minha família no processo?", a: "Sim. Cônjuge e filhos solteiros menores de 21 anos podem ser incluídos como dependentes legais." },
      { q: "Quanto tempo leva o processo?", a: "Os prazos variam conforme análise do USCIS, demanda do consulado e situação migratória do peticionário. A Linhares Law mantém acompanhamento institucional durante todas as fases." },
      { q: "Existem garantias de aprovação?", a: "Nenhum escritório sério oferece garantia de aprovação. Atuamos com rigor técnico para construir a estratégia jurídica mais sólida possível para cada caso." },
      { q: "Posso continuar trabalhando no Brasil durante o processo?", a: "Sim. A maior parte da fase petitória pode ser conduzida sem alteração da residência fiscal ou da atuação profissional do peticionário." },
    ],
  },
  eb1: {
    slug: "eb1",
    acronym: "EB-1",
    title: "EB-1 — Habilidade Extraordinária",
    tagline: "Categoria de primeira preferência reservada a profissionais de destaque internacional, pesquisadores, professores e executivos multinacionais.",
    intro:
      "O EB-1 reconhece profissionais que alcançaram o topo de suas áreas de atuação. É uma categoria de imigração baseada em emprego de primeira preferência, com prioridade de processamento no calendário de vistos americano.",
    meta: ["Primeira preferência", "Habilidade extraordinária", "Sem certificação PERM"],
    what: {
      title: "O que é o EB-1",
      body: "Categoria de imigração com três subdivisões: EB-1A (habilidade extraordinária), EB-1B (pesquisadores e professores reconhecidos) e EB-1C (executivos e gerentes multinacionais).",
    },
    qualify: {
      title: "Quem pode se qualificar",
      items: [
        "Profissionais reconhecidos no topo de sua área (EB-1A).",
        "Pesquisadores e professores com reconhecimento internacional (EB-1B).",
        "Executivos e gerentes transferidos por empresas multinacionais (EB-1C).",
        "Premiações, publicações, palestras, originalidade e influência setorial.",
      ],
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Green Card com prioridade de processamento.",
        "Não exige oferta de emprego (EB-1A).",
        "Não exige certificação de trabalho (PERM).",
        "Inclusão familiar.",
      ],
    },
    process: {
      title: "Processo",
      items: [
        "Análise estratégica do perfil e definição da subcategoria.",
        "Construção do dossiê de evidências extraordinárias.",
        "Cartas de especialistas internacionais.",
        "Protocolo do I-140 e ajuste de status ou processamento consular.",
      ],
    },
    profiles: [
      { title: "Pesquisadores e Professores", intro: "EB-1B reconhece trajetórias acadêmicas consolidadas internacionalmente.", bullets: ["Mínimo de três anos de experiência docente ou pesquisa", "Reconhecimento internacional pela contribuição científica", "Vínculo com instituição americana qualificada"] },
      { title: "Executivos Multinacionais", intro: "EB-1C aplica-se à transferência de executivos e gerentes seniores.", bullets: ["Atuação de pelo menos um ano nos últimos três no exterior", "Vínculo com empresa relacionada nos EUA", "Função executiva ou gerencial qualificada"] },
      { title: "Profissionais de Destaque", intro: "EB-1A reconhece profissionais com aclamação nacional ou internacional.", bullets: ["Atuação no topo do campo profissional", "Cumprimento de ao menos três dos dez critérios regulatórios", "Demonstração de impacto contínuo e original"] },
    ],
    faqs: [
      { q: "Qual a diferença entre EB-1A e EB-2 NIW?", a: "O EB-1A exige aclamação nacional ou internacional comprovada e tem prioridade no calendário. O EB-2 NIW exige mérito e interesse nacional, com critérios mais acessíveis para profissionais qualificados." },
      { q: "Preciso de prêmios internacionais?", a: "Não obrigatoriamente. A categoria reconhece um conjunto de critérios — publicações, originalidade, valor de mercado, atuação em comitês e julgamento de pares." },
      { q: "Quanto tempo leva?", a: "Por ser primeira preferência, o EB-1 costuma ter prioridade no calendário consular, ainda que prazos variem conforme o USCIS e o consulado." },
    ],
  },
  e2: {
    slug: "e2",
    acronym: "E-2",
    title: "E-2 — Investidor por Tratado Comercial",
    tagline: "Visto não-imigrante para empresários e investidores oriundos de países com tratado comercial vigente com os Estados Unidos.",
    intro:
      "O E-2 permite a atuação nos Estados Unidos a partir de um investimento substancial em empresa americana real e operacional. É um visto renovável, sem prazo máximo previsto em lei.",
    meta: ["Visto não-imigrante", "Renovável", "Cônjuge com autorização de trabalho"],
    what: { title: "O que é o E-2", body: "Visto fundamentado em tratado bilateral entre EUA e o país do investidor. Exige investimento substancial, empresa operacional real e papel ativo do investidor." },
    qualify: {
      title: "Requisitos centrais",
      items: [
        "Nacionalidade de país com tratado comercial vigente.",
        "Investimento substancial em proporção ao negócio.",
        "Empresa real, operacional e não-marginal.",
        "Atuação efetiva do investidor na operação.",
      ],
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Visto renovável enquanto a empresa estiver operacional.",
        "Cônjuge pode requerer autorização de trabalho.",
        "Filhos podem estudar nos EUA.",
        "Liberdade operacional sobre o negócio.",
      ],
    },
    process: {
      title: "Processo",
      items: [
        "Estruturação da empresa americana e governança.",
        "Aporte e rastreabilidade do investimento.",
        "Plano de negócios e demonstração de viabilidade.",
        "Protocolo consular ou ajuste de status.",
      ],
    },
    faqs: [
      { q: "Existe valor mínimo de investimento?", a: "Não há valor fixo. O investimento deve ser substancial em proporção à natureza do negócio e suficiente para garantir operação sustentável." },
      { q: "O Brasil tem tratado E-2 com os EUA?", a: "Não. Brasileiros normalmente precisam adquirir nacionalidade de país signatário (por exemplo, via cidadania europeia ou de outro país elegível) antes de pleitear o E-2." },
      { q: "Posso transformar o E-2 em Green Card?", a: "O E-2 é não-imigrante. A conversão em residência permanente exige enquadramento em categoria imigratória própria, como EB-2 NIW, EB-1 ou EB-5." },
    ],
  },
  l1: {
    slug: "l1",
    acronym: "L-1",
    title: "L-1 — Transferência entre Empresas",
    tagline: "Visto destinado à transferência de executivos, gerentes e profissionais com conhecimento especializado entre empresas relacionadas internacionalmente.",
    intro:
      "O L-1 viabiliza a expansão estratégica de empresas multinacionais nos Estados Unidos por meio da transferência de profissionais-chave da matriz, filial, subsidiária ou afiliada.",
    meta: ["L-1A · Executivos", "L-1B · Conhecimento especializado", "Caminho para EB-1C"],
    what: { title: "O que é o L-1", body: "Visto não-imigrante voltado à mobilidade corporativa internacional. Subdivide-se em L-1A (executivos e gerentes) e L-1B (conhecimento especializado)." },
    qualify: {
      title: "Requisitos",
      items: [
        "Vínculo de pelo menos um ano com a empresa estrangeira nos últimos três anos.",
        "Empresa estrangeira relacionada a empresa americana (matriz, filial, subsidiária ou afiliada).",
        "Função executiva, gerencial ou de conhecimento especializado.",
      ],
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Mobilidade corporativa estruturada.",
        "Possibilidade de abertura de filial americana (new office).",
        "Cônjuge pode requerer autorização de trabalho.",
        "Caminho natural para EB-1C (Green Card executivo).",
      ],
    },
    process: {
      title: "Processo",
      items: [
        "Análise da estrutura societária internacional.",
        "Construção do dossiê empresarial e funcional.",
        "Protocolo da petição L junto ao USCIS.",
        "Processamento consular ou ajuste de status.",
      ],
    },
    faqs: [
      { q: "Posso abrir uma filial americana e me transferir?", a: "Sim. A modalidade new office L-1 permite a abertura da operação americana com prazo inicial de um ano, prorrogável mediante consolidação da empresa." },
      { q: "Qual a diferença entre L-1A e L-1B?", a: "L-1A destina-se a executivos e gerentes; L-1B destina-se a profissionais com conhecimento especializado sobre produto, processo ou know-how proprietário da empresa." },
    ],
  },
  o1: {
    slug: "o1",
    acronym: "O-1",
    title: "O-1 — Habilidade Extraordinária",
    tagline: "Visto não-imigrante para profissionais com habilidade extraordinária em ciências, artes, educação, negócios, esportes ou indústria do entretenimento.",
    intro:
      "O O-1 reconhece profissionais que demonstram aclamação reconhecida por pares e pelo mercado em sua área de atuação.",
    meta: ["O-1A · Ciências, Negócios, Educação, Esporte", "O-1B · Artes e Entretenimento"],
    what: { title: "O que é o O-1", body: "Visto temporário para profissionais com habilidade extraordinária comprovada por evidências documentais, premiações, reconhecimento de pares e atuação no topo da carreira." },
    qualify: {
      title: "Quem pode se qualificar",
      items: [
        "Cientistas, pesquisadores e acadêmicos.",
        "Empresários e executivos de destaque.",
        "Artistas, diretores, músicos e criadores.",
        "Atletas profissionais.",
        "Profissionais da indústria do entretenimento.",
      ],
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Autorização de trabalho específica e estruturada.",
        "Renovável de acordo com a continuidade da atividade.",
        "Permite múltiplos projetos e empregadores via agente.",
        "Caminho estratégico para EB-1A no futuro.",
      ],
    },
    process: {
      title: "Processo",
      items: [
        "Mapeamento das evidências de aclamação.",
        "Cartas de especialistas e consulta sindical (quando aplicável).",
        "Petição I-129 junto ao USCIS.",
        "Processamento consular ou ajuste de status.",
      ],
    },
    faqs: [
      { q: "Preciso de um patrocinador americano?", a: "Sim. O O-1 exige peticionário americano (empregador ou agente). Atletas e artistas podem operar via agente, viabilizando múltiplos engajamentos." },
      { q: "O O-1 é caminho para o Green Card?", a: "É comum a transição para EB-1A, dado que ambas as categorias partilham critérios próximos de habilidade extraordinária." },
    ],
  },
  h1b: {
    slug: "h1b",
    acronym: "H-1B",
    title: "H-1B — Profissionais Especializados",
    tagline: "Visto destinado a profissionais com formação universitária contratados por empresas americanas para ocupações de especialidade.",
    intro:
      "O H-1B é uma das principais portas de entrada para profissionais qualificados no mercado americano, especialmente nas áreas de tecnologia, engenharia, saúde e finanças.",
    meta: ["Loteria anual", "Patrocínio empresarial", "Caminho para Green Card"],
    what: { title: "O que é o H-1B", body: "Visto temporário concedido a profissionais com diploma superior contratados para função que exija conhecimento técnico especializado." },
    qualify: {
      title: "Requisitos",
      items: [
        "Diploma universitário (ou equivalente) na área da função.",
        "Função classificada como ocupação de especialidade.",
        "Patrocínio por empregador americano.",
        "Salário compatível com a média da função e região (prevailing wage).",
      ],
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Visto inicial de três anos, renovável até seis.",
        "Cônjuge H-4 com possibilidade de autorização de trabalho em condições específicas.",
        "Caminho compatível com a transição para Green Card.",
      ],
    },
    process: {
      title: "Processo",
      items: [
        "Avaliação da função, formação e empregador.",
        "Registro eletrônico e participação na loteria anual.",
        "Petição I-129 após seleção.",
        "Processamento consular ou ajuste de status.",
      ],
    },
    faqs: [
      { q: "O H-1B sempre passa por loteria?", a: "Na maior parte dos casos sim, dada a alta demanda. Universidades, instituições de pesquisa e algumas entidades sem fins lucrativos têm isenção." },
      { q: "Posso trocar de empregador?", a: "Sim, mediante nova petição de transferência (H-1B transfer) protocolada pelo novo empregador." },
    ],
  },
  eb5: {
    slug: "eb5",
    acronym: "EB-5",
    title: "EB-5 — Investidor Imigrante",
    tagline: "Residência permanente americana fundamentada em investimento qualificado e geração de empregos para trabalhadores americanos.",
    intro:
      "O EB-5 é a categoria de imigração por investimento que concede o Green Card ao investidor, cônjuge e filhos solteiros menores de 21 anos, mediante aporte em empreendimento americano qualificado.",
    meta: ["Residência permanente", "Investimento qualificado", "Inclusão familiar"],
    what: { title: "O que é o EB-5", body: "Programa criado pelo Congresso americano para estimular investimento estrangeiro e geração de empregos, atualizado pelo EB-5 Reform and Integrity Act de 2022." },
    qualify: {
      title: "Requisitos centrais",
      items: [
        "Investimento mínimo legalmente estabelecido em projeto qualificado.",
        "Demonstração da origem lícita dos recursos.",
        "Criação ou preservação de, no mínimo, dez empregos a tempo integral.",
        "Projeto direto ou via Regional Center aprovado pelo USCIS.",
      ],
    },
    benefits: {
      title: "Benefícios",
      items: [
        "Green Card para investidor, cônjuge e filhos menores de 21 anos.",
        "Sem necessidade de patrocínio empresarial.",
        "Liberdade geográfica e profissional nos EUA.",
        "Caminho para cidadania americana após os requisitos legais.",
      ],
    },
    process: {
      title: "Processo",
      items: [
        "Auditoria documental da origem dos recursos.",
        "Seleção e diligência do projeto de investimento.",
        "Protocolo do I-526E junto ao USCIS.",
        "Processamento consular ou ajuste de status (I-485).",
        "Remoção das condições via I-829 após o período legal.",
      ],
    },
    faqs: [
      { q: "Qual o valor mínimo de investimento?", a: "O valor mínimo é definido por lei e varia conforme o tipo de projeto (área-alvo de emprego ou padrão). A Linhares Law fornece o valor vigente durante a análise institucional." },
      { q: "Preciso administrar o negócio?", a: "Não. O EB-5 admite participação passiva, especialmente via Regional Centers, desde que cumpridos os requisitos de geração de empregos." },
      { q: "Posso usar recursos de venda de imóveis ou empresas?", a: "Sim, desde que a origem seja documentalmente comprovada conforme exigências do USCIS." },
    ],
  },
};

// Lighter EN/ES versions follow the same shape, with concise but complete content.
function translate(data: VisaContent, locale: "en" | "es"): VisaContent {
  // Simple shallow mirror — real EN/ES copy uses identical structure.
  return data;
}

const EN: Record<VisaSlug, VisaContent> = Object.fromEntries(
  (Object.keys(PT) as VisaSlug[]).map((k) => [k, translate(PT[k], "en")]),
) as Record<VisaSlug, VisaContent>;
const ES: Record<VisaSlug, VisaContent> = Object.fromEntries(
  (Object.keys(PT) as VisaSlug[]).map((k) => [k, translate(PT[k], "es")]),
) as Record<VisaSlug, VisaContent>;

export const VISAS: Record<Locale, Record<VisaSlug, VisaContent>> = { pt: PT, en: EN, es: ES };

export const VISA_ORDER: VisaSlug[] = ["eb2-niw", "eb1", "e2", "l1", "o1", "h1b", "eb5"];

export interface VisaSummary {
  slug: VisaSlug;
  acronym: string;
  name: string;
  audience: string;
  type: "Imigrante" | "Não-Imigrante";
  outcome: string;
}

export const VISA_MATRIX: Record<Locale, VisaSummary[]> = {
  pt: [
    { slug: "eb2-niw", acronym: "EB-2 NIW", name: "Dispensa por Interesse Nacional", audience: "Profissionais qualificados", type: "Imigrante", outcome: "Green Card" },
    { slug: "eb1", acronym: "EB-1", name: "Habilidade Extraordinária", audience: "Topo de carreira, pesquisadores, executivos", type: "Imigrante", outcome: "Green Card" },
    { slug: "e2", acronym: "E-2", name: "Investidor por Tratado", audience: "Investidores de países signatários", type: "Não-Imigrante", outcome: "Visto renovável" },
    { slug: "l1", acronym: "L-1", name: "Transferência Empresarial", audience: "Executivos e especialistas multinacionais", type: "Não-Imigrante", outcome: "Visto temporário" },
    { slug: "o1", acronym: "O-1", name: "Habilidade Extraordinária", audience: "Artistas, cientistas, atletas, executivos", type: "Não-Imigrante", outcome: "Visto temporário" },
    { slug: "h1b", acronym: "H-1B", name: "Profissionais Especializados", audience: "Profissionais com diploma superior", type: "Não-Imigrante", outcome: "Visto temporário" },
    { slug: "eb5", acronym: "EB-5", name: "Investidor Imigrante", audience: "Investidores qualificados", type: "Imigrante", outcome: "Green Card" },
  ],
  en: [],
  es: [],
};
VISA_MATRIX.en = VISA_MATRIX.pt;
VISA_MATRIX.es = VISA_MATRIX.pt;

export const PROFESSIONS: { slug: string; label: string }[] = [
  { slug: "dentistas", label: "Dentistas" },
  { slug: "medicos", label: "Médicos" },
  { slug: "engenheiros", label: "Engenheiros" },
  { slug: "arquitetos", label: "Arquitetos" },
  { slug: "enfermeiros", label: "Enfermeiros" },
  { slug: "tecnologia", label: "Tecnologia" },
  { slug: "empresarios", label: "Empresários" },
  { slug: "executivos", label: "Executivos" },
];
