import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappLinkFor } from '@/lib/config';

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:+${siteConfig.phone}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-blue px-3 py-3 text-sm font-bold text-brand-blue"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Ligar agora
        </a>
        <a
          href={whatsappLinkFor('um atendimento hidráulico urgente')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-3 py-3 text-sm font-bold text-white shadow-md"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
