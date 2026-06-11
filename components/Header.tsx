'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { whatsappLink, siteConfig } from '@/lib/config';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/avaliacoes', label: 'Avaliações' },
  { href: '/contato', label: 'Contato' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Ir para página inicial">
            <div className="bg-brand-blue p-2 rounded-lg group-hover:bg-brand-blue-dark transition-colors">
              <Wrench className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-tight block">Marido de Aluguel</span>
              <span className="text-xs text-brand-blue font-medium leading-tight block -mt-0.5">
                {siteConfig.city} – SP
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Menu principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-brand-blue font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+${siteConfig.phone}`}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-blue transition-colors"
              aria-label={`Ligar para ${siteConfig.phoneFormatted}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{siteConfig.phoneFormatted}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2 px-4"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden mt-3 pb-4 border-t border-gray-100"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-gray-700 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 px-3">
                <a
                  href={`tel:+${siteConfig.phone}`}
                  className="btn-outline text-center justify-center py-2.5"
                  aria-label={`Ligar para ${siteConfig.phoneFormatted}`}
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phoneFormatted}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-center justify-center py-2.5"
                  aria-label="Solicitar orçamento pelo WhatsApp"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
