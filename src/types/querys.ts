type queryServiceWebItems = 'gk_about' | 'gk_event' | 'gk_news';

export interface queryServiceWebProps {
  entity: queryServiceWebItems;
  limit: number;
  orderBy: string;
  direction: 'desc' | 'asc';
}
