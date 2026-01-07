export interface CarouselItem {
  image: string;
  label: string;
  description: string;
}

export type CarouselProps = {
  data: Record<string, CarouselItem> | null; // Adicionei null para segurança
};
