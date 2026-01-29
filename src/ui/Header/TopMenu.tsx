import getNavigation from '@/lib/getNavigationData';
import Link from 'next/link';

const topBar = getNavigation('topBar');
const TopMenu = () => {
  return (
    <ul className='flex gap-8 text-foreground capitalize text-wizard-text w-full justify-end pr-12'>
      {topBar.map((value, index) => {
        return (
          <li key={index} className='hover:text-gold-primary'>
            <Link href={value.url}>{value.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopMenu;
