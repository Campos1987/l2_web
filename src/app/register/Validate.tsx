import {
  ValdidInputProp,
  ValidationResult,
  validationProps,
} from '@/types/validate';

const MAP_VALID = {
  isEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  isAlphanumeric: /^[a-zA-Z0-9\u00C0-\u00FF]+$/,
  isAlphaNumericNoAccent: /^[a-zA-Z0-9]+$/,
  isAlpha: /^[a-zA-Z\u00C0-\u00FF ]+$/,
  AlphaUpperPattern: /[A-Z\u00C0-\u00FF]/g,
  AlphaLowerPattern: /[a-z\u00C0-\u00FF]/g,
  NumberPattern: /[0-9]/g,
  SpecialPattern: /[^a-zA-Z0-9]/g,
};

export const validInput = ({ inputValue, validation }: ValdidInputProp) => {
  return (Object.keys(validation) as (keyof validationProps)[]).reduce(
    (acc, key) => {
      if (inputValue.length <= 0) {
        acc[key] = { isValid: false };
        return acc;
      }

      if (key in MAP_VALID) {
        const regEx = MAP_VALID[key as keyof typeof MAP_VALID];
        if (
          key === 'isEmail' ||
          key === 'isAlphanumeric' ||
          key === 'isAlphaNumericNoAccent' ||
          key === 'isAlpha'
        ) {
          acc[key] = { isValid: regEx.test(inputValue) };
        } else {
          // 1. match retorna um array com os acertos ou null.
          // 2. O '|| []' garante que não quebre se for null.
          const matches = inputValue.match(regEx) || [];

          // Pega a quantidade mínima exigida na validação (ou assume 1 se não tiver)
          const val = validation[key];
          const minRequired = typeof val === 'number' ? val : 1;

          acc[key] = {
            isValid: matches.length >= minRequired,
            validLength: minRequired,
          };
        }
      } else {
        if (key === 'LengthValidPattern') {
          const minLength = validation.LengthValidPattern || 0;
          acc[key] = {
            isValid: inputValue.length >= minLength,
            validLength: minLength,
          };
        } else {
          acc[key] = { isValid: false, validLength: 0 };
        }
      }
      return acc;
    },
    {} as Record<string, ValidationResult>,
  );
};
