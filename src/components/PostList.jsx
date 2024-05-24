import React from "react";
import Post from "./Post";

const PostList = ({ posts, updatePost, deletePost }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
};

export default PostList;
