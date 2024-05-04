import PostDetail from "../components/PostDetail";
import CommentList from "../components/CommentList";
import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import ImageModal from "../components/ImageModal";
import NewCommentModal from "../components/NewCommentModal";

function PostPage() {
  const { id } = useParams();
  const [modalVisible, setModalVisible] = React.useState(false);
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <>
      <PostDetail post={post} setModalVisible={setModalVisible} />
      <CommentList postId={post.id} />
      <ImageModal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
        imageSrc={post.image}
      />
      <NewCommentModal postId={post.id} />
    </>
  );
}

export default PostPage;
