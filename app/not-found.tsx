import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-8xl font-extrabold text-brand-blue mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Página não encontrada</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você procura não existe ou foi movida. Volte para a página inicial.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" aria-hidden="true" />
            Ir para o Início
          </Link>
          <Link href="/contato" className="btn-outline">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Falar Conosco
          </Link>
        </div>
      </div>
    </div>
  );
}
