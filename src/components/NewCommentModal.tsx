import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CommentlContext } from "../contexts/CommentlContext";

export default function NewCommentModal({ postId }: { postId: number }) {
  const { isCommentModalOpen, closeCommentModal, setComments } =
    useContext(CommentlContext);
  const [newComment, setNewComment] = useState({
    postId,
    author: "",
    text: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setComments((comments) => [...comments, newComment]);
    closeCommentModal();
  };

  return (
    <Modal show={isCommentModalOpen} onHide={closeCommentModal}>
      <Modal.Header closeButton>
        <Modal.Title>New Comment Form</Modal.Title>
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
              placeholder="Enter your comment"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeCommentModal}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
