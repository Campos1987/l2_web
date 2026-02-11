/**
 * 📱 Toggle Mobile Menu
 *
 * Controlador do menu mobile (Hamburger).
 * Gerencia o estado de abertura (overlay) e renderiza a lista vertical de links.
 */

import { Globe, Menu } from 'lucide-react';
import { useState } from 'react';
import getNavigation from '@/lib/getNavigationData';
import Link from 'next/link';

const ToggleMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const topBar = getNavigation('topBar', 'mobile');

  return (
    <>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
        aria-label='Abrir Menu'
      >
        <Menu size={25} />
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className=' left-0 top-15 absolute z-50 grid grid-cols-12 w-full h-[calc(100vh-60px)]'>
          {/* Menu Area */}
          <div className='col-span-10 h-full bg-black opacity-100 px-8'>
            <ul className='text-foreground capitalize text-wizard-text'>
              {topBar.map((value, index) => {
                let btn = '';
                // Estilo especial para botões de ação (login/register)
                if (value.label == 'login' || value.label == 'register') {
                  btn = `btn btn-${value.label}`;
                }
                return (
                  <li key={index} className={`py-2 ${btn}`}>
                    <Link href={value.url} onClick={() => setOpen(false)}>
                      {value.label}
                    </Link>
                  </li>
                );
              })}
              <li className='py-2'>
                <Link
                  href={'/'}
                  className='flex justify-center gap-2'
                  onClick={() => setOpen(false)}
                >
                  <Globe size={20} />
                  <span>Portugues Brasil</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Backdrop Click-to-Close */}
          <div
            className='col-span-2 opacity-75  bg-black h-full'
            onClick={() => setOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default ToggleMobile;
