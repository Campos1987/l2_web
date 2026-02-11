/**
 * 🚫 404 Not Found Page
 *
 * Renderizado automaticamente quando uma rota não existe ou
 * quando 'notFound()' é chamado explicitamente em server components.
 */

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='flex h-[calc(100vh-200px)] flex-col items-center justify-center p-4 text-center'>
      <div className='relative mb-8'>
        <div className='absolute inset-0 animate-pulse rounded-full bg-gold-primary/20 blur-xl'></div>
        <AlertTriangle className='relative h-24 w-24 text-gold-primary' />
      </div>

      <h1 className='font-cinzel text-6xl font-bold text-gold-primary mb-2'>
        404
      </h1>
      <h2 className='font-cinzel text-2xl font-bold text-foreground mb-6'>
        Página não encontrada
      </h2>

      <p className='mb-8 max-w-md text-foreground/80'>
        A página que você está procurando pode ter sido removida, teve seu nome
        alterado ou está temporariamente indisponível.
      </p>

      <Link
        href='/'
        className='btn w-max bg-transparent border border-gold-primary text-gold-primary hover:text-container-bg hover:border-gold-secondary'
      >
        Voltar ao Início
      </Link>
    </div>
  );
}
