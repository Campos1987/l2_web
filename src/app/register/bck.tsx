import React from 'react';

const RegisterPageBck = () => {
  return (
    <div className='bg-neutral-950 text-neutral-100 min-h-screen flex items-center justify-center px-6'>
      <form className='w-full max-w-md bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 space-y-6'>
        <h1 className='text-2xl font-bold text-center'>📝 Cadastro</h1>
        <p className='text-neutral-400 text-center'>
          Crie sua conta e prepare-se para entrar no mundo épico de Lineage II
          no servidor{' '}
          <span className='text-white font-semibold'>Scryde PvP 500x</span>.
        </p>

        {/* Nome de Usuário */}
        <div>
          <label
            htmlFor='username'
            className='block text-sm font-medium text-neutral-200'
          >
            Nome de Usuário
          </label>
          <input
            type='text'
            id='username'
            name='username'
            required
            className='mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-neutral-200'
          >
            E-mail
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          />
        </div>

        {/* Senha */}
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-neutral-200'
          >
            Senha
          </label>
          <input
            type='password'
            id='password'
            name='password'
            required
            className='mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          />
        </div>

        {/* Confirmar Senha */}
        <div>
          <label
            htmlFor='confirm-password'
            className='block text-sm font-medium text-neutral-200'
          >
            Confirmar Senha
          </label>
          <input
            type='password'
            id='confirm-password'
            name='confirm-password'
            required
            className='mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-violet-500 focus:ring-violet-500'
          />
        </div>

        {/* Botão */}
        <button
          type='submit'
          className='w-full rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400'
        >
          Cadastrar
        </button>

        {/* Observações */}
        <p className='text-xs text-neutral-400 text-center mt-4'>
          Após o cadastro, você receberá um e-mail de confirmação. Guarde suas
          credenciais em segurança.
        </p>
      </form>
    </div>
  );
};

export default RegisterPageBck;
