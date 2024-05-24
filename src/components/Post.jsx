import React, { useState } from "react";

const Post = ({ post, updatePost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleUpdate = () => {
    updatePost({ ...post, title, body });
    setIsEditing(false);
  };

  return (
    <div className="post">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Post;
