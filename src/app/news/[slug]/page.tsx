/**
 * 📰 News Detail Page
 *
 * Página dinâmica para exibição de uma notícia específica.
 */

import { EventPageProps } from '@/types/roote';
import NewsDetail from './newsDetail'; // Detail Component
import LoadingSuspense from '@/ui/LoadingSuspense/LoadingSuspense';

const eventSlug = async ({ params }: EventPageProps) => {
  const resolvedParams = await params;

  return (
    <section className='m-auto h-full py-8 px-32'>
      <div className={`m-auto grid grid-cols-1 gap-4 py-8`}>
        <LoadingSuspense>
          <NewsDetail slug={resolvedParams.slug} />
        </LoadingSuspense>
      </div>
    </section>
  );
};

export default eventSlug;
