// Central editable content for the institutional website.
// Replace texts, images, phone, address, CNPJ, etc. here.

export const site = {
  name: "Instituto Raízes do Futuro",
  tagline: "Ponto de Cultura e Educação Ambiental",
  cnpj: "00.000.000/0001-00",
  address: "Rua das Sementeiras, 123 — Centro, Cidade/UF — CEP 00000-000",
  phone: "(00) 0000-0000",
  whatsapp: "5500000000000",
  whatsappMessage:
    "Olá! Conheci o site do Instituto Raízes do Futuro e gostaria de mais informações.",
  email: "contato@raizesdofuturo.org.br",
  hours: "Segunda a sexta, das 9h às 17h",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const impact = [
  { value: "15", suffix: " anos", label: "de atuação no território", icon: "tree" },
  { value: "30", suffix: "", label: "projetos culturais e ambientais", icon: "book" },
  { value: "4.500", suffix: "", label: "pessoas alcançadas", icon: "people" },
  { value: "20", suffix: "", label: "comunidades atendidas", icon: "map" },
] as const;

export const frentes = [
  {
    slug: "educacao-ambiental",
    title: "Educação ambiental",
    desc: "Oficinas, formações e vivências que aproximam pessoas do meio ambiente e dos saberes do território.",
  },
  {
    slug: "cultura-e-territorio",
    title: "Cultura e território",
    desc: "Ações culturais que fortalecem a identidade local e a memória das comunidades atendidas.",
  },
  {
    slug: "biblioteca",
    title: "Biblioteca e incentivo à leitura",
    desc: "Acervo ambiental e cultural aberto à comunidade, com mediações de leitura e formação de leitores.",
  },
  {
    slug: "hortas",
    title: "Hortas e alimentação sustentável",
    desc: "Cultivo comunitário, segurança alimentar e valorização de práticas agroecológicas.",
  },
  {
    slug: "memoria",
    title: "Preservação da memória local",
    desc: "Registro, escuta e valorização das histórias, ofícios e paisagens que constituem o território.",
  },
  {
    slug: "formacao",
    title: "Formação comunitária",
    desc: "Trilhas formativas para educadores, jovens e lideranças comunitárias comprometidas com a mudança.",
  },
  {
    slug: "oficinas",
    title: "Oficinas culturais",
    desc: "Artes, escrita, música e expressões culturais em diálogo com a natureza e a comunidade.",
  },
  {
    slug: "mobilizacao",
    title: "Mobilização socioambiental",
    desc: "Articulação de redes, campanhas e mutirões pela defesa e pelo cuidado com o território.",
  },
] as const;

export const projects = [
  {
    slug: "biblioteca-verde",
    category: "Leitura e educação",
    title: "Biblioteca Verde",
    desc: "Um acervo vivo dedicado à natureza, à cultura local e à formação de leitores em contato com o meio ambiente.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "guardioes-do-territorio",
    category: "Preservação",
    title: "Guardiões do Território",
    desc: "Formação de jovens agentes ambientais para monitoramento, mobilização e defesa das áreas de proteção.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "horta-comunitaria",
    category: "Alimentação e saberes",
    title: "Horta Comunitária e Saberes da Terra",
    desc: "Cultivo agroecológico coletivo com trocas intergeracionais de saberes e receitas do território.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop",
  },
] as const;

export type NewsItem = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string; // ISO
  author: string;
  cover: string;
  excerpt: string;
  body: string[];
  tags: string[];
};

