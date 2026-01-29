import { Calendar } from 'lucide-react';
import eventData from '@/json/eventServer.json';
import style from './styles.module.css';

const EventServer = () => {
  return (
    <section className='h-full px-6'>
      <h1 className='flex items-center gap-3'>
        <Calendar size={35} /> Event
      </h1>
      <div className='grid grid-cols-1 gap-4 max-w-100 m-auto'></div>
    </section>
  );
};

export default EventServer;

/**
{Object.entries(events).map(([index, events]) => {
          return (
            <article
              key={index}
              className={`${style.newsCard} ${style[events.type]} flex `}
            >
              <div className={`${style.newsContent} `}>
                <h3 className={`${style.newsTitle}`}>{events.label}</h3>
                <p className={`${style.newsExcerpt}`}>{events.description}</p>
              </div>
              <div className={`${style.newsDate}`}>{events.time}</div>
            </article>
          );
        })}
        */
