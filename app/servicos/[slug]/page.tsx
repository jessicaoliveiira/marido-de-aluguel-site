import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Phone } from 'lucide-react';
import { services, siteConfig, whatsappLinkFor } from '@/lib/config';

type PageProps = { params: Promise<{ slug: string }> };

const serviceCopy: Record<string, { intro: string; items: string[] }> = {
  vazamentos: {
    intro: `Um vazamento pode aparecer na torneira, no piso, na parede ou no teto. A Ruachthec faz a avaliação do ponto e o reparo hidráulico necessário para ajudar a evitar desperdício de água e novos danos ao ambiente.`,
    items: ['Localização de vazamentos aparentes e ocultos', 'Reparo de tubulações, conexões, sifões e registros', 'Conserto de torneiras, válvulas e pontos com infiltração']
  },
  desentupimento: {
    intro: `Para pia, ralo, vaso sanitário ou rede de esgoto com obstrução, o desentupimento é feito com orientação técnica e atenção ao acabamento do imóvel.`,
    items: ['Desentupimento de pia, ralo e vaso sanitário', 'Limpeza de sifões e caixas de gordura', 'Orientação para reduzir o risco de novas obstruções']
  },
  instalacoes: {
    intro: `Instalações hidráulicas bem executadas ajudam a manter o funcionamento e o acabamento do ambiente. Avaliamos o ponto de água ou esgoto antes de realizar a troca ou instalação.`,
    items: ['Instalação de torneiras, chuveiros, filtros e misturadores', 'Troca de registros, flexíveis, válvulas e sifões', 'Instalação de vasos sanitários, cubas e pontos hidráulicos']
  },
  'banheiros-cozinhas': {
    intro: `Banheiros e cozinhas concentram pontos de água e esgoto que exigem manutenção frequente. Fazemos reparos para vazamentos, baixa pressão, mau cheiro e falhas em descargas.`,
    items: ['Reparo de descargas, válvulas e caixas acopladas', 'Correção de vazamentos em pias, bancadas e ralos', 'Adequação de pontos para lavadoras e lava-louças']
  },
  'caixa-dagua': {
    intro: `A manutenção de caixa-d’água e bombas contribui para um abastecimento mais regular. Verificamos boias, registros, vedação e componentes do sistema.`,
    items: ['Instalação e troca de caixas-d’água', 'Regulagem e troca de boias', 'Manutenção de bombas e pressurizadores']
  },
  'manutencao-preventiva': {
    intro: `A manutenção hidráulica preventiva busca identificar pontos de atenção antes que virem reparos maiores, especialmente em imóveis, comércios e condomínios.`,
    items: ['Revisão de torneiras, registros, descargas e conexões', 'Verificação de tubulações, esgoto e sinais de infiltração', 'Orientação sobre prioridades de manutenção']
  }
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} em ${siteConfig.city}`,
    description: `${service.description} Solicite orientação e orçamento pelo WhatsApp.`,
    keywords: service.keywords,
    alternates: { canonical: `${siteConfig.siteUrl}/servicos/${service.slug}` }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const copy = service && serviceCopy[slug];

  if (!service || !copy) notFound();

  const canonicalUrl = `${siteConfig.siteUrl}/servicos/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} em ${siteConfig.city}`,
    description: service.description,
    serviceType: service.title,
    areaServed: { '@type': 'City', name: siteConfig.city },
    provider: { '@type': 'Plumber', name: siteConfig.name, telephone: `+${siteConfig.phone}`, url: siteConfig.siteUrl },
    url: canonicalUrl
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-hero py-14 text-white md:py-20">
        <div className="container-custom max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-brand-green-light">
            <Link href="/" className="hover:text-white">Início</Link><span className="mx-2">/</span>
            <Link href="/servicos" className="hover:text-white">Serviços</Link><span className="mx-2">/</span>
            <span className="text-white">{service.shortTitle}</span>
          </nav>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-green-light">Ruachthec em {siteConfig.city}</p>
          <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">{service.title} em {siteConfig.city}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/80">{service.description}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-custom grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <article>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Reparo e manutenção feitos com cuidado</h2>
            <p className="mb-7 leading-relaxed text-gray-600">{copy.intro}</p>
            <h3 className="mb-4 text-xl font-bold text-gray-900">O que este serviço pode incluir</h3>
            <ul className="space-y-3">
              {copy.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-green" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <aside className="h-fit rounded-2xl bg-stone-50 p-6 shadow-card">
            <h2 className="mb-3 text-xl font-bold text-gray-900">Precisa de {service.shortTitle.toLowerCase()}?</h2>
            <p className="mb-5 text-sm leading-relaxed text-gray-600">Envie uma descrição e, se puder, fotos ou vídeos. Assim entendemos melhor o que você precisa.</p>
            <a href={whatsappLinkFor(service.title)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
              <Phone className="h-4 w-4" aria-hidden="true" /> Solicitar orçamento
            </a>
            <Link href="/servicos" className="mt-4 block text-center text-sm font-semibold text-brand-blue hover:underline">Ver todos os serviços</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
