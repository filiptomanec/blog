export type Post = {
  id: number;
  title: string;
  content: {
    paragraphs: string[];
  };
  image: string;
};
