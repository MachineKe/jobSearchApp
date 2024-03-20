import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { AuthContext } from "./Client/Context/auth";
import { FETCH_USERS_QUERY } from "./Client/util/Grapgql";
import dayjs from "dayjs";

const AppUsers = () => {
  const { user } = useContext(AuthContext);
  const {
    loading,
    error,
    data: { getUsers } = {},
  } = useQuery(FETCH_USERS_QUERY);

  if (loading) {
    return <h1>Loading users...</h1>;
  }

  if (error) {
    return <h1>Error fetching users: {error.message}</h1>;
  }

  return (
    <div>
      {getUsers.map((user) => (
        <div key={user.id}>
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt=""
            className="userProfilePicture"
          />
          <h2 className="username">{user.username}</h2>
          <p className="email">{user.email}</p>
          <p className="phone">{user.phone}</p>
          <p className="createdAt">
            Joined: {dayjs(user.createdAt).format("MMMM YYYY")}
          </p>
          <p className="followerCount">Followers: {user.followerCount}</p>
        </div>
      ))}
    </div>
  );
};

export default AppUsers;


