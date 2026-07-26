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
        "Green Card, residência permanente nos Estados Unidos.",
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
          "A Linhares Law mantém parceria institucional com a ABO-US, oferecendo estrutura complementar de preparação técnica e licenciamento americano para dentistas brasileiros.",
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
    seoTitle: "EB-2 NIW, Green Card por Interesse Nacional | Linhares Law",
    seoDescription:
      "Estratégia EB-2 NIW para profissionais qualificados obterem residência permanente nos Estados Unidos sem oferta de emprego. Atuação institucional da Linhares Law.",
  },

  eb1: {
    slug: "eb1",
    acronym: "EB-1",
    title: "EB-1",
    heroSubhead: "Green Card para profissionais de destaque internacional",
    tagline:
      "Uma das categorias mais prestigiadas da imigração americana baseada em emprego, destinada a indivíduos que alcançaram reconhecimento significativo em suas áreas de atuação.",
    intro:
      "O EB-1 reconhece profissionais que se destacam no topo de suas carreiras. Subdivide-se em três modalidades, EB-1A, EB-1B e EB-1C, cada uma direcionada a um perfil específico de reconhecimento e atuação.",
    meta: ["Primeira preferência", "Habilidade extraordinária", "Sem certificação PERM"],
    what: {
      title: "O que é o EB-1",
      body:
        "Categoria migratória de primeira preferência destinada a indivíduos com aclamação internacional, pesquisadores e professores de destaque, e executivos transferidos por empresas multinacionais.",
    },
    qualify: {
      title: "Categorias e quem pode se qualificar",
      items: [
        "EB-1A, Habilidade Extraordinária: profissionais reconhecidos nacional ou internacionalmente por premiações, publicações, liderança e reconhecimento de mercado.",
        "EB-1B, Professores e Pesquisadores: acadêmicos e pesquisadores com reconhecimento internacional e vínculo com instituição americana qualificada.",
        "EB-1C, Executivos Multinacionais: executivos transferidos entre empresas relacionadas internacionalmente, com função estratégica e governança corporativa.",
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
      { q: "Preciso de prêmios internacionais para o EB-1A?", a: "Não obrigatoriamente. A categoria avalia um conjunto de critérios, publicações, originalidade, valor de mercado, atuação em comitês, julgamento de pares e visibilidade institucional." },
      { q: "Quanto tempo costuma levar o EB-1?", a: "Por ser categoria de primeira preferência, o EB-1 geralmente avança com prioridade no calendário consular, ainda que os prazos variem conforme o USCIS e o consulado responsável." },
      { q: "É possível solicitar o EB-1A sem patrocínio empresarial?", a: "Sim. O EB-1A é uma das poucas categorias que admite autopetição, dispensando a participação de empregador americano." },
      { q: "Quem pode pleitear o EB-1B?", a: "Professores e pesquisadores com reconhecimento internacional e oferta de posição permanente ou de natureza estável em instituição americana qualificada." },
      { q: "O EB-1C exige a abertura de empresa nos Estados Unidos?", a: "Não necessariamente. Exige a existência de empresa americana relacionada à empresa estrangeira por vínculo societário, com operação real e função executiva ou gerencial qualificada." },
      { q: "Posso transitar do O-1 para o EB-1A?", a: "Sim, e é um caminho frequente. Ambas as categorias partilham critérios próximos de habilidade extraordinária, o que viabiliza a transição planejada." },
      { q: "Cônjuge e filhos têm direito a residência?", a: "Sim. Cônjuge e filhos solteiros menores de 21 anos recebem residência permanente em conjunto com o peticionário principal." },
      { q: "Existe limite anual de aprovações no EB-1?", a: "Há cotas anuais por categoria e por país de origem, definidas pela legislação americana. A análise estratégica considera a janela atual de processamento." },
      { q: "Posso continuar atuando profissionalmente durante o processo?", a: "Sim. Em regra, a fase petitória do EB-1 permite que o peticionário mantenha sua atuação profissional no exterior até o momento adequado de transferência." },
    ],
    seoTitle: "EB-1, Habilidade Extraordinária e Executivos | Linhares Law",
    seoDescription:
      "Estratégia EB-1 (EB-1A, EB-1B e EB-1C) para profissionais de destaque, pesquisadores e executivos multinacionais conduzida pela Linhares Law.",
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
        "Empresa real, operacional e não-marginal, capaz de gerar mais do que sustento mínimo.",
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
      { q: "O Brasil possui tratado E-2 com os Estados Unidos?", a: "Não. Brasileiros, em regra, precisam adquirir nacionalidade de país signatário antes de pleitear o E-2, por exemplo, mediante cidadania europeia ou de outro país elegível." },
      { q: "É possível transformar o E-2 em Green Card?", a: "O E-2 é não-imigrante. A transição para residência permanente exige enquadramento em categoria imigratória própria, como EB-2 NIW, EB-1 ou EB-5." },
      { q: "Posso investir em uma franquia americana?", a: "Sim. Franquias são amplamente aceitas, desde que o investimento seja substancial, a empresa esteja operacional e o investidor exerça papel ativo na gestão." },
      { q: "Por quanto tempo o E-2 é concedido?", a: "O visto é tipicamente concedido por períodos de até cinco anos, renováveis indefinidamente enquanto a empresa permanecer operacional." },
      { q: "Sou obrigado a residir nos Estados Unidos?", a: "Não. O E-2 permite residência, mas não a impõe. Muitos investidores optam por residir parte do ano nos EUA mantendo atuação no país de origem." },
      { q: "Posso contratar funcionários no Brasil ou em outros países?", a: "Sim. A estrutura societária pode incluir operações internacionais, desde que a empresa americana mantenha atividade real e relevante." },
      { q: "Os filhos podem permanecer no E-2 após os 21 anos?", a: "Não. Ao completar 21 anos, os dependentes deixam de ser elegíveis e devem buscar enquadramento migratório próprio." },
      { q: "É possível operar mais de uma empresa com o mesmo E-2?", a: "Sim, desde que as empresas estejam relacionadas e o investidor mantenha participação ativa na gestão das atividades vinculadas ao visto." },
      { q: "O que acontece com o visto se a empresa encerrar atividades?", a: "O E-2 perde sua fundamentação caso a empresa deixe de operar. O planejamento estratégico considera contingências e alternativas migratórias." },
    ],
    seoTitle: "E-2, Investidor por Tratado Comercial | Linhares Law",
    seoDescription:
      "Visto E-2 para investidores e empresários estabelecerem e operarem negócios nos Estados Unidos. Estratégia institucional da Linhares Law.",
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
    seoTitle: "L-1, Transferência entre Empresas | Linhares Law",
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
      { q: "Preciso de um patrocinador americano para o O-1?", a: "Sim. O O-1 exige peticionário americano, empregador ou agente. Atletas e artistas podem atuar via agente, viabilizando múltiplos engajamentos." },
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
    seoTitle: "O-1, Habilidade Extraordinária | Linhares Law",
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
      { q: "Cônjuge pode trabalhar com o H-4?", a: "Sim, em condições específicas, em regra, quando o titular do H-1B tem petição I-140 aprovada e aguarda data de prioridade." },
      { q: "Existe limite de renovações?", a: "O H-1B pode ser renovado até atingir o limite total de seis anos. Há prorrogações específicas vinculadas a processos imigratórios em andamento." },
      { q: "É possível solicitar Green Card durante o H-1B?", a: "Sim. O H-1B é compatível com a abertura paralela de processo imigratório, EB-2 NIW, EB-2 PERM, EB-3 ou EB-1, conforme o caso." },
      { q: "Qual o papel do prevailing wage?", a: "Define o salário mínimo legalmente aceitável para a função e a região, conforme metodologia do Department of Labor americano." },
      { q: "Empresas pequenas podem patrocinar H-1B?", a: "Sim, desde que demonstrem capacidade financeira, função técnica qualificada e compatibilidade salarial com o mercado." },
      { q: "É necessário estar nos Estados Unidos para participar da loteria?", a: "Não. A loteria é eletrônica e ocorre por meio de registro do empregador americano, independentemente do local atual do profissional." },
      { q: "Quanto tempo leva entre a loteria e o início do trabalho?", a: "Em regra, o início é em 1º de outubro do ano fiscal correspondente, com a petição protocolada nos meses seguintes à seleção." },
      { q: "Posso atuar como autônomo com H-1B?", a: "O H-1B exige vínculo de subordinação com empregador qualificado. Atuação autônoma exige enquadramento em outra categoria migratória." },
    ],
    seoTitle: "H-1B, Profissionais Especializados | Linhares Law",
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
        "Participação empresarial, investimento direto ou via Regional Center aprovado pelo USCIS.",
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
      { q: "Qual o valor mínimo de investimento?", a: "O valor mínimo é definido por lei e varia conforme o tipo de projeto (área-alvo de emprego ou padrão). A Linhares Law informa o patamar vigente durante a análise institucional." },
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
    seoTitle: "EB-5, Investidor Imigrante | Linhares Law",
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
        "Green Card, residência permanente nos Estados Unidos.",
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
    seoTitle: "EB-3, Green Card por Emprego Permanente | Linhares Law",
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
    seoTitle: "I-130, Petição Familiar para Imigração | Linhares Law",
    seoDescription:
      "Petição I-130 para reunificação familiar nos Estados Unidos. Estratégia jurídica conduzida pela Linhares Law para cidadãos americanos e residentes permanentes.",
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
    seoTitle: "VAWA, Proteção Migratória para Vítimas de Abuso | Linhares Law",
    seoDescription:
      "Estratégia VAWA confidencial para vítimas de abuso por cidadão americano ou residente permanente obterem independência migratória e Green Card.",
  },
};

function mirror(data: VisaContent): VisaContent {
  return data;
}

