/**
 * ⚡ Register Module - Server Actions
 *
 * Camada de entrada para operações de escrita (Mutations) do módulo de registro.
 * Atua como um Controller em arquiteturas MVC, orquestrando validação e chamada de serviços.
 *
 * Flow:
 * 1. Recebe FormData validação (Zod)
 * 2. Verifica Captcha (Google)
 * 3. Chama Service de criação (Prisma/DB)
 * 4. Retorna estado da operação para a UI
 */

'use server';

import 'server-only';
import { z } from 'zod';
import 'dotenv/config';
import { registerSchema } from './schemas';
import { userRequest } from './services';
import { RegisterState } from '@/types/validate';

// ----------------------------------------------------------------------
// 🚀 Action: Register User
// ----------------------------------------------------------------------
// Endpoint RPC-like chamado diretamente pelo client component (prop 'action' do form).

export async function loginUser(
  formData: z.infer<typeof registerSchema>,
): Promise<RegisterState> {
  // 1️⃣ Validação de Schema (Server-side)
  // Redundância de segurança para garantir que dados manipulados no client não passem.
  const validatedFields = registerSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Erro na validação dos dados.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2️⃣ Validação de Captcha (Server-side)
  // Verifica token junto à API do Google para prevenir bots.
  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${validatedFields.data.captchaToken}`,
    { method: 'POST' },
  );

  const captchaData = await captchaResponse.json();

  // TODO: Em desenvolvimento local, pode ser interessante mockar isso se não tiver chaves configuradas.
  // if (!captchaData.success) {
  //   return {
  //     success: false,
  //     message: 'Falha na validação do captcha.',
  //   };
  // }

  // 3️⃣ Persistência (Service Layer)
  try {
    const result = await userRequest(validatedFields.data);
    if (result) {
      return {
        success: true,
        message: 'Login efetuado com sucesso.',
      };
    } else {
      return {
        success: false,
        message: 'Erro ao entrar em sua conta. Tente novamente mais tarde.',
      };
    }
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    // TODO: Tratar erros específicos (ex: violação de constraint unique) para mensagens mais amigáveis.
    return {
      success: false,
      message: 'Erro ao criar conta. Tente novamente mais tarde.',
    };
  }

  // ✅ Sucesso
  return {
    success: true,
    message: 'Conta criada com sucesso!',
  };
}
