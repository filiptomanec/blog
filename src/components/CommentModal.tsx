import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { capitalizeFirstLetter } from "../utils/utils";
import { CommentContext } from "../contexts/CommentContext";

export default function CommentModal({ postId }: { postId: number }) {
  const { modalProps, closeModal, comments, setComments } =
    useContext(CommentContext);
  const [validated, setValidated] = useState(false);
  const [newComment, setNewComment] = useState({
    postId,
    author: "",
    text: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    // Check if form is valid
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

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
        setComments((comments) =>
          comments.map((comment) => {
            if (comment.id === modalProps.commentId) {
              return {
                ...comment,
                answers: comment.answers
                  ? [...comment.answers, newAnswer]
                  : [newAnswer],
              };
            }
            return comment;
          }),
        );
      }
    }
    setNewComment({ postId, author: "", text: "" });
    setValidated(false);
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              required
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
              required
              value={newComment.text}
              onChange={(e) =>
                setNewComment({ ...newComment, text: e.target.value })
              }
              placeholder={`Enter your ${modalProps.type}`}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
