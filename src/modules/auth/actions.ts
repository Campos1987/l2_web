'use server';
import 'server-only';
import { z } from 'zod';
import 'dotenv/config';
import { registerSchema } from './schemas';
import { createUser } from './services';

export type RegisterState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function registerUser(
  formData: z.infer<typeof registerSchema>,
): Promise<RegisterState> {
  // Validar no servidor
  const validatedFields = registerSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Erro na validação dos dados.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Validar reCAPTCHA
  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${validatedFields.data.captchaToken}`,
    { method: 'POST' },
  );
  const captchaData = await captchaResponse.json();
  if (!captchaData.success) {
    return { success: false, message: 'Falha na validação do captcha.' };
  }

  try {
    await createUser(validatedFields.data);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return {
      success: false,
      message: 'Erro ao criar conta. Tente novamente mais tarde.',
    };
  }

  return {
    success: true,
    message: 'Conta criada com sucesso!',
  };
}
