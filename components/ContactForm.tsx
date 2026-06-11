'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { whatsappLink } from '@/lib/config';

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

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const serviceOptions = [
  'Pequenos Reparos',
  'Instalação Elétrica',
  'Hidráulica',
  'Montagem de Móveis',
  'Pintura',
  'Instalação de Ar-Condicionado',
  'Outro'
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call — replace with actual form submission (e.g., Resend, Formspree)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Build WhatsApp message with form data
    const msg = `Olá! Vim pelo site e gostaria de um orçamento.

*Nome:* ${data.name}
*Telefone:* ${data.phone}
*Serviço:* ${data.service}
*Mensagem:* ${data.message}`;

    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511943135297'}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="card text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-brand-green" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
        <p className="text-gray-600 mb-6">Você foi redirecionado para o WhatsApp. Aguarde nosso retorno em breve!</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary" type="button">
          Enviar Nova Mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card flex flex-col gap-5"
      aria-label="Formulário de contato"
      noValidate
    >
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Nome completo{' '}
          <span className="text-red-500" aria-label="obrigatório">
            *
          </span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome completo"
          className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition ${
            errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name', {
            required: 'Por favor, informe seu nome.',
            minLength: { value: 2, message: 'Nome muito curto.' }
          })}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Telefone / WhatsApp{' '}
          <span className="text-red-500" aria-label="obrigatório">
            *
          </span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          placeholder="(11) 94313-5297"
          className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition ${
            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          {...register('phone', {
            required: 'Por favor, informe seu telefone.',
            pattern: {
              value: /^[\d\s\(\)\-\+]{10,}$/,
              message: 'Número de telefone inválido.'
            }
          })}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1.5">
          Serviço desejado{' '}
          <span className="text-red-500" aria-label="obrigatório">
            *
          </span>
        </label>
        <select
          id="contact-service"
          className={`w-full px-4 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white transition ${
            errors.service ? 'border-red-400 focus:ring-red-400' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
          {...register('service', { required: 'Selecione um serviço.' })}
        >
          <option value="">Selecione o serviço</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Descreva o serviço{' '}
          <span className="text-red-500" aria-label="obrigatório">
            *
          </span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Descreva brevemente o que precisa ser feito..."
          className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue transition resize-none ${
            errors.message ? 'border-red-400 focus:ring-red-400' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message', {
            required: 'Por favor, descreva o serviço.',
            minLength: { value: 10, message: 'Descrição muito curta.' }
          })}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-whatsapp justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
        aria-label="Enviar mensagem pelo WhatsApp"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <WhatsAppIcon className="w-5 h-5" />
            Enviar pelo WhatsApp
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
      </p>
    </form>
  );
}
