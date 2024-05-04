import React from "react";
import Card from "react-bootstrap/Card";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";

function PostList() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
      }}
    >
      {posts.map((post, index) => (
        <Card
          as={Link}
          to={`/post/${post.id}`}
          key={index}
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
            <Card.Text>
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
      ))}
    </div>
  );
}

export default PostList;
