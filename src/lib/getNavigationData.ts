/**
 * 🧭 Navigation Data Utility
 *
 * Recupera e tipa os dados de navegação do `navegation.json`.
 *
 * IMPORTANTE: Atualmente filtra itens que possuem 'mobile' no array de tipos.
 * Isso pode afetar o que é exibido no Desktop se não estiver configurado corretamente.
 */

import Structure from '@/json/navegation.json' assert { type: 'json' };
import { DeviceType, MenuItem, NavigationStructure } from '@/types/navegation';

const typedStructure: NavigationStructure = Structure;

const getNavigation = (
  menuSection: keyof NavigationStructure,
  device: DeviceType,
): MenuItem[] => {
  const data = typedStructure[menuSection];
  // Filtra itens que incluem 'mobile'.
  // TODO: Revisar se lógica de exclusão Desktop-only deve ser separada.
  return data.filter(menu => menu.type.includes(device));
};

export default getNavigation;
