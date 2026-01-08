'use client'; // se estiver usando App Router

import { useState } from 'react';

interface PasswordInputProps {
  className?: string;
}

export default function PasswordInput3({ className }: PasswordInputProps) {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
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

  return (
    <div>
      <input
        type='password'
        value={password}
        onChange={e => {
          setPassword(e.target.value);
          validatePassword(e.target.value);
        }}
        placeholder='Digite sua senha'
        className={className}
      />

      <div className='hidden peer-focus:block mt-2 bg-neutral-200 rounded-2xl p-4 text-neutral-900 absolute'>
        <ul>
          <li
            className={
              strength == 100
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-500'
            }
          >
            Nível de segurança: {strength}%
          </li>
          <li
            className={
              requirements.length
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-500'
            }
          >
            Pelo menos 8 caracteres
          </li>
          <li
            className={
              requirements.number
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-500'
            }
          >
            Pelo menos 1 número
          </li>
          <li
            className={
              requirements.uppercase
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-500'
            }
          >
            Pelo menos 1 letra maiúscula
          </li>
          <li
            className={
              requirements.lowercase
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-500'
            }
          >
            Pelo menos 1 letra minúscula
          </li>
          <li
            className={
              requirements.special
                ? 'text-neutral-900 font-medium'
                : 'text-neutral-500'
            }
          >
            Pelo menos 1 caractere especial
          </li>
        </ul>
      </div>
    </div>
  );
}
