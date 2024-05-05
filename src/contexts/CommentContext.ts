import React from "react";
import { Comment } from "../types/Comment";

export interface ModalProps {
  isCommentModalOpen: boolean;
  type: "comment" | "answer";
  commentId?: number;
}

interface CommentModalContextProps {
  modalProps: ModalProps;
  openCommentModal: () => void;
  openAnswerModal: (id: number) => void;
  closeModal: () => void;
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export const CommentContext = React.createContext<CommentModalContextProps>({
  modalProps: { isCommentModalOpen: false, type: "comment" },
  openCommentModal: () => {},
  openAnswerModal: () => {},
  closeModal: () => {},
  comments: [],
  setComments: () => {},
});
