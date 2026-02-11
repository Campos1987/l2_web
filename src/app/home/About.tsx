/**
 * 🎠 About Home Carousel
 *
 * Seção "Sobre" na Home Page.
 * Utiliza um Carousel reutilizável para exibir cards informativos ('features' do servidor).
 * Dados alimentados por `carouselAbout`.
 */

import Carousel from '@/ui/Carousel/Carousel';
import carouselAbout from '@/lib/carouselAbout';

const AboutHome = () => {
  const structure = carouselAbout('aboutHome');
  return (
    <section className='h-full py-6'>
      <Carousel data={structure} />
    </section>
  );
};

export default AboutHome;
