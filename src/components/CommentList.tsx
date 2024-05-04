import React from "react";
import Card from "react-bootstrap/Card";
import { Stack } from "react-bootstrap";
import { Comment } from "../types/Comment";

function CommentList({ postId }: { postId: number }) {
  const storageComments = sessionStorage.getItem("comments");
  const comments: Comment[] = storageComments
    ? JSON.parse(storageComments)
    : [];

  return (
    <div>
      <h3>Comments</h3>
      <Stack gap={3}>
        {comments.length > 0 ? (
          comments
            .filter((comment) => comment.postId === postId)
            .map((comment, index) => (
              <Card key={index} style={{ width: "80vw", marginTop: "10px" }}>
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
