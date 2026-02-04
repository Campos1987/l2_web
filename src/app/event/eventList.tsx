import { queryServiceWeb } from '@/modules/query-service/web/queryServiceWeb';
import creatDescription from '@/lib/utils/description';
import Image from 'next/image';
import Link from 'next/link';

interface EventItem {
  id: string;
  title: string;
  content: string;
  slug: string;
  type: string;
  created_at: Date | string;
  schedule: string;
}

const EventList = async () => {
  // Cast explícito para corrigir o erro 'unknown'
  const result = (await queryServiceWeb({
    entity: 'gk_event',
    limit: 3,
    orderBy: 'created_at',
    direction: 'asc',
  })) as EventItem[];

  return (
    <>
      {result.map(item => (
        <article
          key={item.id}
          className={`relative w-full group items-center grid grid-cols-12 bg-event-container rounded-2xl`}
        >
          <div className='hidden w-full h-auto overflow-hidden col-span-3 md:block'>
            <Image
              src={`/images/posts/${item.type}.png`}
              width={594}
              height={334}
              alt=''
              className='w-full h-auto group-hover:scale-110'
            />
          </div>
          <div className={`p-4 col-span-9 md:col-span-7`}>
            <h3>
              <Link
                href={`event/${item.slug}`}
                className='after:absolute after:inset-0 text-gold-primary font-cinzel font-bold'
              >
                {item.title}
              </Link>
            </h3>
            <p>{creatDescription(item.content)}</p>
          </div>
          <div className='text-right pr-8 col-span-3 md:col-span-2'>
            {item.schedule}
          </div>
        </article>
      ))}
    </>
  );
};

export default EventList;
