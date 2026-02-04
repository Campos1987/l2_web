import { Newspaper } from 'lucide-react';
import LoadingSuspense from '@/ui/LoadingSuspense/LoadingSuspense';
import NewsList from './NewsList';

const News = () => {
  return (
    <section className='h-full px-6'>
      <h1 className='flex items-center gap-3'>
        <Newspaper size={35} /> News
      </h1>
      <div className='grid grid-cols-1 gap-3 max-w-150 m-auto'>
        <LoadingSuspense>
          <NewsList />
        </LoadingSuspense>
      </div>
    </section>
  );
};

export default News;
