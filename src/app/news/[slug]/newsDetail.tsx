/**
 * 📝 News Detail Content
 *
 * Componente que renderiza o conteúdo completo da notícia.
 * Usa `ReactMarkdown` e plugins GFM para formatação rica.
 */

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { findPublicPostNews } from '@/modules/query-service/web/queryServiceWeb';
import { matterContent } from '@/lib/utils/matter';

const NewsDetail = async ({ slug }: { slug: string }) => {
  const result = await findPublicPostNews(slug);

  if (!result) return null;

  return (
    <>
      <article className='prose prose-invert lg:prose-xl mx-auto'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {matterContent(result.content || '')}
        </ReactMarkdown>
      </article>
    </>
  );
};

export default NewsDetail;
