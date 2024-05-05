import PostDetail from "../components/PostDetail";
import CommentList from "../components/CommentList";
import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import ImageModal from "../components/ImageModal";
import CommentModal from "../components/CommentModal";

function PostPage() {
  const { id } = useParams();
  const [imageModalVisible, setImageModalVisible] = React.useState(false);
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <>
      <PostDetail post={post} setImageModalVisible={setImageModalVisible} />
      <CommentList postId={post.id} />
      <ImageModal
        show={imageModalVisible}
        onHide={() => setImageModalVisible(false)}
        imageSrc={post.image}
      />
      <CommentModal postId={post.id} />
    </>
  );
}

export default PostPage;
