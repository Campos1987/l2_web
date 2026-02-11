/**
 * 📰 News List Component
 *
 * Componente Server Side para listagem de notícias.
 * Similar ao EventList, mas consome `findAllPublicNews`.
 *
 * TODO: Considerar unificar com EventList usando props (pattern de componente genérico de lista).
 */

import { findAllPublicNews } from '@/modules/query-service/web/queryServiceWeb';
import { matterDescription } from '@/lib/utils/matter';
import Image from 'next/image';
import Link from 'next/link';

// interface EventItem removida para usar inferência

const NewsList = async () => {
  const result = await findAllPublicNews({
    limit: 3,
    direction: 'asc',
  });

  return (
    <>
      {result.map(item => (
        <article
          key={item.id}
          className='grid grid-cols-10 relative bg-bg-container border border-border-container rounded-lg p-4 hover:border-gold-secondary hover:shadow-[0_0_5px_rgba(212,175,55,0.3)] transition-all'
        >
          <div className='hidden w-full h-auto overflow-hidden col-span-1 md:block'>
            <Image
              src={`/images/posts/icons/${item.type || 'default'}.png`}
              width={594}
              height={334}
              alt={item.title || 'News Image'}
              className='w-full h-auto group-hover:scale-110 transition-transform'
            />
          </div>
          <div className='p-4 col-span-9 md:col-span-9'>
            <h3 className='w-full text-center'>
              <Link
                href={`news/${item.slug}`}
                className='after:absolute after:inset-0 text-gold-primary font-cinzel font-bold hover:text-gold-secondary'
              >
                {item.title}
              </Link>
            </h3>
            <p className='text-foreground/80 mt-2'>
              {matterDescription(item.content || '')}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewsList;
