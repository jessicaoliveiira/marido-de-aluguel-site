import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { siteConfig, whatsappLinkFor } from '@/lib/config';

export const metadata: Metadata = {
  title: `Contato | Encanador em ${siteConfig.city}`,
  description: `Entre em contato para serviços hidráulicos em ${siteConfig.city}. Orçamento grátis, atendimento rápido por WhatsApp e profissionais de confiança.`,
  alternates: {
    canonical: 'https://maridodealuguelsp.com.br/contato'
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

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: siteConfig.phoneFormatted,
    href: `tel:+${siteConfig.phone}`,
    color: 'bg-brand-blue text-white'
  },
  {
    icon: MapPin,
    label: 'Área de Atendimento',
    value: siteConfig.address,
    href: undefined,
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Seg – Sex: 8h às 18h | Sáb: 8h às 14h',
    href: undefined,
    color: 'bg-purple-50 text-purple-600'
  }
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero text-white py-14 md:py-20" aria-labelledby="contact-hero-title">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Contato</li>
            </ol>
          </nav>
          <h1 id="contact-hero-title" className="text-3xl md:text-5xl font-extrabold mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Conte o que está acontecendo e solicite seu orçamento gratuito. Respondemos em poucos minutos pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 md:py-24 bg-gray-50" aria-label="Informações de contato e formulário">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: info + quick actions */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Fale com a gente</h2>
                <p className="text-gray-600">
                  A forma mais rápida é pelo WhatsApp. Se possível, envie fotos ou vídeo do problema para agilizar a avaliação.
                </p>
              </div>

              {/* WhatsApp big CTA */}
              <a
                href={whatsappLinkFor('um serviço hidráulico')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-2xl p-5 transition-colors group"
                aria-label="Chamar no WhatsApp para solicitar orçamento"
              >
                <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-lg">Chamar no WhatsApp</p>
                  <p className="text-green-100 text-sm">Resposta em minutos · Orçamento grátis</p>
                </div>
                <MessageCircle className="w-5 h-5 ml-auto opacity-75 group-hover:opacity-100" aria-hidden="true" />
              </a>

              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="card flex items-start gap-3">
                      <div className={`${info.color} p-2.5 rounded-xl flex-shrink-0`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{info.label}</p>
                        <p className="text-sm font-semibold text-gray-900">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={index}
                      href={info.href}
                      className="hover:shadow-card-hover transition-shadow"
                      aria-label={`${info.label}: ${info.value}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Preencha o Formulário</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
