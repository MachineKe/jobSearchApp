import React from "react";
import moment from "moment";
const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  return (
    <div>
      <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />
      <p>{username}</p>
      <p>{createdAt}</p>
      <p>{body}</p>
      <p>buttons here</p>
    </div>
  );
};

export default PostCard;
