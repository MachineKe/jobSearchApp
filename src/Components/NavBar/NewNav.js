import React, { useContext, useRef, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Posting/Client/Context/auth";
import { MdOutlineHome } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { MdDynamicFeed } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const NewNav = () => {
  return (
    <div className="newNav">
      <li className="homeLogo newNavLogo">
        <Link className="link" to="/">
          <div className="logo2">
            <MdOutlineHome />
            <p className="nameLogo">Home</p>
          </div>
        </Link>
      </li>
      <li className="companiesLogo newNavLogo">
        <Link className="link" to="/companies">
          <div className="logo2">
            <GoOrganization />
            <p className="nameLogo">Companies</p>
          </div>
        </Link>
      </li>
      <li className="postLogo newNavLogo">
        <Link className="link" to="/posts">
          <div className="logo2">
            <MdDynamicFeed />
            <p className="nameLogo">Post</p>
          </div>
        </Link>
      </li>
      <li className="chatLogo newNavLogo">
        <Link className="link" to="/chatalt1">
          <div className="logo2">
            <IoChatboxEllipsesOutline />
            <p className="nameLogo">Chat</p>
          </div>
        </Link>
      </li>
      <li className="loginLogo newNavLogo">
        <Link className="link" to="/login">
          <div className="logo2">
            <CgProfile />
            <p className="nameLogo">Login</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default NewNav;
