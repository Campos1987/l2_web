/**
 * 🛡️ Register Module - Validation Schemas
 *
 * Define as regras estritas de validação para o cadastro de contas.
 * Garante integridade dos dados antes de atingir o banco de dados.
 * Sincronizado com as regras de validação visual do frontend.
 */

import { z } from 'zod';
import { MAP_VALID } from '@/lib/validation/validation';

// ----------------------------------------------------------------------
// 📋 Register Schema Definition
// ----------------------------------------------------------------------

export const registerSchema = z
  .object({
    // --- Personal Info ---
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

    // --- Account Credential Rules ---
    login: z
      .string()
      .min(5, 'Mínimo 5 caracteres')
      .max(50, 'Login muito longo')
      .regex(MAP_VALID.isAlphanumeric, 'Apenas letras e números'), // Evita SQL Injection e chars inválidos

    password: z
      .string()
      .min(8, 'Mínimo 8 caracteres')
      .max(12, 'Senha muito longa') // Limite comum em sistemas Legacy L2
      .regex(MAP_VALID.AlphaUpperPattern, 'Deve conter letra maiúscula')
      .regex(MAP_VALID.SpecialPattern, 'Deve conter caractere especial')
      .regex(MAP_VALID.NumberPattern, 'Deve conter número'),

    confirmPassword: z.string(),

    // --- Security ---
    captchaToken: z.string().min(1, 'Captcha obrigatório'),
  })
  // Validação Cross-Field: Garante que senha e confirmação são iguais
  .refine(data => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'], // O erro será atrelado a este campo no form
  });
