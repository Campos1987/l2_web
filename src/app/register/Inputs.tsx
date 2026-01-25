import { inputProps, requirementProp } from '@/types/validate';
import { validInput } from './Validate';
import { Check, Eye, EyeOff } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';
import { MAP_TEXT } from '@/lib/validation';

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
    const [showPassword, setShowPassword] = useState(false);
    const safeValue = value ? String(value) : '';
    const isPasswordType = props.type === 'password';

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
          type={isPasswordType && showPassword ? 'text' : props.type}
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
        {isPasswordType && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200 focus:outline-none'
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
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
