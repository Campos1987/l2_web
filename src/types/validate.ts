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

export interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  validation: validationProps;
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
