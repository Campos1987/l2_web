/**
 * 📝 Home News List
 *
 * Lista simplificada de notícias recentes.
 * Foca no título e resumo curto, sem grandes imagens de capa como em Eventos.
 */

import { matterDescription } from '@/lib/utils/matter';
import { findAllPublicNews } from '@/modules/query-service/web/queryServiceWeb';
import Link from 'next/link';

// Tipo inferido automaticamente do service

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
          className='relative flex bg-bg-container border border-border-container rounded-lg p-4 hover:border-gold-secondary hover:shadow-[0_0_5px_rgba(212,175,55,0.3)] transition-all'
        >
          <div>
            <h3 className='text-gold-primary pb-1'>
              <Link
                href={`news/${item.slug}`}
                className='after:absolute after:inset-0'
              >
                {item.title}
              </Link>
            </h3>
            <p className='text-foreground/80 text-sm'>
              {matterDescription(item.content || '')}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};

export default NewsList;
