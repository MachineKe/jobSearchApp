import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import PostCard from "./PostCard";

const PostsHome = () => {
  const FETCH_POSTS_QUERY = gql`
    query {
      getPosts {
        id
        body
        createdAt
        username
        likeCount
        likes {
          username
        }
        commentCount
        comments {
          id
          username
          createdAt
          body
        }
      }
    }
  `;

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
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsHome;
