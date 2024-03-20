import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/auth";
import { useMutation } from "@apollo/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaRegCommentDots } from "react-icons/fa";
import LikeButton from "./LikeButton";
import { useParams } from "react-router-dom";
import gql from "graphql-tag";
import FollowButton from "./FollowButton";

dayjs.extend(relativeTime);

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes, followerCount, followers },
   
}) => {
  const { user } = useContext(AuthContext);
  const { postId,userId } = useParams();
  const commentInputRef = useRef(null);
  const [comment, setComment] = useState("");

  const commentOnPost = () => {
    console.log("comment on post");
  };

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment("");
      commentInputRef.current.blur();
    },
    variables: {
      postId,
      userId,
      body: comment,
    },
  });

  return (
    <div className="postContainer">
      <div className="postDiv">
        <div className="postHeader">
          <span className="postHeader1">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=female"
              alt=""
              className="postProfilePicture"
            />
            <p className="username">{username}</p>
          </span>
          <span className="postHeader2">
            <p className="dot">•</p>
            <Link to={`/posts/${id}`} className="timePosted">
              {dayjs(createdAt).fromNow(true)}
            </Link>
          </span>
        </div>

        <Link to={`/posts/${id}`} className="post">
          <p className="info">{body}</p>
        </Link>
        <div className="postIcons">
          <LikeButton user={user} post={{ id, likes, likeCount }} />
           {/* <FollowButton user={user} post={{id, followers, followerCount }} /> */}
          <button className="commentIconButton" onClick={commentOnPost}>
            <Link to={`/posts/${id}`} className="commentIcon">
              <FaRegCommentDots />
            </Link>
          </button>
                     <p className="commentCount likeCount"> {commentCount}</p>

        </div>
      </div>

      {/* <Link to={`/posts/${id}`} className="commentsPreview">
        <p className="info">{body}</p>
      </Link> */}

      {/* Comments section */}
      {/* {user && (
        <div>
          <form>
            <input
              type="text"
              placeholder="Comment..."
              name="comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <button
              type="submit"
              disabled={comment.trim() === ""}
              onClick={submitComment}
            >
              Submit
            </button>
          </form>
        </div>
      )} */}
    </div>
  );
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

export default PostCard;

