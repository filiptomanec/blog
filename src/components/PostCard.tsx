import Card from "react-bootstrap/Card";
import React from "react";
import { Post } from "../types/Post";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card
      as={Link}
      to={`/post/${post.id}`}
      style={{
        width: "18rem",
        marginTop: "10px",
        textDecoration: "none",
      }}
    >
      <Card.Img
        variant="top"
        src={post.image}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>
          <h5>{post.title}</h5>
        </Card.Title>
        <Card.Text as="div">
          <LinesEllipsis
            text={post.content.paragraphs.join(" ")}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
