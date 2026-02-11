/**
 * 📝 Event Detail Content
 *
 * Componente que renderiza o conteúdo completo do evento.
 * Transforma Markdown em HTML seguro e estilizado com Tailwind Typography (`prose`).
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { findPublicPostEvent } from '@/modules/query-service/web/queryServiceWeb';
import { matterContent, matterTitle } from '@/lib/utils/matter';

const EventDetail = async ({ slug }: { slug: string }) => {
  const result = await findPublicPostEvent(slug);

  if (!result) return null; // Retorna null em vez de undefined p/ React Cleanliness

  return (
    <article className='prose prose-invert lg:prose-xl mx-auto'>
      <h1>{matterTitle(result.content || '')}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {matterContent(result.content || '')}
      </ReactMarkdown>
    </article>
  );
};

export default EventDetail;
