import { LoadingSuspenseProps } from '@/types/layout';
import { Suspense } from 'react';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import SpinLoader from '../SpinLoader/SpinLoader';

const LoadingSuspense = ({ children, type }: LoadingSuspenseProps) => {
  let fallback = <SpinLoader />;

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
