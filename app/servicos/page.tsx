import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Droplets, Settings, Bath, Waves, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig, whatsappLinkFor, services } from '@/lib/config';

export const metadata: Metadata = {
  title: `Serviços Hidráulicos em ${siteConfig.city}`,
  description: `Conheça nossos serviços hidráulicos em ${siteConfig.city}: caça vazamentos, desentupimento, instalações, caixas-d’água e manutenção preventiva.`,
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
  Droplets,
  Settings,
  Bath,
  Waves,
  ShieldCheck
};

const serviceDetails: Record<string, { items: string[]; benefits: string[] }> = {
  vazamentos: {
    items: [
      'Detecção de vazamentos aparentes e ocultos', 'Reparo de tubulações, conexões e registros',
      'Vazamentos em paredes, pisos e tetos', 'Troca de vedação em torneiras e sifões',
      'Correção de infiltrações de origem hidráulica', 'Avaliação de consumo elevado de água'
    ],
    benefits: ['Diagnóstico técnico', 'Solução menos invasiva possível', 'Garantia no serviço']
  },
  desentupimento: {
    items: [
      'Desentupimento de pias e ralos', 'Desentupimento de vasos sanitários', 'Limpeza de sifões e caixas de gordura',
      'Desobstrução de redes de esgoto', 'Remoção de resíduos e mau cheiro', 'Orientação para prevenir novas obstruções'
    ],
    benefits: ['Atendimento ágil', 'Cuidado com revestimentos', 'Área limpa após o serviço']
  },
  instalacoes: {
    items: [
      'Instalação de torneiras, misturadores e filtros', 'Troca de sifões, flexíveis e válvulas',
      'Instalação de chuveiros e duchas', 'Troca de registros de pressão e gaveta',
      'Instalação de vasos sanitários e cubas', 'Adequação de pontos de água e esgoto'
    ],
    benefits: ['Acabamento profissional', 'Materiais adequados', 'Teste de funcionamento']
  },
  'banheiros-cozinhas': {
    items: [
      'Reparo de descargas, válvulas e caixas acopladas', 'Troca de sifão e vedação de pias',
      'Correção de baixa pressão de água', 'Eliminação de maus odores em ralos',
      'Reparo de vazamentos em bancadas', 'Instalação de pontos para lava-louças e lavadoras'
    ],
    benefits: ['Soluções duradouras', 'Cuidado com o acabamento', 'Orçamento alinhado antes de executar']
  },
  'caixa-dagua': {
    items: [
      "Instalação e troca de caixas-d'água", 'Troca e regulagem de boias', 'Manutenção de bombas e pressurizadores',
      'Instalação de registros e válvulas', 'Correção de transbordamentos', 'Verificação de vedação e abastecimento'
    ],
    benefits: ['Abastecimento regular', 'Componentes de qualidade', 'Teste completo do sistema']
  },
  'manutencao-preventiva': {
    items: [
      'Inspeção de tubulações e conexões', 'Revisão de torneiras, registros e descargas', 'Verificação de pontos de esgoto',
      "Avaliação de caixa-d'água e boias", 'Identificação de sinais de infiltração', 'Relatório de prioridades e recomendações'
    ],
    benefits: ['Prevenção de emergências', 'Economia de água', 'Ideal para imóveis e condomínios']
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
            Serviços Hidráulicos em <span className="text-yellow-300">{siteConfig.city}</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Atendimento especializado para resolver problemas hidráulicos com agilidade, transparência e garantia.
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
                        href={whatsappLinkFor(service.title)}
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
            Precisa de outro serviço hidráulico?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Chame no WhatsApp, explique a situação e envie fotos se puder. Avaliamos o caso e orientamos o melhor caminho.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLinkFor('outro serviço hidráulico')}
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
