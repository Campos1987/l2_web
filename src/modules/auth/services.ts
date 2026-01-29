import { createHash } from 'crypto';
import { prisma } from '@/infra/db';
import { z } from 'zod';
import { registerSchema } from './schemas';

export const sha1 = async (password: string): Promise<string> => {
  return createHash('sha1')
    .update(password, 'utf8')
    .digest('hex')
    .toUpperCase();
};

export type RegisterData = z.infer<typeof registerSchema>;

export const createUser = async (data: RegisterData) => {
  const shaPassWord = await sha1(data.password);

  return await prisma.accounts.create({
    data: {
      name: data.name + ' ' + data.lastname,
      email: data.email,
      login: data.login,
      password: shaPassWord,
      accessLevel: -4, // TODO: Use Enum or Constant
    },
  });
};
