import React, { useContext } from "react";
import { AuthContext } from "../Posting/Client/Context/auth";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const topBar = user ? (
    <div className="navBar">
      <div className="logoDiv">
        <img src="Header/logo.png" alt="logo"/>
        <p className="headerInNav">CareerQuest</p>
        {/* <p>{user.username}</p> */}
      </div>
    </div>
  ) : (
    <div className="navBar">
      <div className="logoDiv">
        <img src="./logo.png" alt="logo"/>
        <p className="logo">CareerQuest</p>
      </div>
    </div>
  );
  return topBar;
};

export default Header;
