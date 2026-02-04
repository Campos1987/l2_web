import { queryServiceWeb } from '@/modules/query-service/web/queryServiceWeb';
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

const NewsList = async () => {
  // Cast explícito para corrigir o erro 'unknown'
  const result = (await queryServiceWeb({
    entity: 'gk_news',
    limit: 3,
    orderBy: 'created_at',
    direction: 'asc',
  })) as EventItem[];

  return (
    <>
      {result.map(item => (
        <article
          key={item.id}
          className='relative flex bg-bg-container border border-border-container rounded-lg p-4 hover:border-gold-secondary hover:shadow-[0_0_5px_rgba(212,175,55,0.3)]'
        >
          <div>
            <h3 className='text-gold-primary pb-1'>
              <Link
                href={`event/${item.slug}`}
                className='after:absolute after:inset-0'
              >
                {item.title}
              </Link>
            </h3>
            <p>{item.content}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewsList;
