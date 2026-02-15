/**
 * 🛡️ Register Module - Validation Schemas
 *
 * Define as regras estritas de validação para o cadastro de contas.
 * Garante integridade dos dados antes de atingir o banco de dados.
 * Sincronizado com as regras de validação visual do frontend.
 */

import { z } from 'zod';

// ----------------------------------------------------------------------
// 📋 Register Schema Definition
// ----------------------------------------------------------------------

export const registerSchema = z.object({
  // --- Account Credential Rules ---
  login: z.string(),

  password: z.string(),

  // --- Security ---
  // captchaToken: z.string().min(1, 'Captcha obrigatório'),
});
