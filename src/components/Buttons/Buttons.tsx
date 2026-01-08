import styles from './style.module.css';

import { ButtonProps } from '@/types/navegation';

const Buttons = ({ className, ...props }: ButtonProps) => {
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
  //  if (className === 'btnHero') {
  //   return (
  //     <>
  //       <button className={`${styles.btnSparkle} font-cinzel font-bold text-3xl py-1`}>
  //         Play Now
  //         <div className={styles.stars}></div>
  //       </button>
  //     </>
  //   );
  // }
  return <button className={styles[className]}>{props.children}</button>;
};

export default Buttons;
