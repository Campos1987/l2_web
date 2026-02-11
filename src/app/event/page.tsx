/**
 * 📅 Event Index Page
 *
 * Página de listagem de eventos.
 * Implementa padrão de Streaming com Suspense.
 * O componente 'EventList' é carregado de forma assíncrona, enquanto o layout permanece responsivo.
 */

import LoadingSuspense from '@/ui/LoadingSuspense/LoadingSuspense';
import { Calendar } from 'lucide-react';
import EventList from './eventList';

const EventServer = () => {
  return (
    <section className='m-auto h-full py-8 px-32'>
      <h1 className='flex items-center gap-3'>
        <Calendar size={35} /> Event
      </h1>
      <div className={`m-auto grid grid-cols-1 gap-4 py-8`}>
        {/* Suspense Boundary explícito para feedback visual de carregamento */}
        <LoadingSuspense>
          <EventList />
        </LoadingSuspense>
      </div>
    </section>
  );
};

export default EventServer;
