'use server';
import { dbLogin } from '@/infra/dbLogin';
import { validInputBdProps } from '@/types/validate';
import { accounts } from '../../../drizzle/login/schema';
import { eq } from 'drizzle-orm';

export const validInputBdLogin = async ({
  value,
}: validInputBdProps): Promise<boolean> => {
  try {
    if (value.length > 5) {
      const validCell = await dbLogin
        .select({ login: accounts.login })
        .from(accounts)
        .where(eq(accounts.login, value));
      return validCell.length === 1;
    }
    return false;
  } catch (e) {
    console.log('Erro' + e);
    return false;
  }
};

export const validInputBdEmail = async ({
  value,
}: validInputBdProps): Promise<boolean> => {
  try {
    if (value.length > 5) {
      const validCell = await dbLogin
        .select({ email: accounts.email })
        .from(accounts)
        .where(eq(accounts.email, value));

      return validCell.length === 1;
    }
    return false;
  } catch (e) {
    console.log('Erro' + e);
    return false;
  }
};
