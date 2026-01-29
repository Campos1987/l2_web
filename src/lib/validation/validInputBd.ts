'use server';
import { prisma } from '@/infra/db';
import { validInputBdProps } from '@/types/validate';

export const validInputBd = async ({
  cell,
  value,
}: validInputBdProps): Promise<boolean> => {
  try {
    if (value.length > 5) {
      const validCell = await prisma.accounts.findFirst({
        where: {
          [cell]: value,
        },
      });
      if (validCell) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    console.log('Erro' + e);
    return false;
  }
};
