import { z } from 'zod';

export const MAP_VALID = {
  isEmail: z.string().email(),
  isAlphanumeric: /^[a-zA-Z0-9\u00C0-\u00FF]+$/,
  isAlphaNumericNoAccent: /^[a-zA-Z0-9]+$/,
  isAlpha: /^[a-zA-Z\u00C0-\u00FF ]+$/,
  AlphaUpperPattern: /[A-Z\u00C0-\u00FF]/g,
  AlphaLowerPattern: /[a-z\u00C0-\u00FF]/g,
  NumberPattern: /[0-9]/g,
  SpecialPattern: /[^a-zA-Z0-9]/g,
};

export const MAP_TEXT = {
  isEmail: 'Digite endereço de e-mail válido',
  isAlphanumeric: 'Apenas letras e números',
  isAlphaNumericNoAccent: 'Apenas letras e números',
  isAlpha: 'Apenas letras',
  isConfirmPassword: 'Senhas não corresponde',
  AlphaUpperPattern: 'Pelo menos gkn letra maiúscula',
  AlphaLowerPattern: 'Pelo menos gkn letra minúscula',
  NumberPattern: 'Pelo menos gkn números',
  LengthValidPattern: 'Pelo menos gkn caracteres',
  SpecialPattern: 'Pelomenos gkn caracteres especiais',
  validBdEmail: 'Email ja cadastrado',
  validBdLogin: 'Úsuario ja cadastrado',
};
