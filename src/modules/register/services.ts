/**
 * 🛠️ Register Module - Services
 *
 * Camada de Serviço (Domain Logic).
 * Responsável pela implementação das regras de negócio puras e interação com o banco de dados.
 * Desacoplada da camada de apresentação (actions/components).
 */

import { createHash } from 'crypto';
import { prismaLogin } from '@/infra/db';
import { z } from 'zod';
import { registerSchema } from './schemas';

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
export const createUser = async (data: RegisterData) => {
  const shaPassWord = await sha1(data.password);

  // Utiliza o cliente Prisma configurado em infra/db.ts
  return await prismaLogin.accounts.create({
    data: {
      // Concatenação simples de Nome + Sobrenome para campo único (se necessário pelo schema legacy)
      name: data.name + ' ' + data.lastname,
      email: data.email,
      login: data.login,
      password: shaPassWord,
      accessLevel: -4, // TODO: Use Enum or Constant (ex: AUTH_LEVEL.USER = 0)
    },
  });
};
