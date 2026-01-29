import {
  ValdidInputProp,
  ValidationResult,
  validationProps,
} from '@/types/validate';

import { MAP_VALID } from '@/lib/validation/validation';

export const validInput = ({ inputValue, validation }: ValdidInputProp) => {
  return (Object.keys(validation) as (keyof validationProps)[]).reduce(
    (acc, key) => {
      if (inputValue.length <= 0) {
        acc[key] = { isValid: false };
        return acc;
      }

      if (key in MAP_VALID) {
        const rule = MAP_VALID[key as keyof typeof MAP_VALID];

        // Verifica se é um Schema do Zod
        if (typeof rule === 'object' && 'safeParse' in rule) {
          const result = rule.safeParse(inputValue);
          acc[key] = { isValid: result.success };
        }
        // Verifica se é Regex
        else if (rule instanceof RegExp) {
          if (
            key === 'isEmail' ||
            key === 'isAlphanumeric' ||
            key === 'isAlphaNumericNoAccent' ||
            key === 'isAlpha'
          ) {
            acc[key] = { isValid: rule.test(inputValue) };
          } else {
            // 1. match retorna um array com os acertos ou null.
            // 2. O '|| []' garante que não quebre se for null.
            const matches = inputValue.match(rule) || [];

            // Pega a quantidade mínima exigida na validação (ou assume 1 se não tiver)
            const val = validation[key];
            const minRequired = typeof val === 'number' ? val : 1;

            acc[key] = {
              isValid: matches.length >= minRequired,
              validLength: minRequired,
            };
          }
        }
      } else {
        if (key === 'LengthValidPattern') {
          const minLength = validation.LengthValidPattern || 0;
          acc[key] = {
            isValid: inputValue.length >= minLength,
            validLength: minLength,
          };
        } else if (key === 'isConfirmPassword') {
          acc[key] = {
            isValid: validation.isConfirmPassword === inputValue,
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
