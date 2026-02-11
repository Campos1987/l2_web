/**
 * 🎠 Carousel Data Utility
 *
 * Factory function para recuperar dados estáticos de carrosséis.
 * Centraliza a importação de JSONs de configuração.
 */

import aboutHome from '@/json/carouselAbout.json';

const carouselAbout = (carouselName: string) => {
  if (carouselName === 'aboutHome') {
    return aboutHome;
  }
  return null;
};

export default carouselAbout;
