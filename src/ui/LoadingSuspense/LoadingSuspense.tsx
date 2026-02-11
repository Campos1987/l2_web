/**
 * ⏳ Loading Suspense Wrapper
 *
 * Wrapper reutilizável para React Suspense.
 * Suporta múltiplos tipos de fallback (loader simples vs skeleton de cards).
 */

import { LoadingSuspenseProps } from '@/types/layout';
import { Suspense } from 'react';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import SpinLoader from '../SpinLoader/SpinLoader';

const LoadingSuspense = ({ children, type }: LoadingSuspenseProps) => {
  let fallback = <SpinLoader />;

  // Se o tipo for 'card', exibe 3 skeletons para simular uma lista
  if (type === 'card') {
    fallback = (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LoadingSuspense;
