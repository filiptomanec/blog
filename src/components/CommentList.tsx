import React, { useContext } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CommentContext } from "../contexts/CommentContext";
import { Comment } from "../types/Comment";

function CommentList({ postId }: { postId: number }) {
  const { openCommentModal, comments } = useContext(CommentContext);

  return (
    <div>
      <Stack direction="horizontal" className="justify-content-between">
        <h3>Comments</h3>
        <Button onClick={openCommentModal}>Add Comment</Button>
      </Stack>
      <Stack gap={3}>
        {comments.length > 0 ? (
          comments
            .filter((comment) => comment.postId === postId)
            .map((comment, index) => (
              <CommentCard key={index} comment={comment} />
            ))
        ) : (
          <p>No comments yet</p>
        )}
      </Stack>
    </div>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  const { openAnswerModal } = useContext(CommentContext);
  return (
    <Card style={{ width: "70vw", marginTop: "10px" }}>
      <Card.Body>
        <Card.Title>{comment.author}</Card.Title>
        <Card.Text>{comment.text}</Card.Text>
        <Container>
          <Row>
            <Col>
              {comment.answers && (
                <>
                  <p style={{ fontWeight: "bold" }}>Answers:</p>
                  {comment.answers.map((answer, index) => (
                    <AnswerCard key={index} answer={answer} />
                  ))}
                </>
              )}
            </Col>
            <Col md="auto">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => openAnswerModal(comment.id)}
              >
                Add Answer
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

function AnswerCard({ answer }: { answer: { author: string; text: string } }) {
  return (
    <Card style={{ width: "auto", marginTop: "10px" }}>
      <Card.Body>
        <Card.Title>{answer.author}</Card.Title>
        <Card.Text>{answer.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CommentList;
