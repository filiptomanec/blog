import React, { ReactNode, useEffect, useState } from "react";
import { CommentlContext } from "./CommentlContext";
import { Comment } from "../types/Comment";
import { comments as initComments } from "../data/comments";

interface CommentModalProviderProps {
  children: ReactNode;
}

export const CommentProvider: React.FC<CommentModalProviderProps> = ({
  children,
}) => {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
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

  const openCommentModal = () => setIsCommentModalOpen(true);
  const closeCommentModal = () => setIsCommentModalOpen(false);

  return (
    <CommentlContext.Provider
      value={{
        isCommentModalOpen,
        openCommentModal,
        closeCommentModal,
        comments,
        setComments,
      }}
    >
      {children}
    </CommentlContext.Provider>
  );
};
