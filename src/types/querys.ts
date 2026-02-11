/**
 * 📡 Query Service Types
 *
 * Tipos para parâmetros de busca e serviços de dados.
 * Define chaves de entidades permitidas e critérios de ordenação.
 */

type queryServiceWebItems = 'gk_about' | 'gk_event' | 'gk_news';

export interface queryServiceWebProps {
  entity: queryServiceWebItems;
  limit: number;
  orderBy: string;
  direction: 'desc' | 'asc';
}

export interface queryFindPublicPost {
  slug: string;
}
