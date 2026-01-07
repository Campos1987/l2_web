import aboutHome from '@/json/carouselAbout.json';

const carouselAbout = (carouselName: string) => {
  if (carouselName === 'aboutHome') {
    return aboutHome;
  }
  return null;
};

export default carouselAbout;
