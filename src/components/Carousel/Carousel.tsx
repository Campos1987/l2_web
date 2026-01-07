'use client';
import { CarouselProps } from '@/types/layout';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import Image from 'next/image';

const Carousel = ({ data }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = Object.entries(data || {});
  const itemsCount = slides.length;

  const handleNext = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      const newIndex = currentIndex === itemsCount - 1 ? 0 : currentIndex + 1;
      carouselRef.current.scrollTo({
        left: width * newIndex,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      const newIndex = currentIndex === 0 ? itemsCount - 1 : currentIndex - 1;
      carouselRef.current.scrollTo({
        left: width * newIndex,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  };

  if (itemsCount === 0) return null;

  return (
    <div className='w-full relative'>
      {/* área rolável */}
      <div
        ref={carouselRef}
        id='carousel'
        className='w-full h-full overflow-hidden scroll-smooth'
      >
        <ul className='flex w-full p-0 m-0'>
          {' '}
          {/* 1. Remove padding da lista */}
          {slides.map(([key, item]) => (
            <li
              key={key}
              className='min-w-full relative flex flex-col justify-start items-center m-0 p-0 leading-none'
            >
              <Image
                src={`/images/carousel/${item.image}.jpg`}
                alt={item.label}
                width={1920}
                height={600}
                sizes='100vw'
                className='w-full h-auto block object-contain -z-10'
                unoptimized={true} // <--- Desativa redenizaçao tempoararia
              />
              {/* Seus textos absolutos continuam aqui... */}
              <h2
                className='absolute top-1/3 text-5xl font-extrabold uppercase tracking-wider text-wizard-text drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]'
              >
                {item.label}
              </h2>
              <p
                className='absolute top-1/2 mt-2 text-xl font-medium text-gray-100
    drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
    max-w-[80%]'
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* controles alinhados */}
      <div className='bg-black rounded-3xl border border-gold-primary absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10'>
        <button
          onClick={handlePrev}
          className='text-gold-primary px-2 py-1 rounded'
        >
          <CircleArrowLeft size={20} />
        </button>

        {/* esferas */}
        <div className='flex gap-2'>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                currentIndex === i ? 'bg-gold-primary' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className='text-gold-primary px-2 py-1 rounded'
        >
          <CircleArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
