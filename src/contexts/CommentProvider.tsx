import React, { ReactNode, useEffect, useState } from "react";
import { CommentContext, ModalProps } from "./CommentContext";
import { Comment } from "../types/Comment";
import { comments as initComments } from "../data/comments";

interface CommentModalProviderProps {
  children: ReactNode;
}

export const CommentProvider: React.FC<CommentModalProviderProps> = ({
  children,
}) => {
  const [modalProps, setModalProps] = useState<ModalProps>({
    isCommentModalOpen: false,
    type: "comment",
  });
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments from local storage if they exist or initialize with default comments
  useEffect(() => {
    const storageComments = localStorage.getItem("comments");
    if (storageComments === null) {
      setComments(initComments);
      localStorage.setItem("comments", JSON.stringify(initComments));
    } else if (storageComments && comments.length === 0) {
      setComments(JSON.parse(storageComments));
    } else {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const openCommentModal = () =>
    setModalProps({ isCommentModalOpen: true, type: "comment" });
  const openAnswerModal = (id: number) =>
    setModalProps({ isCommentModalOpen: true, type: "answer", commentId: id });
  const closeModal = () =>
    setModalProps({ isCommentModalOpen: false, type: "comment" });

  return (
    <CommentContext.Provider
      value={{
        modalProps,
        openCommentModal,
        openAnswerModal,
        closeModal,
        comments,
        setComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
