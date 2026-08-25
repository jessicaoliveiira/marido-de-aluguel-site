export const siteConfig = {
  name: 'Ruachthec',
  slogan: 'Manutenção e instalações com técnica, cuidado e respeito ao seu espaço.',
  siteUrl: 'https://ruachthec.vercel.app',
  city: 'São Paulo',
  state: 'SP',
  phone: '5511943135297',
  phoneFormatted: '(11) 94313-5297',
  email: '',
  address: 'São Paulo, SP – Atendemos toda a região',
  instagram: '',
  facebook: '',
  whatsappMessage: 'Olá, preciso de um orçamento para manutenção, reparo ou instalação hidráulica.',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754495009927!2d-46.6521985!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000'
};

export const whatsappLink = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

export function whatsappLinkFor(service?: string, message?: string) {
  const text = message || (service
    ? `Olá, vim pelo site e preciso de ajuda com: ${service}. Posso enviar fotos ou vídeo do problema.`
    : siteConfig.whatsappMessage);

  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(text)}`;
}

export const services = [
  { id: 'vazamentos', title: 'Caça Vazamentos e Reparos', shortTitle: 'Vazamentos', description: `Localização e reparo de vazamentos em torneiras, tubulações, paredes e pisos em ${siteConfig.city}. Diagnóstico preciso para evitar desperdício e danos maiores.`, icon: 'Droplets', slug: 'vazamentos', keywords: [`caça vazamentos em ${siteConfig.city}`, 'reparo de vazamento', 'conserto de vazamento', 'encanador urgente'] },
  { id: 'desentupimento', title: 'Desentupimento', shortTitle: 'Desentupimento', description: `Desentupimento de pias, ralos, vasos sanitários e redes de esgoto em ${siteConfig.city}. Atendimento ágil, com técnicas adequadas e cuidado com o imóvel.`, icon: 'Wrench', slug: 'desentupimento', keywords: [`desentupidora em ${siteConfig.city}`, 'desentupimento de pia', 'desentupimento de vaso'] },
  { id: 'instalacoes', title: 'Instalações Hidráulicas', shortTitle: 'Instalações', description: `Instalação e troca de torneiras, misturadores, chuveiros, sifões, registros, filtros e vasos sanitários. Serviço seguro, limpo e com acabamento profissional.`, icon: 'Settings', slug: 'instalacoes', keywords: [`instalação hidráulica em ${siteConfig.city}`, 'troca de torneira', 'instalação de vaso sanitário'] },
  { id: 'banheiros-cozinhas', title: 'Reparos em Banheiros e Cozinhas', shortTitle: 'Banheiros e Cozinhas', description: `Manutenção completa para pontos de água e esgoto em cozinhas, banheiros, lavabos e áreas de serviço. Resolvemos vazamentos, mau cheiro e baixa vazão.`, icon: 'Bath', slug: 'banheiros-cozinhas', keywords: ['encanador para banheiro', 'manutenção hidráulica de cozinha', 'reparo de descarga'] },
  { id: 'caixa-dagua', title: "Caixa-d'Água e Bombas", shortTitle: "Caixa-d'Água", description: `Instalação, manutenção e reparos em caixas-d'água, boias, registros e bombas. Tenha abastecimento regular e água protegida em sua residência ou empresa.`, icon: 'Waves', slug: 'caixa-dagua', keywords: [`manutenção de caixa d'água em ${siteConfig.city}`, 'troca de boia', 'instalação de bomba d água'] },
  { id: 'manutencao-preventiva', title: 'Manutenção Preventiva', shortTitle: 'Manutenção', description: `Revisão hidráulica para prevenir infiltrações, vazamentos e entupimentos. Ideal para imóveis residenciais, condomínios, comércios e antes de reformas.`, icon: 'ShieldCheck', slug: 'manutencao-preventiva', keywords: ['manutenção hidráulica preventiva', 'revisão hidráulica residencial', 'encanador para condomínio'] }
];

export const faqs = [
  { question: `Quais serviços hidráulicos vocês realizam em ${siteConfig.city}?`, answer: 'Atendemos vazamentos, entupimentos, instalações e trocas de louças e metais, reparos em banheiros e cozinhas, caixas-d’água, bombas e manutenção preventiva.' },
  { question: 'Vocês atendem vazamentos e entupimentos com urgência?', answer: `Sim. Para vazamentos ativos, retorno de esgoto ou entupimentos, priorizamos o atendimento. Chame no WhatsApp para confirmar a disponibilidade na sua região de ${siteConfig.city}.` },
  { question: 'Como é feito o orçamento?', answer: 'Você pode enviar fotos, vídeos e uma breve descrição pelo WhatsApp. Quando necessário, avaliamos no local antes de iniciar o serviço e alinhamos o valor com transparência.' },
  { question: 'É preciso quebrar a parede para encontrar vazamentos?', answer: 'Nem sempre. Primeiro realizamos uma avaliação técnica para localizar a origem e buscamos a solução menos invasiva possível para o imóvel.' },
  { question: 'Os serviços têm garantia?', answer: 'Sim. A mão de obra tem garantia de 90 dias para o serviço executado. Caso ocorra alguma questão relacionada ao reparo, retornamos para avaliar.' },
  { question: `Quais regiões de ${siteConfig.city} são atendidas?`, answer: `Atendemos toda a cidade de ${siteConfig.city} e região metropolitana. Consulte pelo WhatsApp a disponibilidade para o seu endereço.` },
  { question: 'Quais formas de pagamento são aceitas?', answer: 'Aceitamos PIX, dinheiro, cartão de débito e crédito. As condições são informadas antes do início do atendimento.' }
];
