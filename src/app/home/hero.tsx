import Buttons from '@/components/Buttons/Buttons';
import styles from './styles.module.css'

const Hero = () =>{
    return (
    <section className={styles.hero}>
      <div className={styles.heroChar}></div>
      <div className='px-12 absolute inset-x-0 bottom-18 z-10'>
        <Buttons className='btnHero' />
      </div>
    </section>
  );
}

export default Hero