'use client';
import { TriangleAlert } from 'lucide-react';
import { useState } from 'react';

// se estiver usando App Router

interface EmailInputProps {
  className?: string;
}

export default function EmailInput2({ className }: EmailInputProps) {
  const [hasError, setHasError] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const valorDigitado = event.target.value;

    console.log('Função separada chamada!');
    console.log('Valor:', valorDigitado);

    // Você pode fazer lógicas complexas aqui, chamar APIs, atualizar estado, etc.
    if (valorDigitado.length < 5) {
      setMensagem('O texto é muito curto.');
      setHasError(true);
    } else {
      setMensagem('Texto OK!');
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
          hasError ? 'text-red-500 border-red-500' : ''
        }`}
        onBlur={handleInputBlur}
      />
      {hasError && (
        <p className='absolute mt-2 text-[11px] text-red-500'>{mensagem}</p>
      )}
      <span className='absolute z-10 right-2 mt-1 top-1/2 -translate-y-1/2'>
        <TriangleAlert
          className={`w-6 h-6 text-red-500 ${hasError ? 'block' : 'hidden'}`}
        />
      </span>
    </div>
  );
}
