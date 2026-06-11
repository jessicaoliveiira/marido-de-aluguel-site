import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Award, Users, Clock, Star, ArrowRight } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/lib/config';

export const metadata: Metadata = {
  title: `Sobre | Marido de Aluguel em ${siteConfig.city}`,
  description: `Conheça o profissional por trás do Marido de Aluguel em ${siteConfig.city}. Mais de 10 anos de experiência, centenas de clientes satisfeitos e garantia em todos os serviços.`,
  alternates: {
    canonical: 'https://maridodealuguelsp.com.br/sobre'
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

const stats = [
  { icon: Clock, value: '+10', label: 'Anos de experiência', color: 'text-brand-blue' },
  { icon: Users, value: '+500', label: 'Clientes atendidos', color: 'text-brand-green' },
  { icon: Star, value: '5.0', label: 'Nota no Google', color: 'text-yellow-500' },
  { icon: Award, value: '100%', label: 'Serviços garantidos', color: 'text-purple-600' }
];

const values = [
  'Pontualidade e respeito ao seu tempo',
  'Transparência no orçamento, sem surpresas',
  'Ambiente limpo e organizado após o serviço',
  'Comunicação clara durante todo o processo',
  'Garantia de 90 dias em toda mão de obra',
  'Profissional identificado e de confiança'
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero text-white py-14 md:py-20" aria-labelledby="about-hero-title">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Sobre</li>
            </ol>
          </nav>
          <h1 id="about-hero-title" className="text-3xl md:text-5xl font-extrabold mb-4">
            Conheça o Profissional
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Mais de 10 anos resolvendo problemas residenciais em {siteConfig.city} com dedicação, honestidade e
            qualidade.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="about-title">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              {/* Professional photo placeholder — replace /images/profissional.jpg with a real photo */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-blue-dark">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-white">CS</span>
                  </div>
                  <p className="text-white font-bold text-xl">Carlos Silva</p>
                  <p className="text-blue-200 text-sm">Marido de Aluguel</p>
                  <p className="text-blue-300 text-xs mt-2 px-6 text-center">
                    Substitua por uma foto real para aumentar a conversão
                  </p>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-xl">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-none">5.0</p>
                  <p className="text-xs text-gray-500">+47 avaliações</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Carlos Silva
              </h2>
              <p className="text-brand-blue font-semibold mb-6">Marido de Aluguel Profissional em {siteConfig.city}</p>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sou <strong>Carlos Silva</strong>, técnico em manutenção predial com mais de{' '}
                  <strong>10 anos de experiência</strong> realizando serviços residenciais e comerciais em{' '}
                  {siteConfig.city} e região metropolitana.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comecei minha trajetória como ajudante em uma construtora e fui me especializando em diferentes áreas:
                  elétrica, hidráulica, montagem de móveis, pintura e reparos gerais. Hoje, ofereço um serviço completo
                  e de qualidade para quem precisa de um <strong>profissional de confiança</strong> sem precisar
                  contratar várias empresas.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Meu compromisso é sempre entregar um serviço limpo, pontual e dentro do que foi combinado. Já atendi{' '}
                  <strong>mais de 500 residências</strong> em {siteConfig.city} e tenho orgulho de dizer que a maioria
                  dos meus clientes me indicam para amigos e familiares.
                </p>
              </div>

              {/* Values */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Meus compromissos com você:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar com o Carlos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-gray-50" aria-label="Estatísticas e conquistas">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card text-center">
                  <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} aria-hidden="true" />
                  <p className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications / Timeline */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="experience-title">
        <div className="container-custom max-w-3xl">
          <h2 id="experience-title" className="section-title text-center mb-12">
            Trajetória Profissional
          </h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true" />
            <div className="flex flex-col gap-8">
              {[
                {
                  year: '2014',
                  title: 'Início da carreira',
                  desc: 'Começou como auxiliar em construtoras na Grande São Paulo, adquirindo experiência prática em obras residenciais e comerciais.'
                },
                {
                  year: '2016',
                  title: 'Especialização técnica',
                  desc: 'Realizou cursos técnicos em instalações elétricas e hidráulicas, aprofundando o conhecimento em normas de segurança.'
                },
                {
                  year: '2018',
                  title: 'Marido de Aluguel autônomo',
                  desc: 'Iniciou os trabalhos como profissional autônomo, atendendo clientes residenciais em São Paulo com serviços personalizados.'
                },
                {
                  year: '2022',
                  title: 'Mais de 300 clientes atendidos',
                  desc: 'Marco importante com mais de 300 residências atendidas, consolidando a reputação de qualidade e confiança.'
                },
                {
                  year: '2026',
                  title: 'Hoje: +500 clientes e 5★ no Google',
                  desc: `Referência em marido de aluguel em ${siteConfig.city}, com +47 avaliações 5 estrelas e clientes em toda a cidade.`
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 pl-14 relative">
                  <div
                    className="absolute left-4 top-1 w-4 h-4 rounded-full bg-brand-blue border-2 border-white ring-2 ring-brand-blue"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-gray-900 mt-1.5 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero text-white py-14" aria-labelledby="about-cta-title">
        <div className="container-custom text-center">
          <h2 id="about-cta-title" className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Resolver seus Problemas?
          </h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Entre em contato agora e solicite seu orçamento gratuito. Atendo {siteConfig.city} e região.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Solicitar Orçamento
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Ver Serviços
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
