/**
 * 🔘 Button UI Component
 *
 * Componente base de botão.
 * Suporta variantes via CSS Modules e variante específica 'btnHero'.
 */

import styles from './Button.module.css';
import { ButtonProps } from '@/types/navegation';

const Button = ({ className, ...props }: ButtonProps) => {
  // Variante Especial: Hero Call-to-Action
  // TODO: Refatorar para usar 'variant' prop em vez de className string checking
  if (className === 'btnHero') {
    return (
      <>
        <button
          className={`${styles.btnHero} font-cinzel text-gold-primary hover:text-gray-200 font-bold text-3xl py-1`}
        >
          Play Now
        </button>
      </>
    );
  }

  // Default Button (styled via class composition from modules)
  return (
    <button className={styles[className || 'default']}>{props.children}</button>
  );
};

export default Button;
