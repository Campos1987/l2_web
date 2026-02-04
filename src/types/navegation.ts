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
