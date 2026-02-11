/**
 * 🎩 Header UI Component
 *
 * Barra de navegação superior fixa.
 * Responsiva:
 * - Desktop: Logo centralizado + Menu Topo.
 * - Mobile: Hamburger toggle + Logo.
 */

'use client';
import Logo from '../Logo/Logo';
import ToggleMobile from './ToggleMobile/ToggleMobile';
import TopMenu from './TopMenu';

const Header = () => {
  return (
    <header className='fixed z-100 bg-primary h-16 w-full flex items-cente'>
      <div className='grid grid-cols-6 w-full items-center'>
        {/* Mobile Toggle (Visible only on lg:hidden) */}
        <div className='col-span-1 flex justify-start p-2 lg:hidden'>
          <ToggleMobile />
        </div>

        {/* Logo Area */}
        <div className='col-span-4 lg:col-span-1 flex justify-center lg:justify-start lg:px-6'>
          <Logo className='text-3xl lg:4xl' />
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className='hidden lg:flex col-span-1 lg:col-span-5 p-2 font-bold'>
          <TopMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
