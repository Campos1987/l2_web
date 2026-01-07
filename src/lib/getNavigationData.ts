import Structure from '@/json/navegation.json' assert { type: 'json' };
import { MenuItem, NavigationStructure } from '@/types/navegation';

const typedStructure = Structure as NavigationStructure;

const getNavigation = (menuSection: keyof NavigationStructure): MenuItem[] => {
  const data = typedStructure[menuSection];
  return data.filter(menu => menu.type.includes('mobile'));
};

export default getNavigation;
