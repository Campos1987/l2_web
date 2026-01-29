import Button from '@/ui/Button';
import styles from './styles.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className='w-full h-full flex justify-center items-baseline'>
        <Image
          src='/images/bg/hero_char_2.png'
          alt='Hero Character'
          width={1280}
          height={737}
          className='h-full w-auto object-contain'
          priority // Importante!
        />
      </div>
      <div className='px-12 absolute bottom-18 z-10 w-full max-w-xl flex justify-center'>
        <Button className='btnHero' />
      </div>
    </section>
  );
};

export default Hero;
