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
import { prismaWeb } from '@/infra/db';

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

  const data = await prismaWeb.gk_event.findMany({
    take: limit,
    orderBy: {
      created_at: direction,
    },
    // Seleção explícita de campos (Performance: evita trazer colunas pesadas desnecessárias)
    select: {
      id: true,
      title: true,
      content: true,
      slug: true,
      type: true,
      created_at: true,
      schedule: true,
    },
  });
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
  await simulatewait();

  const data = await prismaWeb.gk_news.findMany({
    take: limit,
    orderBy: {
      created_at: direction,
    },
    select: {
      id: true,
      title: true,
      content: true,
      slug: true,
      type: true,
      created_at: true,
      schedule: true,
    },
  });
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

  const data = await prismaWeb.gk_event.findFirst({
    where: {
      slug: slug,
      is_active: true, // Garante que apenas posts ativos sejam acessíveis
    },
  });
  return data;
};

/**
 * Busca uma Notícia específica pelo Slug.
 * Usado na página de detalhes da notícia (src/app/news/[slug]).
 */
export const findPublicPostNews = async (slug: string) => {
  await simulatewait();

  const data = await prismaWeb.gk_news.findFirst({
    where: {
      slug: slug,
      is_active: true,
    },
  });
  return data;
};
