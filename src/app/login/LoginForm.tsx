'use client';
import LoginFormInput from '@/modules/auth/components/LoginFormInput';
// import { LoginUser } from '@/modules/auth/actions';
import { useState, useTransition } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    password: '',
    captchaToken: '',
  });

  const [formValid, setformValid] = useState({
    user: false,
    password: false,
    captcha: false,
  });

  const handleValidation = (name: string, isValid: boolean) => {
    setformValid(prev => ({ ...prev, [name]: isValid }));
  };

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

      // Chama a Server Action (modules/atth/actions.ts)
      // const result = await LoginUser(formData);
      // const result = await LoginUser(formData);
      // console.log(result);

      // if (result.success) {
      //   alert(result.message); // Temporário: trocar por UI de sucesso mais rica
      //   // router.push('/login');
      // } else {
      //   // Exibe erros retornados pelo servidor (que podem ter escapado da validação client-side)
      //   alert(result.message || 'Erro ao criar conta');
      //   console.error(result.errors);
      // }
    });
  };

  return (
    <form className='flex flex-col gap-5 mt-8'>
      <div>
        <LoginFormInput
          type='text'
          name='user'
          value={formData.user}
          placeholder='Login'
          maxLength={12}
          className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              user: e.target.value,
            }))
          }
          onValidationChange={isValid => handleValidation('user', isValid)}
        />
      </div>
      <div>
        <LoginFormInput
          type='password'
          name='password'
          value={formData.password}
          placeholder='Senha'
          maxLength={12}
          className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          onChange={e =>
            setFormData(prev => ({
              ...prev,
              password: e.target.value,
            }))
          }
          onValidationChange={isValid => handleValidation('password', isValid)}
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

export default LoginForm;
