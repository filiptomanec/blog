export type Comment = {
  id: number;
  postId: number;
  author: string;
  text: string;
  answers?: {
    author: string;
    text: string;
  }[];
};
