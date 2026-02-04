import LoadingSuspense from '@/ui/LoadingSuspense/LoadingSuspense';
import { Calendar } from 'lucide-react';
import EventList from './eventList';

const EventServer = () => {
  return (
    <section className='max-w-5xl m-auto h-full p-8'>
      <h1 className='flex items-center gap-3'>
        <Calendar size={35} /> Event
      </h1>
      <div className={`m-auto grid grid-cols-1 gap-4 py-8`}>
        <LoadingSuspense>
          <EventList />
        </LoadingSuspense>
      </div>
    </section>
  );
};

export default EventServer;
