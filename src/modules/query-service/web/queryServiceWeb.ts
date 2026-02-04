'use server';
import 'server-only';
import { prismaWeb } from '@/infra/db';
import { queryServiceWebProps } from '@/types/querys';

// Definimos como uma função de busca do Prisma deve se parecer
type PrismaFindMany = (args: {
  take?: number;
  orderBy?: Record<string, 'asc' | 'desc'>;
  select?: Record<string, boolean>;
}) => Promise<unknown[]>;

const SIMULATE_WAIT_IN_MS = 5000;

const simulatewait = async () => {
  if (SIMULATE_WAIT_IN_MS <= 0) return;

  await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
};

export const queryServiceWeb = async ({
  entity,
  limit,
  orderBy,
  direction,
}: queryServiceWebProps) => {
  await simulatewait();
  //Criamos um mapa de consulta
  // Isso associa a string ao modelo real do Prisma
  const modelMap: Record<string, { findMany: PrismaFindMany }> = {
    gk_about: prismaWeb.gk_about,
    gk_event: prismaWeb.gk_event,
    gk_news: prismaWeb.gk_news,
  };

  const selectedModel = modelMap[entity];

  // Verificação de segurança (Type Guard)
  if (!selectedModel) {
    throw new Error(`Entidade ${entity} não suportada.`);
  }

  // Cast seguro para uma função que aceita os argumentos do Prisma
  const data = await selectedModel.findMany({
    take: limit,
    orderBy: {
      [orderBy]: direction,
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
