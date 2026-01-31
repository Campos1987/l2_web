import { creatDescriptionProps } from '@/types/layout';
import matter from 'gray-matter';

const creatDescription = (content: creatDescriptionProps) => {
  const { data } = matter(content);
  return data.description;
};

export default creatDescription;
