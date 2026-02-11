import matter from 'gray-matter';

export const matterTitle = (value: string) => {
  const { data } = matter(value);
  return data.title;
};

export const matterDescription = (value: string) => {
  const { data } = matter(value);
  return data.description;
};

export const matterContent = (value: string) => {
  const { content } = matter(value);
  return content;
};
