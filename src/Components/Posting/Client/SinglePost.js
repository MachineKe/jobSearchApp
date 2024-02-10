import React, { useContext, useRef, useState } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import LikeButton from "./LikeButton";
import { AuthContext } from "./Context/auth";
import { FaRegCommentDots } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams

const SinglePost = () => {
  // Destructure the postId from the object returned by useParams
  const { postId } = useParams();
  const { user } = useContext(AuthContext);
  const commentInputRef = useRef(null)
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const {
    loading,
    error,
    data: { getPost } = {},
  } = useQuery(FETCH_POST_QUERY, {
    variables: { postId }, // Pass postId as an object with its appropriate key
  });

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {

      setComment("");

      commentInputRef.current.blur()
    },
    variables: {
      postId,
      body: comment,
    },
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

    // Check if the current user is the owner of the post
    const isPostOwner = user && user.username === username;

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
        {/* Render delete button only if the current user is the post owner */}
        {isPostOwner && (
          <button>
            <DeleteButton postId={id} username={username} />
          </button>
        )}
        <h2>Comments</h2>
        {user && (
          <div>
            <p>Post a comment</p>
            <form action="">
              <input
                type="text"
                placeholder="Comment..."
                name="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                // ref={commentInputRef}
              />
              <button
                type="Submit"
                disabled={comment.trim() === ""}
                onClick={submitComment}
              >
                Submit
              </button>
            </form>
          </div>
        )}
        {comments.map((comment) => (
          <div key={comment.id}>
            {user && user.username === comment.username && (
              <DeleteButton postId={id} commentId={comment.id} />
            )}

            <h3>{comment.username}</h3>
            <p>{dayjs(comment.createdAt).fromNow()}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return postMarkup;
};

const SUBMIT_COMMENT_MUTATION = gql`
  mutation ($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;

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
