import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CommentContext } from "../contexts/CommentContext";
import { capitalizeFirstLetter } from "../utils/utils";

type CommentType = {
  postId: number;
};

export default function CommentModal({ postId }: CommentType) {
  const { modalProps, closeModal, comments, setComments } =
    useContext(CommentContext);
  const [newComment, setNewComment] = useState({
    postId,
    author: "",
    text: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (modalProps.type === "comment") {
      // set comment
      setComments((comments) => [
        ...comments,
        { ...newComment, id: comments.length + 1 },
      ]);
    } else {
      // set answer
      const currentComment = comments.find(
        (comment) => comment.id === modalProps.commentId,
      );
      if (currentComment) {
        const newAnswer = { author: newComment.author, text: newComment.text };
        setComments((comments) => [
          ...comments.filter((comment) => comment.id !== modalProps.commentId),
          {
            ...currentComment,
            answers: currentComment.answers
              ? [...currentComment.answers, newAnswer]
              : [newAnswer],
          },
        ]);
      }
    }
    setNewComment({ postId, author: "", text: "" });
    closeModal();
  };

  return (
    <Modal show={modalProps.isCommentModalOpen} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {`New ${capitalizeFirstLetter(modalProps.type)} Form`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={newComment.author}
              onChange={(e) =>
                setNewComment({ ...newComment, author: e.target.value })
              }
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              value={newComment.text}
              onChange={(e) =>
                setNewComment({ ...newComment, text: e.target.value })
              }
              placeholder={`Enter your ${modalProps.type}`}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
