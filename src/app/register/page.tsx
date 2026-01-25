'use client';
import config from '@/json/configServer.json';
import Link from 'next/link';
import { InputValid } from './Inputs';
import { useState, useTransition } from 'react';
import { registerUser } from './actions';
// import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    user: '',
    password: '',
    confirmPassword: '',
  });

  const [formValid, setFormValid] = useState<Record<string, boolean>>({
    name: false,
    lastname: false,
    email: false,
    user: false,
    password: false,
    confirmPassword: false,
  });

  function handleValidation(name: string, isValid: boolean) {
    setFormValid(prev => {
      const newState = {
        ...prev,
        [name]: isValid,
      };
      return newState;
    });
  }

  const isFormComplete = Object.values(formValid).every(Boolean);

  /* New Imports moved to top */

  const [isPending, startTransition] = useTransition();
  // const router = useRouter();

  const handleRegister = () => {
    if (!isFormComplete) return;

    startTransition(async () => {
      const result = await registerUser(formData);

      if (result.success) {
        alert(result.message); // Temporário: trocar por Toast
        // router.push('/login');
      } else {
        alert(result.message || 'Erro ao criar conta');
        // Aqui você poderia setar erros específicos se necessário
        console.error(result.errors);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='min-h-screen max-w-lg mx-auto py-12 px-6'>
      <h1 className='text-center'>Crie sua Conta </h1>
      <p className=' text-center mb-2'>
        Crie sua conta e prepare-se para entrar no mundo épico de{' '}
        {config.serverName}.
      </p>
      <p className='text-center'>
        Já tem uma Conta {config.serverName}?{' '}
        <Link href={'/login'} className='font-semibold text-violet-500'>
          {' '}
          Inicie sessão.
        </Link>
      </p>
      <div>
        <form className='flex flex-col gap-5 mt-8'>
          <h2>Informações Usuário</h2>
          <div className='flex gap-5'>
            <div>
              <InputValid
                className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
                type='text'
                placeholder='Nome'
                name='name'
                required
                autoComplete='off'
                maxLength={50}
                validation={{
                  isAlpha: true,
                }}
                value={formData.name}
                onChange={handleChange}
                onValidationChange={isValid =>
                  handleValidation('name', isValid)
                }
              />
            </div>
            <div>
              <InputValid
                className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
                type='text'
                placeholder='Sobrenome'
                name='lastname'
                required
                autoComplete='off'
                maxLength={50}
                validation={{
                  isAlpha: true,
                }}
                value={formData.lastname}
                onChange={handleChange}
                onValidationChange={isValid =>
                  handleValidation('lastname', isValid)
                }
              />
            </div>
          </div>
          <div>
            <InputValid
              className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
              type='text'
              placeholder='nome@exemplo.com'
              name='email'
              required
              autoComplete='off'
              maxLength={50}
              validation={{
                isEmail: true,
              }}
              value={formData.email}
              onChange={handleChange}
              onValidationChange={isValid => handleValidation('email', isValid)}
            />
          </div>
          <h2>Informações Conta</h2>
          <div>
            <InputValid
              className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
              type='text'
              placeholder='Login'
              name='user'
              required
              autoComplete='off'
              maxLength={12}
              validation={{
                isAlphaNumericNoAccent: true,
                LengthValidPattern: 5,
              }}
              value={formData.user}
              onChange={handleChange}
              onValidationChange={isValid => handleValidation('user', isValid)}
            />
          </div>
          <div>
            <InputValid
              className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
              type='password'
              placeholder='Senha'
              name='password'
              required
              autoComplete='off'
              maxLength={12}
              validation={{
                LengthValidPattern: 8,
                AlphaUpperPattern: 1,
                SpecialPattern: 1,
                NumberPattern: 1,
              }}
              value={formData.password}
              onChange={handleChange}
              onValidationChange={isValid =>
                handleValidation('password', isValid)
              }
            />
          </div>
          <div>
            <InputValid
              className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
              type='password'
              placeholder='Confirme a senha'
              name='confirmPassword'
              required
              autoComplete='off'
              maxLength={12}
              validation={{
                isConfirmPassword: formData.password,
              }}
              value={formData.confirmPassword}
              onChange={handleChange}
              onValidationChange={isValid =>
                handleValidation('confirmPassword', isValid)
              }
            />
          </div>
          <div>
            <input
              className={`btn ${!isFormComplete || isPending ? 'disabled' : ''} bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition-colors`}
              type='button'
              value={isPending ? 'Cadastrando...' : 'Cadastrar'}
              disabled={!isFormComplete || isPending}
              onClick={handleRegister}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
