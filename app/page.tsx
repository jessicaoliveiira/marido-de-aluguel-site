import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  Droplets,
  Settings,
  Bath,
  Waves,
  CheckCircle2,
  Clock,
  DollarSign,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
  Camera,
  ClipboardCheck,
  MapPin,
  AlertTriangle
} from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import { siteConfig, whatsappLink, whatsappLinkFor, services, testimonials, faqs } from '@/lib/config';

export const metadata: Metadata = {
  title: `Encanador em ${siteConfig.city} | Serviços Hidráulicos Rápidos`,
  description: `Serviços hidráulicos em ${siteConfig.city}: caça vazamentos, desentupimento, instalações, caixas-d’água e manutenção. Orçamento grátis e atendimento rápido.`
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

const differentials = [
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Respondemos em minutos pelo WhatsApp e priorizamos vazamentos e entupimentos urgentes.',
    color: 'bg-blue-50 text-brand-blue'
  },
  {
    icon: DollarSign,
    title: 'Preço Justo',
    description: 'Orçamento transparente e sem surpresas. Cobramos somente pelo que foi combinado.',
    color: 'bg-green-50 text-brand-green'
  },
  {
    icon: ShieldCheck,
    title: 'Profissional de Confiança',
    description: 'Especialistas em hidráulica residencial e comercial, com atendimento claro e responsável.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: CheckCircle2,
    title: 'Garantia dos Serviços',
    description: 'Todos os serviços têm garantia de 90 dias. Volto sem custo se houver qualquer problema.',
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero text-white relative overflow-hidden" aria-labelledby="hero-title">
        {/* Background decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"
          aria-hidden="true"
        />

        <div className="container-custom py-14 md:py-20 relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              <span className="text-sm font-medium">+47 avaliações 5 estrelas</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Vazamento, entupimento ou{' '}
              <br className="hidden sm:block" />
              problema hidráulico?
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Conte o que aconteceu e fale direto com um especialista em {siteConfig.city}. Atendimento ágil,
              orçamento transparente e execução com garantia.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={whatsappLinkFor('um vazamento')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-brand-blue transition hover:bg-blue-50"
              >
                Estou com vazamento
              </a>
              <a
                href={whatsappLinkFor('um entupimento')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/20"
              >
                Preciso desentupir
              </a>
              <a
                href={whatsappLinkFor('uma instalação ou troca hidráulica')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/20"
              >
                Quero instalar/trocar
              </a>
            </div>

            <a href={`tel:+${siteConfig.phone}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4">
              <Phone className="h-4 w-4" aria-hidden="true" /> Emergência? Ligue: {siteConfig.phoneFormatted}
            </a>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blue-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                Orçamento 100% gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                Atendimento no mesmo dia
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                Garantia de 90 dias
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] bg-cyan-300/20 blur-2xl" aria-hidden="true" />
            <Image
              src="/images/tecnico-hidraulico-hero.png"
              alt="Técnico realizando manutenção hidráulica em uma cozinha"
              width={1200}
              height={675}
              priority
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 left-4 rounded-2xl bg-white px-4 py-3 text-gray-900 shadow-xl">
              <p className="text-xs font-medium text-gray-500">Atendimento em São Paulo</p>
              <p className="text-sm font-bold">Casa, empresa e condomínio</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="services-title">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="services-title" className="section-title">
              Nossos Serviços em {siteConfig.city}
            </h2>
            <p className="section-subtitle mx-auto">
              Soluções hidráulicas para casas, empresas e condomínios. Diagnóstico preciso, execução limpa e preço justo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <Link
                  key={service.id}
                  href={`/servicos#${service.slug}`}
                  className="card group hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                  aria-label={`Ver detalhes: ${service.title}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 group-hover:bg-brand-blue p-3 rounded-xl transition-colors flex-shrink-0">
                      <Icon
                        className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-brand-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm text-brand-blue font-medium">
                    Saiba mais
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/servicos" className="btn-primary">
              Ver Todos os Serviços
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-blue-50 py-16 md:py-20" aria-labelledby="how-it-works-title">
        <div className="container-custom">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Simples e sem surpresa</p>
            <h2 id="how-it-works-title" className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle mx-auto">Você entende o próximo passo desde o primeiro contato.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Camera, title: '1. Conte o que aconteceu', text: 'Chame no WhatsApp e, se puder, envie foto ou vídeo do problema.' },
              { icon: ClipboardCheck, title: '2. Receba orientação', text: 'Avaliamos o caso, confirmamos a disponibilidade e alinhamos o orçamento.' },
              { icon: MapPin, title: '3. Serviço resolvido', text: 'Vamos até você com as ferramentas necessárias e testamos tudo ao finalizar.' }
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl bg-white p-6 shadow-card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white"><Icon className="h-6 w-6" aria-hidden="true" /></div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="differentials-title">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="differentials-title" className="section-title">
              Por Que Nos Escolher?
            </h2>
            <p className="section-subtitle mx-auto">
              Especialização, transparência e cuidado com o seu imóvel em cada atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card text-center">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="bg-slate-950 py-12 text-white" aria-labelledby="emergency-title">
        <div className="container-custom flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-red-500/20 p-3 text-red-300"><AlertTriangle className="h-7 w-7" aria-hidden="true" /></div>
            <div>
              <h2 id="emergency-title" className="text-2xl font-extrabold">Vazamento ativo ou retorno de esgoto?</h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-300">Não espere o problema aumentar. Informe sua região e a situação pelo WhatsApp para verificarmos o atendimento prioritário.</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={`tel:+${siteConfig.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-bold transition hover:bg-white/10"><Phone className="h-5 w-5" /> Ligar agora</a>
            <a href={whatsappLinkFor('uma emergência hidráulica: vazamento ativo ou retorno de esgoto')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">Priorizar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="testimonials-title">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <h2 id="testimonials-title" className="section-title">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="section-subtitle mx-auto">
              Mais de 47 avaliações com 5 estrelas. Veja a experiência de quem já nos contratou.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/avaliacoes" className="btn-outline">
              Ver Todas as Avaliações
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs.slice(0, 5)} />

      {/* FINAL CTA */}
      <section className="bg-hero text-white py-16 md:py-24" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-extrabold mb-4">
            Precisa de um Encanador Agora?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Chame no WhatsApp, explique o problema e receba uma orientação inicial em minutos. Atendemos {siteConfig.city} e região.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg py-4 px-10 inline-flex"
            aria-label="Solicitar orçamento pelo WhatsApp agora"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chamar no WhatsApp Agora
          </a>
        </div>
      </section>
    </>
  );
}
