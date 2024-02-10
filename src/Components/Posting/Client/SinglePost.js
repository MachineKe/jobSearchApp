import React, { useContext } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";
import LikeButton from "./LikeButton";
import { AuthContext } from "./Context/auth";
import { FaRegCommentDots } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import { useParams } from "react-router-dom"; // Import useParams

const SinglePost = () => {
  // Destructure the postId from the object returned by useParams
  const { postId } = useParams();
  console.log(postId);
  const { user } = useContext(AuthContext);

  const {
    loading,
    error,
    data: { getPost } = {},
  } = useQuery(FETCH_POST_QUERY, {
    variables: { postId }, // Pass postId as an object with its appropriate key
  });

  let postMarkup;
  if (!getPost) {
    postMarkup = <p>Post loading...</p>;
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount,
    } = getPost;

    postMarkup = (
      <div>
        <img
          src="https://xsgames.co/randomusers/avatar.php?g=female"
          alt=""
          className=""
        />
        <h2>{username}</h2>
        <p>{dayjs(createdAt).fromNow(true)}</p>
        <p>{body}</p>
        <hr />
        <LikeButton user={user} post={{ id, likeCount, likes }} />
        <button onClick={() => console.log("Comment on post")}>
          <FaRegCommentDots />
        </button>
        {commentCount}
        {user && user.username === username && <DeleteButton postId={id} />}
      </div>
    );
  }

  return postMarkup;
};

const FETCH_POST_QUERY = gql`
  query ($postId: ID!) {
    getPost(postId: $postId) {
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

export default SinglePost;
