import { Link } from "react-router-dom";
import { AuthContext } from "./Context/auth";

import React, { useContext } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaTrashAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
dayjs.extend(relativeTime);
const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  const likePost = () => {
    console.log("like post");
  };

  const { user } = useContext(AuthContext);

  const commentOnPost = () => {
    console.log("comment on post");
  };

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
          <button className="commentIconButton" onClick={commentOnPost}>
            <Link to={`/posts/${id}`} className="commentIcon">
              {" "}
              <FaRegCommentDots />
            </Link>
            {commentCount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
