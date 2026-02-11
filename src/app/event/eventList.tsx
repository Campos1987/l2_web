/**
 * 🎫 Event List Component
 *
 * Componente Server Side responsável por buscar e renderizar a lista de eventos ativos.
 *
 * Funcionalidades:
 * - Busca dados via serviço de query (`findAllPublicEvents`).
 * - Renderiza cards de eventos com imagem, título e resumo.
 * - Utiliza `matterDescription` para extrair resumo de conteúdo Markdown.
 */

import { findAllPublicEvents } from '@/modules/query-service/web/queryServiceWeb';
import { matterDescription } from '@/lib/utils/matter';
import Image from 'next/image';
import Link from 'next/link';

// interface EventItem removida para usar inferência de retorno do Prisma/Service

const EventList = async () => {
  // Data Fetching no servidor (diretamente na renderização)
  const result = await findAllPublicEvents({
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
          {/* Imagem do Evento (Hidden em Mobile) */}
          <div className='hidden w-full h-auto overflow-hidden col-span-2 md:block'>
            <Image
              src={`/images/posts/${item.type || 'default'}.png`}
              width={594}
              height={334}
              alt={item.title || 'Event Image'}
              className='w-full h-auto group-hover:scale-110 transition-transform duration-300'
            />
          </div>

          {/* Conteúdo do Card */}
          <div className='p-4 col-span-9 md:col-span-8'>
            <h3>
              <Link
                href={`event/${item.slug}`}
                className='after:absolute after:inset-0 text-gold-primary font-cinzel font-bold hover:text-gold-secondary transition-colors'
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

export default EventList;
