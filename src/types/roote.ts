/**
 * 🛣️ Route Params Types
 *
 * Tipos de parâmetros de rota (slugs, ids).
 * Compatível com Next.js 15+ (params como Promise).
 */

export interface EventPageProps {
  params: Promise<{ slug: string }>;
}
