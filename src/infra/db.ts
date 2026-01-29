import 'dotenv/config';
import { PrismaClient as PrismaClientWeb } from '../../prisma/generated/web';
import { PrismaClient as PrismaClientLogin } from '../../prisma/generated/login';
import { PrismaClient as PrismaClientGame } from '../../prisma/generated/game';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// Tipagem para o Singleton
const globalForPrisma = globalThis as unknown as {
  prismaLogin?: PrismaClientLogin;
  prismaGame?: PrismaClientGame;
  prismaWeb?: PrismaClientWeb;
};

// --- CLIENTE LOGIN ---
console.log('process.env.DATABASE_LOGIN_URL');
console.log(process.env.DATABASE_LOGIN_URL);
const adapterLogin = new PrismaMariaDb(process.env.DATABASE_LOGIN_URL!);
export const prismaLogin =
  globalForPrisma.prismaLogin ??
  new PrismaClientLogin({
    adapter: adapterLogin,
  });

// --- CLIENTE Game ---
const adapterGame = new PrismaMariaDb(process.env.DATABASE_GAME_URL!);
export const prismaGame =
  globalForPrisma.prismaGame ??
  new PrismaClientGame({
    adapter: adapterGame,
  });

// --- CLIENTE WEB ---
const adapterWeb = new PrismaMariaDb(process.env.DATABASE_WEB_URL!);
export const prismaWeb =
  globalForPrisma.prismaWeb ??
  new PrismaClientWeb({
    adapter: adapterWeb,
  });

// Persistência para o modo de desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prismaLogin = prismaLogin;
  globalForPrisma.prismaWeb = prismaWeb;
}
