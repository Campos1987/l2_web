import { inputProps, requirementProp } from '@/types/validate';
import { validInput } from './Validate';
import { Check } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';

const MAP_TEXT = {
  isEmail: 'Digite endereço de e-mail válido',
  isAlphanumeric: 'Apenas letras e números',
  isAlphaNumericNoAccent: 'Apenas letras e números',
  isAlpha: 'Apenas letras',
  AlphaUpperPattern: 'Pelo menos gkn letra maiúscula',
  AlphaLowerPattern: 'Pelo menos gkn letra minúscula',
  NumberPattern: 'Pelo menos gkn números',
  LengthValidPattern: 'Pelo menos gkn caracteres',
  SpecialPattern: 'Pelomenos gkn caracteres especiais',
};

const Requirement = ({ requere }: requirementProp) => {
  return (
    <div className='absolute bg-stone-200 border shadow-lg rounded-xl max-w-max min-w-52 text-xs h-auto px-3 py-2 z-20'>
      <ul className='space-y-1'>
        {Object.entries(requere).map(([key, value]) => {
          const { isValid, validLength } = value;
          const text = MAP_TEXT[key as keyof typeof MAP_TEXT];

          if (!text) return null;

          return (
            <li
              key={key}
              className={`flex items-center gap-2 ${
                isValid ? 'text-green-800 font-semibold' : 'text-neutral-500'
              }`}
            >
              {isValid && <Check size={14} className='text-green-800' />}
              <span>{text.replace('gkn', String(validLength || ''))}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const InputValid = forwardRef<HTMLInputElement, inputProps>(
  ({ validation, value, onChange, onValidationChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const safeValue = value ? String(value) : '';

    const requirement = validInput({
      inputValue: safeValue,
      validation: validation,
    });

    const isAllValid = Object.values(requirement).every(item => item.isValid);
    const hasErrors = Object.values(requirement).some(res => !res.isValid);
    const showRequirements = isFocused && safeValue.length > 0;

    useEffect(() => {
      onValidationChange?.(isAllValid);
    }, [isAllValid, onValidationChange]);

    return (
      <div className='relative w-full'>
        <input
          {...props}
          ref={ref}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${props.className} transition-colors ${
            safeValue && hasErrors
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : ''
          }`}
        />
        {showRequirements && (
          <div className='absolute top-full mt-2 left-0 w-full'>
            <Requirement requere={requirement} />
          </div>
        )}
      </div>
    );
  },
);

InputValid.displayName = 'InputValid';
