import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"; // assuming CiHeart is an icon component you're using

const LikeButton = ({ post: { id, likeCount, likes }, user }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, likes]);

  const [likePostMutation] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
  });

  const likePost = () => {
    likePostMutation(); // Call the mutation function here
  };

  const likeButton = user ? (
    liked ? (
      <button className="likedButton" onClick={likePost}>
        <FaHeart />
      </button>
    ) : (
      <button className="unlikedButton" onClick={likePost}>
        <FaRegHeart />
      </button>
    )
  ) : (
    <button className="unlikedButton">
      <Link to="/login">
      <FaRegHeart />
      </Link>
    </button>
  );

  return (
    <>
      {likeButton}
      <span className="likeCount">{likeCount}</span>
    </>
  );
};

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export default LikeButton;
