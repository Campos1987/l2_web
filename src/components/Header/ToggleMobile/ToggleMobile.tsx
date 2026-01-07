import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import getNavigation from '@/lib/getNavigationData';
import Link from "next/link";

const ToggleMobile = () => {
const [isOpen, setOpen] = useState(false);
const topBar = getNavigation('topBar');

  return (
    <>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <Menu size={25} />
      </button>
      {isOpen && (
        <div className=" left-0 top-15 absolute z-50 grid grid-cols-12 w-full h-[calc(100vh-60px)]">
          <div className='col-span-10 h-full bg-black opacity-100 px-8'>
            <ul className='text-foreground capitalize text-wizard-text'>
                {topBar.map((value, index) => {
                    let btn = '';
                    if (value.label == 'login' || value.label == 'register') {
                        btn = `btn btn-${value.label}`;
                    }
                    return (
                        <li key={index} className={`py-2 ${btn}`}>
                            {value.label}
                        </li>
                    );
                })}
                <li className='py-2'>
                <Link href={'/'} className='flex justify-center gap-2'>
                  <Globe size={20} />
                  <span>Portugues Brasil</span>
                </Link>
              </li>
            </ul>
          </div>
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
