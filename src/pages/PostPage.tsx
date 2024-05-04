import PostDetail from "../components/PostDetail";
import CommentList from "../components/CommentList";
import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

function PostPage() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <div>
      <PostDetail post={post} />
      <CommentList postId={post.id} />
    </div>
  );
}

export default PostPage;
