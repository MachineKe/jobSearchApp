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
    <div>
      <img
        src="https://xsgames.co/randomusers/avatar.php?g=female"
        alt=""
        className=""
      />
      <p>{username}</p>
      <p>
        {" "}
        <Link to={`/posts/${id}`} className="link">
          {dayjs(createdAt).fromNow(true)}
        </Link>
      </p>
      <Link to={`/posts/${id}`} className="link"><p>{body}</p></Link>
      <LikeButton user={user} post={{ id, likes, likeCount }} />
      <button onClick={commentOnPost}>
       <Link to={`/posts/${id}`} className=""> <FaRegCommentDots /></Link>
      </button>
      {commentCount}
    </div>
  );
};

export default PostCard;
