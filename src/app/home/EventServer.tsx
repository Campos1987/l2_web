/**
 * 📅 Home Event Section
 *
 * Container de Eventos da Home Page.
 * Utiliza Suspense para carregar o `EventList` dinamicamente.
 * Layout grid adaptativo (1 coluna mobile, 3 colunas desktop).
 */

import { Calendar } from 'lucide-react';
import LoadingSuspense from '@/ui/LoadingSuspense/LoadingSuspense';
import EventList from './EventList';

const EventServer = () => {
  return (
    <section className='h-full px-6 lg:px-12'>
      <h1 className='flex items-center gap-3 text-2xl font-bold'>
        <Calendar size={35} /> Event
      </h1>

      <div
        className={`m-auto grid grid-cols-1 gap-4 lg:w-full lg:gap-8 xl:gap-12 lg:grid-cols-3 py-8`}
      >
        <LoadingSuspense type='card'>
          <EventList />
        </LoadingSuspense>
      </div>
    </section>
  );
};

export default EventServer;
