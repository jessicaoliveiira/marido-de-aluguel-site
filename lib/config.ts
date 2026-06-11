export const siteConfig = {
  name: 'Marido de Aluguel',
  city: 'São Paulo',
  state: 'SP',
  phone: '5511943135297', // número WhatsApp sem + e sem espaços
  phoneFormatted: '(11) 94313-5297',
  address: 'São Paulo, SP – Atendemos toda a região',
  instagram: 'https://instagram.com/maridodealuguel',
  facebook: 'https://facebook.com/maridodealuguel',
  whatsappMessage: 'Olá, gostaria de solicitar um orçamento',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754495009927!2d-46.6521985!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000'
};

export const whatsappLink = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export const services = [
  {
    id: 'pequenos-reparos',
    title: 'Pequenos Reparos',
    shortTitle: 'Pequenos Reparos',
    description: `Consertos gerais em sua residência ou empresa em ${siteConfig.city}. Portas emperradas, fechaduras, dobradiças, janelas, cortinas e muito mais. Reparos rápidos com qualidade garantida.`,
    icon: 'Wrench',
    slug: 'pequenos-reparos',
    keywords: [`pequenos reparos em ${siteConfig.city}`, 'consertos residenciais', 'marido de aluguel']
  },
  {
    id: 'instalacao-eletrica',
    title: 'Instalação Elétrica',
    shortTitle: 'Instalação Elétrica',
    description: `Eletricista residencial em ${siteConfig.city}. Troca de tomadas, interruptores, instalação de lustres, ventiladores, ar-condicionado e quadros de disjuntores. Serviço seguro e garantido.`,
    icon: 'Zap',
    slug: 'instalacao-eletrica',
    keywords: [`eletricista residencial em ${siteConfig.city}`, 'instalação elétrica', 'troca de tomadas']
  },
  {
    id: 'hidraulica',
    title: 'Hidráulica',
    shortTitle: 'Hidráulica',
    description: `Encanador em ${siteConfig.city} para conserto de vazamentos, troca de registros, instalação de chuveiro, torneiras, vasos sanitários e muito mais. Atendimento rápido e sem bagunça.`,
    icon: 'Droplets',
    slug: 'hidraulica',
    keywords: [
      `encanador em ${siteConfig.city}`,
      `instalação de chuveiro em ${siteConfig.city}`,
      'conserto de vazamento'
    ]
  },
  {
    id: 'montagem-de-moveis',
    title: 'Montagem de Móveis',
    shortTitle: 'Montagem de Móveis',
    description: `Montagem de móveis em ${siteConfig.city} com agilidade e precisão. Guarda-roupas, camas, estantes, escrivaninhas, móveis IKEA, Tok&Stok e qualquer outra loja. Peças no lugar certo.`,
    icon: 'Armchair',
    slug: 'montagem-de-moveis',
    keywords: [`montagem de móveis em ${siteConfig.city}`, 'montagem de guarda-roupa', 'montagem IKEA']
  },
  {
    id: 'pintura',
    title: 'Pintura',
    shortTitle: 'Pintura',
    description: `Pintor residencial em ${siteConfig.city} para pintura de paredes, tetos, portas e fachadas. Acabamento impecável, sem respingos, com proteção total dos seus móveis e pisos.`,
    icon: 'PaintBucket',
    slug: 'pintura',
    keywords: [`pintor em ${siteConfig.city}`, 'pintura residencial', 'pintura de apartamento']
  },
  {
    id: 'instalacao-de-ar-condicionado',
    title: 'Instalação de Ar-Condicionado',
    shortTitle: 'Ar-Condicionado',
    description: `Instalação e manutenção de ar-condicionado em ${siteConfig.city}. Todos os modelos split, janela e portátil. Serviço rápido, limpo e com garantia de 90 dias.`,
    icon: 'Wind',
    slug: 'instalacao-de-ar-condicionado',
    keywords: [
      `instalação de ar-condicionado em ${siteConfig.city}`,
      'manutenção de ar-condicionado',
      'instalação split'
    ]
  }
];

