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
          className='relative group items-center lg:items-start grid grid-cols-12 bg-bg-container border border-border-container rounded-lg lg:grid-cols-1 hover:border-gold-secondary hover:shadow-[0_0_5px_rgba(212,175,55,0.3)]'
        >
          <div className='w-full h-auto overflow-hidden hidden lg:block'>
            <Image
              src={`/images/posts/${item.type}.png`}
              width={594}
              height={334}
              alt=''
              className='w-full h-auto group-hover:scale-110'
            />
          </div>
          <div className='pl-8 py-4 lg:px-8 col-span-8'>
            <h3 className='text-gold-primary'>
              <Link
                href={`event/${item.slug}`}
                className='after:absolute after:inset-0'
              >
                {item.title}
              </Link>
            </h3>
            <p>{creatDescription(item.content)}</p>
          </div>
          <div className='text-right pr-8 lg:px-4 lg:pb-4 col-span-4'>
            {item.schedule}
          </div>
        </article>
      ))}
    </>
  );
};

export default EventList;
