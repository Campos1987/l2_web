import Button from '@/ui/Button/Button';
import Logo from '@/ui/Logo/Logo';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='block m-auto h-screen 2xl:h-auto  2xl:px-12'>
      <div className='w-full h-full flex justify-center items-baseline 2xl:justify-start 2xl:relative'>
        <Image
          src='/images/bg/hero_char_2.png'
          alt='Hero Character'
          width={1767}
          height={1587}
          className='h-full w-auto object-cover 2xl:absolute 2xl:h-auto 2xl:max-w-5xl 2xl:-left-25'
          priority
        />
      </div>
      <div className='px-12 absolute bottom-18 z-10 w-full m-auto flex justify-center 2xl:hidden'>
        <Button className='btnHero' />
      </div>
      <div className='hidden ring-0 h-185 2xl:flex justify-end content-center text-center  '>
        <div className='pr-12 pb-30 w-150 content-center'>
          <div className='pb-8'>
            <Logo className='text-7xl' />
          </div>
          <span className='text-2xl font-cinzel text-gold-primary font-semibold'>
            A NOVA ERA DO LINEAGE II CHEGOU!
          </span>
          <p className='text-[18px] pb-8'>
            Não se trata apenas de subir de nível.<br></br> Trata-se de forjar
            alianças que resistam ao tempo!
          </p>
          <Button className='btnHero' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
