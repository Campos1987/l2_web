/**
 * 📡 Query Service - Web Module
 *
 * Camada de Leitura de Dados (Data Fetching) do site.
 * Responsável por buscar conteúdos públicos como Notícias e Eventos no banco de dados 'Web'.
 *
 * Arquitetura: Server-Only (Executa apenas no servidor, seguro para acesso direto ao DB).
 */

'use server';

import 'server-only';
import { dbWeb } from '@/infra/dbWeb';
import { gkEvent, gkNews } from '../../../../drizzle/web/schema';
import { and, asc, desc, eq } from 'drizzle-orm';

// ----------------------------------------------------------------------
// ⏳ Development Helpers
// ----------------------------------------------------------------------

// Delay artificial para testar Loading Skeletons e Suspense Boundaries.
// TODO: Remover ou reduzir para 0 em ambiente de Produção.
const SIMULATE_WAIT_IN_MS = 1000;

const simulatewait = async () => {
  if (SIMULATE_WAIT_IN_MS <= 0) return;
  await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
};

// ----------------------------------------------------------------------
// 📰 Public Content Queries
// ----------------------------------------------------------------------

/**
 * Busca lista de eventos públicos.
 * Utilizado na Home Page e na listagem de eventos.
 *
 * @param limit Quantidade máxima de registros (Default: 3 para cards na home)
 * @param direction Ordenação por data de criação (Default: 'asc')
 */
export const findAllPublicEvents = async ({
  limit = 3,
  direction = 'asc',
}: {
  limit?: number;
  direction?: 'asc' | 'desc';
} = {}) => {
  await simulatewait(); // Simula latência de rede

  const orderFn = direction === 'asc' ? asc : desc;

  const data = await dbWeb
    .select({
      id: gkEvent.id,
      title: gkEvent.title,
      content: gkEvent.content,
      slug: gkEvent.slug,
      type: gkEvent.type,
      created_at: gkEvent.createdAt,
      schedule: gkEvent.schedule,
    })
    .from(gkEvent)
    .orderBy(orderFn(gkEvent.createdAt))
    .limit(limit);
  return data;
};

/**
 * Busca lista de notícias públicas.
 * Similar a eventos, mas consulta a tabela 'gk_news'.
 */
export const findAllPublicNews = async ({
  limit = 3,
  direction = 'asc',
}: {
  limit?: number;
  direction?: 'asc' | 'desc';
} = {}) => {
  await simulatewait(); // Simula latência de rede

  const orderFn = direction === 'asc' ? asc : desc;

  const data = await dbWeb
    .select({
      id: gkNews.id,
      title: gkNews.title,
      content: gkNews.content,
      slug: gkNews.slug,
      type: gkNews.type,
      created_at: gkNews.createdAt,
      schedule: gkNews.schedule,
    })
    .from(gkNews)
    .orderBy(orderFn(gkNews.createdAt))
    .limit(limit);
  return data;
};

// ----------------------------------------------------------------------
// 📄 Single Post Queries (Slug-based)
// ----------------------------------------------------------------------

/**
 * Busca um Evento específico pelo Slug (URL amigável).
 * Usado na página de detalhes do evento (src/app/event/[slug]).
 */
export const findPublicPostEvent = async (slug: string) => {
  await simulatewait();

  const data = await dbWeb
    .select()
    .from(gkEvent)
    .where(and(eq(gkEvent.slug, slug), eq(gkEvent.isActive, 1)))
    .orderBy(asc(gkEvent.createdAt));
  return data;
};

/**
 * Busca uma Notícia específica pelo Slug.
 * Usado na página de detalhes da notícia (src/app/news/[slug]).
 */
export const findPublicPostNews = async (slug: string) => {
  await simulatewait();

  const data = await dbWeb
    .select()
    .from(gkNews)
    .where(and(eq(gkNews.slug, slug), eq(gkNews.isActive, 1)))
    .orderBy(asc(gkNews.createdAt));
  return data;
};
