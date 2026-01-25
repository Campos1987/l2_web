'use server';

import { z } from 'zod';
import { MAP_VALID } from '@/lib/validation';

// Schema que espelha as validações do front (Validate.tsx)
// Idealmente, extrairíamos as regex para um arquivo compartilhado 'constants.ts' para garantir DRY.
const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Nome é obrigatório')
      .max(15, 'Nome muinto longo')
      .regex(MAP_VALID.isAlpha, 'Apenas letras são permitidas'),
    lastname: z
      .string()
      .min(1, 'Sobrenome é obrigatório')
      .max(15, 'Sobrenome muinto longo')
      .regex(MAP_VALID.isAlpha, 'Apenas letras são permitidas'),
    email: z.string().email('E-mail inválido'),
    user: z
      .string()
      .min(5, 'Mínimo 5 caracteres')
      .max(50, 'Email muinto longo')
      .regex(MAP_VALID.isAlphanumeric, 'Apenas letras e números'),
    password: z
      .string()
      .min(8, 'Mínimo 8 caracteres')
      .max(12, 'Senha muito longa')
      .regex(MAP_VALID.AlphaUpperPattern, 'Deve conter letra maiúscula')
      .regex(MAP_VALID.SpecialPattern, 'Deve conter caractere especial')
      .regex(MAP_VALID.NumberPattern, 'Deve conter número'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });

export type RegisterState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function registerUser(
  formData: z.infer<typeof registerSchema>,
): Promise<RegisterState> {
  // 1. Validar no servidor (Nunca confie no cliente)
  const validatedFields = registerSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Erro na validação dos dados.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Simular operação de banco de dados
  // Aqui você chamaria seu ORM/DB (Prisma, Drizzle, etc)
  //, validatedFields.data
  console.log('Dados salvos no servidor:');

  // Simular delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Conta criada com sucesso!',
  };
}
