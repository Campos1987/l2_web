/**
 * 📰 News Index Page
 *
 * Página de listagem de notícias.
 * Similar a eventos, utiliza Suspense para data fetching assíncrono.
 */

import LoadingSuspense from '@/ui/LoadingSuspense/LoadingSuspense';
import { Calendar } from 'lucide-react';
import NewsList from './newsList';

const NewsServer = () => {
  return (
    <section className='m-auto h-full py-8 px-32'>
      <h1 className='flex items-center gap-3'>
        <Calendar size={35} /> News
      </h1>
      <div className={`m-auto grid grid-cols-1 gap-4 py-8`}>
        <LoadingSuspense>
          <NewsList />
        </LoadingSuspense>
      </div>
    </section>
  );
};

export default NewsServer;
