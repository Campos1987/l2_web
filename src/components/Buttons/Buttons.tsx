import styles from './style.module.css';

import { ButtonProps } from '@/types/navegation';

const Buttons = ({ className, ...props }: ButtonProps) => {
  if (className === 'btnHero') {
    return (
      <>
        <button className={`${styles.btnSparkle} font-cinzel font-semibold`}>
          Play Now
          <div className={styles.stars}></div>
        </button>
      </>
    );
  }
  return <button className={styles[className]}>{props.children}</button>;
};

export default Buttons;
