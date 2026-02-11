/**
 * 🧭 Navigation Types
 *
 * Tipagem para o sistema de menus e navegação.
 * Define a estrutura do JSON de navegação (`MenuItem`, `NavigationStructure`).
 */

import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export interface MenuItem {
  label: string;
  url: string;
  type: string[];
  position: { mobile: number; desktop: number };
}

export type NavigationStructure = Record<string, MenuItem[]>;

export type DeviceType = 'mobile' | 'desktop';