/* ------------------------------------------------------------------ */
/* English translations. Vistos ainda não traduzidos caem no PT via   */
/* mirror() como fallback temporário durante a Fase 2.                */
/* ------------------------------------------------------------------ */
const EN_OVERRIDES: Partial<Record<VisaSlug, VisaContent>> = {
  "eb2-niw": {
    slug: "eb2-niw",
    acronym: "EB-2 NIW",
    title: "EB-2 NIW",
    heroSubhead: "Green Card through the National Interest Waiver",
    tagline:
      "For highly qualified professionals whose work advances the interests of the United States. The EB-2 NIW allows the applicant to petition for a Green Card without an employer sponsor or a job offer, offering a strategic path for researchers, physicians, engineers, entrepreneurs, executives and other specialists with a distinguished record.",
    intro:
      "The EB-2 National Interest Waiver is an employment-based immigrant category for advanced-degree professionals whose work is positioned to deliver meaningful benefits to the United States.",
    meta: ["Permanent residence", "Self-petition", "No job offer required", "Family included"],
    what: {
      title: "What the EB-2 NIW is",
      body:
        "Unlike other employment-based paths, the EB-2 NIW allows the professional to file the petition directly, without an employer sponsor. The category recognizes individuals whose work can contribute to the economic, scientific, technological, educational or social development of the country.",
    },
    qualify: {
      title: "Who typically qualifies",
      items: [
        "Physicians with clinical, academic or public health practice.",
        "Dentists with a consolidated technical record and qualified production.",
        "Psychologists with advanced training and clinical or academic practice.",
        "Engineers working in infrastructure, energy, manufacturing and technology.",
        "Executives with strategic responsibility in international organizations.",
        "Entrepreneurs and founders with a demonstrable-impact venture.",
        "Researchers with peer-recognized scientific production.",
        "Scientists in fields of strategic priority for the United States.",
        "Specialists in technology, cybersecurity, data and artificial intelligence.",
        "Professionals with exceptional ability evidenced by record and merit.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Green Card, permanent residence in the United States.",
        "Spouse and unmarried children under 21 are included.",
        "No job offer and no PERM labor certification required.",
        "Professional freedom to work as self-employed, founder or employee.",
        "Ability to keep international engagements throughout the process.",
        "Natural path to U.S. citizenship once statutory requirements are met.",
      ],
    },
    process: {
      title: "How we build an EB-2 NIW case",
      items: [
        "Strategic assessment of the professional, academic and family profile.",
        "Legal design of the proposed endeavor and of the merits to be demonstrated.",
        "Curation of documentary evidence, expert letters and technical dossier.",
        "Preparation and filing of the I-140 petition with USCIS.",
        "Case management through adjustment of status (I-485) or consular processing.",
      ],
    },
    profiles: [
      {
        title: "Dentists",
        intro:
          "Linhares Law maintains an institutional partnership with ABO-US, offering a complementary framework for technical preparation and U.S. licensing for Brazilian dentists.",
        bullets: [
          "Construction of the professional merit dossier and qualified production.",
          "Strategic support for U.S. licensing (NBDE / INBDE).",
          "ABO-US partnership for technical preparation and language.",
        ],
      },
      {
        title: "Physicians",
        intro:
          "Medicine is closely aligned with the national interest standard, particularly in clinical research, public health and practice in areas of meaningful medical need.",
        bullets: [
          "Practitioners with scientific production and academic activity.",
          "Physicians in U.S. residency or fellowship programs.",
          "Specialists in fields identified as national priorities.",
        ],
      },
      {
        title: "Engineers",
        intro:
          "Engineers with experience in infrastructure, energy, advanced manufacturing and technology find strong ground to qualify on professional merit.",
        bullets: [
          "Track record in projects of strategic relevance.",
          "Activity in international companies and research centers.",
          "Patents, publications and participation in technical standards work.",
        ],
      },
      {
        title: "Technology Professionals",
        intro:
          "Recognition of contributions in cybersecurity, artificial intelligence, digital infrastructure and software engineering.",
        bullets: [
          "Technical leadership in digital products and scalable architectures.",
          "Work in security, data, cloud, AI and applied research.",
          "Peer recognition, conference presence and open-source contributions.",
        ],
      },
      {
        title: "Entrepreneurs",
        intro:
          "Founders and entrepreneurs meet the national interest standard through the strategic nature of the venture, job creation and economic impact.",
        bullets: [
          "Consolidated business track record and mature governance.",
          "Business plan with demonstrable merit and feasibility.",
          "Internationalization strategy and U.S. footprint.",
        ],
      },
      {
        title: "Executives",
        intro:
          "Senior executives from multinational organizations qualify through strategic leadership, corporate governance and sector-level contribution.",
        bullets: [
          "C-Level and directors with global responsibility.",
          "Leadership in transformation, international expansion or ESG.",
          "Sector recognition, board seats and publications.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a U.S. job offer for the EB-2 NIW?", a: "No. The national interest waiver allows the professional to self-petition, with no employer sponsor and no PERM labor certification required." },
      { q: "Can I include my family in the process?", a: "Yes. Your spouse and unmarried children under 21 may be included as dependents and receive Green Cards together with the principal applicant." },
      { q: "How long does an EB-2 NIW case typically take?", a: "Timelines vary with USCIS processing, consular workload and the applicant's immigration situation. An individual estimate is provided during the initial strategic assessment." },
      { q: "Is there any guarantee of approval?", a: "No serious immigration firm guarantees approval. Our commitment is to build the strongest possible legal strategy on the true merits of the case." },
      { q: "Can I keep living and working in my home country during the process?", a: "Yes. Most of the petition phase can be conducted without changing tax residence or the applicant's professional activity abroad." },
      { q: "What is the difference between EB-2 NIW and the traditional EB-2?", a: "The traditional EB-2 requires a U.S. job offer and PERM labor certification. The EB-2 NIW waives both when the professional shows that the work is in the national interest." },
      { q: "Which documents are essential to support the petition?", a: "Diplomas, professional registrations, publications, awards, expert letters, a detailed plan of the proposed endeavor and evidence of the impact of the applicant's work." },
      { q: "Can professionals without a master's or doctorate qualify?", a: "Yes. A bachelor's degree combined with at least five years of progressively responsible experience can satisfy the advanced degree requirement." },
      { q: "Do I need a formally established company or project in the U.S.?", a: "Not necessarily. What matters is a concrete demonstration of the proposed activity in the United States and the national benefit it represents." },
      { q: "After receiving the Green Card, when can I apply for citizenship?", a: "As a rule, after five years of permanent residence, provided the statutory eligibility conditions are maintained. The exact timeline depends on the resident's history." },
    ],
    seoTitle: "EB-2 NIW, National Interest Green Card | Linhares Law",
    seoDescription:
      "EB-2 NIW strategy for qualified professionals to obtain U.S. permanent residence without a job offer. Institutional representation by Linhares Law.",
  },

  eb1: {
    slug: "eb1",
    acronym: "EB-1",
    title: "EB-1",
    heroSubhead: "Green Card for professionals of international standing",
    tagline:
      "One of the most distinguished employment-based immigrant categories, reserved for individuals who have achieved meaningful recognition in their fields.",
    intro:
      "The EB-1 recognizes professionals at the top of their careers. It comprises three tracks, EB-1A, EB-1B and EB-1C, each aimed at a specific profile of recognition and practice.",
    meta: ["First preference", "Extraordinary ability", "No PERM required"],
    what: {
      title: "What the EB-1 is",
      body:
        "A first-preference immigrant category for individuals of international acclaim, outstanding researchers and professors, and multinational executives transferred within related companies.",
    },
    qualify: {
      title: "Tracks and typical profiles",
      items: [
        "EB-1A, Extraordinary Ability: professionals recognized nationally or internationally through awards, publications, leadership and market standing.",
        "EB-1B, Outstanding Professors and Researchers: academics and researchers with international recognition and a qualifying U.S. institutional appointment.",
        "EB-1C, Multinational Executives: senior executives transferred within internationally related companies in strategic or managerial roles.",
        "History of awards, publications and original contributions to the field.",
        "Sustained recognition by peers, market and reference institutions.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Green Card with priority in the U.S. visa bulletin.",
        "Robust filing grounded in consolidated professional merit.",
        "Spouse and unmarried children under 21 are included.",
        "Direct path to permanent residence without PERM certification.",
        "Professional freedom once residency is granted.",
      ],
    },
    process: {
      title: "How we build an EB-1 case",
      items: [
        "Selection of the appropriate track (EB-1A, EB-1B or EB-1C).",
        "Mapping of acclaim and peer recognition evidence.",
        "International expert letters and institutional dossier.",
        "Filing of the I-140 petition with USCIS.",
        "Adjustment of status (I-485) or consular processing through Green Card delivery.",
      ],
    },
    profiles: [
      { title: "Researchers and Professors (EB-1B)", intro: "Academic trajectories consolidated at international level.", bullets: ["At least three years of teaching or research experience", "International recognition for scientific contribution", "Qualifying appointment with a U.S. institution"] },
      { title: "Multinational Executives (EB-1C)", intro: "Transfer of senior executives and managers within internationally related companies.", bullets: ["Executive activity abroad for at least one of the last three years", "Qualifying relationship with a U.S. entity", "Bona fide executive or managerial role"] },
      { title: "Extraordinary Professionals (EB-1A)", intro: "Sustained national or international recognition.", bullets: ["Practice at the top of the field", "Meeting at least three of the ten regulatory criteria", "Ongoing impact and originality"] },
    ],
    faqs: [
      { q: "What is the main difference between EB-1A and EB-2 NIW?", a: "The EB-1A requires proven national or international acclaim and offers priority in the visa bulletin. The EB-2 NIW requires professional merit and national interest, with more accessible criteria for a broader pool of professionals." },
      { q: "Do I need international awards for the EB-1A?", a: "Not necessarily. The category evaluates a set of criteria, including publications, originality, market value, committee work, peer review and institutional visibility." },
      { q: "How long does an EB-1 case usually take?", a: "As a first-preference category, the EB-1 typically advances with priority on the visa bulletin, though timelines vary by USCIS and consulate." },
      { q: "Can I file EB-1A without an employer sponsor?", a: "Yes. The EB-1A is one of the few categories that allows self-petition, with no U.S. employer required." },
      { q: "Who can apply for the EB-1B?", a: "Professors and researchers with international recognition and an offer of a tenured or tenure-track position, or comparable permanent role, at a qualifying U.S. institution." },
      { q: "Does the EB-1C require setting up a U.S. company?", a: "Not necessarily. It requires a U.S. company related to the foreign company through qualifying ownership, with real operations and a qualifying executive or managerial role." },
      { q: "Can I move from O-1 to EB-1A?", a: "Yes, and it is a frequent path. Both categories share close criteria for extraordinary ability, enabling a planned transition." },
      { q: "Do spouse and children obtain residence?", a: "Yes. Spouse and unmarried children under 21 receive permanent residence together with the principal applicant." },
      { q: "Is there an annual approval cap on EB-1?", a: "There are annual caps per category and per country of birth set by U.S. law. Strategic planning takes the current processing window into account." },
      { q: "Can I keep working professionally during the process?", a: "Yes. As a rule, the petition phase allows the applicant to continue professional activity abroad until the appropriate transition point." },
    ],
    seoTitle: "EB-1, Extraordinary Ability and Executives | Linhares Law",
    seoDescription:
      "EB-1 strategy (EB-1A, EB-1B and EB-1C) for outstanding professionals, researchers and multinational executives, led by Linhares Law.",
  },

  e2: {
    slug: "e2",
    acronym: "E-2",
    title: "E-2",
    heroSubhead: "Investment and business operation in the United States",
    tagline:
      "The E-2 visa is available to investors from treaty countries, allowing them to direct and develop a U.S. business through a substantial investment.",
    intro:
      "The E-2 enables entrepreneurial activity in the United States through a substantial investment in a real, operating, non-marginal U.S. business. It is a renewable visa with no statutory maximum term.",
    meta: ["Non-immigrant visa", "Renewable", "Spouse work authorization"],
    what: {
      title: "What the E-2 visa is",
      body:
        "A visa grounded in a bilateral treaty between the United States and the investor's country. It requires eligible nationality, a substantial investment, a real operating business and the investor's active role in its direction.",
    },
    qualify: {
      title: "Core criteria",
      items: [
        "Nationality of a country with an in-force commercial treaty with the United States.",
        "Substantial investment in proportion to the nature of the business.",
        "Real, operating, non-marginal enterprise capable of generating more than minimal livelihood.",
        "Investor's active role in directing and developing the enterprise.",
        "Funds of lawful origin, fully traceable.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Ability to reside legally in the United States.",
        "Freedom to operate one's own U.S. business.",
        "Spouse may apply for work authorization.",
        "Children may study in the United States.",
        "Renewable indefinitely while the business remains operational.",
      ],
    },
    process: {
      title: "How we build an E-2 case",
      items: [
        "Structuring of the U.S. entity, governance and ownership.",
        "Documentation of the investment and full traceability of funds.",
        "Technical business plan showing feasibility and job creation.",
        "Consular processing or change of status, as applicable.",
      ],
    },
    faqs: [
      { q: "Is there a minimum investment for the E-2?", a: "There is no fixed amount in law. The investment must be substantial in proportion to the business and sufficient to support sustainable operations." },
      { q: "Does Brazil have an E-2 treaty with the United States?", a: "No. Brazilian nationals typically need to acquire an eligible nationality first, for example through European or another qualifying country citizenship, before applying for the E-2." },
      { q: "Can the E-2 be converted into a Green Card?", a: "The E-2 is non-immigrant. Moving to permanent residence requires qualifying under an immigrant category such as EB-2 NIW, EB-1 or EB-5." },
      { q: "Can I invest in a U.S. franchise?", a: "Yes. Franchises are widely accepted, provided the investment is substantial, the business is operational and the investor takes an active role in management." },
      { q: "For how long is the E-2 granted?", a: "The visa is typically issued for up to five years and may be renewed indefinitely while the business remains operational." },
      { q: "Am I required to live in the United States?", a: "No. The E-2 allows residence but does not impose it. Many investors spend part of the year in the U.S. and keep activity in their home country." },
      { q: "Can I hire employees abroad?", a: "Yes. The corporate structure may include international operations, provided the U.S. company maintains real and meaningful activity." },
      { q: "Can children stay on the E-2 after turning 21?", a: "No. Once dependents turn 21 they no longer qualify and must obtain their own immigration status." },
      { q: "Can I operate more than one company with the same E-2?", a: "Yes, provided the entities are related and the investor keeps an active role in the businesses tied to the visa." },
      { q: "What happens to the visa if the business closes?", a: "The E-2 loses its basis if the business ceases operations. Strategic planning contemplates contingencies and alternative immigration paths." },
    ],
    seoTitle: "E-2, Treaty Investor Visa | Linhares Law",
    seoDescription:
      "E-2 visa for investors and entrepreneurs establishing and operating businesses in the United States. Institutional strategy by Linhares Law.",
  },

  l1: {
    slug: "l1",
    acronym: "L-1",
    title: "L-1",
    heroSubhead: "Corporate expansion into the United States",
    tagline:
      "The L-1 facilitates the transfer of executives, managers and specialized-knowledge professionals to the U.S. operations of international companies.",
    intro:
      "The L-1 supports the strategic expansion of multinational companies in the United States through the transfer of key personnel between parent, branch, subsidiary or affiliate.",
    meta: ["L-1A · Executives", "L-1B · Specialized knowledge", "Path to EB-1C"],
    what: {
      title: "What the L-1 visa is",
      body:
        "A non-immigrant visa for international corporate mobility. It is divided into L-1A (executives and managers) and L-1B (professionals with specialized knowledge of proprietary products, processes or know-how).",
    },
    qualify: {
      title: "Requirements",
      items: [
        "Qualifying relationship between the foreign and U.S. entities (parent, branch, subsidiary or affiliate).",
        "At least one year of prior employment with the foreign company within the last three years.",
        "Executive, managerial or specialized-knowledge role.",
        "Active U.S. company or a formally structured new office.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Legal framework fit for international expansion of the corporate group.",
        "Spouse and unmarried children under 21 are included.",
        "Spouse may apply for work authorization in the United States.",
        "Ability to open a U.S. new office (new office L-1).",
        "Natural path to EB-1C (executive Green Card).",
      ],
    },
    process: {
      title: "How we build an L-1 case",
      items: [
        "Analysis of the corporate structure and relationship between entities.",
        "Business, functional and governance dossier.",
        "Documentation of the role abroad and the projected role in the U.S.",
        "Filing of the L petition with USCIS.",
        "Consular processing or change of status.",
      ],
    },
    faqs: [
      { q: "Can I open a U.S. branch and transfer as L-1?", a: "Yes. The new office L-1 supports formal opening of the U.S. operation with an initial one-year term, extendable upon consolidation of the business." },
      { q: "What is the difference between L-1A and L-1B?", a: "L-1A is for executives and managers; L-1B is for professionals with specialized knowledge of proprietary products, processes or know-how." },
      { q: "How long is the L-1 granted for?", a: "L-1A may reach up to seven years total; L-1B up to five. Both begin with shorter initial terms subject to renewals." },
      { q: "Does the L-1 lead to a Green Card?", a: "Yes. The L-1A naturally aligns with EB-1C, the permanent residence category for multinational executives." },
      { q: "What is the minimum corporate relationship required?", a: "Parent, branch, subsidiary or affiliate relationship, with qualifying ownership and common governance." },
      { q: "Can the spouse work in the U.S.?", a: "Yes. The L-1 spouse may apply for independent work authorization, without an employer sponsor of their own." },
      { q: "Do I need U.S. clients or revenue before opening?", a: "Not for the new office model, but the business plan must show concrete commercial feasibility within the first twelve months." },
      { q: "Can foreign employees be transferred alongside the executive?", a: "Yes, through new individual petitions. Each professional is assessed on their role abroad and projected role in the U.S." },
      { q: "Can newly formed companies sponsor an L-1?", a: "Yes, provided they are duly incorporated, operating abroad and have a valid corporate relationship with the U.S. entity." },
      { q: "What happens if the U.S. company does not consolidate in the first year?", a: "The L-1 renewal may be denied. Institutional planning contemplates operational milestones and metrics that support continuity of the visa." },
    ],
    seoTitle: "L-1, Intra-Company Transfer | Linhares Law",
    seoDescription:
      "L-1 strategy for the transfer of executives, managers and specialized-knowledge professionals to U.S. operations of international companies.",
  },

  o1: {
    slug: "o1",
    acronym: "O-1",
    title: "O-1",
    heroSubhead: "Individuals with extraordinary ability",
    tagline:
      "The O-1 visa is for individuals who demonstrate meaningful recognition and exceptional achievements in their field.",
    intro:
      "The O-1 recognizes professionals with sustained acclaim from peers and industry in the sciences, arts, education, business, athletics or the motion picture and television industry.",
    meta: ["O-1A · Sciences, Business, Education, Athletics", "O-1B · Arts and Entertainment"],
    what: {
      title: "What the O-1 visa is",
      body:
        "A temporary visa for professionals whose extraordinary ability is documented through awards, peer recognition and a career at the top of the field.",
    },
    qualify: {
      title: "Who typically qualifies",
      items: [
        "Entrepreneurs with a recognized track record in their markets.",
        "Researchers with relevant scientific production and international recognition.",
        "Scientists with proven contribution in strategic fields.",
        "Executives with recognized leadership in international organizations.",
        "Professional athletes with national or international records.",
        "Artists, directors, musicians and creators with consolidated acclaim.",
        "Leading professionals in the entertainment industry.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Specific, structured and renewable work authorization.",
        "Spouse and unmarried children under 21 are included.",
        "Multiple projects and employers possible through an agent.",
        "Strategic path to a later EB-1A transition.",
        "Legal activity across the entire U.S. territory.",
      ],
    },
    process: {
      title: "How we build an O-1 case",
      items: [
        "Mapping evidence of acclaim, awards and publications.",
        "Expert letters and, where applicable, peer/labor advisory opinion.",
        "Individualized professional merit dossier.",
        "Filing of the I-129 petition with USCIS.",
        "Consular processing or change of status.",
      ],
    },
    faqs: [
      { q: "Do I need a U.S. sponsor for the O-1?", a: "Yes. The O-1 requires a U.S. petitioner, employer or agent. Athletes and artists may operate through an agent, enabling multiple engagements." },
      { q: "Is the O-1 a path to a Green Card?", a: "Transition from O-1 to EB-1A is common, as both categories share close extraordinary-ability criteria." },
      { q: "How long is the O-1 granted for?", a: "Up to three years initially, with successive renewals in periods of up to one year, tied to the continuity of the activity." },
      { q: "What evidence typically supports the petition?", a: "Awards, publications, citations, committee work, peer review, meaningful contracts, salary consistent with the top of the field and media coverage." },
      { q: "Can entrepreneurs qualify for the O-1?", a: "Yes, provided they show sustained acclaim in their field, with a record of leadership, awards and market recognition." },
      { q: "Is there a lottery for the O-1?", a: "No. Unlike the H-1B, the O-1 has no lottery system and can be filed throughout the year." },
      { q: "What is the difference between O-1A and O-1B?", a: "O-1A covers sciences, business, education and athletics. O-1B covers arts and the entertainment industry, with its own evaluation criteria." },
      { q: "Can the spouse work in the U.S. on the O-1?", a: "The O-3 dependent does not receive automatic work authorization. The spouse's professional activity requires a visa of their own." },
      { q: "Can the O-1 employer of record be changed?", a: "Yes, through a new petition filed by the new sponsor. Continuity of activity in the same field is central to the analysis." },
      { q: "Do I need to leave my home country to start the process?", a: "No. The petition can be built and filed while the professional remains abroad, with the visa issued consularly afterwards." },
    ],
    seoTitle: "O-1, Extraordinary Ability Visa | Linhares Law",
    seoDescription:
      "O-1 strategy for professionals with extraordinary recognition in sciences, business, arts, athletics and entertainment.",
  },

  h1b: {
    slug: "h1b",
    acronym: "H-1B",
    title: "H-1B",
    heroSubhead: "Specialized professionals",
    tagline:
      "The H-1B is designed for qualified professionals hired by U.S. companies to perform roles requiring specialized technical knowledge.",
    intro:
      "The H-1B is one of the main gateways for qualified professionals into the U.S. market, particularly in technology, engineering, healthcare, finance and applied sciences.",
    meta: ["Annual lottery", "Employer sponsorship", "Path to Green Card"],
    what: {
      title: "What the H-1B visa is",
      body:
        "A temporary visa for professionals with a bachelor's degree hired for a role that requires specialized technical knowledge, formally sponsored by a U.S. employer.",
    },
    qualify: {
      title: "Core criteria",
      items: [
        "Formal job offer from a U.S. company.",
        "Compatible academic credentials (bachelor's degree or recognized equivalent).",
        "Role classified as a specialty occupation.",
        "Salary consistent with the prevailing wage for the role and region.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Formal professional experience in the U.S. market.",
        "Initial three-year visa, renewable up to six.",
        "Spouse and unmarried children under 21 are included.",
        "H-4 spouse may qualify for work authorization under specific conditions.",
        "Compatible with a later transition to permanent residence.",
      ],
    },
    process: {
      title: "How we build an H-1B case",
      items: [
        "Assessment of the role, credentials and sponsoring employer.",
        "Electronic registration and annual lottery.",
        "Preparation and filing of the I-129 petition after selection.",
        "Consular processing or change of status, as applicable.",
      ],
    },
    faqs: [
      { q: "Does the H-1B always go through the lottery?", a: "In most cases yes, given demand. Universities, research institutions and certain non-profits are exempt from the cap." },
      { q: "Can I change employer during the H-1B?", a: "Yes, through a new transfer petition filed by the new employer." },
      { q: "Can the spouse work on an H-4?", a: "Yes, under specific conditions, generally where the H-1B holder has an approved I-140 and is waiting for their priority date." },
      { q: "Is there a limit on renewals?", a: "The H-1B may be renewed up to a total of six years. Specific extensions are available in connection with pending immigrant petitions." },
      { q: "Can I file for a Green Card while on H-1B?", a: "Yes. The H-1B is compatible with a parallel immigrant filing, EB-2 NIW, EB-2 PERM, EB-3 or EB-1, as appropriate." },
      { q: "What is the role of the prevailing wage?", a: "It sets the legally acceptable minimum salary for the role and region, following the Department of Labor methodology." },
      { q: "Can small companies sponsor H-1B?", a: "Yes, provided they demonstrate financial ability, a qualifying technical role and market-consistent salary." },
      { q: "Do I need to be in the U.S. to participate in the lottery?", a: "No. The lottery is electronic and runs through the U.S. employer's registration, regardless of the professional's current location." },
      { q: "How long between the lottery and the start of work?", a: "Employment typically begins on October 1 of the corresponding fiscal year, with the petition filed in the months following selection." },
      { q: "Can I work as an independent contractor on H-1B?", a: "The H-1B requires an employment relationship with a qualifying employer. Independent activity requires a different immigration category." },
    ],
    seoTitle: "H-1B, Specialty Occupations | Linhares Law",
    seoDescription:
      "H-1B strategy for qualified professionals hired by U.S. companies in specialty occupations.",
  },

  eb5: {
    slug: "eb5",
    acronym: "EB-5",
    title: "EB-5",
    heroSubhead: "Green Card through investment",
    tagline:
      "The EB-5 is an immigrant category for investors seeking permanent residence through a qualified investment in the U.S. economy.",
    intro:
      "The EB-5 grants Green Cards to the investor, spouse and unmarried children under 21 through a qualifying investment in a U.S. enterprise and the creation of jobs for U.S. workers.",
    meta: ["Permanent residence", "Qualifying investment", "Family included"],
    what: {
      title: "What the EB-5 is",
      body:
        "A program created by the U.S. Congress to stimulate foreign investment and job creation, updated by the EB-5 Reform and Integrity Act of 2022.",
    },
    qualify: {
      title: "Core requirements",
      items: [
        "Qualifying investment in an eligible U.S. project.",
        "Rigorous demonstration of the lawful source of funds.",
        "Creation or preservation of at least ten full-time jobs.",
        "Direct investment or investment through a USCIS-approved Regional Center.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Green Cards for the investor, spouse and unmarried children under 21.",
        "No employer sponsorship required.",
        "Permanent residence with geographic and professional freedom.",
        "Potential path to U.S. citizenship after statutory requirements are met.",
      ],
    },
    process: {
      title: "How we build an EB-5 case",
      items: [
        "Documentary audit of the source of funds and the investor's wealth.",
        "Selection and technical diligence of the investment project.",
        "Filing of the I-526E petition with USCIS.",
        "Consular processing or adjustment of status (I-485).",
        "Removal of conditions via I-829 within the statutory window.",
      ],
    },
    faqs: [
      { q: "What is the minimum investment?", a: "The minimum is set by statute and varies by project type (targeted employment area or standard). Linhares Law confirms the current threshold during the institutional assessment." },
      { q: "Do I need to manage the business?", a: "No. The EB-5 allows passive participation, particularly through Regional Centers, provided the job-creation requirements are met." },
      { q: "Can I use proceeds from the sale of real estate or businesses?", a: "Yes, provided the source is documented as required by USCIS." },
      { q: "How long does the EB-5 process take?", a: "Timelines vary with the visa bulletin, USCIS workload and the investor's nationality. The institutional analysis considers the current processing window." },
      { q: "Can family be included?", a: "Yes. Spouse and unmarried children under 21 receive permanent residence together with the principal investor." },
      { q: "What happens after I-526E approval?", a: "The investor receives a conditional Green Card valid for two years. Before it expires, an I-829 must be filed to remove conditions and obtain full permanent residence." },
      { q: "What is the difference between direct investment and Regional Center?", a: "Direct investment requires active management and demonstrated direct job creation. The Regional Center allows passive participation and counts direct, indirect and induced jobs." },
      { q: "Can I keep living outside the U.S. after approval?", a: "The Green Card requires the U.S. as the primary residence. Extended absences require specific planning to preserve status." },
      { q: "Can family businesses be the investment vehicle?", a: "Yes, provided they are structured as a qualifying enterprise, with compatible job creation and governance that meets USCIS requirements." },
      { q: "What legal risks should be considered?", a: "Project approval risk, financial return risk and regulatory risk. Institutional diligence is a central part of the EB-5 strategy." },
    ],
    seoTitle: "EB-5, Immigrant Investor | Linhares Law",
    seoDescription:
      "EB-5 strategy for investors seeking a Green Card through a qualifying investment and job creation in the United States.",
  },

  eb3: {
    slug: "eb3",
    acronym: "EB-3",
    title: "EB-3",
    heroSubhead: "Green Card through a permanent job offer",
    tagline:
      "Employment-based immigrant category for skilled professionals, skilled workers and other workers with a permanent U.S. job offer.",
    intro:
      "The EB-3 is an employment-based immigrant category for skilled professionals, skilled workers and other workers. A permanent U.S. job offer and labor certification (PERM) are generally required. Once approved, the beneficiary and eligible family members obtain the Green Card and permanent U.S. residence.",
    meta: ["Permanent residence", "Job offer", "PERM certification", "Family included"],
    what: {
      title: "What the EB-3 is",
      body:
        "A third-preference employment-based category for skilled professionals, skilled workers and other workers with a permanent offer from a U.S. employer, following labor certification.",
    },
    qualify: {
      title: "Who can qualify",
      items: [
        "Skilled professionals with a bachelor's degree.",
        "Skilled workers with at least two years of experience or training.",
        "Other workers in roles that do not require specialized qualification.",
        "Permanent full-time job offer from a U.S. employer.",
        "Prior labor certification (PERM) approval by the Department of Labor.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Green Card, permanent residence in the United States.",
        "Spouse and unmarried children under 21 are included.",
        "Structured path for professionals with a U.S. job offer.",
        "Possibility of changing employers once legal requirements are met.",
        "Natural path to U.S. citizenship.",
      ],
    },
    process: {
      title: "How we build an EB-3 case",
      items: [
        "Analysis of the job offer, role and category fit.",
        "Coordination of the labor certification process (PERM).",
        "Filing of the I-140 petition with USCIS.",
        "Adjustment of status (I-485) or consular processing.",
      ],
    },
    faqs: [
      { q: "Do I need a job offer for the EB-3?", a: "Yes. The EB-3 requires a formal offer of permanent employment from a sponsoring U.S. employer." },
      { q: "What is PERM certification?", a: "It is the Department of Labor process that confirms there is no qualified U.S. worker for the offered role." },
      { q: "Can I include my family?", a: "Yes. Spouse and unmarried children under 21 receive Green Cards together with the principal beneficiary." },
      { q: "How long does the EB-3 take?", a: "Timelines vary with USCIS, country of birth and sub-category. The institutional analysis is performed case by case." },
      { q: "Can I change employers after the Green Card?", a: "Yes, subject to the legal requirements on good-faith intent in the original offer and the required period in the role." },
    ],
    seoTitle: "EB-3, Green Card through Permanent Employment | Linhares Law",
    seoDescription:
      "EB-3 strategy for skilled professionals, skilled workers and other workers seeking permanent residence in the United States.",
  },

  i130: {
    slug: "i130",
    acronym: "I-130",
    title: "I-130",
    heroSubhead: "Family-based immigrant petition",
    tagline:
      "Petition used by U.S. citizens and lawful permanent residents to sponsor certain family members for immigration to the United States.",
    intro:
      "Form I-130 is used by U.S. citizens and lawful permanent residents to sponsor certain family members for immigration to the United States. The petition establishes a valid family relationship and is the first step for the beneficiary to apply for a family-based Green Card.",
    meta: ["Family immigration", "Citizens and residents", "First step to Green Card"],
    what: {
      title: "What the I-130 petition is",
      body:
        "The petition formally establishes a valid family relationship before USCIS. Its approval enables the beneficiary to seek permanent residence, either through adjustment of status in the U.S. or consular processing.",
    },
    qualify: {
      title: "Who can petition",
      items: [
        "U.S. citizens petitioning spouses, children, parents or siblings.",
        "Lawful permanent residents petitioning spouses and unmarried children.",
        "Documentary evidence of the valid family relationship.",
        "Financial capacity of the petitioner (Affidavit of Support).",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Legal path to family reunification in the United States.",
        "Enables the beneficiary to seek permanent residence.",
        "Priority categories for immediate relatives of U.S. citizens.",
        "Well-recognized formal legal framework.",
      ],
    },
    process: {
      title: "How we handle the I-130 petition",
      items: [
        "Analysis of the family relationship and applicable category.",
        "Documentary curation to prove a valid relationship.",
        "Filing of the I-130 petition with USCIS.",
        "Case management through adjustment of status or consular processing.",
      ],
    },
    faqs: [
      { q: "Which family members can be sponsored through I-130?", a: "Spouses, children, parents and siblings of U.S. citizens; spouses and unmarried children of lawful permanent residents." },
      { q: "Does the I-130 grant the Green Card?", a: "Not directly. It establishes the valid family relationship; permanent residence is applied for afterwards, through adjustment of status or consular processing." },
      { q: "How long does the process take?", a: "Timelines vary with the family category and the beneficiary's nationality, following the monthly Visa Bulletin." },
      { q: "Can I petition more than one family member?", a: "Yes. Each beneficiary requires an individual I-130 petition." },
      { q: "Is financial support required?", a: "Yes. The petitioner signs the Affidavit of Support, committing to support the beneficiary under official parameters." },
    ],
    seoTitle: "I-130, Family Immigrant Petition | Linhares Law",
    seoDescription:
      "I-130 petition for family reunification in the United States. Legal strategy from Linhares Law for U.S. citizens and lawful permanent residents.",
  },

  vawa: {
    slug: "vawa",
    acronym: "VAWA",
    title: "VAWA",
    heroSubhead: "Protection and immigration independence for abuse survivors",
    tagline:
      "VAWA allows victims of abuse by a U.S. citizen or lawful permanent resident to seek immigration benefits without depending on the abuser.",
    intro:
      "VAWA (Violence Against Women Act) allows victims of abuse by a U.S. citizen or lawful permanent resident to seek immigration benefits without depending on the abuser. Protection is available to spouses, children and, in certain situations, parents of U.S. citizens. The process is confidential and can lead to a Green Card, providing safety and independence to the survivor.",
    meta: ["Confidential", "Self-petition", "Path to Green Card"],
    what: {
      title: "What VAWA is",
      body:
        "A legal mechanism that allows self-petition by the abuse survivor, with no involvement or knowledge required from the abuser. USCIS handles the process with institutional confidentiality.",
    },
    qualify: {
      title: "Who can apply",
      items: [
        "Spouses abused by a U.S. citizen or lawful permanent resident.",
        "Unmarried children under 21 abused by a qualifying parent or stepparent.",
        "Parents of U.S. citizens over 21 who are victims of abuse.",
        "Documentary evidence of the qualifying relationship and its good faith.",
        "Evidence of the abuse or extreme cruelty suffered.",
      ],
    },
    benefits: {
      title: "Key benefits",
      items: [
        "Confidential petition without involvement of the abuser.",
        "Path to permanent residence (Green Card).",
        "Possibility of work authorization during the process.",
        "Inclusion of eligible children in the petition.",
        "Immigration independence from the abuser.",
      ],
    },
    process: {
      title: "How we handle a VAWA case",
      items: [
        "Confidential assessment of circumstances and qualifying relationship.",
        "Curation of documentary, testimonial and technical evidence.",
        "Filing of the I-360 petition with USCIS under institutional confidentiality.",
        "Case management through adjustment of status (I-485) and Green Card issuance.",
      ],
    },
    faqs: [
      { q: "Is the abuser notified of the VAWA petition?", a: "No. The process is confidential and USCIS follows specific protocols to protect the survivor." },
      { q: "Can men apply for VAWA?", a: "Yes. Despite the name, protection is available to survivors of any gender." },
      { q: "What evidence is considered?", a: "Police records, medical reports, statements from healthcare professionals, photographs, messages, third-party declarations and other relevant evidence." },
      { q: "Do I still need to be married to the abuser?", a: "Not necessarily. The petition can be filed in certain circumstances even after divorce, within the statutory windows." },
      { q: "Does VAWA lead to a Green Card?", a: "Yes. After the I-360 is approved, the survivor may apply for adjustment of status to permanent residence." },
    ],
    seoTitle: "VAWA, Immigration Protection for Abuse Survivors | Linhares Law",
    seoDescription:
      "Confidential VAWA strategy for survivors of abuse by a U.S. citizen or lawful permanent resident to obtain immigration independence and a Green Card.",
  },
};

/* ------------------------------------------------------------------ */
/* Spanish translations. Same fallback rule.                          */
/* ------------------------------------------------------------------ */
const ES_OVERRIDES: Partial<Record<VisaSlug, VisaContent>> = {
  "eb2-niw": {
    slug: "eb2-niw",
    acronym: "EB-2 NIW",
    title: "EB-2 NIW",
    heroSubhead: "Green Card por Interés Nacional",
    tagline:
      "Para profesionales altamente calificados cuyo trabajo representa un interés nacional para Estados Unidos. La EB-2 NIW permite solicitar la Green Card sin depender de una oferta de empleo ni del patrocinio de un empleador, ofreciendo una vía estratégica para investigadores, médicos, ingenieros, empresarios, ejecutivos y otros especialistas con trayectoria destacada.",
    intro:
      "La EB-2 National Interest Waiver es una categoría migratoria destinada a profesionales altamente calificados cuya labor puede generar beneficios relevantes para Estados Unidos.",
    meta: ["Residencia permanente", "Autopetición", "Sin oferta de empleo", "Inclusión familiar"],
    what: {
      title: "Qué es la EB-2 NIW",
      body:
        "A diferencia de otras vías migratorias basadas en empleo, la EB-2 NIW permite que el propio profesional presente su petición, sin necesidad de un empleador patrocinador. La categoría reconoce a quienes pueden contribuir al desarrollo económico, científico, tecnológico, educativo o social del país.",
    },
    qualify: {
      title: "Quiénes suelen calificar",
      items: [
        "Médicos con práctica clínica, académica o de salud pública.",
        "Odontólogos con trayectoria técnica consolidada y producción calificada.",
        "Psicólogos con formación avanzada y práctica clínica o académica.",
        "Ingenieros en infraestructura, energía, manufactura y tecnología.",
        "Ejecutivos con responsabilidad estratégica en organizaciones internacionales.",
        "Empresarios y fundadores con emprendimientos de impacto demostrable.",
        "Investigadores con producción científica reconocida por pares.",
        "Científicos en áreas de prioridad estratégica para Estados Unidos.",
        "Especialistas en tecnología, ciberseguridad, datos e inteligencia artificial.",
        "Profesionales con habilidades excepcionales acreditadas por trayectoria y mérito.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Green Card, residencia permanente en Estados Unidos.",
        "Inclusión del cónyuge y de los hijos solteros menores de 21 años.",
        "No exige oferta de empleo ni certificación PERM.",
        "Libertad profesional para actuar como independiente, emprendedor o empleado.",
        "Posibilidad de mantener actividad internacional durante el proceso.",
        "Vía natural hacia la ciudadanía estadounidense una vez cumplidos los requisitos legales.",
      ],
    },
    process: {
      title: "Cómo construimos un caso EB-2 NIW",
      items: [
        "Evaluación estratégica del perfil profesional, académico y familiar.",
        "Planificación jurídica del emprendimiento propuesto y del mérito a demostrar.",
        "Curaduría de evidencias documentales, cartas de expertos y expediente técnico.",
        "Preparación y presentación de la petición I-140 ante USCIS.",
        "Acompañamiento hasta el ajuste de estatus (I-485) o el proceso consular.",
      ],
    },
    profiles: [
      {
        title: "Odontólogos",
        intro:
          "Linhares Law mantiene una alianza institucional con ABO-US, que ofrece una estructura complementaria de preparación técnica y de licenciamiento estadounidense para odontólogos brasileños.",
        bullets: [
          "Construcción del expediente de mérito profesional y producción calificada.",
          "Apoyo estratégico para el licenciamiento en EE. UU. (NBDE / INBDE).",
          "Alianza con ABO-US para preparación técnica y de idioma.",
        ],
      },
      {
        title: "Médicos",
        intro:
          "La medicina se alinea con los criterios de interés nacional, en especial en investigación clínica, salud pública y práctica en áreas de demanda médica relevante.",
        bullets: [
          "Profesionales con producción científica y actividad académica.",
          "Médicos en programas de residencia o fellowship en EE. UU.",
          "Especialistas en áreas de prioridad nacional declarada.",
        ],
      },
      {
        title: "Ingenieros",
        intro:
          "Ingenieros con experiencia en infraestructura, energía, manufactura avanzada y tecnología encuentran terreno fértil para calificar por mérito profesional.",
        bullets: [
          "Trayectoria en proyectos de relevancia estratégica.",
          "Actividad en empresas internacionales y centros de investigación.",
          "Patentes, publicaciones y participación en normalización técnica.",
        ],
      },
      {
        title: "Profesionales de Tecnología",
        intro:
          "Reconocimiento del aporte de profesionales en ciberseguridad, inteligencia artificial, infraestructura digital y desarrollo de software.",
        bullets: [
          "Liderazgo técnico en productos digitales y arquitecturas escalables.",
          "Actividad en seguridad, datos, cloud, IA e investigación aplicada.",
          "Reconocimiento por pares, conferencias y contribuciones open-source.",
        ],
      },
      {
        title: "Empresarios",
        intro:
          "Empresarios y fundadores demuestran interés nacional por la naturaleza estratégica del emprendimiento, la generación de empleos y el impacto económico.",
        bullets: [
          "Trayectoria empresarial consolidada y gobernanza madura.",
          "Plan de negocios con mérito y viabilidad demostrada.",
          "Estrategia de internacionalización y presencia en EE. UU.",
        ],
      },
      {
        title: "Ejecutivos",
        intro:
          "Ejecutivos sénior con trayectoria en multinacionales califican por liderazgo estratégico, gobierno corporativo y aporte sectorial.",
        bullets: [
          "Nivel C y directores con responsabilidad global.",
          "Liderazgo en transformación, expansión internacional o ESG.",
          "Reconocimiento sectorial, consejos y publicaciones.",
        ],
      },
    ],
    faqs: [
      { q: "¿Necesito una oferta de empleo en EE. UU. para la EB-2 NIW?", a: "No. La dispensa por interés nacional permite que el propio profesional presente la petición, sin patrocinio empresarial ni certificación laboral (PERM)." },
      { q: "¿Puedo incluir a mi familia en el proceso?", a: "Sí. El cónyuge y los hijos solteros menores de 21 años pueden incluirse como dependientes y recibir la Green Card junto con el peticionario principal." },
      { q: "¿Cuánto tarda, en promedio, un proceso EB-2 NIW?", a: "Los plazos varían según USCIS, la carga del consulado responsable y la situación migratoria del peticionario. La estimación individual se realiza en la evaluación estratégica inicial." },
      { q: "¿Existe garantía de aprobación?", a: "Ningún despacho serio garantiza aprobación en un proceso migratorio. El compromiso es construir la estrategia jurídica más sólida posible a partir del mérito real del caso." },
      { q: "¿Puedo seguir viviendo y trabajando en mi país durante el proceso?", a: "Sí. La mayor parte de la fase peticionaria puede conducirse sin alterar la residencia fiscal ni la actividad profesional del peticionario en el exterior." },
      { q: "¿Cuál es la diferencia entre la EB-2 NIW y la EB-2 tradicional?", a: "La EB-2 tradicional exige oferta de empleo y certificación PERM. La EB-2 NIW dispensa ambas cuando el profesional demuestra que su actividad representa interés nacional." },
      { q: "¿Qué documentos son esenciales para sustentar la petición?", a: "Diplomas, registros profesionales, publicaciones, premios, cartas de expertos, plan detallado de la actividad propuesta y evidencias del impacto del trabajo del peticionario." },
      { q: "¿Pueden calificar profesionales sin maestría o doctorado?", a: "Sí. El título de grado, combinado con al menos cinco años de experiencia progresivamente relevante, puede satisfacer el requisito de formación avanzada." },
      { q: "¿Es necesario tener empresa o proyecto formalmente constituido en EE. UU.?", a: "No necesariamente. Lo esencial es demostrar de forma concreta la actividad propuesta en Estados Unidos y el beneficio nacional que representa." },
      { q: "Tras recibir la Green Card, ¿cuándo puedo solicitar la ciudadanía?", a: "En regla general, tras cinco años de residencia permanente, siempre que se mantengan las condiciones legales de elegibilidad. El plazo puede variar según el historial del residente." },
    ],
    seoTitle: "EB-2 NIW, Green Card por Interés Nacional | Linhares Law",
    seoDescription:
      "Estrategia EB-2 NIW para profesionales calificados que buscan la residencia permanente en EE. UU. sin oferta de empleo. Representación institucional de Linhares Law.",
  },

  eb1: {
    slug: "eb1",
    acronym: "EB-1",
    title: "EB-1",
    heroSubhead: "Green Card para profesionales de proyección internacional",
    tagline:
      "Una de las categorías de inmigración por empleo más distinguidas, reservada a profesionales con reconocimiento consolidado en su campo.",
    intro:
      "La EB-1 reconoce a profesionales en la cumbre de su carrera. Se divide en tres modalidades, EB-1A, EB-1B y EB-1C, dirigidas a perfiles específicos de reconocimiento y práctica.",
    meta: ["Primera preferencia", "Habilidad extraordinaria", "Sin PERM"],
    what: {
      title: "Qué es la EB-1",
      body:
        "Categoría inmigratoria de primera preferencia para profesionales con reconocimiento internacional, investigadores y profesores destacados y ejecutivos multinacionales transferidos entre empresas relacionadas.",
    },
    qualify: {
      title: "Modalidades y perfiles típicos",
      items: [
        "EB-1A, Habilidad Extraordinaria: profesionales reconocidos nacional o internacionalmente por premios, publicaciones, liderazgo y posicionamiento en el mercado.",
        "EB-1B, Profesores e Investigadores Destacados: académicos e investigadores con reconocimiento internacional y vínculo cualificado con institución estadounidense.",
        "EB-1C, Ejecutivos Multinacionales: ejecutivos senior transferidos entre empresas relacionadas internacionalmente en funciones estratégicas o gerenciales.",
        "Historial de premios, publicaciones y contribuciones originales al campo.",
        "Reconocimiento sostenido por pares, mercado e instituciones de referencia.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Green Card con prioridad en el visa bulletin estadounidense.",
        "Estructuración robusta basada en mérito profesional consolidado.",
        "Cónyuge e hijos solteros menores de 21 años incluidos.",
        "Vía directa a la residencia permanente sin certificación PERM.",
        "Libertad profesional tras la concesión de la residencia.",
      ],
    },
    process: {
      title: "Cómo construimos un caso EB-1",
      items: [
        "Selección de la modalidad adecuada (EB-1A, EB-1B o EB-1C).",
        "Mapeo de evidencias de reconocimiento y trayectoria.",
        "Cartas de expertos internacionales y expediente institucional.",
        "Presentación de la petición I-140 ante USCIS.",
        "Ajuste de estatus (I-485) o proceso consular hasta la entrega de la Green Card.",
      ],
    },
    profiles: [
      { title: "Investigadores y Profesores (EB-1B)", intro: "Trayectorias académicas consolidadas a nivel internacional.", bullets: ["Al menos tres años de experiencia docente o de investigación", "Reconocimiento internacional por contribución científica", "Vínculo cualificado con institución estadounidense"] },
      { title: "Ejecutivos Multinacionales (EB-1C)", intro: "Transferencia de ejecutivos y gerentes senior entre empresas relacionadas internacionalmente.", bullets: ["Actividad ejecutiva en el exterior por al menos uno de los últimos tres años", "Relación cualificada con entidad estadounidense", "Función ejecutiva o gerencial de buena fe"] },
      { title: "Profesionales Extraordinarios (EB-1A)", intro: "Reconocimiento nacional o internacional sostenido.", bullets: ["Actuación en la cumbre del campo", "Cumplimiento de al menos tres de los diez criterios regulatorios", "Impacto y originalidad continuos"] },
    ],
    faqs: [
      { q: "¿Cuál es la principal diferencia entre EB-1A y EB-2 NIW?", a: "La EB-1A exige reconocimiento nacional o internacional comprobado y ofrece prioridad en el visa bulletin. La EB-2 NIW requiere mérito profesional e interés nacional, con criterios más accesibles a un espectro más amplio." },
      { q: "¿Necesito premios internacionales para la EB-1A?", a: "No necesariamente. La categoría evalúa un conjunto de criterios que incluye publicaciones, originalidad, valor de mercado, actuación en comités, revisión por pares y visibilidad institucional." },
      { q: "¿Cuánto tarda un caso EB-1?", a: "Como categoría de primera preferencia, la EB-1 suele avanzar con prioridad en el visa bulletin, aunque los plazos varían según USCIS y el consulado." },
      { q: "¿Puedo solicitar la EB-1A sin patrocinio de un empleador?", a: "Sí. La EB-1A es una de las pocas categorías que permite la auto-petición, sin necesidad de empleador estadounidense." },
      { q: "¿Quién puede solicitar la EB-1B?", a: "Profesores e investigadores con reconocimiento internacional y oferta de puesto permanente (tenured o tenure-track) o posición análoga en institución estadounidense cualificada." },
      { q: "¿La EB-1C exige abrir una empresa en EE. UU.?", a: "No necesariamente. Requiere una empresa estadounidense relacionada con la extranjera mediante estructura societaria cualificada, con operación real y función ejecutiva o gerencial." },
      { q: "¿Puedo pasar de O-1 a EB-1A?", a: "Sí, es una vía frecuente. Ambas categorías comparten criterios cercanos de habilidad extraordinaria, permitiendo una transición planificada." },
      { q: "¿Cónyuge e hijos obtienen la residencia?", a: "Sí. Cónyuge e hijos solteros menores de 21 años reciben la residencia permanente junto con el titular." },
      { q: "¿Existe un límite anual de aprobaciones EB-1?", a: "Existen límites anuales por categoría y país de nacimiento definidos por la legislación estadounidense. La planificación considera la ventana actual de procesamiento." },
      { q: "¿Puedo seguir trabajando profesionalmente durante el proceso?", a: "Sí. Como regla, la fase de petición permite mantener la actividad profesional en el exterior hasta el momento adecuado de transición." },
    ],
    seoTitle: "EB-1, Habilidad Extraordinaria y Ejecutivos | Linhares Law",
    seoDescription:
      "Estrategia EB-1 (EB-1A, EB-1B y EB-1C) para profesionales destacados, investigadores y ejecutivos multinacionales, conducida por Linhares Law.",
  },

  e2: {
    slug: "e2",
    acronym: "E-2",
    title: "E-2",
    heroSubhead: "Inversión y operación empresarial en Estados Unidos",
    tagline:
      "La visa E-2 está disponible para inversionistas de países con tratado, permitiendo dirigir y desarrollar una empresa en EE. UU. mediante una inversión sustancial.",
    intro:
      "La E-2 permite emprender en Estados Unidos mediante una inversión sustancial en una empresa real, operativa y no marginal. Es una visa renovable sin plazo máximo legal.",
    meta: ["Visa no inmigrante", "Renovable", "Cónyuge con permiso de trabajo"],
    what: {
      title: "Qué es la visa E-2",
      body:
        "Visa fundamentada en tratado bilateral entre Estados Unidos y el país del inversionista. Exige nacionalidad elegible, inversión sustancial, negocio real y participación activa del inversionista.",
    },
    qualify: {
      title: "Criterios centrales",
      items: [
        "Nacionalidad de país con tratado comercial vigente con Estados Unidos.",
        "Inversión sustancial y proporcional a la naturaleza del negocio.",
        "Empresa real, operativa y no marginal, capaz de generar más que un ingreso mínimo.",
        "Participación activa del inversionista en la dirección y desarrollo del negocio.",
        "Recursos de origen lícito, con trazabilidad plena.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Residencia legal en Estados Unidos.",
        "Libertad para operar el propio negocio en EE. UU.",
        "El cónyuge puede solicitar autorización de trabajo.",
        "Los hijos pueden estudiar en Estados Unidos.",
        "Renovación indefinida mientras el negocio siga operando.",
      ],
    },
    process: {
      title: "Cómo construimos un caso E-2",
      items: [
        "Estructuración de la entidad estadounidense, gobierno corporativo y titularidad.",
        "Documentación de la inversión y trazabilidad de los recursos.",
        "Business plan técnico con viabilidad y generación de empleos.",
        "Proceso consular o cambio de estatus, según el caso.",
      ],
    },
    faqs: [
      { q: "¿Existe una inversión mínima para la E-2?", a: "La ley no fija un valor. La inversión debe ser sustancial y proporcional al negocio, suficiente para sostener la operación." },
      { q: "¿Brasil tiene tratado E-2 con EE. UU.?", a: "No. Los brasileños suelen necesitar adquirir una nacionalidad elegible, por ejemplo europea, antes de solicitar la E-2." },
      { q: "¿La E-2 se convierte en Green Card?", a: "La E-2 es no inmigrante. La transición a la residencia permanente exige encuadrarse en una categoría inmigratoria, como EB-2 NIW, EB-1 o EB-5." },
      { q: "¿Puedo invertir en una franquicia?", a: "Sí. Las franquicias son ampliamente aceptadas, siempre que la inversión sea sustancial, el negocio operativo y el inversionista mantenga participación activa." },
      { q: "¿Por cuánto tiempo se concede la E-2?", a: "Suele emitirse por hasta cinco años, con renovaciones indefinidas mientras el negocio siga operando." },
      { q: "¿Debo residir en Estados Unidos?", a: "No. La E-2 permite pero no exige residencia. Muchos inversionistas se dividen entre EE. UU. y su país de origen." },
      { q: "¿Puedo contratar personal en el extranjero?", a: "Sí. La estructura corporativa puede contemplar operación internacional, siempre que la empresa estadounidense mantenga actividad real y relevante." },
      { q: "¿Los hijos pueden permanecer en la E-2 después de los 21 años?", a: "No. Los dependientes pierden la elegibilidad al cumplir 21 y deben obtener estatus migratorio propio." },
      { q: "¿Puedo operar más de una empresa con la misma E-2?", a: "Sí, siempre que las empresas estén relacionadas y el inversionista mantenga participación activa en los negocios vinculados a la visa." },
      { q: "¿Qué ocurre si la empresa cierra?", a: "La E-2 pierde su fundamento si el negocio cesa operaciones. La planificación estratégica prevé contingencias y alternativas migratorias." },
    ],
    seoTitle: "E-2, Visa de Inversionista por Tratado | Linhares Law",
    seoDescription:
      "Visa E-2 para inversionistas y empresarios que operan negocios en Estados Unidos. Estrategia institucional de Linhares Law.",
  },

  l1: {
    slug: "l1",
    acronym: "L-1",
    title: "L-1",
    heroSubhead: "Expansión corporativa hacia Estados Unidos",
    tagline:
      "La L-1 permite transferir ejecutivos, gerentes y profesionales con conocimiento especializado a las operaciones estadounidenses de empresas internacionales.",
    intro:
      "La L-1 apoya la expansión estratégica de multinacionales en Estados Unidos mediante la transferencia de personal clave entre matriz, sucursal, filial o afiliada.",
    meta: ["L-1A · Ejecutivos", "L-1B · Conocimiento especializado", "Vía a EB-1C"],
    what: {
      title: "Qué es la visa L-1",
      body:
        "Visa no inmigrante para movilidad corporativa internacional. Se divide en L-1A (ejecutivos y gerentes) y L-1B (profesionales con conocimiento especializado sobre productos, procesos o know-how propietarios).",
    },
    qualify: {
      title: "Requisitos",
      items: [
        "Relación cualificada entre la empresa extranjera y la estadounidense (matriz, sucursal, filial o afiliada).",
        "Al menos un año de empleo previo en la empresa extranjera dentro de los últimos tres años.",
        "Función ejecutiva, gerencial o de conocimiento especializado.",
        "Empresa estadounidense activa o nueva oficina formalmente estructurada.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Marco legal adecuado para la expansión internacional del grupo.",
        "Cónyuge e hijos solteros menores de 21 años incluidos.",
        "El cónyuge puede solicitar permiso de trabajo en EE. UU.",
        "Posibilidad de abrir una nueva oficina (new office L-1).",
        "Vía natural hacia la EB-1C (Green Card ejecutiva).",
      ],
    },
    process: {
      title: "Cómo construimos un caso L-1",
      items: [
        "Análisis de la estructura societaria y relación entre entidades.",
        "Expediente empresarial, funcional y de gobierno corporativo.",
        "Documentación de la función en el exterior y del rol proyectado en EE. UU.",
        "Presentación de la petición L ante USCIS.",
        "Proceso consular o cambio de estatus.",
      ],
    },
    faqs: [
      { q: "¿Puedo abrir una sucursal y trasladarme como L-1?", a: "Sí. La new office L-1 permite la apertura formal de la operación con plazo inicial de un año, renovable con la consolidación del negocio." },
      { q: "¿Cuál es la diferencia entre L-1A y L-1B?", a: "L-1A es para ejecutivos y gerentes; L-1B para profesionales con conocimiento especializado sobre productos, procesos o know-how propietarios." },
      { q: "¿Cuánto dura la L-1?", a: "L-1A puede alcanzar hasta siete años en total; L-1B hasta cinco. Ambas comienzan con plazos iniciales menores y renovaciones sucesivas." },
      { q: "¿La L-1 lleva a la Green Card?", a: "Sí. La L-1A dialoga naturalmente con la EB-1C, categoría de residencia permanente para ejecutivos multinacionales." },
      { q: "¿Cuál es la relación societaria mínima exigida?", a: "Relación de matriz, sucursal, filial o afiliada, con estructura de titularidad cualificada y gobierno común." },
      { q: "¿El cónyuge puede trabajar en EE. UU.?", a: "Sí. El cónyuge dependiente del titular L-1 puede solicitar autorización de trabajo independiente." },
      { q: "¿Necesito clientes o facturación en EE. UU. antes de abrir?", a: "No en el modelo new office, pero el business plan debe demostrar viabilidad comercial concreta en los primeros doce meses." },
      { q: "¿Se puede trasladar empleados extranjeros junto al ejecutivo?", a: "Sí, mediante nuevas peticiones individuales. Cada profesional se evalúa por su función en el exterior y el rol proyectado en EE. UU." },
      { q: "¿Empresas recién constituidas pueden patrocinar L-1?", a: "Sí, siempre que estén debidamente constituidas, operando en el extranjero y con relación societaria válida con la entidad estadounidense." },
      { q: "¿Qué ocurre si la empresa no se consolida en el primer año?", a: "La renovación puede denegarse. La planificación institucional contempla hitos operativos y métricas que sostengan la continuidad de la visa." },
    ],
    seoTitle: "L-1, Transferencia Intraempresarial | Linhares Law",
    seoDescription:
      "Estrategia L-1 para transferencia de ejecutivos, gerentes y profesionales con conocimiento especializado a operaciones estadounidenses de empresas internacionales.",
  },

  o1: {
    slug: "o1",
    acronym: "O-1",
    title: "O-1",
    heroSubhead: "Personas con habilidad extraordinaria",
    tagline:
      "La visa O-1 es para profesionales que demuestran reconocimiento relevante y logros excepcionales en su campo de actuación.",
    intro:
      "La O-1 reconoce a profesionales con reconocimiento sostenido por pares e industria en ciencias, artes, educación, negocios, deportes o industria del cine y la televisión.",
    meta: ["O-1A · Ciencias, Negocios, Educación, Deportes", "O-1B · Artes y Entretenimiento"],
    what: {
      title: "Qué es la visa O-1",
      body:
        "Visa temporal para profesionales cuya habilidad extraordinaria se comprueba mediante premios, reconocimiento de pares y trayectoria en la cumbre del sector.",
    },
    qualify: {
      title: "Quién suele calificar",
      items: [
        "Empresarios con trayectoria reconocida en sus mercados.",
        "Investigadores con producción científica y reconocimiento internacional.",
        "Científicos con contribución comprobada en áreas estratégicas.",
        "Ejecutivos con liderazgo reconocido en organizaciones internacionales.",
        "Deportistas profesionales con logros nacionales o internacionales.",
        "Artistas, directores, músicos y creadores con reconocimiento consolidado.",
        "Profesionales destacados de la industria del entretenimiento.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Autorización de trabajo específica, estructurada y renovable.",
        "Cónyuge e hijos solteros menores de 21 años incluidos.",
        "Múltiples proyectos y empleadores mediante agente.",
        "Vía estratégica para una transición futura a la EB-1A.",
        "Actividad legalizada en todo el territorio estadounidense.",
      ],
    },
    process: {
      title: "Cómo construimos un caso O-1",
      items: [
        "Mapeo de evidencias de reconocimiento, premios y publicaciones.",
        "Cartas de expertos y, cuando aplique, dictamen sindical.",
        "Expediente de mérito profesional individualizado.",
        "Presentación de la petición I-129 ante USCIS.",
        "Proceso consular o cambio de estatus.",
      ],
    },
    faqs: [
      { q: "¿Necesito patrocinador para la O-1?", a: "Sí. La O-1 exige un patrocinador estadounidense, empleador o agente. Deportistas y artistas pueden operar por agente, viabilizando múltiples contrataciones." },
      { q: "¿La O-1 es camino a la Green Card?", a: "La transición de O-1 a EB-1A es común, ya que comparten criterios cercanos de habilidad extraordinaria." },
      { q: "¿Cuánto dura la O-1?", a: "Hasta tres años inicialmente, con renovaciones sucesivas por hasta un año, atadas a la continuidad de la actividad." },
      { q: "¿Qué evidencias sustentan la petición?", a: "Premios, publicaciones, citas, actuación en comités, revisión por pares, contratos relevantes, salarios compatibles con la cima del sector y cobertura mediática." },
      { q: "¿Empresarios pueden calificar para la O-1?", a: "Sí, siempre que demuestren reconocimiento sostenido, con historial de liderazgo, premios y reconocimiento de mercado." },
      { q: "¿La O-1 tiene lotería?", a: "No. A diferencia de la H-1B, la O-1 no está sujeta a lotería y puede presentarse en cualquier momento del año." },
      { q: "¿Cuál es la diferencia entre O-1A y O-1B?", a: "O-1A cubre ciencias, negocios, educación y deportes. O-1B cubre artes y entretenimiento, con criterios propios de evaluación." },
      { q: "¿El cónyuge puede trabajar con la O-1?", a: "El dependiente O-3 no recibe autorización de trabajo automática. La actividad profesional del cónyuge exige visa propia." },
      { q: "¿Puedo cambiar el empleador titular de la O-1?", a: "Sí, mediante nueva petición del nuevo patrocinador. La continuidad de la actividad en el mismo campo es central en el análisis." },
      { q: "¿Necesito salir del país para iniciar el proceso?", a: "No. La petición puede prepararse y presentarse mientras el profesional está en el extranjero, con visa emitida consularmente al final." },
    ],
    seoTitle: "O-1, Visa de Habilidad Extraordinaria | Linhares Law",
    seoDescription:
      "Estrategia O-1 para profesionales con reconocimiento extraordinario en ciencias, negocios, artes, deportes y entretenimiento.",
  },

  h1b: {
    slug: "h1b",
    acronym: "H-1B",
    title: "H-1B",
    heroSubhead: "Profesionales especializados",
    tagline:
      "La H-1B está dirigida a profesionales calificados contratados por empresas estadounidenses para funciones que requieren conocimiento técnico especializado.",
    intro:
      "La H-1B es una de las principales vías de entrada al mercado estadounidense para profesionales calificados, sobre todo en tecnología, ingeniería, salud, finanzas y ciencias aplicadas.",
    meta: ["Lotería anual", "Patrocinio de empleador", "Vía a Green Card"],
    what: {
      title: "Qué es la visa H-1B",
      body:
        "Visa temporal para profesionales con formación superior contratados para funciones que requieren conocimiento técnico especializado, con patrocinio formal de empresa estadounidense.",
    },
    qualify: {
      title: "Criterios centrales",
      items: [
        "Oferta formal de empleo por parte de empresa estadounidense.",
        "Formación académica compatible (título de licenciatura o equivalente reconocido).",
        "Función clasificada como specialty occupation.",
        "Salario compatible con el mercado según la metodología del prevailing wage.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Experiencia profesional formal en el mercado estadounidense.",
        "Visa inicial por tres años, renovable hasta seis.",
        "Cónyuge e hijos solteros menores de 21 años incluidos.",
        "Cónyuge H-4 puede obtener autorización de trabajo en condiciones específicas.",
        "Compatible con transición futura a la residencia permanente.",
      ],
    },
    process: {
      title: "Cómo construimos un caso H-1B",
      items: [
        "Evaluación de la función, credenciales y empresa patrocinadora.",
        "Registro electrónico y participación en la lotería anual.",
        "Preparación y presentación de la petición I-129 tras la selección.",
        "Proceso consular o cambio de estatus, según el caso.",
      ],
    },
    faqs: [
      { q: "¿La H-1B siempre pasa por lotería?", a: "En la mayoría de los casos sí, dada la demanda. Universidades, institutos de investigación y ciertas organizaciones sin fines de lucro están exentos del cap." },
      { q: "¿Puedo cambiar de empleador durante la H-1B?", a: "Sí, mediante nueva petición de transferencia presentada por el nuevo empleador." },
      { q: "¿El cónyuge puede trabajar en la H-4?", a: "Sí, en condiciones específicas, generalmente cuando el titular H-1B tiene I-140 aprobado y espera fecha de prioridad." },
      { q: "¿Existe límite de renovaciones?", a: "La H-1B puede renovarse hasta un total de seis años. Existen extensiones específicas vinculadas a peticiones inmigratorias en curso." },
      { q: "¿Puedo solicitar Green Card mientras estoy en H-1B?", a: "Sí. La H-1B es compatible con petición inmigratoria paralela, sea EB-2 NIW, EB-2 PERM, EB-3 o EB-1, según el caso." },
      { q: "¿Cuál es el papel del prevailing wage?", a: "Define el piso salarial legalmente aceptable para la función y la región, siguiendo la metodología del Department of Labor." },
      { q: "¿Empresas pequeñas pueden patrocinar H-1B?", a: "Sí, siempre que comprueben capacidad financiera, función técnica cualificada y salario compatible con el mercado." },
      { q: "¿Necesito estar en EE. UU. para la lotería?", a: "No. La lotería es electrónica y se realiza mediante el registro del empleador estadounidense, independientemente de la ubicación del profesional." },
      { q: "¿Cuánto tiempo entre la lotería y el inicio del trabajo?", a: "El inicio suele coincidir con el 1 de octubre del año fiscal correspondiente, con petición presentada en los meses siguientes a la selección." },
      { q: "¿Puedo trabajar como contratista independiente en H-1B?", a: "La H-1B exige relación laboral con empleador cualificado. La actividad independiente requiere una categoría migratoria distinta." },
    ],
    seoTitle: "H-1B, Ocupaciones Especializadas | Linhares Law",
    seoDescription:
      "Estrategia H-1B para profesionales calificados contratados por empresas estadounidenses en ocupaciones especializadas.",
  },

  eb5: {
    slug: "eb5",
    acronym: "EB-5",
    title: "EB-5",
    heroSubhead: "Green Card por inversión",
    tagline:
      "La EB-5 es una categoría inmigratoria para inversionistas que buscan la residencia permanente mediante inversión cualificada en la economía estadounidense.",
    intro:
      "La EB-5 concede Green Cards al inversionista, cónyuge e hijos solteros menores de 21 años mediante inversión cualificada en empresa estadounidense y creación de empleos para trabajadores locales.",
    meta: ["Residencia permanente", "Inversión cualificada", "Familia incluida"],
    what: {
      title: "Qué es la EB-5",
      body:
        "Programa creado por el Congreso estadounidense para estimular la inversión extranjera y la creación de empleos, actualizado por el EB-5 Reform and Integrity Act de 2022.",
    },
    qualify: {
      title: "Requisitos centrales",
      items: [
        "Inversión cualificada en proyecto estadounidense elegible.",
        "Comprobación rigurosa del origen lícito de los recursos.",
        "Creación o preservación de al menos diez empleos a tiempo completo.",
        "Inversión directa o mediante Regional Center aprobado por USCIS.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Green Cards para inversionista, cónyuge e hijos solteros menores de 21 años.",
        "Independencia de patrocinio de empleador.",
        "Residencia permanente con libertad geográfica y profesional.",
        "Posibilidad de acceso futuro a la ciudadanía estadounidense.",
      ],
    },
    process: {
      title: "Cómo construimos un caso EB-5",
      items: [
        "Auditoría documental del origen de fondos y patrimonio del inversionista.",
        "Selección y due diligence técnica del proyecto de inversión.",
        "Presentación de la petición I-526E ante USCIS.",
        "Proceso consular o ajuste de estatus (I-485).",
        "Retiro de condiciones vía I-829 dentro del plazo legal.",
      ],
    },
    faqs: [
      { q: "¿Cuál es la inversión mínima?", a: "El valor mínimo está definido por ley y varía según el tipo de proyecto (targeted employment area o convencional). Linhares Law confirma el umbral vigente durante la evaluación institucional." },
      { q: "¿Necesito administrar el negocio?", a: "No. La EB-5 admite participación pasiva, especialmente mediante Regional Centers, siempre que se cumplan los requisitos de generación de empleos." },
      { q: "¿Puedo usar recursos de venta de inmuebles o empresas?", a: "Sí, siempre que el origen esté documentado según las exigencias de USCIS." },
      { q: "¿Cuánto tarda el proceso EB-5?", a: "Los plazos varían con el visa bulletin, el volumen de USCIS y la nacionalidad del inversionista. El análisis institucional considera la ventana actual de procesamiento." },
      { q: "¿La familia puede ser incluida?", a: "Sí. Cónyuge e hijos solteros menores de 21 años reciben la residencia permanente junto con el inversionista principal." },
      { q: "¿Qué ocurre después de la aprobación del I-526E?", a: "El inversionista recibe una Green Card condicional válida por dos años. Antes del vencimiento debe presentarse el I-829 para retirar las condiciones y obtener la residencia permanente definitiva." },
      { q: "¿Cuál es la diferencia entre inversión directa y Regional Center?", a: "La inversión directa exige gestión activa y comprobación directa de empleos. El Regional Center permite participación pasiva y cuenta empleos directos, indirectos e inducidos." },
      { q: "¿Puedo seguir viviendo fuera de EE. UU. tras la aprobación?", a: "La Green Card exige que Estados Unidos sea la residencia principal. Ausencias prolongadas requieren planificación específica para mantener el estatus." },
      { q: "¿Empresas familiares pueden ser vehículo de la inversión?", a: "Sí, siempre que estén estructuradas como empresa cualificada, con generación de empleos compatible y gobierno corporativo alineado con las exigencias de USCIS." },
      { q: "¿Qué riesgos legales deben considerarse?", a: "Riesgo de aprobación del proyecto, riesgo de retorno financiero y riesgo regulatorio. La due diligence institucional es central en la estrategia EB-5." },
    ],
    seoTitle: "EB-5, Inversionista Inmigrante | Linhares Law",
    seoDescription:
      "Estrategia EB-5 para inversionistas que buscan Green Card mediante inversión cualificada y generación de empleos en Estados Unidos.",
  },

  eb3: {
    slug: "eb3",
    acronym: "EB-3",
    title: "EB-3",
    heroSubhead: "Green Card por oferta de empleo permanente",
    tagline:
      "Categoría inmigratoria basada en empleo para profesionales calificados, trabajadores capacitados y otros trabajadores con oferta permanente en EE. UU.",
    intro:
      "La EB-3 es una categoría inmigratoria basada en empleo para profesionales calificados, trabajadores capacitados y otros trabajadores. Requiere oferta de empleo permanente en Estados Unidos y, en general, certificación laboral (PERM). Una vez aprobada, el beneficiario y familiares elegibles obtienen la Green Card y residencia permanente.",
    meta: ["Residencia permanente", "Oferta de empleo", "Certificación PERM", "Familia incluida"],
    what: {
      title: "Qué es la EB-3",
      body:
        "Categoría de tercera preferencia por empleo para profesionales calificados, trabajadores capacitados y otros trabajadores con oferta permanente de empleador estadounidense, tras certificación laboral.",
    },
    qualify: {
      title: "Quién puede calificar",
      items: [
        "Profesionales calificados con título de licenciatura.",
        "Trabajadores capacitados con al menos dos años de experiencia o entrenamiento.",
        "Otros trabajadores en funciones que no exigen cualificación especializada.",
        "Oferta permanente de empleo a tiempo completo por empleador estadounidense.",
        "Aprobación previa de la certificación laboral (PERM) por el Department of Labor.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Green Card, residencia permanente en Estados Unidos.",
        "Cónyuge e hijos solteros menores de 21 años incluidos.",
        "Vía estructurada para profesionales con oferta en EE. UU.",
        "Posibilidad de cambio de empleador cumplidos los requisitos legales.",
        "Camino natural a la ciudadanía estadounidense.",
      ],
    },
    process: {
      title: "Cómo construimos un caso EB-3",
      items: [
        "Análisis de la oferta de empleo, función y encuadre en la categoría.",
        "Coordinación del proceso de certificación laboral (PERM).",
        "Presentación de la petición I-140 ante USCIS.",
        "Ajuste de estatus (I-485) o proceso consular.",
      ],
    },
    faqs: [
      { q: "¿Necesito oferta de empleo para la EB-3?", a: "Sí. La EB-3 exige oferta formal de empleo permanente por empleador estadounidense patrocinador." },
      { q: "¿Qué es la certificación PERM?", a: "Es el proceso ante el Department of Labor que confirma la inexistencia de trabajador estadounidense cualificado para la función ofrecida." },
      { q: "¿Puedo incluir a mi familia?", a: "Sí. Cónyuge e hijos solteros menores de 21 años reciben la Green Card junto con el beneficiario principal." },
      { q: "¿Cuánto tarda la EB-3?", a: "Los plazos varían con USCIS, el país de nacimiento y la subcategoría. El análisis institucional se realiza caso por caso." },
      { q: "¿Puedo cambiar de empleador después de la Green Card?", a: "Sí, respetando los requisitos legales sobre la buena fe de la oferta original y el plazo mínimo en la función." },
    ],
    seoTitle: "EB-3, Green Card por Empleo Permanente | Linhares Law",
    seoDescription:
      "Estrategia EB-3 para profesionales calificados, trabajadores capacitados y otros trabajadores con oferta de empleo permanente en Estados Unidos.",
  },

  i130: {
    slug: "i130",
    acronym: "I-130",
    title: "I-130",
    heroSubhead: "Petición inmigratoria familiar",
    tagline:
      "Petición utilizada por ciudadanos estadounidenses y residentes permanentes para patrocinar a determinados familiares para inmigrar a EE. UU.",
    intro:
      "El Formulario I-130 lo utilizan ciudadanos estadounidenses y residentes permanentes legales para patrocinar a determinados familiares para inmigrar a Estados Unidos. La petición establece un vínculo familiar válido y es el primer paso para que el beneficiario solicite la Green Card familiar.",
    meta: ["Inmigración familiar", "Ciudadanos y residentes", "Primer paso hacia la Green Card"],
    what: {
      title: "Qué es la petición I-130",
      body:
        "La petición establece formalmente el vínculo familiar válido ante USCIS. Su aprobación permite al beneficiario solicitar la residencia permanente, ya sea por ajuste de estatus en EE. UU. o proceso consular.",
    },
    qualify: {
      title: "Quién puede peticionar",
      items: [
        "Ciudadanos estadounidenses que solicitan cónyuges, hijos, padres o hermanos.",
        "Residentes permanentes legales que solicitan cónyuges e hijos solteros.",
        "Comprobación documental del vínculo familiar válido.",
        "Capacidad financiera del peticionario (Affidavit of Support).",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Vía legal de reunificación familiar en Estados Unidos.",
        "Permite al beneficiario solicitar la residencia permanente.",
        "Categorías prioritarias para familiares inmediatos de ciudadanos estadounidenses.",
        "Marco legal formal ampliamente reconocido.",
      ],
    },
    process: {
      title: "Cómo conducimos la petición I-130",
      items: [
        "Análisis del vínculo familiar y de la categoría aplicable.",
        "Curación documental para comprobar el vínculo válido.",
        "Presentación de la petición I-130 ante USCIS.",
        "Conducción del caso hasta el ajuste de estatus o proceso consular.",
      ],
    },
    faqs: [
      { q: "¿Qué familiares pueden ser patrocinados por I-130?", a: "Cónyuges, hijos, padres y hermanos de ciudadanos estadounidenses; cónyuges e hijos solteros de residentes permanentes legales." },
      { q: "¿La I-130 concede la Green Card?", a: "No directamente. Establece el vínculo familiar válido; la residencia permanente se solicita después, mediante ajuste de estatus o proceso consular." },
      { q: "¿Cuánto tarda el proceso?", a: "Los plazos varían según la categoría familiar y la nacionalidad del beneficiario, siguiendo el Visa Bulletin mensual." },
      { q: "¿Puedo peticionar a más de un familiar?", a: "Sí. Cada beneficiario exige una petición I-130 individual." },
      { q: "¿Es necesario aporte financiero?", a: "Sí. El peticionario firma el Affidavit of Support, comprometiéndose a apoyar al beneficiario según parámetros oficiales." },
    ],
    seoTitle: "I-130, Petición Inmigratoria Familiar | Linhares Law",
    seoDescription:
      "Petición I-130 para reunificación familiar en Estados Unidos. Estrategia jurídica de Linhares Law para ciudadanos y residentes permanentes.",
  },

  vawa: {
    slug: "vawa",
    acronym: "VAWA",
    title: "VAWA",
    heroSubhead: "Protección e independencia migratoria para víctimas de abuso",
    tagline:
      "VAWA permite que víctimas de abuso por ciudadano estadounidense o residente permanente busquen beneficios migratorios sin depender del agresor.",
    intro:
      "VAWA (Violence Against Women Act) permite que víctimas de abuso por ciudadano estadounidense o residente permanente busquen beneficios migratorios sin depender del agresor. La protección alcanza cónyuges, hijos y, en ciertos casos, padres de ciudadanos estadounidenses. El proceso es confidencial y puede resultar en Green Card, ofreciendo seguridad e independencia a la víctima.",
    meta: ["Confidencial", "Auto-petición", "Vía a Green Card"],
    what: {
      title: "Qué es VAWA",
      body:
        "Mecanismo legal que permite la auto-petición por la víctima de abuso, sin necesidad de participación o conocimiento del agresor. USCIS conduce el proceso con confidencialidad institucional.",
    },
    qualify: {
      title: "Quién puede solicitar",
      items: [
        "Cónyuges víctimas de abuso por ciudadano estadounidense o residente permanente.",
        "Hijos solteros menores de 21 años víctimas de abuso por padre o padrastro cualificado.",
        "Padres de ciudadanos estadounidenses mayores de 21 años víctimas de abuso.",
        "Comprobación documental del vínculo cualificado y de su buena fe.",
        "Evidencia del abuso o crueldad extrema sufrida.",
      ],
    },
    benefits: {
      title: "Principales beneficios",
      items: [
        "Petición confidencial sin participación del agresor.",
        "Vía hacia la residencia permanente (Green Card).",
        "Posibilidad de autorización de trabajo durante el proceso.",
        "Inclusión de hijos elegibles en la petición.",
        "Independencia migratoria respecto del agresor.",
      ],
    },
    process: {
      title: "Cómo conducimos un caso VAWA",
      items: [
        "Evaluación confidencial de las circunstancias y del vínculo cualificado.",
        "Curación de pruebas documentales, testimoniales y técnicas.",
        "Presentación de la petición I-360 ante USCIS con confidencialidad institucional.",
        "Conducción del caso hasta el ajuste de estatus (I-485) y emisión de la Green Card.",
      ],
    },
    faqs: [
      { q: "¿El agresor es notificado sobre la petición VAWA?", a: "No. El proceso es confidencial y USCIS aplica protocolos específicos para proteger a la víctima." },
      { q: "¿Los hombres pueden solicitar VAWA?", a: "Sí. A pesar del nombre, la protección se extiende a víctimas de cualquier género." },
      { q: "¿Qué pruebas se consideran?", a: "Boletines policiales, informes médicos, declaraciones de profesionales, fotografías, mensajes, testimonios de terceros y otras evidencias relevantes." },
      { q: "¿Sigo necesitando estar casada con el agresor?", a: "No necesariamente. La petición puede presentarse en determinadas circunstancias incluso tras el divorcio, respetando los plazos legales." },
      { q: "¿VAWA lleva a la Green Card?", a: "Sí. Tras la aprobación del I-360, la víctima puede solicitar el ajuste de estatus a la residencia permanente." },
    ],
    seoTitle: "VAWA, Protección Migratoria para Víctimas de Abuso | Linhares Law",
    seoDescription:
      "Estrategia VAWA confidencial para víctimas de abuso por ciudadano estadounidense o residente permanente, con vía hacia la independencia migratoria y Green Card.",
  },
};

const EN: Record<VisaSlug, VisaContent> = Object.fromEntries(
  (Object.keys(PT) as VisaSlug[]).map((k) => [k, EN_OVERRIDES[k] ?? mirror(PT[k])]),
) as Record<VisaSlug, VisaContent>;
const ES: Record<VisaSlug, VisaContent> = Object.fromEntries(
  (Object.keys(PT) as VisaSlug[]).map((k) => [k, ES_OVERRIDES[k] ?? mirror(PT[k])]),
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