export const testimonials = [
  {
    name: 'Ana Paula M.',
    rating: 5,
    text: 'Excelente profissional! Montou todo meu apartamento novo em poucas horas, deixou tudo organizado e ainda recolheu as embalagens. Super recomendo!',
    service: 'Montagem de Móveis',
    date: 'Maio 2026',
    initials: 'AP'
  },
  {
    name: 'Roberto S.',
    rating: 5,
    text: 'Resolvi três problemas elétricos que estavam me preocupando há meses. Profissional pontual, explicou tudo que fez e o preço foi muito justo. Com certeza voltarei a contratar.',
    service: 'Instalação Elétrica',
    date: 'Abril 2026',
    initials: 'RS'
  },
  {
    name: 'Carla T.',
    rating: 5,
    text: 'Tinha um vazamento sério na cozinha. Ele chegou no mesmo dia, identificou o problema rapidamente e resolveu com qualidade. Casa limpa e problema resolvido!',
    service: 'Hidráulica',
    date: 'Abril 2026',
    initials: 'CT'
  },
  {
    name: 'Marcos F.',
    rating: 5,
    text: 'Pintou a sala e os quartos do apartamento. Acabamento perfeito, pontual e muito organizado. Protegeu tudo com lona e deixou sem nenhum respingo. Recomendo demais!',
    service: 'Pintura',
    date: 'Março 2026',
    initials: 'MF'
  },
  {
    name: 'Juliana R.',
    rating: 5,
    text: 'Instalou o ar-condicionado e ainda ajeitou uma tomada que estava solta. Muito prestativo e o serviço ficou impecável. Preço honesto e profissional de verdade.',
    service: 'Ar-Condicionado',
    date: 'Março 2026',
    initials: 'JR'
  },
  {
    name: 'Fernando L.',
    rating: 5,
    text: 'Atendimento rápido e eficiente. Fui super bem atendido pelo WhatsApp, agendou para o dia seguinte e resolveu tudo que precisava. Muito satisfeito!',
    service: 'Pequenos Reparos',
    date: 'Fevereiro 2026',
    initials: 'FL'
  }
];

export const faqs = [
  {
    question: `O que é marido de aluguel em ${siteConfig.city}?`,
    answer: `Marido de aluguel é um profissional polivalente que realiza pequenos reparos e serviços residenciais em ${siteConfig.city}. É a solução ideal para quem precisa de ajuda com instalações, consertos e manutenção doméstica sem precisar contratar múltiplos especialistas.`
  },
  {
    question: 'Quais serviços são realizados?',
    answer:
      'Realizamos pequenos reparos gerais, instalações elétricas, serviços hidráulicos, montagem de móveis, pintura residencial, instalação de ar-condicionado, fixação de quadros e muito mais. Entre em contato para verificar seu serviço específico.'
  },
  {
    question: 'Qual é o prazo de atendimento?',
    answer: `Atendemos em ${siteConfig.city} e região geralmente no mesmo dia ou no dia seguinte. Para emergências, fazemos o possível para atender com urgência. Entre em contato pelo WhatsApp para verificar disponibilidade.`
  },
  {
    question: 'Como funciona o orçamento?',
    answer:
      'O orçamento é gratuito e sem compromisso. Você pode solicitar pelo WhatsApp descrevendo o serviço ou enviar fotos do local. Respondemos rapidamente com o valor e a disponibilidade de agenda.'
  },
  {
    question: 'Os serviços têm garantia?',
    answer:
      'Sim! Todos os serviços realizados têm garantia. A mão de obra é garantida por 90 dias. Caso haja qualquer problema relacionado ao serviço executado, retornamos sem custo adicional.'
  },
  {
    question: `Quais regiões de ${siteConfig.city} são atendidas?`,
    answer: `Atendemos toda a cidade de ${siteConfig.city} e grande parte da região metropolitana, incluindo Zona Sul, Zona Norte, Zona Leste, Zona Oeste e Centro. Consulte disponibilidade para sua região específica.`
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos PIX, dinheiro, cartão de débito e crédito (à vista ou parcelado). Informamos o valor antes de iniciar o serviço para que não haja surpresas.'
  }
];
