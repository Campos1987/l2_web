import { EventPageProps } from '@/types/roote';

const eventSlug = async ({ params }: EventPageProps) => {
  // Aguardamos o slug chegar da URL
  const { slug } = await params;

  return <div>{slug}</div>;
};

export default eventSlug;
