import {Link} from 'react-router-dom'

import React from "react";

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' 

import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
dayjs.extend(relativeTime)

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  const likePost = () =>{
   console.log('like post') 
  }

const commentOnPost = ()=>{
  console.log('comment on post')
}

  return (
    <div>
      <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" className=''/>
      <p>{username}</p>
      <p><Link to={'/posts/${id}'} className='link'>{dayjs(createdAt).fromNow(true)}</Link></p>
      <p>{body}</p>
      <button onClick={likePost}><CiHeart /></button>{likeCount}
      <button onClick={commentOnPost}><FaRegCommentDots /></button>{commentCount}
    </div>
  );
};

export default PostCard;
