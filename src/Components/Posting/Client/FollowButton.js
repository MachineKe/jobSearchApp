import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { SlUserFollow } from "react-icons/sl";

const FollowButton = ({ user: { id, followerCount, followers }, user }) => {
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if (user && followers && followers.find((follow) => follow.username === user.username)) {
      setFollowed(true);
    } else {
      setFollowed(false);
    }
  }, [user, followers]); // Check for changes in followers array

  const [followUserMutation] = useMutation(FOLLOW_USER_MUTATION, {
    variables: { userId: id },
  });

  const followUser = () => {
    followUserMutation(); // Call the mutation function here
  };

  const followButton = user ? (
    followed ? (
      <button className="likedButton" onClick={followUser}>
        <SlUserFollow />
      </button>
    ) : (
      <button className="unlikedButton" onClick={followUser}>
        <SlUserFollow />
      </button>
    )
  ) : (
    <button className="unlikedButton">
      <Link to="/login">
        <SlUserFollow />
      </Link>
    </button>
  );

  return (
    <>
      {followButton}
      <span className="likeCount">{followerCount}</span>
    </>
  );
};

const FOLLOW_USER_MUTATION = gql`
  mutation followUser($userId: ID!) {
    followUser(userId: $userId) {
      id
      followers {  
        id
        username
      }
      followerCount
    }
  }
`;

export default FollowButton;
