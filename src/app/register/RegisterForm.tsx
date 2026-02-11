/**
 * 📋 Register Form Component
 *
 * Componente principal do fluxo de registro.
 * Muito mais denso que o Login, pois lida com múltiplos campos e regras de validação cruzada.
 *
 * Stack:
 * - Client Component (Interatividade total)
 * - useTransition (Pending States para Server Actions)
 * - ReCAPTCHA Check
 * - Custom Validation Engine (RegisterFormInput integration)
 */

'use client';

import { registerUser } from '@/modules/register/actions';
import { RegisterFormInput } from '@/modules/register/components/RegisterFormInput';
import { useState, useTransition } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterForm = () => {
  // --- Form State ---
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    login: '',
    password: '',
    confirmPassword: '',
    captchaToken: '',
  });

  // --- Validation State ---
  // Rastreia a validade de cada campo individualmente.
  // O botão de cadastro só é liberado quando tudos forem true.
  const [formValid, setFormValid] = useState<Record<string, boolean>>({
    name: false,
    lastname: false,
    email: false,
    login: false,
    password: false,
    confirmPassword: false,
    captcha: false,
  });

  function handleValidation(name: string, isValid: boolean) {
    setFormValid(prev => ({
      ...prev,
      [name]: isValid,
    }));
  }

  // --- Captcha Handler ---
  const handleCaptcha = (token: string | null) => {
    if (token) {
      setFormData(prev => ({ ...prev, captchaToken: token }));
      handleValidation('captcha', true);
    } else {
      setFormData(prev => ({ ...prev, captchaToken: '' }));
      handleValidation('captcha', false);
    }
  };

  // Verifica completude do formulário
  const isFormComplete = Object.values(formValid).every(Boolean);

  // --- Server Action Execution ---
  const [isPending, startTransition] = useTransition();

  const handleRegister = () => {
    if (!isFormComplete) return;

    // Inicia transição para server action
    startTransition(async () => {
      console.log(formData);

      // Chama a Server Action (modules/register/actions.ts)
      const result = await registerUser(formData);
      console.log(result);

      if (result.success) {
        alert(result.message); // Temporário: trocar por UI de sucesso mais rica
        // router.push('/login');
      } else {
        // Exibe erros retornados pelo servidor (que podem ter escapado da validação client-side)
        alert(result.message || 'Erro ao criar conta');
        console.error(result.errors);
      }
    });
  };

  // Generic controlled input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className='flex flex-col gap-5 mt-8'>
      {/* Seção 1: Dados Pessoais */}
      <h2>Informações Usuário</h2>
      <div className='flex gap-5'>
        <div>
          <RegisterFormInput
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
            // Callback que recebe o status da validação do componente filho
            onValidationChange={isValid => handleValidation('name', isValid)}
          />
        </div>
        <div>
          <RegisterFormInput
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
        <RegisterFormInput
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

      {/* Seção 2: Credenciais do Jogo (Game Account) */}
      <h2>Informações Conta</h2>
      <div>
        <RegisterFormInput
          className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          type='text'
          placeholder='Login'
          name='login'
          required
          autoComplete='off'
          maxLength={12}
          validation={{
            isAlphaNumericNoAccent: true,
            LengthValidPattern: 5,
          }}
          value={formData.login}
          onChange={handleChange}
          onValidationChange={isValid => handleValidation('login', isValid)}
        />
      </div>
      <div>
        <RegisterFormInput
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
          onValidationChange={isValid => handleValidation('password', isValid)}
        />
      </div>
      <div>
        <RegisterFormInput
          className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          type='password'
          placeholder='Confirme a senha'
          name='confirmPassword'
          required
          autoComplete='off'
          maxLength={12}
          validation={{
            isConfirmPassword: formData.password, // Validação dinâmica comparada com o campo senha
          }}
          value={formData.confirmPassword}
          onChange={handleChange}
          onValidationChange={isValid =>
            handleValidation('confirmPassword', isValid)
          }
        />
      </div>

      {/* Segurança e Submit */}
      <div className='flex justify-center'>
        <ReCAPTCHA
          sitekey='6LfChFUsAAAAABOaT_whiEuTf3AqbJ3XsbWyO8Jh'
          onChange={handleCaptcha}
          onExpired={() => handleCaptcha(null)}
          theme='dark'
        />
      </div>
      <div className='flex justify-center'>
        <input
          className={`btn ${!isFormComplete || isPending ? 'disabled' : ''} bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition-colors`}
          type='button'
          value={isPending ? 'Cadastrando...' : 'Cadastrar'}
          disabled={!isFormComplete || isPending}
          onClick={handleRegister}
        />
      </div>
    </form>
  );
};

export default RegisterForm;
