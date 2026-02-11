/**
 * 🧱 Infraestrutura de Banco de Dados (Prisma ORM)
 *
 * Este arquivo é responsável por instanciar e exportar os clientes do Prisma
 * para os diferentes contextos de banco de dados da aplicação (Web, Login, Game).
 *
 * Padrão utilizado: Singleton (para evitar múltiplas conexões em hot-reload)
 * Adapter: PrismaMariaDb (Driver nativo para melhor performance)
 */

import 'dotenv/config';
import { PrismaClient as PrismaClientWeb } from '../../prisma/generated/web';
import { PrismaClient as PrismaClientLogin } from '../../prisma/generated/login';
import { PrismaClient as PrismaClientGame } from '../../prisma/generated/game';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// ----------------------------------------------------------------------
// 🌍 Global Type Definition
// ----------------------------------------------------------------------
// Estende o objeto global par armazenar as instâncias do Prisma em desenvolvimento.
// Isso previne o erro "Too many connections" durante o Hot Module Replacement (HMR) do Next.js.
const globalForPrisma = globalThis as unknown as {
  prismaLogin?: PrismaClientLogin;
  prismaGame?: PrismaClientGame;
  prismaWeb?: PrismaClientWeb;
};

// ----------------------------------------------------------------------
// 🔐 Cliente Login
// ----------------------------------------------------------------------
// Conexão com o banco de dados de contas/autenticação (L2 Server Account DB).

// Debug da string de conexão (remover em produção se conter senhas)
console.log('process.env.DATABASE_LOGIN_URL');
console.log(process.env.DATABASE_LOGIN_URL);

// Adaptador Serverless/Edge-ready para MariaDB
const adapterLogin = new PrismaMariaDb(process.env.DATABASE_LOGIN_URL!);

export const prismaLogin =
  globalForPrisma.prismaLogin ??
  new PrismaClientLogin({
    adapter: adapterLogin,
  });

// ----------------------------------------------------------------------
// 🎮 Cliente Game
// ----------------------------------------------------------------------
// Conexão com o banco de dados do mundo do jogo (Characters, Items, etc).

const adapterGame = new PrismaMariaDb(process.env.DATABASE_GAME_URL!);

export const prismaGame =
  globalForPrisma.prismaGame ??
  new PrismaClientGame({
    adapter: adapterGame,
  });

// ----------------------------------------------------------------------
// 🌐 Cliente Web
// ----------------------------------------------------------------------
// Conexão com o banco de dados do site (Notícias, Logs, Vendas, etc).

const adapterWeb = new PrismaMariaDb(process.env.DATABASE_WEB_URL!);

export const prismaWeb =
  globalForPrisma.prismaWeb ??
  new PrismaClientWeb({
    adapter: adapterWeb,
  });

// ----------------------------------------------------------------------
// 🔄 Singleton Persistence (Dev Mode)
// ----------------------------------------------------------------------
// Mantém a mesma instância ativa entre recargas no ambiente de desenvolvimento.

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prismaLogin = prismaLogin;
  globalForPrisma.prismaWeb = prismaWeb;
  // Note: prismaGame não estava sendo persistido explicitamente abaixo,
  // mas o padrão sugere que deveria se quisesse evitar reconexões do game DB também.
  globalForPrisma.prismaGame = prismaGame;
}
