import matter from 'gray-matter';

const creatDescription = (content: string) => {
  const { data } = matter(content);
  return data.description;
};

export default creatDescription;
