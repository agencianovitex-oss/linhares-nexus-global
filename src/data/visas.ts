import type { Locale } from "@/i18n/locales";

export type VisaSlug = "eb2-niw" | "eb1" | "e2" | "l1" | "o1" | "h1b" | "eb5" | "eb3" | "i130" | "vawa";

interface FAQ { q: string; a: string }
interface Section { title: string; body?: string; items?: string[] }
interface ProfileBlock { title: string; intro: string; bullets: string[] }

export interface VisaContent {
  slug: VisaSlug;
  acronym: string;
  title: string;
  heroSubhead: string;
  tagline: string;
  intro: string;
  meta: string[];
  what: { title: string; body: string };
  qualify: Section;
  benefits: Section;
  process: Section;
  profiles?: ProfileBlock[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
}

const PT: Record<VisaSlug, VisaContent> = {
  "eb2-niw": {
    slug: "eb2-niw",
    acronym: "EB-2 NIW",
    title: "EB-2 NIW",
    heroSubhead: "Green Card por Interesse Nacional",
    tagline:
      "Para profissionais altamente qualificados cuja atuação representa interesse nacional para os Estados Unidos. O EB-2 NIW permite solicitar o Green Card sem depender de uma oferta de emprego ou do patrocínio de uma empresa, oferecendo um caminho estratégico para pesquisadores, médicos, engenheiros, empresários, executivos e outros especialistas com trajetória de destaque.",
    intro:
      "O EB-2 National Interest Waiver é uma categoria migratória destinada a profissionais altamente qualificados cuja atuação pode gerar benefícios relevantes para os Estados Unidos.",
    meta: ["Residência permanente", "Autopetição", "Sem oferta de emprego", "Inclusão familiar"],
    what: {
      title: "O que é o EB-2 NIW",
      body:
        "Diferentemente de outras modalidades de imigração baseada em emprego, o EB-2 NIW permite que o próprio profissional apresente sua petição, dispensando a necessidade de um empregador patrocinador. O objetivo é reconhecer profissionais capazes de contribuir para o desenvolvimento econômico, científico, tecnológico, educacional ou social do país.",
    },
    qualify: {
      title: "Quem pode se qualificar",
      items: [
        "Médicos com atuação clínica, acadêmica ou em saúde pública.",
        "Dentistas com trajetória técnica consolidada e produção qualificada.",
        "Psicólogos com formação avançada e prática clínica ou acadêmica.",
        "Engenheiros em áreas de infraestrutura, energia, manufatura e tecnologia.",
        "Executivos com responsabilidade estratégica em organizações internacionais.",
        "Empresários e fundadores com empreendimento de impacto demonstrável.",
        "Pesquisadores com produção científica reconhecida por pares.",
        "Cientistas em áreas de prioridade estratégica para os Estados Unidos.",
        "Especialistas em tecnologia, segurança cibernética, dados e inteligência artificial.",
        "Profissionais com habilidades excepcionais comprovadas por trajetória e mérito.",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Green Card — residência permanente nos Estados Unidos.",
        "Inclusão de cônjuge e filhos solteiros menores de 21 anos.",
        "Não exige oferta de emprego nem certificação PERM.",
        "Liberdade profissional para atuar como autônomo, empreendedor ou empregado.",
        "Possibilidade de manter atuação internacional durante o processo.",
        "Caminho natural para a cidadania americana após os requisitos legais.",
      ],
    },
    process: {
      title: "Como construímos um caso EB-2 NIW",
      items: [
        "Avaliação estratégica do perfil profissional, acadêmico e familiar.",
        "Planejamento jurídico do empreendimento proposto e do mérito a ser demonstrado.",
        "Construção de evidências documentais, cartas de especialistas e dossiê técnico.",
        "Preparação da petição I-140 e protocolo perante o USCIS.",
        "Acompanhamento processual até o ajuste de status (I-485) ou processamento consular.",
      ],
    },
    profiles: [
      {
        title: "Dentistas",
        intro:
          "O Linhares Law mantém parceria institucional com a ABO-US, oferecendo estrutura complementar de preparação técnica e licenciamento americano para dentistas brasileiros.",
        bullets: [
          "Construção do dossiê de mérito profissional e produção qualificada.",
          "Suporte estratégico para licenciamento americano (NBDE / INBDE).",
          "Parceria com ABO-US para preparação técnica e idioma.",
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
          "Reconhecimento da contribuição de profissionais em segurança cibernética, inteligência artificial, infraestrutura digital e desenvolvimento de software.",
        bullets: [
          "Liderança técnica em produtos digitais e arquiteturas escaláveis.",
          "Atuação em segurança, dados, cloud, IA e pesquisa aplicada.",
          "Reconhecimento por pares, conferências e contribuições open-source.",
        ],
      },
      {
        title: "Empresários",
        intro:
          "Empresários e fundadores demonstram interesse nacional pela natureza estratégica do empreendimento, geração de empregos e impacto econômico.",
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
      { q: "Preciso de oferta de emprego nos Estados Unidos para o EB-2 NIW?", a: "Não. A dispensa por interesse nacional permite que o próprio profissional apresente sua petição, sem necessidade de patrocínio empresarial ou de certificação de trabalho (PERM)." },
      { q: "Posso incluir minha família no processo?", a: "Sim. Cônjuge e filhos solteiros menores de 21 anos podem ser incluídos como dependentes, recebendo o Green Card em conjunto com o peticionário principal." },
      { q: "Quanto tempo leva, em média, um processo EB-2 NIW?", a: "Os prazos variam conforme o calendário do USCIS, a demanda do consulado responsável e a situação migratória do peticionário. A análise individual é feita durante a avaliação estratégica inicial." },
      { q: "Existe garantia de aprovação?", a: "Nenhum escritório de advocacia sério oferece garantia de aprovação em processo de imigração. O compromisso é construir a estratégia jurídica mais sólida possível a partir do mérito real do caso." },
      { q: "Posso continuar morando e trabalhando no Brasil durante o processo?", a: "Sim. A maior parte da fase petitória pode ser conduzida sem alteração da residência fiscal ou da atuação profissional do peticionário no exterior." },
      { q: "Qual a diferença entre EB-2 NIW e o EB-2 tradicional?", a: "O EB-2 tradicional exige oferta de emprego nos EUA e certificação PERM. O EB-2 NIW dispensa ambos quando o profissional demonstra que sua atuação representa interesse nacional." },
      { q: "Quais documentos são essenciais para fundamentar a petição?", a: "Diplomas, registros profissionais, publicações, premiações, cartas de especialistas, plano detalhado da atuação proposta e evidências do impacto produzido pelo trabalho do peticionário." },
      { q: "Profissionais sem mestrado ou doutorado podem se qualificar?", a: "Sim. A graduação combinada com pelo menos cinco anos de experiência progressivamente relevante pode atender ao requisito de formação avançada." },
      { q: "É necessário ter empresa ou projeto formalmente constituído nos EUA?", a: "Não obrigatoriamente. O essencial é demonstrar de forma concreta a atuação proposta nos Estados Unidos e o benefício nacional que ela representa." },
      { q: "Após receber o Green Card, quando posso solicitar a cidadania?", a: "Em regra, após cinco anos de residência permanente, mantidas as condições legais de elegibilidade. O prazo pode variar conforme o histórico do residente." },
    ],
    seoTitle: "EB-2 NIW — Green Card por Interesse Nacional | Linhares Law",
    seoDescription:
      "Estratégia EB-2 NIW para profissionais qualificados obterem residência permanente nos Estados Unidos sem oferta de emprego. Atuação institucional do Linhares Law.",
  },

  eb1: {
    slug: "eb1",
    acronym: "EB-1",
    title: "EB-1",
    heroSubhead: "Green Card para profissionais de destaque internacional",
    tagline:
      "Uma das categorias mais prestigiadas da imigração americana baseada em emprego, destinada a indivíduos que alcançaram reconhecimento significativo em suas áreas de atuação.",
    intro:
      "O EB-1 reconhece profissionais que se destacam no topo de suas carreiras. Subdivide-se em três modalidades — EB-1A, EB-1B e EB-1C — cada uma direcionada a um perfil específico de reconhecimento e atuação.",
    meta: ["Primeira preferência", "Habilidade extraordinária", "Sem certificação PERM"],
    what: {
      title: "O que é o EB-1",
      body:
        "Categoria migratória de primeira preferência destinada a indivíduos com aclamação internacional, pesquisadores e professores de destaque, e executivos transferidos por empresas multinacionais.",
    },
    qualify: {
      title: "Categorias e quem pode se qualificar",
      items: [
        "EB-1A — Habilidade Extraordinária: profissionais reconhecidos nacional ou internacionalmente por premiações, publicações, liderança e reconhecimento de mercado.",
        "EB-1B — Professores e Pesquisadores: acadêmicos e pesquisadores com reconhecimento internacional e vínculo com instituição americana qualificada.",
        "EB-1C — Executivos Multinacionais: executivos transferidos entre empresas relacionadas internacionalmente, com função estratégica e governança corporativa.",
        "Histórico de premiações, publicações e contribuições originais para a área de atuação.",
        "Reconhecimento sustentado por pares, mercado e instituições de referência.",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Green Card com prioridade no calendário de vistos americano.",
        "Processo robusto fundado em mérito profissional consolidado.",
        "Inclusão de cônjuge e filhos solteiros menores de 21 anos.",
        "Caminho direto para residência permanente sem certificação PERM.",
        "Liberdade profissional após a obtenção da residência.",
      ],
    },
    process: {
      title: "Como construímos um caso EB-1",
      items: [
        "Definição da subcategoria adequada ao perfil (EB-1A, EB-1B ou EB-1C).",
        "Mapeamento das evidências de aclamação e reconhecimento por pares.",
        "Cartas de especialistas internacionais e construção do dossiê institucional.",
        "Protocolo da petição I-140 perante o USCIS.",
        "Ajuste de status (I-485) ou processamento consular até a entrega do Green Card.",
      ],
    },
    profiles: [
      { title: "Pesquisadores e Professores (EB-1B)", intro: "Trajetórias acadêmicas consolidadas internacionalmente.", bullets: ["Mínimo de três anos de experiência docente ou em pesquisa", "Reconhecimento internacional pela contribuição científica", "Vínculo com instituição americana qualificada"] },
      { title: "Executivos Multinacionais (EB-1C)", intro: "Transferência de executivos e gerentes seniores entre empresas internacionalmente relacionadas.", bullets: ["Atuação executiva por pelo menos um ano nos últimos três no exterior", "Vínculo com empresa relacionada nos EUA", "Função executiva ou gerencial qualificada"] },
      { title: "Profissionais de Destaque (EB-1A)", intro: "Reconhecimento nacional ou internacional sustentado.", bullets: ["Atuação no topo da área profissional", "Cumprimento de ao menos três dos dez critérios regulatórios", "Demonstração de impacto contínuo e originalidade"] },
    ],
    faqs: [
      { q: "Qual a principal diferença entre EB-1A e EB-2 NIW?", a: "O EB-1A exige aclamação nacional ou internacional comprovada e oferece prioridade no calendário. O EB-2 NIW exige mérito profissional e interesse nacional, com critérios mais acessíveis a um número maior de profissionais." },
      { q: "Preciso de prêmios internacionais para o EB-1A?", a: "Não obrigatoriamente. A categoria avalia um conjunto de critérios — publicações, originalidade, valor de mercado, atuação em comitês, julgamento de pares e visibilidade institucional." },
      { q: "Quanto tempo costuma levar o EB-1?", a: "Por ser categoria de primeira preferência, o EB-1 geralmente avança com prioridade no calendário consular, ainda que os prazos variem conforme o USCIS e o consulado responsável." },
      { q: "É possível solicitar o EB-1A sem patrocínio empresarial?", a: "Sim. O EB-1A é uma das poucas categorias que admite autopetição, dispensando a participação de empregador americano." },
      { q: "Quem pode pleitear o EB-1B?", a: "Professores e pesquisadores com reconhecimento internacional e oferta de posição permanente ou de natureza estável em instituição americana qualificada." },
      { q: "O EB-1C exige a abertura de empresa nos Estados Unidos?", a: "Não necessariamente. Exige a existência de empresa americana relacionada à empresa estrangeira por vínculo societário, com operação real e função executiva ou gerencial qualificada." },
      { q: "Posso transitar do O-1 para o EB-1A?", a: "Sim, e é um caminho frequente. Ambas as categorias partilham critérios próximos de habilidade extraordinária, o que viabiliza a transição planejada." },
      { q: "Cônjuge e filhos têm direito a residência?", a: "Sim. Cônjuge e filhos solteiros menores de 21 anos recebem residência permanente em conjunto com o peticionário principal." },
      { q: "Existe limite anual de aprovações no EB-1?", a: "Há cotas anuais por categoria e por país de origem, definidas pela legislação americana. A análise estratégica considera a janela atual de processamento." },
      { q: "Posso continuar atuando profissionalmente durante o processo?", a: "Sim. Em regra, a fase petitória do EB-1 permite que o peticionário mantenha sua atuação profissional no exterior até o momento adequado de transferência." },
    ],
    seoTitle: "EB-1 — Habilidade Extraordinária e Executivos | Linhares Law",
    seoDescription:
      "Estratégia EB-1 (EB-1A, EB-1B e EB-1C) para profissionais de destaque, pesquisadores e executivos multinacionais conduzida pelo Linhares Law.",
  },

  e2: {
    slug: "e2",
    acronym: "E-2",
    title: "E-2",
    heroSubhead: "Investimento e operação empresarial nos Estados Unidos",
    tagline:
      "O visto E-2 é destinado a investidores de países que possuem tratado comercial com os Estados Unidos e permite administrar e desenvolver negócios em território americano mediante investimento substancial.",
    intro:
      "O E-2 viabiliza a atuação empresarial nos Estados Unidos a partir de um investimento substancial em empresa americana real, operacional e não-marginal. É um visto renovável, sem prazo máximo previsto em lei.",
    meta: ["Visto não-imigrante", "Renovável", "Cônjuge com autorização de trabalho"],
    what: {
      title: "O que é o visto E-2",
      body:
        "Visto fundamentado em tratado bilateral entre os Estados Unidos e o país do investidor. Exige nacionalidade elegível, investimento substancial, empresa operacional real e participação ativa do investidor na gestão.",
    },
    qualify: {
      title: "Critérios centrais",
      items: [
        "Nacionalidade de país com tratado comercial vigente com os Estados Unidos.",
        "Investimento substancial em proporção à natureza do negócio.",
        "Empresa real, operacional e não-marginal — capaz de gerar mais do que sustento mínimo.",
        "Participação efetiva do investidor na direção e desenvolvimento da empresa.",
        "Recursos com origem lícita e plenamente rastreáveis.",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Possibilidade de residir legalmente nos Estados Unidos.",
        "Liberdade para operar empresa própria em território americano.",
        "Cônjuge pode requerer autorização de trabalho.",
        "Filhos podem estudar nos Estados Unidos.",
        "Renovações sucessivas enquanto a empresa permanecer operacional.",
      ],
    },
    process: {
      title: "Como construímos um caso E-2",
      items: [
        "Estruturação da empresa americana, governança e composição societária.",
        "Documentação do aporte e da rastreabilidade integral do investimento.",
        "Plano de negócios técnico, demonstrando viabilidade e geração de empregos.",
        "Protocolo consular ou ajuste de status, conforme a situação migratória.",
      ],
    },
    faqs: [
      { q: "Existe valor mínimo de investimento para o E-2?", a: "Não há valor fixo definido em lei. O investimento deve ser substancial em proporção à natureza do negócio e suficiente para garantir operação sustentável." },
      { q: "O Brasil possui tratado E-2 com os Estados Unidos?", a: "Não. Brasileiros, em regra, precisam adquirir nacionalidade de país signatário antes de pleitear o E-2 — por exemplo, mediante cidadania europeia ou de outro país elegível." },
      { q: "É possível transformar o E-2 em Green Card?", a: "O E-2 é não-imigrante. A transição para residência permanente exige enquadramento em categoria imigratória própria, como EB-2 NIW, EB-1 ou EB-5." },
      { q: "Posso investir em uma franquia americana?", a: "Sim. Franquias são amplamente aceitas, desde que o investimento seja substancial, a empresa esteja operacional e o investidor exerça papel ativo na gestão." },
      { q: "Por quanto tempo o E-2 é concedido?", a: "O visto é tipicamente concedido por períodos de até cinco anos, renováveis indefinidamente enquanto a empresa permanecer operacional." },
      { q: "Sou obrigado a residir nos Estados Unidos?", a: "Não. O E-2 permite residência, mas não a impõe. Muitos investidores optam por residir parte do ano nos EUA mantendo atuação no país de origem." },
      { q: "Posso contratar funcionários no Brasil ou em outros países?", a: "Sim. A estrutura societária pode incluir operações internacionais, desde que a empresa americana mantenha atividade real e relevante." },
      { q: "Os filhos podem permanecer no E-2 após os 21 anos?", a: "Não. Ao completar 21 anos, os dependentes deixam de ser elegíveis e devem buscar enquadramento migratório próprio." },
      { q: "É possível operar mais de uma empresa com o mesmo E-2?", a: "Sim, desde que as empresas estejam relacionadas e o investidor mantenha participação ativa na gestão das atividades vinculadas ao visto." },
      { q: "O que acontece com o visto se a empresa encerrar atividades?", a: "O E-2 perde sua fundamentação caso a empresa deixe de operar. O planejamento estratégico considera contingências e alternativas migratórias." },
    ],
    seoTitle: "E-2 — Investidor por Tratado Comercial | Linhares Law",
    seoDescription:
      "Visto E-2 para investidores e empresários estabelecerem e operarem negócios nos Estados Unidos. Estratégia institucional do Linhares Law.",
  },

  l1: {
    slug: "l1",
    acronym: "L-1",
    title: "L-1",
    heroSubhead: "Expansão empresarial para os Estados Unidos",
    tagline:
      "O L-1 é destinado à transferência de executivos, gestores e profissionais especializados para operações americanas de empresas internacionais.",
    intro:
      "O L-1 viabiliza a expansão estratégica de empresas multinacionais nos Estados Unidos por meio da transferência de profissionais-chave entre matriz, filial, subsidiária ou afiliada.",
    meta: ["L-1A · Executivos", "L-1B · Conhecimento especializado", "Caminho para EB-1C"],
    what: {
      title: "O que é o visto L-1",
      body:
        "Visto não-imigrante voltado à mobilidade corporativa internacional. Subdivide-se em L-1A (executivos e gerentes) e L-1B (profissionais com conhecimento especializado sobre produto, processo ou know-how proprietário).",
    },
    qualify: {
      title: "Requisitos",
      items: [
        "Relação societária entre a empresa estrangeira e a americana (matriz, filial, subsidiária ou afiliada).",
        "Experiência prévia mínima de um ano nos últimos três anos junto à empresa estrangeira.",
        "Cargo executivo, gerencial ou de conhecimento especializado.",
        "Empresa americana ativa ou em estruturação formal (modalidade new office).",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Estrutura jurídica adequada à expansão internacional do grupo empresarial.",
        "Inclusão de cônjuge e filhos solteiros menores de 21 anos.",
        "Cônjuge pode requerer autorização de trabalho nos Estados Unidos.",
        "Possibilidade de abertura de filial americana (new office L-1).",
        "Caminho natural para EB-1C (Green Card executivo).",
      ],
    },
    process: {
      title: "Como construímos um caso L-1",
      items: [
        "Análise da estrutura societária e da relação entre as empresas envolvidas.",
        "Construção do dossiê empresarial, funcional e de governança.",
        "Documentação da função exercida no exterior e da função projetada nos EUA.",
        "Protocolo da petição L junto ao USCIS.",
        "Processamento consular ou ajuste de status.",
      ],
    },
    faqs: [
      { q: "Posso abrir uma filial americana e me transferir como L-1?", a: "Sim. A modalidade new office L-1 permite a abertura formal da operação americana com prazo inicial de um ano, prorrogável mediante consolidação da empresa." },
      { q: "Qual a diferença entre L-1A e L-1B?", a: "O L-1A destina-se a executivos e gerentes; o L-1B destina-se a profissionais com conhecimento especializado sobre produto, processo ou know-how proprietário da empresa." },
      { q: "Por quanto tempo o L-1 é concedido?", a: "L-1A pode atingir até sete anos no total; L-1B pode atingir até cinco. Ambas as categorias começam com prazos iniciais menores, sucessivamente prorrogáveis." },
      { q: "O L-1 leva ao Green Card?", a: "Sim. O L-1A converge naturalmente para o EB-1C, categoria de residência permanente para executivos multinacionais." },
      { q: "Qual a relação societária mínima entre as empresas?", a: "É necessário comprovar vínculo entre matriz, filial, subsidiária ou afiliada, com participação societária qualificada e governança comum." },
      { q: "Cônjuge pode trabalhar nos Estados Unidos?", a: "Sim. O cônjuge do titular de L-1 pode requerer autorização de trabalho independente, sem necessidade de patrocínio empresarial próprio." },
      { q: "É necessário ter clientes ou faturamento nos Estados Unidos antes da abertura?", a: "Não para a modalidade new office, mas o plano de negócios deve demonstrar viabilidade comercial concreta nos doze meses iniciais." },
      { q: "Funcionários estrangeiros podem ser transferidos junto com o executivo?", a: "Sim, mediante novas petições individuais. Cada profissional é avaliado conforme sua função no exterior e nos Estados Unidos." },
      { q: "Empresas com pouco tempo de operação podem patrocinar L-1?", a: "Sim, desde que estejam regularmente constituídas, em operação real no exterior e com vínculo societário válido com a empresa americana." },
      { q: "O que acontece se a empresa americana não se consolidar no primeiro ano?", a: "A renovação do L-1 pode ser indeferida. O planejamento institucional considera marcos operacionais e métricas que sustentem a continuidade do visto." },
    ],
    seoTitle: "L-1 — Transferência entre Empresas | Linhares Law",
    seoDescription:
      "Estratégia L-1 para transferência de executivos, gestores e profissionais especializados em operações americanas de empresas internacionais.",
  },

  o1: {
    slug: "o1",
    acronym: "O-1",
    title: "O-1",
    heroSubhead: "Profissionais com habilidades extraordinárias",
    tagline:
      "O visto O-1 é destinado a indivíduos que demonstram reconhecimento significativo e realizações excepcionais em suas áreas de atuação.",
    intro:
      "O O-1 reconhece profissionais que demonstram aclamação reconhecida por pares e pelo mercado em ciências, artes, educação, negócios, esportes ou indústria do entretenimento.",
    meta: ["O-1A · Ciências, Negócios, Educação, Esporte", "O-1B · Artes e Entretenimento"],
    what: {
      title: "O que é o visto O-1",
      body:
        "Visto temporário concedido a profissionais com habilidade extraordinária comprovada por evidências documentais, premiações, reconhecimento de pares e atuação no topo da carreira.",
    },
    qualify: {
      title: "Quem costuma se qualificar",
      items: [
        "Empresários com trajetória reconhecida em seus mercados de atuação.",
        "Pesquisadores com produção científica relevante e reconhecimento internacional.",
        "Cientistas com contribuição comprovada em áreas de conhecimento estratégicas.",
        "Executivos com liderança reconhecida em organizações internacionais.",
        "Atletas profissionais com histórico nacional ou internacional.",
        "Artistas, diretores, músicos e criadores com aclamação consolidada.",
        "Profissionais de destaque na indústria do entretenimento.",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Autorização de trabalho específica, estruturada e renovável.",
        "Inclusão de cônjuge e filhos solteiros menores de 21 anos.",
        "Possibilidade de múltiplos projetos e empregadores via agente.",
        "Caminho estratégico para transição posterior ao EB-1A.",
        "Atuação legalizada em todo o território americano.",
      ],
    },
    process: {
      title: "Como construímos um caso O-1",
      items: [
        "Mapeamento das evidências de aclamação, premiações e publicações.",
        "Cartas de especialistas e consulta sindical, quando aplicável.",
        "Construção do dossiê de mérito profissional individualizado.",
        "Protocolo da petição I-129 perante o USCIS.",
        "Processamento consular ou ajuste de status.",
      ],
    },
    faqs: [
      { q: "Preciso de um patrocinador americano para o O-1?", a: "Sim. O O-1 exige peticionário americano — empregador ou agente. Atletas e artistas podem atuar via agente, viabilizando múltiplos engajamentos." },
      { q: "O O-1 é um caminho para o Green Card?", a: "É frequente a transição do O-1 para o EB-1A, dado que ambas as categorias partilham critérios próximos de habilidade extraordinária." },
      { q: "Por quanto tempo o O-1 é concedido?", a: "O período inicial pode atingir até três anos, com renovações sucessivas em períodos de até um ano, vinculadas à continuidade da atividade." },
      { q: "Quais evidências costumam fundamentar a petição?", a: "Premiações, publicações, citações, atuação em comitês, julgamento de pares, contratos relevantes, salário compatível com o topo da carreira e cobertura midiática." },
      { q: "Empresários podem se qualificar para o O-1?", a: "Sim, desde que demonstrem aclamação sustentada em sua área de atuação, com histórico de liderança, premiações e reconhecimento de mercado." },
      { q: "Existe loteria para o O-1?", a: "Não. Diferentemente do H-1B, o O-1 não possui sistema de loteria e pode ser solicitado ao longo de todo o ano." },
      { q: "Qual a diferença entre O-1A e O-1B?", a: "O O-1A aplica-se a ciências, negócios, educação e esportes. O O-1B aplica-se a artes e indústria do entretenimento, com critérios próprios de avaliação." },
      { q: "Cônjuge pode trabalhar nos Estados Unidos com base no O-1?", a: "O dependente O-3 não recebe autorização automática de trabalho. A atuação profissional do cônjuge depende de visto próprio." },
      { q: "É possível alterar o empregador titular do O-1?", a: "Sim, mediante nova petição apresentada pelo novo patrocinador. A continuidade da atividade no mesmo campo é elemento central da análise." },
      { q: "É necessário deixar o Brasil para iniciar o processo?", a: "Não. A petição pode ser construída e protocolada com o profissional ainda em seu país de origem, com posterior emissão consular do visto." },
    ],
    seoTitle: "O-1 — Habilidade Extraordinária | Linhares Law",
    seoDescription:
      "Estratégia O-1 para profissionais com reconhecimento extraordinário em ciências, negócios, artes, esportes e indústria do entretenimento.",
  },

  h1b: {
    slug: "h1b",
    acronym: "H-1B",
    title: "H-1B",
    heroSubhead: "Profissionais especializados",
    tagline:
      "O H-1B é destinado a profissionais qualificados contratados por empresas americanas para exercer funções que exigem conhecimento técnico especializado.",
    intro:
      "O H-1B é uma das principais portas de entrada para profissionais qualificados no mercado americano, especialmente nas áreas de tecnologia, engenharia, saúde, finanças e ciências aplicadas.",
    meta: ["Loteria anual", "Patrocínio empresarial", "Caminho para Green Card"],
    what: {
      title: "O que é o visto H-1B",
      body:
        "Visto temporário concedido a profissionais com diploma superior contratados para função que exige conhecimento técnico especializado, com patrocínio formal de empresa americana.",
    },
    qualify: {
      title: "Critérios centrais",
      items: [
        "Oferta de emprego formal por empresa americana.",
        "Formação acadêmica compatível (graduação ou equivalente reconhecido).",
        "Função classificada como ocupação de especialidade (specialty occupation).",
        "Salário compatível com a média da função e da região (prevailing wage).",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Experiência profissional formal no mercado americano.",
        "Visto inicial de três anos, renovável até seis.",
        "Inclusão de cônjuge e filhos solteiros menores de 21 anos.",
        "Cônjuge H-4 pode requerer autorização de trabalho em condições específicas.",
        "Caminho compatível com a transição posterior para residência permanente.",
      ],
    },
    process: {
      title: "Como construímos um caso H-1B",
      items: [
        "Avaliação da função, da formação acadêmica e do empregador patrocinador.",
        "Registro eletrônico e participação na loteria anual.",
        "Preparação e protocolo da petição I-129 após seleção.",
        "Processamento consular ou ajuste de status, conforme o caso.",
      ],
    },
    faqs: [
      { q: "O H-1B sempre passa por loteria?", a: "Na maior parte dos casos sim, dada a alta demanda. Universidades, instituições de pesquisa e algumas entidades sem fins lucrativos têm isenção da cota." },
      { q: "Posso trocar de empregador durante o H-1B?", a: "Sim, mediante nova petição de transferência (H-1B transfer) protocolada pelo novo empregador." },
      { q: "Cônjuge pode trabalhar com o H-4?", a: "Sim, em condições específicas — em regra, quando o titular do H-1B tem petição I-140 aprovada e aguarda data de prioridade." },
      { q: "Existe limite de renovações?", a: "O H-1B pode ser renovado até atingir o limite total de seis anos. Há prorrogações específicas vinculadas a processos imigratórios em andamento." },
      { q: "É possível solicitar Green Card durante o H-1B?", a: "Sim. O H-1B é compatível com a abertura paralela de processo imigratório — EB-2 NIW, EB-2 PERM, EB-3 ou EB-1, conforme o caso." },
      { q: "Qual o papel do prevailing wage?", a: "Define o salário mínimo legalmente aceitável para a função e a região, conforme metodologia do Department of Labor americano." },
      { q: "Empresas pequenas podem patrocinar H-1B?", a: "Sim, desde que demonstrem capacidade financeira, função técnica qualificada e compatibilidade salarial com o mercado." },
      { q: "É necessário estar nos Estados Unidos para participar da loteria?", a: "Não. A loteria é eletrônica e ocorre por meio de registro do empregador americano, independentemente do local atual do profissional." },
      { q: "Quanto tempo leva entre a loteria e o início do trabalho?", a: "Em regra, o início é em 1º de outubro do ano fiscal correspondente, com a petição protocolada nos meses seguintes à seleção." },
      { q: "Posso atuar como autônomo com H-1B?", a: "O H-1B exige vínculo de subordinação com empregador qualificado. Atuação autônoma exige enquadramento em outra categoria migratória." },
    ],
    seoTitle: "H-1B — Profissionais Especializados | Linhares Law",
    seoDescription:
      "Estratégia H-1B para profissionais qualificados contratados por empresas americanas em ocupações de especialidade.",
  },

  eb5: {
    slug: "eb5",
    acronym: "EB-5",
    title: "EB-5",
    heroSubhead: "Green Card através de investimento",
    tagline:
      "O EB-5 é uma categoria migratória voltada para investidores que desejam obter residência permanente por meio de investimento qualificado na economia americana.",
    intro:
      "O EB-5 concede o Green Card ao investidor, cônjuge e filhos solteiros menores de 21 anos, mediante aporte em empreendimento americano qualificado e geração de empregos para trabalhadores americanos.",
    meta: ["Residência permanente", "Investimento qualificado", "Inclusão familiar"],
    what: {
      title: "O que é o EB-5",
      body:
        "Programa criado pelo Congresso americano para estimular investimento estrangeiro e geração de empregos, atualizado pelo EB-5 Reform and Integrity Act de 2022.",
    },
    qualify: {
      title: "Requisitos centrais",
      items: [
        "Investimento qualificado em projeto americano elegível.",
        "Demonstração rigorosa da origem lícita dos recursos.",
        "Criação ou preservação de, no mínimo, dez empregos a tempo integral.",
        "Participação empresarial — investimento direto ou via Regional Center aprovado pelo USCIS.",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Green Card para investidor, cônjuge e filhos solteiros menores de 21 anos.",
        "Sem necessidade de patrocínio empresarial.",
        "Residência permanente com liberdade geográfica e profissional.",
        "Potencial caminho para a cidadania americana após os requisitos legais.",
      ],
    },
    process: {
      title: "Como construímos um caso EB-5",
      items: [
        "Auditoria documental da origem dos recursos e do patrimônio do investidor.",
        "Seleção e diligência técnica do projeto de investimento.",
        "Protocolo da petição I-526E perante o USCIS.",
        "Processamento consular ou ajuste de status (I-485).",
        "Remoção das condições da residência via I-829, no prazo legal.",
      ],
    },
    faqs: [
      { q: "Qual o valor mínimo de investimento?", a: "O valor mínimo é definido por lei e varia conforme o tipo de projeto (área-alvo de emprego ou padrão). O Linhares Law informa o patamar vigente durante a análise institucional." },
      { q: "Preciso administrar o negócio?", a: "Não. O EB-5 admite participação passiva, especialmente via Regional Centers, desde que cumpridos os requisitos de geração de empregos." },
      { q: "Posso usar recursos de venda de imóveis ou empresas?", a: "Sim, desde que a origem seja documentalmente comprovada conforme exigências do USCIS." },
      { q: "Quanto tempo leva o processo EB-5?", a: "Os prazos variam conforme o calendário consular, a demanda do USCIS e a nacionalidade do investidor. A análise institucional considera a janela atual de processamento." },
      { q: "É possível incluir a família?", a: "Sim. Cônjuge e filhos solteiros menores de 21 anos recebem residência permanente em conjunto com o investidor principal." },
      { q: "O que ocorre após a aprovação da I-526E?", a: "O investidor recebe Green Card condicional por dois anos. Antes do término, deve protocolar a I-829 para remoção das condições e residência permanente plena." },
      { q: "Qual a diferença entre investimento direto e Regional Center?", a: "O investimento direto exige administração ativa e geração comprovada de empregos diretos. O Regional Center permite participação passiva e contabiliza empregos diretos, indiretos e induzidos." },
      { q: "Posso continuar morando fora dos Estados Unidos após a aprovação?", a: "O Green Card exige manutenção da residência principal nos Estados Unidos. Ausências prolongadas exigem planejamento específico para preservar o status." },
      { q: "Empresas familiares podem ser objeto de investimento?", a: "Sim, desde que estruturadas como empreendimento qualificado, com geração de empregos compatível e governança adequada às exigências do USCIS." },
      { q: "Quais riscos jurídicos devem ser considerados?", a: "Risco de aprovação do projeto, risco de retorno financeiro e risco regulatório. A diligência institucional é parte central da estratégia EB-5." },
    ],
    seoTitle: "EB-5 — Investidor Imigrante | Linhares Law",
    seoDescription:
      "Estratégia EB-5 para investidores obterem Green Card mediante investimento qualificado e geração de empregos nos Estados Unidos.",
  },

  eb3: {
    slug: "eb3",
    acronym: "EB-3",
    title: "EB-3",
    heroSubhead: "Green Card por oferta de emprego permanente",
    tagline:
      "Categoria de imigração baseada em emprego para profissionais qualificados, trabalhadores especializados e outros trabalhadores com oferta permanente nos Estados Unidos.",
    intro:
      "O EB-3 é uma categoria de imigração baseada em emprego destinada a profissionais qualificados, trabalhadores especializados e outros trabalhadores. Para se qualificar, normalmente é necessário ter uma oferta de trabalho permanente de uma empresa nos Estados Unidos e passar pelo processo de certificação laboral (PERM). Após a aprovação, o beneficiário e seus familiares elegíveis podem obter o Green Card e residir permanentemente nos EUA.",
    meta: ["Residência permanente", "Oferta de emprego", "Certificação PERM", "Inclusão familiar"],
    what: {
      title: "O que é o EB-3",
      body:
        "Categoria de terceira preferência baseada em emprego, destinada a profissionais qualificados, trabalhadores especializados e outros trabalhadores com oferta permanente de empregador americano após processo de certificação laboral.",
    },
    qualify: {
      title: "Quem pode se qualificar",
      items: [
        "Profissionais com diploma superior (skilled professionals).",
        "Trabalhadores especializados com pelo menos dois anos de experiência ou treinamento.",
        "Outros trabalhadores em funções que não exigem qualificação especializada.",
        "Oferta de trabalho permanente em tempo integral por empregador americano.",
        "Aprovação prévia da certificação laboral (PERM) pelo Department of Labor.",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Green Card — residência permanente nos Estados Unidos.",
        "Inclusão de cônjuge e filhos solteiros menores de 21 anos.",
        "Caminho estruturado para profissionais com oferta de emprego nos EUA.",
        "Possibilidade de mudança de empregador após cumpridos os requisitos legais.",
        "Caminho natural para a cidadania americana.",
      ],
    },
    process: {
      title: "Como construímos um caso EB-3",
      items: [
        "Análise da oferta de emprego, função e adequação à categoria.",
        "Coordenação do processo de certificação laboral (PERM).",
        "Protocolo da petição I-140 perante o USCIS.",
        "Ajuste de status (I-485) ou processamento consular conforme o caso.",
      ],
    },
    faqs: [
      { q: "Preciso de oferta de emprego para o EB-3?", a: "Sim. O EB-3 exige oferta formal de emprego permanente por empregador americano patrocinador." },
      { q: "O que é a certificação PERM?", a: "É o processo conduzido pelo Department of Labor que confirma a inexistência de trabalhador americano qualificado para a função ofertada." },
      { q: "Posso incluir minha família?", a: "Sim. Cônjuge e filhos solteiros menores de 21 anos recebem o Green Card junto ao beneficiário principal." },
      { q: "Quanto tempo leva o processo EB-3?", a: "Os prazos variam conforme o calendário do USCIS, o país de origem e a subcategoria. A análise institucional é feita caso a caso." },
      { q: "Posso mudar de empregador após o Green Card?", a: "Sim, observados os requisitos legais sobre intenção de boa-fé na oferta original e o tempo de permanência na função." },
    ],
    seoTitle: "EB-3 — Green Card por Emprego Permanente | Linhares Law",
    seoDescription:
      "Estratégia EB-3 para profissionais qualificados, trabalhadores especializados e outros trabalhadores obterem residência permanente nos Estados Unidos.",
  },

  i130: {
    slug: "i130",
    acronym: "I-130",
    title: "I-130",
    heroSubhead: "Petição familiar para imigração",
    tagline:
      "Petição utilizada por cidadãos americanos e residentes permanentes legais para solicitar a imigração de determinados familiares para os Estados Unidos.",
    intro:
      "O Formulário I-130 é utilizado por cidadãos americanos e residentes permanentes legais para solicitar a imigração de determinados familiares para os Estados Unidos. A petição comprova a existência de um relacionamento familiar válido e é o primeiro passo para que o beneficiário possa solicitar o Green Card por meio de vínculo familiar.",
    meta: ["Imigração familiar", "Cidadãos e residentes", "Primeiro passo do Green Card"],
    what: {
      title: "O que é a petição I-130",
      body:
        "É a petição que estabelece formalmente o vínculo familiar válido perante o USCIS. Sua aprovação habilita o beneficiário a iniciar o pedido de residência permanente, seja por ajuste de status nos EUA ou por processamento consular.",
    },
    qualify: {
      title: "Quem pode peticionar",
      items: [
        "Cidadãos americanos solicitando cônjuge, filhos, pais ou irmãos.",
        "Residentes permanentes solicitando cônjuge e filhos solteiros.",
        "Comprovação documental do vínculo familiar válido.",
        "Capacidade financeira do peticionário para prestar suporte (Affidavit of Support).",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Caminho legal para reunificação familiar nos Estados Unidos.",
        "Habilita o beneficiário a pleitear residência permanente.",
        "Categorias com prioridade para familiares imediatos de cidadãos americanos.",
        "Estrutura jurídica formal e amplamente reconhecida.",
      ],
    },
    process: {
      title: "Como conduzimos a petição I-130",
      items: [
        "Análise do vínculo familiar e da categoria aplicável.",
        "Curadoria documental para comprovar a relação válida.",
        "Protocolo da petição I-130 junto ao USCIS.",
        "Acompanhamento até a etapa de ajuste de status ou processamento consular.",
      ],
    },
    faqs: [
      { q: "Quais familiares podem ser peticionados via I-130?", a: "Cônjuge, filhos, pais e irmãos de cidadãos americanos; cônjuge e filhos solteiros de residentes permanentes legais." },
      { q: "A I-130 concede o Green Card?", a: "Não diretamente. Ela estabelece o vínculo familiar válido; a residência é solicitada posteriormente, por ajuste de status ou via consular." },
      { q: "Quanto tempo leva o processo?", a: "Os prazos variam conforme a categoria familiar e a nacionalidade do beneficiário, conforme o calendário consular publicado mensalmente." },
      { q: "Posso peticionar mais de um familiar?", a: "Sim. Cada beneficiário exige uma petição I-130 individual." },
      { q: "É exigido suporte financeiro?", a: "Sim. O peticionário assina o Affidavit of Support, comprometendo-se a sustentar o beneficiário conforme parâmetros oficiais." },
    ],
    seoTitle: "I-130 — Petição Familiar para Imigração | Linhares Law",
    seoDescription:
      "Petição I-130 para reunificação familiar nos Estados Unidos. Estratégia jurídica conduzida pelo Linhares Law para cidadãos americanos e residentes permanentes.",
  },

  vawa: {
    slug: "vawa",
    acronym: "VAWA",
    title: "VAWA",
    heroSubhead: "Proteção e independência migratória para vítimas de abuso",
    tagline:
      "O VAWA permite que vítimas de abuso cometido por cidadão americano ou residente permanente solicitem benefícios imigratórios sem depender do agressor.",
    intro:
      "O VAWA (Violence Against Women Act) permite que vítimas de abuso cometido por um cidadão americano ou residente permanente solicitem benefícios imigratórios sem depender do agressor. A proteção está disponível para cônjuges, filhos e, em determinadas situações, pais de cidadãos americanos. O processo é confidencial e pode levar à obtenção do Green Card, proporcionando segurança e independência à vítima.",
    meta: ["Confidencial", "Autopetição", "Caminho para o Green Card"],
    what: {
      title: "O que é o VAWA",
      body:
        "Mecanismo legal que permite a autopetição da vítima de abuso, dispensando o envolvimento ou conhecimento do agressor. O processo é tratado com sigilo institucional pelo USCIS.",
    },
    qualify: {
      title: "Quem pode pleitear",
      items: [
        "Cônjuges abusados por cidadão americano ou residente permanente.",
        "Filhos solteiros menores de 21 anos abusados pelo pai ou padrasto qualificado.",
        "Pais de cidadãos americanos maiores de 21 anos vítimas de abuso.",
        "Comprovação documental do vínculo e da boa-fé da relação.",
        "Evidências do abuso ou crueldade extrema sofridos.",
      ],
    },
    benefits: {
      title: "Principais benefícios",
      items: [
        "Petição confidencial, sem necessidade de envolvimento do agressor.",
        "Caminho para residência permanente (Green Card).",
        "Possibilidade de autorização de trabalho durante o processo.",
        "Inclusão de filhos elegíveis na petição.",
        "Independência migratória em relação ao agressor.",
      ],
    },
    process: {
      title: "Como conduzimos um caso VAWA",
      items: [
        "Avaliação confidencial das circunstâncias e do vínculo qualificado.",
        "Curadoria de evidências documentais, testemunhais e técnicas.",
        "Protocolo da petição I-360 perante o USCIS, com sigilo institucional.",
        "Acompanhamento até o ajuste de status (I-485) e obtenção do Green Card.",
      ],
    },
    faqs: [
      { q: "O agressor é notificado da petição VAWA?", a: "Não. O processo é confidencial e o USCIS adota protocolos específicos para preservar o sigilo da vítima." },
      { q: "Homens podem pleitear o VAWA?", a: "Sim. Apesar do nome, a proteção alcança vítimas de qualquer gênero." },
      { q: "Quais provas são consideradas?", a: "Registros policiais, laudos médicos, relatos de profissionais de saúde, fotografias, mensagens, declarações de terceiros e demais evidências relevantes." },
      { q: "É necessário ainda estar casado com o agressor?", a: "Não obrigatoriamente. A petição pode ser apresentada em determinadas circunstâncias mesmo após o divórcio, dentro dos prazos legais." },
      { q: "O VAWA leva ao Green Card?", a: "Sim. Após a aprovação da I-360, a vítima pode pleitear ajuste de status para residência permanente." },
    ],
    seoTitle: "VAWA — Proteção Migratória para Vítimas de Abuso | Linhares Law",
    seoDescription:
      "Estratégia VAWA confidencial para vítimas de abuso por cidadão americano ou residente permanente obterem independência migratória e Green Card.",
  },
};

function mirror(data: VisaContent): VisaContent {
  return data;
}

const EN: Record<VisaSlug, VisaContent> = Object.fromEntries(
  (Object.keys(PT) as VisaSlug[]).map((k) => [k, mirror(PT[k])]),
) as Record<VisaSlug, VisaContent>;
const ES: Record<VisaSlug, VisaContent> = Object.fromEntries(
  (Object.keys(PT) as VisaSlug[]).map((k) => [k, mirror(PT[k])]),
) as Record<VisaSlug, VisaContent>;

export const VISAS: Record<Locale, Record<VisaSlug, VisaContent>> = { pt: PT, en: EN, es: ES };

export const VISA_ORDER: VisaSlug[] = ["eb2-niw", "eb1", "e2", "l1", "eb5", "h1b", "o1", "eb3", "i130", "vawa"];

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
    { slug: "eb3", acronym: "EB-3", name: "Emprego Permanente", audience: "Profissionais qualificados e trabalhadores especializados", type: "Imigrante", outcome: "Green Card" },
    { slug: "i130", acronym: "I-130", name: "Petição Familiar", audience: "Familiares de cidadãos e residentes", type: "Imigrante", outcome: "Green Card" },
    { slug: "vawa", acronym: "VAWA", name: "Proteção para Vítimas de Abuso", audience: "Vítimas de abuso por cidadão ou residente", type: "Imigrante", outcome: "Green Card" },
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

/* ------------------------------------------------------------------ */
/* Visual category groupings used by the hub                          */
/* ------------------------------------------------------------------ */

export interface VisaCategory {
  id: string;
  title: string;
  description: string;
  slugs: VisaSlug[];
}

export const VISA_CATEGORIES: VisaCategory[] = [
  {
    id: "residencia",
    title: "Residência Permanente",
    description: "Estratégias para obtenção do Green Card com base em mérito profissional, reconhecimento internacional ou investimento qualificado.",
    slugs: ["eb2-niw", "eb1", "eb5", "eb3"],
  },
  {
    id: "empresarios",
    title: "Empresários e Investidores",
    description: "Atuação empresarial, expansão internacional e investimento qualificado no mercado americano.",
    slugs: ["e2", "l1", "eb5"],
  },
  {
    id: "profissionais",
    title: "Profissionais Qualificados",
    description: "Caminhos jurídicos para profissionais técnicos e especialistas com formação avançada ou reconhecimento setorial.",
    slugs: ["eb2-niw", "h1b", "o1", "eb3"],
  },
  {
    id: "familia",
    title: "Família e Proteção",
    description: "Estratégias jurídicas para reunificação familiar e proteção migratória.",
    slugs: ["i130", "vawa"],
  },
];

export const PLANNING_PILLARS = [
  { title: "Estratégias profissionais e familiares", body: "Estruturação migratória para profissionais, executivos e núcleos familiares completos, alinhada aos objetivos de carreira, patrimônio e qualidade de vida." },
  { title: "Empresários e investidores", body: "Planejamento jurídico para expansão internacional de negócios, estruturação societária nos Estados Unidos e investimento qualificado." },
  { title: "Avaliação de elegibilidade", body: "Diagnóstico individualizado das categorias migratórias aderentes ao perfil profissional, empresarial e familiar do cliente." },
  { title: "Planejamento de longo prazo", body: "Trajetórias construídas com visão de residência permanente, cidadania, sucessão patrimonial e atuação internacional contínua." },
];
