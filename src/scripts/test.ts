import 'dotenv/config';
import { prisma } from '../infra/db';

async function main() {
  console.log('DATABASE_URL =', process.env.DATABASE_URL);

  const word = await prisma.accounts.create({
    data: { login: 'teste_prisma_7' },
  });

  console.log(word);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
