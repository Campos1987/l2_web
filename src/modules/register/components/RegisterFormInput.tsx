/**
 * 🎨 Register Module - RegisterFormInput Component
 *
 * Componente de Input especializado para o fluxo de REGISTRO.
 * Diferente do login simples, este valida regras complexas de criação (complexidade de senha, disponibilidade de login).
 *
 * Features:
 * - ✨ Feedback visual imediato (Lista de requisitos)
 * - 🔍 Validação "onBlur" para verificar disponibilidade no banco (ex: Login já existe?)
 * - 👁️ Show/Hide password
 * - ♿ Acessibilidade
 */

import {
  inputRegisterProps,
  requirementProp,
  ValidCell,
} from '@/types/validate';
import { validInput } from '@/lib/validation/Validate';
import { Check, Eye, EyeOff } from 'lucide-react';
import { forwardRef, useEffect, useState } from 'react';
import { MAP_TEXT } from '@/lib/validation/validation';
import { validInputBd } from '@/lib/validation/validInputBd';
import Link from 'next/link';

// ----------------------------------------------------------------------
// 🧩 Validation Feedback Logic
// ----------------------------------------------------------------------
// Mostra o popover com checklist de requisitos atendidos vs pendentes.

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

// ----------------------------------------------------------------------
// 🚀 Main Component: RegisterFormInput
// ----------------------------------------------------------------------

export const RegisterFormInput = forwardRef<
  HTMLInputElement,
  inputRegisterProps
>(
  (
    { validation, value, name, onChange, onValidationChange, ...props },
    ref,
  ) => {
    // --- Local State ---
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // --- Computed ---
    const safeValue = value ? String(value) : '';
    const safeName = name ? String(name) : '';
    const isPasswordType = props.type === 'password';

    // Hook de validação pura do front (Regras estáticas)
    const requirement = validInput({
      inputValue: safeValue,
      inputName: safeName,
      validation: validation,
    });

    // Estado da validação remota (Banco de Dados)
    const [hasValueBd, setHasValueBd] = useState(false);

    // --- Validation Handler ---
    // Verifica disponibilidade do login/email no servidor
    const handleBlurValidation = async () => {
      // Otimização: Não valida no backend se já estiver inválido localmente ou vazio
      if (!safeValue || hasErrors) {
        setHasValueBd(false);
        return;
      }

      const existe = await validInputBd({
        cell: safeName as ValidCell,
        value: safeValue,
      });

      if (existe) {
        setHasValueBd(true);
        // Invalida o form se o dado já existir (duplicado)
        onValidationChange?.(false);
      } else {
        setHasValueBd(false);
      }
    };

    // --- Helpers ---
    const capitalizedName =
      safeName.charAt(0).toUpperCase() + safeName.slice(1);
    const errorKey = `validBd${capitalizedName}` as keyof typeof MAP_TEXT;

    // Flags de Estado
    const isAllValid = Object.values(requirement).every(item => item.isValid);
    const hasErrors = Object.values(requirement).some(res => !res.isValid);
    const showRequirements = isFocused && safeValue.length > 0;

    // Estado final de validade
    const totalValid = isAllValid && !hasValueBd;

    // --- Effects ---
    // Comunica estado de validação ao formulário pai

    useEffect(() => {
      onValidationChange?.(totalValid);
    }, [totalValid, onValidationChange]);

    useEffect(() => {
      onValidationChange?.(isAllValid);
    }, [isAllValid, onValidationChange]);

    return (
      <div className='relative w-full'>
        <input
          {...props}
          type={isPasswordType && showPassword ? 'text' : props.type}
          ref={ref}
          name={safeName}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={async () => {
            setIsFocused(false);
            await handleBlurValidation(); // Trigger validação remota ao sair do campo
          }}
          className={`${props.className} transition-colors ${
            safeValue && (hasErrors || hasValueBd)
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' // Visual de Erro
              : ''
          }`}
        />

        {/* Toggle Password */}
        {isPasswordType && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200 focus:outline-none'
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}

        {/* Mensagem de erro do Backend (Duplicidade) */}
        {hasValueBd && !isFocused && (
          <div className='absolute z-10 top-full -mt-1 rounded-b-xl px-3 py-1 text-sm left-0 w-full bg-bg-error'>
            {errorKey && MAP_TEXT[errorKey]}
            {/* Atalho para recuperação de conta se email já existe */}
            {errorKey === 'validBdEmail' && (
              <Link
                href='/forgotPassword'
                className='text-blue-600 ml-1 underline'
              >
                recuperar senha.
              </Link>
            )}
          </div>
        )}

        {/* Popover de Requisitos */}
        {showRequirements && (
          <div className='absolute top-full mt-2 left-0 w-full'>
            <Requirement requere={requirement} />
          </div>
        )}
      </div>
    );
  },
);

RegisterFormInput.displayName = 'RegisterFormInput';
