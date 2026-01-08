import config from '@/json/configServer.json';
import Link from 'next/link';
import { EmailInput, LoginInput, PasswordInput } from './Inputs';

const RegisterPage = () => {
  return (
    <div className=' min-h-screen max-w-lg m-auto py-12 px-6'>
      <form>
        <div className='max-w-5xl mx-auto space-y-6'>
          <h1>Crie sua Conta </h1>
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
          {/* Nome de Usuário */}
          <h2>Informações Usuário</h2>
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-1'>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Nome'
                required
                className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
              />
            </div>
            <div className='col-span-1'>
              <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Sobrenome'
                required
                className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
              />
            </div>
          </div>
          <div>
            <EmailInput className='peer w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500' />
          </div>
          <h2>Informações Conta</h2>
          <div>
            <LoginInput className='w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500' />
          </div>
          <div>
            <PasswordInput className='peer w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500' />
          </div>
          <div className='my-2'>
            <input type='checkbox' id='gkUpdates' name='gkUpdates' />
            <label className='pl-4'>
              Receba e-mails com comunicados e ofertas do {config.serverName}.
            </label>
          </div>
          <div>
            <input type='checkbox' id='gkRules' name='gkRules' />
            <label className='pl-4'>
              Li e aceito os{' '}
              <Link href={'/rules'} className='font-semibold text-violet-500'>
                Termos de Uso{' '}
              </Link>
              .
            </label>
          </div>
          <div>
            <button className='btn' type='submit'>
              Continuar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
