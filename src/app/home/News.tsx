'use client';

import { Newspaper } from 'lucide-react';
import style from './styles.module.css';
import { useEffect, useState } from 'react';
import { queryServiceWeb } from '@/modules/queryService/web/homeService';

const News = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const result = await queryServiceWeb({
        entity: 'gk_news',
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
        <Newspaper size={35} /> News
      </h1>
      <div className='grid grid-cols-1 gap-4 max-w-100 m-auto'>
        {data.map(item => (
          <article
            key={item.id}
            className={`${style.newsCard} ${style[item.type]} flex`}
          >
            <div className={`${style.newContent}`}>
              <h3 className={`${style.newsTitle}`}>{item.title}</h3>
              <p className={`${style.newsExcerpt}`}>{item.description}</p>
            </div>
            <div className={style.newsDate}>{item.schedule}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
