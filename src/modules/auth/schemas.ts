import { z } from 'zod';
import { MAP_VALID } from '@/lib/validation/validation';

// Schema que espelha as validações do front (Validate.tsx)
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Nome é obrigatório')
      .max(15, 'Nome muito longo')
      .regex(MAP_VALID.isAlpha, 'Apenas letras são permitidas'),
    lastname: z
      .string()
      .min(1, 'Sobrenome é obrigatório')
      .max(15, 'Sobrenome muito longo')
      .regex(MAP_VALID.isAlpha, 'Apenas letras são permitidas'),
    email: z.string().email('E-mail inválido'),
    login: z
      .string()
      .min(5, 'Mínimo 5 caracteres')
      .max(50, 'Login muito longo')
      .regex(MAP_VALID.isAlphanumeric, 'Apenas letras e números'),
    password: z
      .string()
      .min(8, 'Mínimo 8 caracteres')
      .max(12, 'Senha muito longa')
      .regex(MAP_VALID.AlphaUpperPattern, 'Deve conter letra maiúscula')
      .regex(MAP_VALID.SpecialPattern, 'Deve conter caractere especial')
      .regex(MAP_VALID.NumberPattern, 'Deve conter número'),
    confirmPassword: z.string(),
    captchaToken: z.string().min(1, 'Captcha obrigatório'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });
