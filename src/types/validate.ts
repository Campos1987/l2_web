import { InputHTMLAttributes } from 'react';

export interface validationProps {
  isEmail?: boolean;
  isAlphanumeric?: boolean;
  isAlphaNumericNoAccent?: boolean;
  isAlpha?: boolean;
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
  validation: validationProps;
}

export interface requirementProp {
  requere: Record<string, ValidationResult>;
}

export interface ValidationResult {
  isValid: boolean;
  validLength?: number;
}
