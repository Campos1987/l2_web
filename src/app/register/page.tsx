import config from '@/json/configServer.json';
import Link from 'next/link';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
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
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
