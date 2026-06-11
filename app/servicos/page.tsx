import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Zap, Droplets, Armchair, PaintBucket, Wind, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig, whatsappLink, services } from '@/lib/config';

export const metadata: Metadata = {
  title: `Serviços de Marido de Aluguel em ${siteConfig.city}`,
  description: `Conheça todos os nossos serviços em ${siteConfig.city}: instalação elétrica, hidráulica, montagem de móveis, pintura, pequenos reparos e muito mais. Orçamento grátis!`,
  alternates: {
    canonical: 'https://maridodealuguelsp.com.br/servicos'
  }
};

// WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Zap,
  Droplets,
  Armchair,
  PaintBucket,
  Wind
};

const serviceDetails: Record<string, { items: string[]; benefits: string[] }> = {
  'pequenos-reparos': {
    items: [
      'Conserto de portas e janelas emperradas',
      'Troca e ajuste de fechaduras e dobradiças',
      'Fixação de prateleiras, quadros e espelhos',
      'Instalação de cortinas e persianas',
      'Vedação de frestas e buracos',
      'Reparos gerais em drywall e gesso'
    ],
    benefits: ['Rápido e sem bagunça', 'Ferramentas profissionais', 'Garantia no serviço']
  },
  'instalacao-eletrica': {
    items: [
      `Eletricista residencial em ${siteConfig.city}`,
      'Troca de tomadas e interruptores',
      'Instalação de lustres, arandelas e ventiladores de teto',
      'Instalação de chuveiro elétrico',
      'Manutenção de quadros de disjuntores',
      'Instalação de exaustores e ar-condicionado'
    ],
    benefits: ['Serviço seguro e normatizado', 'Testagem completa', 'Garantia de 90 dias']
  },
  hidraulica: {
    items: [
      'Conserto de vazamentos em geral',
      `Instalação de chuveiro em ${siteConfig.city}`,
      'Troca de torneiras e registros',
      'Desentupimento de ralos e pias',
      "Instalação de vasos sanitários e caixas d'água",
      'Conserto de descarga e válvulas'
    ],
    benefits: ['Atendimento emergencial', 'Diagnóstico preciso', 'Sem danos às paredes']
  },
  'montagem-de-moveis': {
    items: [
      `Montagem de móveis em ${siteConfig.city}`,
      'Guarda-roupas, camas e estantes',
      'Móveis IKEA, Tok&Stok, Leroy Merlin e outros',
      'Escrivaninhas e mesas de escritório',
      'Nivelamento e fixação na parede',
      'Desmontagem e remontagem para mudanças'
    ],
    benefits: ['Experiência com todas as marcas', 'Ferramentas adequadas', 'Montagem correta e segura']
  },
  pintura: {
    items: [
      `Pintor residencial em ${siteConfig.city}`,
      'Pintura de paredes e tetos',
      'Pintura de apartamentos completos',
      'Pintura de fachadas e áreas externas',
      'Preparação de superfícies e massa corrida',
      'Pintura de portas, janelas e rodapés'
    ],
    benefits: ['Proteção total dos móveis', 'Acabamento impecável', 'Tintas premium ou a combinar']
  },
  'instalacao-de-ar-condicionado': {
    items: [
      `Instalação de ar-condicionado em ${siteConfig.city}`,
      'Todos os modelos split e janela',
      'Manutenção preventiva e corretiva',
      'Limpeza e higienização de filtros',
      'Recarga de gás',
      'Desinstalação para mudanças'
    ],
    benefits: ['Técnico certificado', 'Instalação limpa e organizada', 'Garantia de funcionamento']
  }
};

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero text-white py-14 md:py-20" aria-labelledby="services-hero-title">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Serviços</li>
            </ol>
          </nav>
          <h1 id="services-hero-title" className="text-3xl md:text-5xl font-extrabold mb-4">
            Serviços de Marido de Aluguel em <span className="text-yellow-300">{siteConfig.city}</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Soluções completas para sua casa ou empresa. Cada serviço realizado com profissionalismo, pontualidade e
            garantia de qualidade.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white" aria-label="Lista de serviços">
        <div className="container-custom">
          <div className="flex flex-col gap-14">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Wrench;
              const details = serviceDetails[service.slug];
              const isEven = index % 2 === 0;

              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-24 card border border-gray-100"
                  aria-labelledby={`service-title-${service.id}`}
                >
                  <div className={`flex flex-col md:flex-row gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    {/* Icon + title */}
                    <div className="md:w-72 flex-shrink-0 flex flex-col items-start gap-4">
                      <div className="bg-blue-50 p-4 rounded-2xl">
                        <Icon className="w-10 h-10 text-brand-blue" aria-hidden="true" />
                      </div>
                      <h2 id={`service-title-${service.id}`} className="text-2xl font-bold text-gray-900">
                        {service.title} em {siteConfig.city}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp text-sm py-2.5 mt-2"
                        aria-label={`Solicitar orçamento de ${service.title}`}
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Pedir Orçamento
                      </a>
                    </div>

                    {/* Details */}
                    {details && (
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-brand-blue rounded-full" aria-hidden="true" />O que fazemos
                          </h3>
                          <ul className="space-y-2">
                            {details.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2
                                  className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0"
                                  aria-hidden="true"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="w-1 h-5 bg-brand-green rounded-full" aria-hidden="true" />
                            Nossos diferenciais
                          </h3>
                          <ul className="space-y-2">
                            {details.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2
                                  className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0"
                                  aria-hidden="true"
                                />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-14" aria-labelledby="services-cta-title">
        <div className="container-custom text-center">
          <h2 id="services-cta-title" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Não encontrou o serviço que precisa?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Entre em contato pelo WhatsApp e nos explique o que precisa. Avaliamos e fazemos o orçamento sem
            compromisso!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Entrar em contato pelo WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
            <Link href="/contato" className="btn-outline">
              Formulário de Contato
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
