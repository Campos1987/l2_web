/**
 * 🎠 Carousel UI Component
 *
 * Componente genérico de Carrossel (Slider).
 *
 * Funcionalidades:
 * - Navegação Manual (Next/Prev).
 * - Scroll suave usando CSS Scroll Snap logic (wrapper 'scroll-smooth').
 * - Controle de estado (dot indicators).
 * - Imagens otimizadas (Next/Image).
 */

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

  // Navegação: Calcula o width do container e faz scroll para o index * width
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
      {/* Área rolável (Viewport) */}
      <div
        ref={carouselRef}
        id='carousel'
        className='w-full h-150 overflow-hidden scroll-smooth'
      >
        <ul className='flex w-full h-full p-0 m-0'>
          {' '}
          {/* 1. Remove padding da lista */}
          {slides.map(([key, item]) => (
            <li key={key} className='min-w-full h-full grid grid-cols-2'>
              {/* Texto/Descrição */}
              <div className='col-span-1 content-center justify-items-center p-24'>
                <h1 className='font-bold text-4xl mb-8'>{item.label}</h1>
                <p>{item.description}</p>
              </div>

              {/* Imagem */}
              <div className='relative h-full w-full col-span-1'>
                {' '}
                {/* Container para controlar a imagem (fill) */}
                <Image
                  src={`/images/carousel/about/${item.image}.png`}
                  alt={item.label}
                  fill
                  className='object-contain object-center'
                  sizes='(max-width: 768px) 100vw, 50vw'
                  unoptimized={true} // TODO: Avaliar necessidade de unoptimized
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Controles de Navegação (Overlay inferior) */}
      <div className='bg-black rounded-3xl border border-gold-primary absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10'>
        <button
          onClick={handlePrev}
          className='text-gold-primary px-2 py-1 rounded'
        >
          <CircleArrowLeft size={20} />
        </button>

        {/* Indicadores (Dots) */}
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
