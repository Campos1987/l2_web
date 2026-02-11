/**
 * 💀 Card Skeleton Component
 *
 * Placeholder de carregamento para cards de eventos/notícias.
 * Simula visualmente o layout do card enquanto os dados são carregados.
 * Usa efeitos de blur para suavizar a transição.
 */

import Image from 'next/image';

export default function CardSkeleton() {
  return (
    <article className='items-center lg:items-start bg-event-container'>
      <div className='w-full h-auto overflow-hidden ml-2 hidden lg:block'>
        <Image
          src={`/images/posts/tvt.png`}
          width={594}
          height={334}
          alt=''
          className='w-full h-auto bg-gray-700 blur-xl opacity-50'
        />
      </div>
      <div className='pl-8 py-4 lg:px-4 col-span-8'>
        <h3 className='w-full blur-xs text-gold-primary'>Team vs Team</h3>
        <p className='w-full blur-xs'>
          Aprenda as estratégias de elite, posicionamento e builds para dominar
          os eventos de TvT no nosso servidor de Lineage II.
        </p>
      </div>
      <div className='text-right pr-8 lg:px-4 lg:pb-4 col-span-4 w-full blur-xs'>
        Every 2H
      </div>
    </article>
  );
}
