import styles from './Button.module.css';

import { ButtonProps } from '@/types/navegation';

const Button = ({ className, ...props }: ButtonProps) => {
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
  return (
    <button className={styles[className || 'default']}>{props.children}</button>
  );
};

export default Button;