export const news: NewsItem[] = [
  {
    slug: "semana-do-meio-ambiente-2026",
    title: "Semana do Meio Ambiente reúne comunidades em torno do território",
    subtitle: "Uma semana de oficinas, plantios e rodas de conversa em cinco comunidades",
    category: "Educação ambiental",
    date: "2026-06-05",
    author: "Equipe de Comunicação",
    cover:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Programação envolveu mais de 800 pessoas em atividades ao ar livre, plantios e mediações de leitura.",
    body: [
      "A Semana do Meio Ambiente reuniu, entre os dias 1 e 7 de junho, mais de 800 pessoas em cinco comunidades atendidas pelo Instituto. Oficinas, trilhas guiadas e mediações de leitura marcaram a programação.",
      "O encerramento aconteceu na sede do Ponto de Cultura, com apresentação dos jovens guardiões do território e entrega de mudas para as famílias participantes.",
      "As ações reforçam o compromisso com a educação ambiental como prática cotidiana, construída em diálogo com moradores, escolas e agentes locais.",
    ],
    tags: ["meio ambiente", "comunidade", "educação"],
  },
  {
    slug: "biblioteca-verde-amplia-acervo",
    title: "Biblioteca Verde amplia acervo com publicações sobre biodiversidade",
    subtitle: "Nova coleção reúne pesquisas, cartilhas e literatura infantojuvenil",
    category: "Biblioteca",
    date: "2026-05-18",
    author: "Coordenação de Acervo",
    cover:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Mais de 300 novos títulos passam a compor o acervo ambiental e cultural aberto à comunidade.",
    body: [
      "A Biblioteca Verde recebeu, neste mês, uma nova coleção com mais de 300 títulos voltados à biodiversidade, agroecologia e saberes tradicionais.",
      "O acervo está disponível para consulta e empréstimo, com mediações semanais realizadas por educadores e voluntários.",
    ],
    tags: ["biblioteca", "leitura", "acervo"],
  },
  {
    slug: "mutirao-de-plantio",
    title: "Mutirão de plantio recupera nascente em área comunitária",
    subtitle: "Ação envolveu escolas, famílias e parceiros institucionais",
    category: "Sustentabilidade",
    date: "2026-04-22",
    author: "Coordenação de Projetos",
    cover:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Foram plantadas 500 mudas nativas em torno de uma nascente comunitária recuperada por voluntários.",
    body: [
      "O mutirão reuniu voluntários, alunos de escolas parceiras e famílias das comunidades atendidas para o plantio de 500 mudas nativas.",
      "A ação integra o projeto Guardiões do Território e conta com monitoramento ambiental permanente.",
    ],
    tags: ["plantio", "nascente", "mutirão"],
  },
  {
    slug: "encontro-de-saberes",
    title: "Encontro de Saberes valoriza mestres e mestras da comunidade",
    subtitle: "Roda de conversa reuniu gerações em torno de ofícios e memórias",
    category: "Cultura",
    date: "2026-03-30",
    author: "Coordenação Cultural",
    cover:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Mestras e mestres compartilharam ofícios, cantos e histórias em um encontro aberto ao público.",
    body: [
      "O Encontro de Saberes reuniu mestras e mestres da comunidade em uma roda de conversa aberta ao público, com apresentações culturais e trocas intergeracionais.",
    ],
    tags: ["cultura", "memória", "comunidade"],
  },
  {
    slug: "novo-ciclo-formativo",
    title: "Novo ciclo formativo para jovens educadores começa em agosto",
    subtitle: "Inscrições abertas para 40 vagas com bolsa-auxílio",
    category: "Projetos",
    date: "2026-07-01",
    author: "Coordenação Pedagógica",
    cover:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Programa forma jovens educadores ambientais em parceria com escolas e universidades da região.",
    body: [
      "O programa de formação de jovens educadores ambientais abre inscrições para 40 vagas, com bolsa-auxílio e certificação.",
    ],
    tags: ["formação", "juventude", "educação"],
  },
  {
    slug: "parceria-institucional",
    title: "Nova parceria fortalece ações em comunidades rurais",
    subtitle: "Instituição soma esforços para ampliar atuação no interior",
    category: "Institucional",
    date: "2026-02-14",
    author: "Direção Institucional",
    cover:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80&auto=format&fit=crop",
    excerpt:
      "Nova parceria amplia atuação do Instituto em quatro novas comunidades rurais da região.",
    body: [
      "A parceria firmada neste mês amplia a atuação do Instituto em quatro novas comunidades rurais, com foco em educação ambiental e cultura.",
    ],
    tags: ["parceria", "institucional"],
  },
];

export const team = [
  {
    slug: "direcao",
    name: "Ana Beatriz Coutinho",
    role: "Direção institucional",
    bio: "Coordena a estratégia institucional, as parcerias e a articulação com a rede de Pontos de Cultura.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "projetos",
    name: "Marcos Vinícius Almeida",
    role: "Coordenação de projetos",
    bio: "Responsável pelo planejamento, execução e monitoramento dos projetos socioambientais.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "pedagogica",
    name: "Larissa Ferreira",
    role: "Coordenação pedagógica",
    bio: "Estrutura as trilhas formativas, oficinas e programas educativos do Ponto de Cultura.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "ambiental",
    name: "João Pedro Nascimento",
    role: "Educação ambiental",
    bio: "Educador ambiental que conduz oficinas, plantios e ações de sensibilização com escolas e comunidades.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "biblioteca",
    name: "Cláudia Regina Souza",
    role: "Biblioteca e acervo",
    bio: "Cuida do acervo da Biblioteca Verde, das mediações de leitura e das parcerias com escolas.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "comunicacao",
    name: "Rafael Torres",
    role: "Comunicação",
    bio: "Coordena a comunicação institucional, o relacionamento com a imprensa e as redes sociais.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "mobilizacao",
    name: "Sandra Oliveira",
    role: "Mobilização comunitária",
    bio: "Articula lideranças, coletivos e moradores na construção coletiva das ações do Instituto.",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "administrativo",
    name: "Pedro Henrique Lima",
    role: "Administrativo e financeiro",
    bio: "Cuida da gestão administrativa, financeira e da prestação de contas dos projetos.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop",
  },
];

export const conselho = [
  { name: "Dra. Helena Ribeiro", role: "Presidenta do Conselho" },
  { name: "Prof. Antônio Carvalho", role: "Conselho Consultivo" },
  { name: "Marina Duarte", role: "Conselho Fiscal" },
  { name: "Ricardo Peixoto", role: "Conselho Fiscal" },
  { name: "Juliana Farias", role: "Conselho Consultivo" },
];

