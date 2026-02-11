/**
 * 🌀 Spin Loader
 *
 * Loader animado com o logotipo do servidor (efeito de "mana loading").
 * Centralizado e com opacidade reduzida.
 */

import Image from 'next/image';
import style from './style.module.css';

const SpinLoader = () => {
  return (
    <div className='inline-flex justify-center items-center my-8 w-full h-87 opacity-35'>
      <div className={`${style['logo-loading-mana']} w-20 h-auto`}>
        <Image
          src={'/images/logo_mini.png'}
          alt='Loading...'
          width={537}
          height={535}
        />
      </div>
    </div>
  );
};

export default SpinLoader;
