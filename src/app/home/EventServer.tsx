'use client';
import { Calendar } from 'lucide-react';
import style from './styles.module.css';
import { queryServiceWeb } from '@/modules/queryService/web/homeService';
import { useEffect, useState } from 'react';
import creatDescription from '@/lib/utils/description';

const EventServer = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const result = await queryServiceWeb({
        entity: 'gk_event',
        limit: 5,
        orderBy: 'created_at',
        direction: 'asc',
      });
      setData(result); // Guarda o array resolvido no estado
    }
    loadData();
  }, []);

  return (
    <section className='h-full px-6'>
      <h1 className='flex items-center gap-3'>
        <Calendar size={35} /> Event
      </h1>
      <div className='grid grid-cols-1 gap-4 max-w-100 m-auto'>
        {data.map(item => (
          <article
            key={item.id}
            className={`${style.newsCard} ${style[item.type]} flex `}
          >
            <div className={`${style.newsContent} `}>
              <h3 className={`${style.newsTitle}`}>{item.title}</h3>
              <p className={`${style.newsExcerpt}`}>
                {creatDescription(item.content)}
              </p>
            </div>
            <div className={`${style.newsDate}`}>{item.schedule}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EventServer;