export const timeline = [
  { year: "2010", title: "Fundação", desc: "Grupo de educadores e ambientalistas funda o Instituto." },
  { year: "2012", title: "Primeiras ações comunitárias", desc: "Início das oficinas em escolas e comunidades." },
  { year: "2014", title: "Criação da Biblioteca Verde", desc: "Abertura do acervo ambiental e cultural." },
  { year: "2017", title: "Reconhecimento como Ponto de Cultura", desc: "Certificação pelo sistema nacional de cultura." },
  { year: "2020", title: "Ampliação dos projetos", desc: "Expansão para novos territórios e programas." },
  { year: "2024", title: "Novas parcerias", desc: "Consolidação de rede com escolas, universidades e apoiadores." },
];

export const documents = [
  { name: "Estatuto Social", category: "Estatuto e regimentos", year: "2023", type: "PDF", size: "412 KB" },
  { name: "Regimento Interno", category: "Estatuto e regimentos", year: "2023", type: "PDF", size: "228 KB" },
  { name: "Relatório de Atividades 2025", category: "Relatórios de atividades", year: "2025", type: "PDF", size: "3,2 MB" },
  { name: "Relatório de Atividades 2024", category: "Relatórios de atividades", year: "2024", type: "PDF", size: "2,8 MB" },
  { name: "Balanço Financeiro 2025", category: "Relatórios financeiros", year: "2025", type: "PDF", size: "1,1 MB" },
  { name: "Prestação de Contas 2024", category: "Prestação de contas", year: "2024", type: "PDF", size: "1,5 MB" },
  { name: "Certificado Ponto de Cultura", category: "Certificados e reconhecimentos", year: "2017", type: "PDF", size: "180 KB" },
  { name: "Edital Formativo 2026", category: "Editais e parcerias", year: "2026", type: "PDF", size: "320 KB" },
  { name: "Política Ambiental", category: "Políticas institucionais", year: "2024", type: "PDF", size: "210 KB" },
  { name: "Ata de Assembleia 2025", category: "Atas e governança", year: "2025", type: "PDF", size: "156 KB" },
  { name: "Portfólio Institucional", category: "Portfólios e publicações", year: "2025", type: "PDF", size: "5,4 MB" },
];

export const albums = [
  {
    year: "2026",
    slug: "semana-do-meio-ambiente",
    title: "Semana do Meio Ambiente",
    date: "05/06/2026",
    place: "Sede e comunidades parceiras",
    cover:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&q=80&auto=format&fit=crop",
    description:
      "Registros das oficinas, plantios e rodas de leitura realizadas durante a Semana do Meio Ambiente.",
    project: "Educação ambiental",
    activity: "Semana temática",
    photos: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    year: "2026",
    slug: "oficina-educacao-ambiental",
    title: "Oficina de Educação Ambiental",
    date: "12/04/2026",
    place: "Escola Municipal Vale Verde",
    cover:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop",
    description: "Oficina com estudantes sobre biodiversidade e cuidado com o território.",
    project: "Educação ambiental",
    activity: "Oficina",
    photos: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    year: "2025",
    slug: "plantio-comunitario",
    title: "Plantio Comunitário",
    date: "20/09/2025",
    place: "Comunidade Vale do Rio",
    cover:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop",
    description: "Mutirão de plantio de mudas nativas com voluntários e famílias.",
    project: "Guardiões do Território",
    activity: "Mutirão",
    photos: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    year: "2025",
    slug: "biblioteca-verde",
    title: "Biblioteca Verde",
    date: "15/05/2025",
    place: "Sede do Ponto de Cultura",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop",
    description: "Registros das mediações de leitura e das novas coleções do acervo.",
    project: "Biblioteca Verde",
    activity: "Leitura",
    photos: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    year: "2024",
    slug: "encontro-de-saberes",
    title: "Encontro de Saberes",
    date: "10/10/2024",
    place: "Praça Central",
    cover:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop",
    description: "Encontro que reuniu mestras e mestres da comunidade.",
    project: "Cultura e território",
    activity: "Encontro",
    photos: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1400&q=80&auto=format&fit=crop",
    ],
  },
  {
    year: "2023",
    slug: "mutirao-de-limpeza",
    title: "Mutirão de Limpeza",
    date: "05/06/2023",
    place: "Margens do rio comunitário",
    cover:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80&auto=format&fit=crop",
    description: "Voluntários uniram esforços para a limpeza das margens do rio.",
    project: "Mobilização socioambiental",
    activity: "Mutirão",
    photos: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80&auto=format&fit=crop",
    ],
  },
];

export const partners = [
  "Fundação Cultural",
  "Universidade Verde",
  "Instituto Rio Vivo",
  "Rede de Bibliotecas",
  "Fundo Socioambiental",
  "Cooperativa Raiz",
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
