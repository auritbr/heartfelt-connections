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

export type ProjectPage = {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  shortDescription: string;
  heroImage: string;
  accent: "forest" | "moss" | "river" | "ochre" | "earth";
  about: {
    title: string;
    intro: string;
    paragraphs: string[];
    highlight?: string;
    image: string;
    imageCaption?: string;
  };
  cards: {
    title: string;
    items: { title: string; text: string; image: string }[];
  };
  presentation: { title: string; body: string[] };
  objectives: string[];
  audiences: string[];
  activities: { name: string; summary: string; image: string }[];
  gallery: string[];
  linkedAlbumProject?: string; // matches albums[].project for filtering
  facts: { label: string; value: string }[];
  cta: { title: string; text: string; image: string };
};


export const projectPages: ProjectPage[] = [
  {
    slug: "biblioteca-verde",
    title: "Biblioteca Verde",
    category: "Leitura, cultura e educação ambiental",
    eyebrow: "Projeto de leitura e território",
    shortDescription:
      "Um acervo vivo dedicado à natureza, à cultura local e à formação de leitores em contato com o meio ambiente.",
    heroImage:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2000&q=80&auto=format&fit=crop",
    accent: "forest",
    about: {
      title: "Sobre o projeto",
      intro:
        "A Biblioteca Verde é uma iniciativa dedicada à democratização do acesso à leitura, à circulação de conhecimentos e à formação de uma consciência ambiental conectada à realidade da comunidade.",
      paragraphs: [
        "O projeto reúne livros, publicações, materiais educativos e atividades culturais que estimulam diferentes formas de aprendizagem. Mais do que disponibilizar um acervo, a Biblioteca Verde busca criar um espaço de encontro, pesquisa, troca de experiências e valorização das histórias construídas no território.",
        "As ações são desenvolvidas por meio de mediações de leitura, rodas de conversa, contação de histórias, oficinas, atividades intergeracionais e iniciativas que relacionam literatura, cultura e meio ambiente.",
      ],
      highlight:
        "Ler é um gesto ambiental: cada página compartilhada fortalece o cuidado com o território e com a memória da comunidade.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600&q=80&auto=format&fit=crop",
      imageCaption: "Roda de leitura ao ar livre, na sede do Ponto de Cultura.",
    },
    cards: {
      title: "Experiências da Biblioteca Verde",
      items: [
        {
          title: "Mediação de leitura",
          text: "Encontros que aproximam diferentes públicos dos livros e incentivam a interpretação, a escuta e o compartilhamento de ideias.",
          image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Contação de histórias",
          text: "Experiências narrativas que estimulam imaginação, oralidade, memória e interesse pela leitura.",
          image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Acervo ambiental",
          text: "Livros, cartilhas, publicações e materiais que abordam cultura, território, biodiversidade e sustentabilidade.",
          image:
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Encontros e oficinas",
          text: "Atividades que integram literatura, produção criativa, educação ambiental e participação comunitária.",
          image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop",
        },
      ],
    },
    presentation: {
      title: "Um acervo que floresce junto com a comunidade",
      body: [
        "A Biblioteca Verde é o coração do nosso Ponto de Cultura: um espaço aberto, gratuito e acolhedor, onde leitura, meio ambiente e território caminham juntos.",
        "Reúne livros sobre biodiversidade, agroecologia, cultura popular, literatura infantojuvenil e memória local, com mediações semanais para crianças, jovens, famílias e educadores.",
        "Mais do que um acervo, é uma prática cotidiana de escuta, de encontro e de formação de leitores comprometidos com o cuidado com a vida.",
      ],
    },
    objectives: [
      "Ampliar o acesso gratuito a livros e materiais sobre meio ambiente e cultura.",
      "Formar mediadores de leitura em diálogo com a educação ambiental.",
      "Fortalecer a leitura como prática comunitária e territorial.",
      "Valorizar autoras, autores e saberes locais no acervo.",
    ],
    audiences: [
      "Crianças e adolescentes",
      "Famílias das comunidades atendidas",
      "Educadoras e educadores da rede pública",
      "Público em geral interessado em leitura e território",
    ],
    activities: [
      {
        name: "Mediações de leitura",
        summary:
          "Encontros semanais com rodas de leitura ao ar livre e em salas acolhedoras da sede.",
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Clube de leitores do território",
        summary:
          "Grupo mensal que discute obras conectadas ao meio ambiente e à cultura local.",
        image:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Formação de mediadores",
        summary:
          "Trilhas formativas para educadores e voluntários que atuam com leitura comunitária.",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80&auto=format&fit=crop",
    ],
    linkedAlbumProject: "Biblioteca Verde",
    facts: [
      { label: "Títulos no acervo", value: "3.200+" },
      { label: "Mediações por mês", value: "24" },
      { label: "Escolas parceiras", value: "12" },
    ],
    cta: {
      title: "Conhecimento para compartilhar e transformar",
      text: "Conheça as atividades da Biblioteca Verde, participe dos encontros e descubra novas formas de aproximar leitura, cultura e meio ambiente.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80&auto=format&fit=crop",
    },

  },
  {
    slug: "guardioes-do-territorio",
    title: "Guardiões do Território",
    category: "Preservação ambiental e juventude",
    eyebrow: "Projeto de formação e preservação",
    shortDescription:
      "Formação de jovens agentes ambientais para monitoramento, mobilização e defesa das áreas de proteção comunitária.",
    heroImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=2000&q=80&auto=format&fit=crop",
    accent: "moss",
    about: {
      title: "Sobre o projeto",
      intro:
        "O Guardiões do Território é uma iniciativa de educação ambiental que forma crianças, jovens e adultos para atuarem como agentes protetores do meio ambiente em suas comunidades.",
      paragraphs: [
        "O projeto valoriza o vínculo entre as pessoas e o lugar onde vivem, reconhecendo que a preservação ambiental depende, antes de tudo, da relação afetiva com o território. Por meio de vivências, oficinas, atividades ao ar livre e ações práticas, o projeto fortalece o cuidado com a natureza e com os espaços comunitários.",
        "As ações incluem trilhas ecológicas, mutirões ambientais, oficinas de sustentabilidade, práticas de agroecologia, monitoramento e cuidado com áreas verdes.",
      ],
      highlight:
        "Cuidar do território é cuidar da vida — e esse cuidado se aprende, se pratica e se compartilha entre gerações.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop",
      imageCaption: "Trilha formativa com jovens agentes ambientais.",
    },
    cards: {
      title: "Caminhos de aprendizagem e cuidado",
      items: [
        {
          title: "Trilhas ecológicas",
          text: "Vivências guiadas que aproximam os participantes da fauna, da flora e do ciclo das águas do território.",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Mutirões ambientais",
          text: "Ações coletivas de plantio, limpeza e restauração de espaços comunitários e áreas verdes.",
          image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Oficinas de sustentabilidade",
          text: "Encontros formativos sobre agroecologia, resíduos, água, biodiversidade e práticas de vida sustentável.",
          image:
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Monitoramento comunitário",
          text: "Práticas de observação e cuidado com nascentes, matas e áreas de proteção, junto às moradoras e moradores.",
          image:
            "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&q=80&auto=format&fit=crop",
        },
      ],
    },
    presentation: {
      title: "Juventude que cuida do território onde vive",
      body: [
        "O Guardiões do Território forma jovens das comunidades para atuarem como agentes ambientais: observando, cuidando e mobilizando o entorno.",
        "A trilha formativa combina vivências em campo, estudo do território e ações práticas — plantios, mutirões de limpeza e monitoramento de áreas de proteção.",
        "É um projeto de pertencimento: reconhecer que o território é casa comum e que sua defesa começa pelas pessoas que ali vivem.",
      ],
    },



    objectives: [
      "Formar jovens agentes ambientais comprometidos com o território.",
      "Monitorar áreas de proteção e nascentes junto à comunidade.",
      "Realizar mutirões de plantio, limpeza e restauração ecológica.",
      "Fortalecer a mobilização socioambiental local.",
    ],
    audiences: [
      "Jovens de 15 a 24 anos das comunidades atendidas",
      "Escolas públicas parceiras",
      "Lideranças comunitárias e moradores voluntários",
    ],
    activities: [
      {
        name: "Trilhas formativas em campo",
        summary:
          "Vivências guiadas em áreas de proteção com estudo da fauna, flora e do ciclo das águas.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Mutirões de plantio",
        summary:
          "Ações comunitárias de plantio de mudas nativas em áreas degradadas do território.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Monitoramento de nascentes",
        summary:
          "Registro periódico do estado das nascentes com apoio técnico e escuta dos moradores.",
        image:
          "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80&auto=format&fit=crop",
    ],
    linkedAlbumProject: "Guardiões do Território",
    facts: [
      { label: "Jovens formados", value: "120" },
      { label: "Mudas plantadas", value: "8.400" },
      { label: "Nascentes monitoradas", value: "18" },
    ],
    cta: {
      title: "Cuidar do território é um gesto coletivo",
      text: "Descubra as ações do Guardiões do Território, participe das atividades e some-se ao cuidado com o meio ambiente da comunidade.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop",
    },
  },

  {
    slug: "cultura-que-floresce",
    title: "Cultura que Floresce",
    category: "Cultura, memória e comunidade",
    eyebrow: "Projeto cultural e comunitário",
    shortDescription:
      "Ações culturais que fortalecem a identidade local, valorizam mestras e mestres e celebram a memória viva do território.",
    heroImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2000&q=80&auto=format&fit=crop",
    accent: "ochre",
    about: {
      title: "Sobre o projeto",
      intro:
        "O Cultura que Floresce é um projeto dedicado à valorização da cultura local, à celebração das identidades comunitárias e ao fortalecimento das expressões artísticas produzidas no território.",
      paragraphs: [
        "A cultura é uma das raízes mais profundas de uma comunidade — é ela que preserva memórias, transmite saberes e sustenta o sentimento de pertencimento. Reconhecendo essa força, o projeto promove encontros culturais, apresentações, oficinas artísticas, atividades de valorização das tradições, festas comunitárias e ações que unem cultura popular, arte contemporânea e educação.",
        "As ações são construídas de forma colaborativa, com participação de artistas locais, grupos culturais, mestras, mestres, jovens, crianças, famílias e educadores.",
      ],
      highlight:
        "Cultura que floresce é território que se reconhece: cada expressão, cada saber e cada história fortalece a vida comunitária.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&q=80&auto=format&fit=crop",
      imageCaption: "Oficina cultural aberta com participação intergeracional.",
    },
    cards: {
      title: "Linguagens que fazem a cultura florescer",
      items: [
        {
          title: "Oficinas artísticas",
          text: "Vivências criativas em música, dança, artes visuais, teatro e literatura, abertas a diferentes públicos.",
          image:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Encontros culturais",
          text: "Rodas de conversa, apresentações e atividades que colocam a cultura local em movimento no território.",
          image:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Memória viva",
          text: "Registro e valorização de histórias, ofícios, receitas, cantos e saberes das mestras e mestres.",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80&auto=format&fit=crop",
        },
        {
          title: "Festas e apresentações",
          text: "Celebrações abertas que fortalecem os laços comunitários e projetam as expressões culturais do território.",
          image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80&auto=format&fit=crop",
        },
      ],
    },
    presentation: {
      title: "Cultura como raiz que floresce nas comunidades",
      body: [
        "O Cultura que Floresce nasce da escuta das mestras e mestres das comunidades: aqueles que guardam ofícios, cantos, receitas e histórias.",
        "Realiza encontros de saberes, oficinas culturais, apresentações abertas e registros audiovisuais que devolvem à comunidade sua própria memória.",
        "É um projeto de valorização: reconhecer que cultura é território vivo e que a memória local é patrimônio de todas e de todos.",
      ],
    },

    objectives: [
      "Valorizar mestras e mestres da cultura popular do território.",
      "Registrar e difundir saberes, ofícios e narrativas locais.",
      "Promover oficinas culturais abertas à comunidade.",
      "Fortalecer o Ponto de Cultura como espaço de encontro.",
    ],
    audiences: [
      "Mestras e mestres da cultura popular",
      "Crianças, jovens e famílias das comunidades",
      "Grupos culturais e coletivos locais",
      "Pesquisadores e educadores parceiros",
    ],
    activities: [
      {
        name: "Encontros de saberes",
        summary:
          "Rodas intergeracionais com mestras e mestres compartilhando ofícios e histórias.",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Oficinas culturais",
        summary:
          "Artes visuais, escrita, música e expressões populares em diálogo com a natureza.",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop",
      },
      {
        name: "Memória viva",
        summary:
          "Registro audiovisual de narrativas comunitárias e paisagens do território.",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80&auto=format&fit=crop",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80&auto=format&fit=crop",
    ],
    linkedAlbumProject: "Cultura e território",
    facts: [
      { label: "Mestras e mestres", value: "38" },
      { label: "Oficinas realizadas", value: "72" },
      { label: "Encontros abertos", value: "24/ano" },
    ],
    cta: {
      title: "A cultura é feita com muitas mãos",
      text: "Conheça as ações do Cultura que Floresce, participe das oficinas e some-se ao movimento que celebra a identidade do território.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1400&q=80&auto=format&fit=crop",
    },

  },
];

export const newsCategories = [
  "Ação cultural",
  "Meio ambiente",
  "Educação ambiental",
  "Biblioteca e leitura",
  "Projetos",
  "Comunidade",
  "Sustentabilidade",
  "Oficinas",
  "Eventos",
  "Institucional",
] as const;

export type NewsCategory = (typeof newsCategories)[number];

export type NewsPhoto = { src: string; caption?: string; credit?: string };

export type NewsItem = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string; // ISO
  author: string;
  cover: string;
  coverCaption?: string;
  coverCredit?: string;
  excerpt: string;
  body: string[];
  tags: string[];
  gallery?: NewsPhoto[];
};

export const news: NewsItem[] = [
  {
    slug: "semana-do-meio-ambiente-2026",
    title: "Semana do Meio Ambiente reúne comunidades em torno do território",
    subtitle: "Uma semana de oficinas, plantios e rodas de conversa em cinco comunidades",
    category: "Meio ambiente",
    date: "2026-06-05",
    author: "Equipe de Comunicação",
    cover:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1600&q=80&auto=format&fit=crop",
    coverCaption: "Encerramento da Semana do Meio Ambiente reuniu comunidades e famílias parceiras.",
    coverCredit: "Foto: Arquivo Instituto",
    excerpt:
      "Programação envolveu mais de 800 pessoas em atividades ao ar livre, plantios e mediações de leitura.",
    body: [
      "A Semana do Meio Ambiente reuniu, entre os dias 1 e 7 de junho, mais de 800 pessoas em cinco comunidades atendidas pelo Instituto. Oficinas, trilhas guiadas e mediações de leitura marcaram a programação.",
      "O encerramento aconteceu na sede do Ponto de Cultura, com apresentação dos jovens guardiões do território e entrega de mudas para as famílias participantes.",
      "As ações reforçam o compromisso com a educação ambiental como prática cotidiana, construída em diálogo com moradores, escolas e agentes locais.",
    ],
    tags: ["meio ambiente", "comunidade", "educação"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1400&q=80&auto=format&fit=crop", caption: "Roda de conversa na abertura", credit: "Arquivo Instituto" },
      { src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1400&q=80&auto=format&fit=crop", caption: "Trilha guiada no território", credit: "Arquivo Instituto" },
      { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop", caption: "Plantio comunitário", credit: "Arquivo Instituto" },
      { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80&auto=format&fit=crop", caption: "Mata do território", credit: "Arquivo Instituto" },
      { src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80&auto=format&fit=crop", caption: "Mediação de leitura ao ar livre", credit: "Arquivo Instituto" },
      { src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1400&q=80&auto=format&fit=crop", caption: "Jovens guardiões", credit: "Arquivo Instituto" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80&auto=format&fit=crop", caption: "Oficina com estudantes", credit: "Arquivo Instituto" },
      { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80&auto=format&fit=crop", caption: "Encontro de saberes", credit: "Arquivo Instituto" },
    ],
  },
  {
    slug: "biblioteca-verde-amplia-acervo",
    title: "Biblioteca Verde amplia acervo com publicações sobre biodiversidade",
    subtitle: "Nova coleção reúne pesquisas, cartilhas e literatura infantojuvenil",
    category: "Biblioteca e leitura",
    date: "2026-05-18",
    author: "Coordenação de Acervo",
    cover:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80&auto=format&fit=crop",
    coverCaption: "Novos títulos passam a compor o acervo da Biblioteca Verde.",
    excerpt:
      "Mais de 300 novos títulos passam a compor o acervo ambiental e cultural aberto à comunidade.",
    body: [
      "A Biblioteca Verde recebeu, neste mês, uma nova coleção com mais de 300 títulos voltados à biodiversidade, agroecologia e saberes tradicionais.",
      "O acervo está disponível para consulta e empréstimo, com mediações semanais realizadas por educadores e voluntários.",
    ],
    tags: ["biblioteca", "leitura", "acervo"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80&auto=format&fit=crop", caption: "Acervo da Biblioteca Verde" },
      { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1400&q=80&auto=format&fit=crop", caption: "Mediação de leitura" },
      { src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80&auto=format&fit=crop", caption: "Espaço de leitura" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80&auto=format&fit=crop", caption: "Encontro de leitores" },
    ],
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
    coverCaption: "Voluntários no plantio de mudas nativas.",
    excerpt:
      "Foram plantadas 500 mudas nativas em torno de uma nascente comunitária recuperada por voluntários.",
    body: [
      "O mutirão reuniu voluntários, alunos de escolas parceiras e famílias das comunidades atendidas para o plantio de 500 mudas nativas.",
      "A ação integra o projeto Guardiões do Território e conta com monitoramento ambiental permanente.",
    ],
    tags: ["plantio", "nascente", "mutirão"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop", caption: "Plantio de mudas" },
      { src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1400&q=80&auto=format&fit=crop", caption: "Preparação do solo" },
      { src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1400&q=80&auto=format&fit=crop", caption: "Voluntários no campo" },
      { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80&auto=format&fit=crop", caption: "Nascente recuperada" },
    ],
  },
  {
    slug: "encontro-de-saberes",
    title: "Encontro de Saberes valoriza mestres e mestras da comunidade",
    subtitle: "Roda de conversa reuniu gerações em torno de ofícios e memórias",
    category: "Ação cultural",
    date: "2026-03-30",
    author: "Coordenação Cultural",
    cover:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&auto=format&fit=crop",
    coverCaption: "Mestras e mestres em roda de conversa aberta ao público.",
    excerpt:
      "Mestras e mestres compartilharam ofícios, cantos e histórias em um encontro aberto ao público.",
    body: [
      "O Encontro de Saberes reuniu mestras e mestres da comunidade em uma roda de conversa aberta ao público, com apresentações culturais e trocas intergeracionais.",
    ],
    tags: ["cultura", "memória", "comunidade"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80&auto=format&fit=crop", caption: "Roda de saberes" },
      { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1400&q=80&auto=format&fit=crop", caption: "Participação comunitária" },
      { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1400&q=80&auto=format&fit=crop", caption: "Apresentação cultural" },
    ],
  },
  {
    slug: "novo-ciclo-formativo",
    title: "Novo ciclo formativo para jovens educadores começa em agosto",
    subtitle: "Inscrições abertas para 40 vagas com bolsa-auxílio",
    category: "Educação ambiental",
    date: "2026-07-01",
    author: "Coordenação Pedagógica",
    cover:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80&auto=format&fit=crop",
    coverCaption: "Jovens em formação de educadores ambientais.",
    excerpt:
      "Programa forma jovens educadores ambientais em parceria com escolas e universidades da região.",
    body: [
      "O programa de formação de jovens educadores ambientais abre inscrições para 40 vagas, com bolsa-auxílio e certificação.",
    ],
    tags: ["formação", "juventude", "educação"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1400&q=80&auto=format&fit=crop" },
      { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=80&auto=format&fit=crop" },
    ],
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
  {
    slug: "oficina-arte-natureza",
    title: "Oficina de arte e natureza une expressão e biodiversidade",
    subtitle: "Estudantes exploraram materiais naturais em processos criativos",
    category: "Oficinas",
    date: "2025-11-10",
    author: "Coordenação Cultural",
    cover:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1600&q=80&auto=format&fit=crop",
    excerpt: "Estudantes produziram obras utilizando folhas, sementes e pigmentos naturais.",
    body: [
      "A oficina reuniu 60 estudantes em quatro dias de imersão, explorando técnicas de arte com materiais naturais coletados no território.",
    ],
    tags: ["oficina", "arte", "educação"],
  },
  {
    slug: "festival-cultural-territorio",
    title: "Festival Cultural do Território celebra 15 anos de atuação",
    subtitle: "Programação teve música, feira agroecológica e apresentações",
    category: "Eventos",
    date: "2025-08-22",
    author: "Equipe de Comunicação",
    cover:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1600&q=80&auto=format&fit=crop",
    excerpt: "Mais de 2 mil pessoas participaram do festival aberto e gratuito.",
    body: [
      "O Festival Cultural do Território marcou os 15 anos do Instituto com apresentações musicais, feira agroecológica e mostra de projetos comunitários.",
    ],
    tags: ["festival", "aniversário", "cultura"],
  },
  {
    slug: "assembleia-comunitaria",
    title: "Assembleia comunitária define prioridades para o próximo ciclo",
    subtitle: "Moradores participaram da construção coletiva do plano de ação",
    category: "Comunidade",
    date: "2024-10-05",
    author: "Mobilização Comunitária",
    cover:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&q=80&auto=format&fit=crop",
    excerpt: "Encontro reuniu representantes das comunidades atendidas para debater os próximos passos.",
    body: [
      "A assembleia contou com a participação de mais de 120 pessoas e resultou em diretrizes para os próximos dois anos de atuação.",
    ],
    tags: ["assembleia", "participação", "planejamento"],
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

export const transparencyCategories = [
  "Documentos oficiais e institucionais",
  "Portfólios e prestação de contas",
  "Certificados e reconhecimentos",
  "Relatórios de atividades",
  "Relatórios financeiros",
  "Estatuto e regimentos",
  "Editais, termos e parcerias",
  "Políticas institucionais",
  "Atas e governança",
  "Publicações e materiais técnicos",
] as const;

export type TransparencyDoc = {
  name: string;
  category: (typeof transparencyCategories)[number];
  year: string;
  type: string;
  size: string;
  url: string;
  publishedAt?: string;
  featured?: boolean;
  cover?: string;
};

export const documents: TransparencyDoc[] = [
  { name: "Cadastro Nacional CNPJ", category: "Documentos oficiais e institucionais", year: "2024", type: "PDF", size: "180 KB", url: "#" },
  { name: "Cadastro Municipal", category: "Documentos oficiais e institucionais", year: "2024", type: "PDF", size: "142 KB", url: "#" },
  { name: "Alvará de Funcionamento 2025", category: "Documentos oficiais e institucionais", year: "2025", type: "PDF", size: "220 KB", url: "#" },
  { name: "Portfólio Institucional 2025", category: "Portfólios e prestação de contas", year: "2025", type: "PDF", size: "5,4 MB", url: "#" },
  { name: "Portfólio Institucional 2024", category: "Portfólios e prestação de contas", year: "2024", type: "PDF", size: "4,9 MB", url: "#" },
  { name: "Prestação de Contas 2024", category: "Portfólios e prestação de contas", year: "2024", type: "PDF", size: "1,5 MB", url: "#" },
  { name: "Certificado Ponto de Cultura", category: "Certificados e reconhecimentos", year: "2017", type: "PDF", size: "180 KB", url: "#" },
  { name: "Selo Educação Ambiental", category: "Certificados e reconhecimentos", year: "2022", type: "PDF", size: "160 KB", url: "#" },
  { name: "Prêmio Território Vivo 2023", category: "Certificados e reconhecimentos", year: "2023", type: "PDF", size: "210 KB", url: "#" },
  {
    name: "Relatório Anual de Atividades 2025",
    category: "Relatórios de atividades",
    year: "2025",
    type: "PDF",
    size: "4,2 MB",
    url: "#",
    publishedAt: "2026-02-20",
    featured: true,
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80&auto=format&fit=crop",
  },
  { name: "Relatório Anual de Atividades 2024", category: "Relatórios de atividades", year: "2024", type: "PDF", size: "3,8 MB", url: "#", publishedAt: "2025-02-14" },
  { name: "Relatório Anual de Atividades 2023", category: "Relatórios de atividades", year: "2023", type: "PDF", size: "3,1 MB", url: "#", publishedAt: "2024-02-10" },
  { name: "Balanço Financeiro 2025", category: "Relatórios financeiros", year: "2025", type: "PDF", size: "1,1 MB", url: "#" },
  { name: "Balanço Financeiro 2024", category: "Relatórios financeiros", year: "2024", type: "PDF", size: "980 KB", url: "#" },
  { name: "DRE 2024", category: "Relatórios financeiros", year: "2024", type: "PDF", size: "540 KB", url: "#" },
  { name: "Estatuto Social", category: "Estatuto e regimentos", year: "2023", type: "PDF", size: "412 KB", url: "#" },
  { name: "Regimento Interno", category: "Estatuto e regimentos", year: "2023", type: "PDF", size: "228 KB", url: "#" },
  { name: "Edital Formativo 2026", category: "Editais, termos e parcerias", year: "2026", type: "PDF", size: "320 KB", url: "#" },
  { name: "Termo de Fomento — Cultura Viva", category: "Editais, termos e parcerias", year: "2024", type: "PDF", size: "410 KB", url: "#" },
  { name: "Convênio Escolas Parceiras", category: "Editais, termos e parcerias", year: "2023", type: "PDF", size: "280 KB", url: "#" },
  { name: "Política Ambiental", category: "Políticas institucionais", year: "2024", type: "PDF", size: "210 KB", url: "#" },
  { name: "Política de Proteção de Crianças e Adolescentes", category: "Políticas institucionais", year: "2024", type: "PDF", size: "260 KB", url: "#" },
  { name: "Política de Privacidade e Dados", category: "Políticas institucionais", year: "2024", type: "PDF", size: "180 KB", url: "#" },
  { name: "Ata de Assembleia Ordinária 2025", category: "Atas e governança", year: "2025", type: "PDF", size: "156 KB", url: "#" },
  { name: "Ata de Assembleia Ordinária 2024", category: "Atas e governança", year: "2024", type: "PDF", size: "148 KB", url: "#" },
  { name: "Cartilha de Educação Ambiental", category: "Publicações e materiais técnicos", year: "2025", type: "PDF", size: "2,4 MB", url: "#" },
  { name: "Manual de Boas Práticas Comunitárias", category: "Publicações e materiais técnicos", year: "2024", type: "PDF", size: "1,8 MB", url: "#" },
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
