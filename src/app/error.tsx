/**
 * ⚠️ Global Error Boundary
 *
 * Componente especial do Next.js (error.tsx) que captura erros não tratados
 * em qualquer lugar da árvore de componentes (exceto Layouts raízes).
 *
 * Requisito: DEVE ser um Client Component ('use client').
 */

'use client';

import { useEffect } from 'react';
import { AlertOctagon } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Observabilidade: Logar o erro quando ele ocorre
  useEffect(() => {
    // Em produção, envie para Sentry, Datadog, etc.
    console.error('Global Error Boundary Caught:', error);
  }, [error]);

  return (
    <div className='flex h-[calc(100vh-200px)] flex-col items-center justify-center p-4 text-center'>
      <div className='relative mb-8'>
        <div className='absolute inset-0 animate-pulse rounded-full bg-red-500/20 blur-xl'></div>
        <AlertOctagon className='relative h-24 w-24 text-bg-error' />
      </div>

      <h1 className='font-cinzel text-4xl font-bold text-bg-error mb-2'>
        Algo deu errado!
      </h1>

      <p className='mb-8 max-w-md text-foreground/80'>
        Encontramos um erro inesperado ao processar sua solicitação. Por favor,
        tente novamente.
      </p>

      <div className='flex flex-col gap-4 sm:flex-row'>
        <button
          onClick={
            // Tenta recuperar renderizando novamente o segmento afetado
            // Sem recarregar a página inteira (soft reload)
            () => reset()
          }
          className='btn'
        >
          Tentar novamente
        </button>
        <Link
          href='/'
          className='btn w-max bg-transparent border border-gold-primary text-gold-primary hover:text-container-bg hover:border-gold-secondary'
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
