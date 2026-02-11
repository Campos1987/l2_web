/**
 * ✅ Validation Types
 *
 * Tipagem complexa para o sistema de validação de formulários.
 * Define props de configuração, resultados de validação e interfaces de input.
 */

import { InputHTMLAttributes } from 'react';

export interface validationProps {
  validBd?: boolean;
  isEmail?: boolean;
  isAlphanumeric?: boolean;
  isAlphaNumericNoAccent?: boolean;
  isAlpha?: boolean;
  isConfirmPassword?: string;
  AlphaUpperPattern?: number;
  AlphaLowerPattern?: number;
  NumberPattern?: number;
  LengthValidPattern?: number;
  SpecialPattern?: number;
}

export interface inputRegisterProps extends InputHTMLAttributes<HTMLInputElement> {
  validation: validationProps;
  onValidationChange?: (isValid: boolean) => void;
}

export interface inputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  onValidationChange?: (isValid: boolean) => void;
}

export interface ValdidInputProp {
  inputValue: string;
  inputName: string;
  validation: validationProps;
}

export interface requirementProp {
  requere: Record<string, ValidationResult>;
}

export interface ValidationResult {
  isValid: boolean;
  validLength?: number;
}

export type ValidCell = 'login' | 'email';

export interface validInputBdProps {
  cell: ValidCell;
  value: string;
}

export type RegisterState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};
