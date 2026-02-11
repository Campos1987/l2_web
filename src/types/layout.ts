/**
 * 📐 Layout Types
 *
 * Definições de tipos para componentes de layout e UI.
 * Inclui Props para Carousel, Loaders e Logo.
 */

export interface CarouselItem {
  image: string;
  label: string;
  description: string;
}

export type CarouselProps = {
  data: Record<string, CarouselItem> | null; // Adicionei null para segurança
};

export interface LoadingSuspenseProps {
  children: React.ReactNode;
  type?: string;
}

export interface LogoProps {
  className?: string; // A interrogação torna opcional
}
