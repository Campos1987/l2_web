/**
 * 🎫 Home Event List
 *
 * Renderiza os 3 eventos mais recentes para a Home Page.
 * Design card horizontal ou vertical dependendo do breakpoint.
 */

import { findAllPublicEvents } from '@/modules/query-service/web/queryServiceWeb';
import { matterDescription } from '@/lib/utils/matter';
import Image from 'next/image';
import Link from 'next/link';

const EventList = async () => {
  const result = await findAllPublicEvents({
    limit: 3,
    direction: 'asc',
  });

  return (
    <>
      {result.map(item => (
        <article
          key={item.id}
          className='relative group items-center lg:items-start grid grid-cols-12 bg-bg-container border border-border-container rounded-lg lg:grid-cols-1 hover:border-gold-secondary hover:shadow-[0_0_5px_rgba(212,175,55,0.3)] transition-all'
        >
          {/* Desktop Image */}
          <div className='w-full h-auto overflow-hidden hidden lg:block'>
            <Image
              src={`/images/posts/${item.type || 'default'}.png`}
              width={594}
              height={334}
              alt={item.title || 'Event Image'}
              className='w-full h-auto group-hover:scale-110 transition-transform duration-300'
            />
          </div>

          {/* Content */}
          <div className='pl-8 py-4 lg:px-8 col-span-8 lg:col-span-1'>
            <h3 className='text-gold-primary'>
              <Link
                href={`event/${item.slug}`}
                className='after:absolute after:inset-0'
              >
                {item.title}
              </Link>
            </h3>
            <p className='text-foreground/80 mt-1'>
              {matterDescription(item.content || '')}
            </p>
          </div>

          {/* Schedule/Date badge */}
          <div className='text-right pr-8 lg:px-4 lg:pb-4 col-span-4 lg:col-span-1 text-sm text-muted-foreground'>
            {item.schedule}
          </div>
        </article>
      ))}
    </>
  );
};

export default EventList;
