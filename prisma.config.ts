/**
 * $env:PRISMA_CONTEXT="login"; npx prisma generate
 * $env:PRISMA_CONTEXT="login"; npx prisma db pull
 */

import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';
import path from 'path';

// Força o carregamento do arquivo .env da raiz do projeto
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const context = process.env.PRISMA_CONTEXT || 'web';

const configs: Record<string, { schema: string; url: string | undefined }> = {
  web: {
    schema: './prisma/schema_web.prisma',
    url: process.env.DATABASE_WEB_URL,
  },
  login: {
    schema: './prisma/schema_login.prisma',
    url: process.env.DATABASE_LOGIN_URL,
  },
  game: {
    schema: './prisma/schema_game.prisma',
    url: process.env.DATABASE_GAME_URL,
  },
};

const selected = configs[context];

// Debug: Isso vai aparecer no seu terminal antes do erro
console.log(`Contexto: ${context}`);
console.log(`Schema: ${selected?.schema}`);
console.log(
  `URL encontrada: ${selected?.url ? 'Sim (protegida)' : 'Não (vazia)'}`,
);

if (!selected || !selected.url) {
  throw new Error(
    `Configuração para o contexto "${context}" não encontrada ou DATABASE_URL está vazia.`,
  );
}

export default defineConfig({
  schema: selected.schema,
  datasource: {
    url: selected.url,
  },
});
