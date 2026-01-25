'use client';
import Logo from '../Logo/Logo';
import ToggleMobile from './ToggleMobile/ToggleMobile';
import TopMenu from './TopMenu';

const Header = () => {
  return (
    <header className='bg-primary h-16 w-full flex items-cente'>
      <div className='grid grid-cols-6 w-full items-center'>
        <div className='col-span-1 flex justify-start p-2 xl:hidden'>
          <ToggleMobile />
        </div>

        <div className='col-span-4 xl:col-span-1 flex justify-center xl:justify-start xl:px-6'>
          <Logo />
        </div>

        <div className='hidden xl:flex col-span-1 xl:col-span-5 p-2 font-bold'>
          <TopMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
