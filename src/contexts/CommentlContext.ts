import React from "react";
import { Comment } from "../types/Comment";

interface CommentModalContextProps {
  isCommentModalOpen: boolean;
  openCommentModal: () => void;
  closeCommentModal: () => void;
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export const CommentlContext = React.createContext<CommentModalContextProps>({
  isCommentModalOpen: false,
  openCommentModal: () => {},
  closeCommentModal: () => {},
  comments: [],
  setComments: () => {},
});
