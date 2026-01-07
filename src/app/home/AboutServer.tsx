import Carousel from '@/components/Carousel/Carousel';
import carouselAbout from '@/lib/carouselAbout';

const AboutServer = () => {
  const structure = carouselAbout('aboutHome');
  return (
    <section className='h-full py-6'>
      <Carousel data={structure} />
    </section>
  );
};

export default AboutServer;
