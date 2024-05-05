import React from "react";
import { Card, Image, Stack } from "react-bootstrap";
import { Post } from "../types/Post";

function PostDetail({
  post,
  setImageModalVisible,
}: {
  post: Post;
  setImageModalVisible: (visible: boolean) => void;
}) {
  return (
    <Stack>
      <h1>{post.title}</h1>
      <Card style={{ width: "auto", marginTop: "10px", marginBottom: "30px" }}>
        <Card.Img
          as={Image}
          onClick={() => {
            setImageModalVisible(true);
          }}
          src={post.image}
          style={{ width: "auto", height: "40vh", objectFit: "cover" }}
        ></Card.Img>
        <Card.Body>
          {post.content.paragraphs.map((paragraph, index) => (
            <Card.Text key={index}>{paragraph}</Card.Text>
          ))}
        </Card.Body>
      </Card>
    </Stack>
  );
}

export default PostDetail;
