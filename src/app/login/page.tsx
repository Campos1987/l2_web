/**
 * 🔐 Login Page logic
 *
 * Página de entrada para autenticação de usuários.
 * Composta por cabeçalho explicativo e o formulário de login isolado.
 */
import config from '@/json/configServer.json';
import Link from 'next/link';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className='min-h-screen max-w-lg mx-auto py-12 px-6'>
      <h1 className='text-center'>Login</h1>
      <p className='text-center'>
        Não tem uma Conta {config.serverName}?{' '}
        <Link href={'/login'} className='font-semibold text-violet-500'>
          {' '}
          Cadastrar.
        </Link>
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
