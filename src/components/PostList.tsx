import React from "react";
import { posts } from "../data/posts";
import PostCard from "./PostCard";

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
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}

export default PostList;
