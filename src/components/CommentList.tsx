import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CommentlContext } from "../contexts/CommentlContext";

function CommentList({ postId }: { postId: number }) {
  const { openCommentModal, comments } = useContext(CommentlContext);

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
              <Card key={index} style={{ width: "70vw", marginTop: "10px" }}>
                <Card.Body>
                  <Card.Title>{comment.author}</Card.Title>
                  <Card.Text>{comment.text}</Card.Text>
                </Card.Body>
              </Card>
            ))
        ) : (
          <p>No comments yet</p>
        )}
      </Stack>
    </div>
  );
}

export default CommentList;
