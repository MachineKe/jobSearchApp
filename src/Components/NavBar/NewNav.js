import React, { useContext, useRef, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Posting/Client/Context/auth";
import { MdOutlineHome } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { MdDynamicFeed } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Header from "../Header/Header";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineExitToApp } from "react-icons/md";

const NewNav = () => {

    const {user,logout} = useContext(AuthContext)

  return (
    <div className="newNav">
      <div className="headerInNav">
        <Header />
      </div>
      <div className="newNav1">
        <li className="homeLogo newNavLogo">
          <Link className="link" to="/">
            <div className="logo2">
              <MdOutlineHome />
              <p className="nameLogo">Home</p>
            </div>
          </Link>
        </li>

        <li className="homeLogo newNavLogo">
          <Link className="link" to="/">
            <div className="logo2">
              <MdOutlineSearch />
              <p className="nameLogo">Search</p>
            </div>
          </Link>
        </li>

        {/* <li className="companiesLogo newNavLogo">
        <Link className="link" to="/companies">
          <div className="logo2">
            <GoOrganization />
            <p className="nameLogo">Companies</p>
          </div>
        </Link>
      </li> */}
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
              <MdNotificationsNone />
              <p className="nameLogo">Notification</p>
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
      <div className="newNav2">
        <li className="loginLogo newNavLogo">
          <Link className="link" to="/login">
            <div className="logo2">
              <MdOutlineShoppingCart />
              <p className="nameLogo">Marketplace</p>
            </div>
          </Link>
        </li>



        <li className="loginLogo newNavLogo">
          <Link className="link" to="/login">
            <div className="logo2">
              <RxHamburgerMenu />
              <p className="nameLogo">More</p>
            </div>
          </Link>
        </li>

<li className="loginLogo newNavLogo">
<Link className="link" onClick={logout}>

            <div className="logo2">
              <MdOutlineExitToApp />
              <p className="nameLogo">Logout</p>
            </div>
          </Link>
        </li>

      </div>
    </div>
  );
};

export default NewNav;
