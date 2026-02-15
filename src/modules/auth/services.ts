/**
 * 🛠️ Register Module - Services
 *
 * Camada de Serviço (Domain Logic).
 * Responsável pela implementação das regras de negócio puras e interação com o banco de dados.
 * Desacoplada da camada de apresentação (actions/components).
 */

'use server';
import { createHash } from 'crypto';
import { dbLogin } from '@/infra/dbLogin';
import { accounts } from '../../../drizzle/login/schema';
import { z } from 'zod';
import { registerSchema } from './schemas';
import { and, eq, or, sql } from 'drizzle-orm';

// ----------------------------------------------------------------------
// 🔐 Security Helpers
// ----------------------------------------------------------------------

/**
 * Hash SHA1 (Legacy Support)
 *
 * L2J Servers antigos usam SHA1 (e base64 encoding às vezes) para senhas.
 * TODO: Verificar se o server suporta algoritmos mais modernos (BCrypt/Argon2).
 * MANTER ASSIM SE O SERVER EXIGIR SHA1.
 */
export const sha1 = async (password: string): Promise<string> => {
  return createHash('sha1')
    .update(password, 'utf8')
    .digest('hex') // Geralmente L2 Java usa Base64, confirmar se Hex funciona no server target
    .toUpperCase();
};

// ----------------------------------------------------------------------
// 📦 Type Definitions
// ----------------------------------------------------------------------

export type RegisterData = z.infer<typeof registerSchema>;

// ----------------------------------------------------------------------
// 💾 Database Operations
// ----------------------------------------------------------------------

/**
 * Cria um novo usuário no banco de dados LoginServer.
 * Mapeia os dados do formulário para a estrutura da tabela 'accounts'.
 */
export const userRequest = async (data: RegisterData) => {
  const shaPassWord = await sha1(data.password);

  try {
    const isLoginValid = await dbLogin
      .select({ login: accounts.login })
      .from(accounts)
      .where(
        or(eq(accounts.login, data.login), eq(accounts.email, data.login)),
      );

    if (isLoginValid.length === 1) {
      const isPasswordValid = await dbLogin
        .select({ login: accounts.login })
        .from(accounts)
        .where(
          and(
            or(eq(accounts.login, data.login), eq(accounts.email, data.login)),
            eq(accounts.password, shaPassWord),
          ),
        );
      console.log(isPasswordValid.length === 1);
      if (isPasswordValid.length === 1) {
        return true;
      } else {
        await dbLogin
          .update(accounts)
          .set({
            loginRetryCount: sql`${accounts.loginRetryCount} + 1`,
          })
          .where(
            or(eq(accounts.login, data.login), eq(accounts.email, data.login)),
          );

        console.log('ei aqui');
        return false;
      }
      return false;
    }
    return false;
  } catch (e) {
    throw new Error('Usuario ou senha incorretos');
  }

  return false;
};
