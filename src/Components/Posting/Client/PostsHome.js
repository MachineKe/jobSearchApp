import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import PostCard from "./PostCard";
import { AuthContext } from "./Context/auth";
import PostForm from "./PostForm";
import { FETCH_POSTS_QUERY } from "./util/Grapgql";

const PostsHome = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

  if (loading) {
    return <h1>Loading posts...</h1>;
  }

  if (error) {
    return <h1>Error fetching posts: {error.message}</h1>;
  }

  const posts = data.getPosts;

  return (
    <div>
      <div>{user && <PostForm />}</div>
      <h1>Recent posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsHome;
