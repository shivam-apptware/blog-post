import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  const addPost = (post) => {
    post.id = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    setPosts([post, ...posts]);
  };

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="container">
      <h1>Blog Post Application</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} updatePost={updatePost} deletePost={deletePost} />
    </div>
  );
}

export default App;
