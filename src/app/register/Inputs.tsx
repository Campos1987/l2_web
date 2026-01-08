'use client';

import { RegisterInputProps } from '@/types/layout';
import { useState } from 'react';
import { Check, Eye, EyeOff, TriangleAlert, X } from 'lucide-react'; // Opcional: Adicionando ícones para melhor visualização

const baseListClass = 'flex items-center gap-2 transition-colors duration-200';
const metListClass = 'text-neutral-900 font-medium';
const unmetListClass = 'text-neutral-500';

export const PasswordInput = ({ className }: RegisterInputProps) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [requirements, setRequirements] = useState({
    length: false,
    number: false,
    uppercase: false,
    lowercase: false,
    special: false,
  });

  const validatePassword = (value: string) => {
    const reqs = {
      length: value.length >= 8,
      number: /\d/.test(value),
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      special: /[^A-Za-z0-9]/.test(value),
    };
    setRequirements(reqs);

    // força simples: soma dos requisitos atendidos
    const score = Object.values(reqs).filter(Boolean).length;
    setStrength((score / 5) * 100);
  };

  const isFullStrength = strength === 100;
  const showError = !isFullStrength && password.length > 0;
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='relative w-full'>
      <input
        type={isVisible ? 'text' : 'password'}
        name='password'
        placeholder='Digite sua senha'
        className={`peer ${className} ${
          showError ? 'text-red-500 border-red-500' : ''
        } `}
        onChange={e => {
          setPassword(e.target.value);
          validatePassword(e.target.value);
        }}
      />
      <button
        type='button' // Importante para não enviar o formulário ao clicar
        onClick={toggleVisibility}
        className='absolute z-10 right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200 transition-colors'
      >
        {isVisible ? (
          <EyeOff size={20} /> // Se está visível, mostra ícone de "riscado"
        ) : (
          <Eye size={20} /> // Se está oculto, mostra ícone de "olho"
        )}
      </button>
      {showError && (
        <span className=' absolute z-10 px-2 -bottom-4 w-full content-center bg-red-900 text-neutral-200 text-[11px] rounded-b-lg flex items-center'>
          Senha fraca
          <TriangleAlert className={`w-6 h-6 text-neutral-200 pl-2 pb-1`} />
        </span>
      )}
      <div className='hidden peer-focus:block mt-2 bg-neutral-200 rounded-2xl p-4 text-neutral-900 absolute z-10'>
        <ul>
          <li
            className={`${baseListClass} ${
              isFullStrength ? 'text-green-700 font-bold' : metListClass
            }`}
          >
            {isFullStrength ? (
              <Check size={16} className='text-green-600' />
            ) : (
              <X size={16} />
            )}
            Nível de segurança: {strength}%
          </li>
          <li
            className={`${baseListClass} ${
              requirements.length ? metListClass : unmetListClass
            }`}
          >
            {requirements.length ? (
              <Check size={16} className='text-green-600' />
            ) : (
              <X size={16} />
            )}
            Pelo menos 8 caracteres
          </li>
          <li
            className={`${baseListClass} ${
              requirements.number ? metListClass : unmetListClass
            }`}
          >
            {requirements.number ? (
              <Check size={16} className='text-green-600' />
            ) : (
              <X size={16} />
            )}
            Pelo menos 1 número
          </li>
          <li
            className={`${baseListClass} ${
              requirements.uppercase ? metListClass : unmetListClass
            }`}
          >
            {requirements.uppercase ? (
              <Check size={16} className='text-green-600' />
            ) : (
              <X size={16} />
            )}
            Pelo menos 1 letra maiúscula
          </li>
          <li
            className={`${baseListClass} ${
              requirements.lowercase ? metListClass : unmetListClass
            }`}
          >
            {requirements.lowercase ? (
              <Check size={16} className='text-green-600' />
            ) : (
              <X size={16} />
            )}
            Pelo menos 1 letra minúscula
          </li>
          <li
            className={`${baseListClass} ${
              requirements.special ? metListClass : unmetListClass
            }`}
          >
            {requirements.special ? (
              <Check size={16} className='text-green-600' />
            ) : (
              <X size={16} />
            )}
            Pelo menos 1 caractere especial
          </li>
        </ul>
      </div>
    </div>
  );
};

export const EmailInput = ({ className }: RegisterInputProps) => {
  const [hasError, setHasError] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const valorDigitado = event.target.value;

    if (valorDigitado.length < 5) {
      setMensagem('E-mail inválido.');
      setHasError(true);
    } else {
      setHasError(false);
    }
  };
  return (
    <div className='relative'>
      <input
        type='text'
        id='email'
        name='email'
        placeholder='nome@exemplo.com'
        required
        className={`${className} ${
          hasError ? 'text-red-500 border-red-500 ' : ''
        }`}
        onBlur={handleInputBlur}
      />
      {hasError && (
        <span className=' absolute z-10 px-2 -bottom-4 w-full content-center bg-red-900 text-neutral-200 text-[11px] rounded-b-lg flex items-center'>
          {mensagem}
          <TriangleAlert className={`w-6 h-6 text-neutral-200 pl-2 pb-1`} />
        </span>
      )}
    </div>
  );
};

export const LoginInput = ({ className }: RegisterInputProps) => {
  const [login, setLogin] = useState('');
  const [requirements, setRequirements] = useState({
    minLength: false,
    maxLength: false,
  });
  const validateLogin = (value: string) => {
    const reqs = {
      minLength: value.length >= 5,
      maxLength: value.length <= 12,
    };
    setRequirements(reqs);
  };
  const showError = !requirements.minLength && login.length > 0;
  return (
    <div className='relative'>
      <input
        type='text'
        id='login'
        name='login'
        value={login}
        placeholder='Login'
        required
        autoComplete='off'
        className={`peer ${className} ${
          showError ? 'text-red-500 border-red-500' : ''
        }`}
        onChange={e => {
          setLogin(e.target.value);
          validateLogin(e.target.value);
        }}
      />
      {showError && (
        <span className=' absolute z-10 px-2 -bottom-4 w-full content-center bg-red-900 text-neutral-200 text-[11px] rounded-b-lg flex items-center'>
          Login Fraco
          <TriangleAlert className={`w-6 h-6 text-neutral-200 pl-2 pb-1`} />
        </span>
      )}
      <div className='hidden peer-focus:block mt-2 bg-neutral-200 rounded-2xl p-4 text-neutral-900 absolute z-10'>
        <ul>
          <li
            className={`${baseListClass} ${
              requirements.minLength ? 'text-green-700 font-bold' : metListClass
            }`}
          >
            {requirements.minLength ? (
              <Check size={16} className='text-green-600' />
            ) : (
              <X size={16} />
            )}
            Minimo 5 caracteres
          </li>
        </ul>
      </div>
    </div>
  );
};
