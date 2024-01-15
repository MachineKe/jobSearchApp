import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div className="navBar">
      <div className="logoDiv">
        <p1 className="logo">
          <strong>Job</strong> Search App
        </p1>

        <div className="mobileMenu">
          <button
            className="menuBtn"
            id="openMenuBtn"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <GiHamburgerMenu /> : <MdOutlineClose />}
          </button>

          {!navOpen && (
            <div id="mobileMenu">
              <li className="menuList">Jobs</li>
              <li className="menuList">Companies</li>
              <li className="menuList">About</li>
              <li className="menuList">Contact</li>
              <li className="menuList">Blog</li>
              <li className="menuList">Login</li>
              <li className="menuList">Register</li>
            </div>
          )}
        </div>

        <div className="menu">
          <li className="menuList">Jobs</li>
          <li className="menuList">Companies</li>
          <li className="menuList">About</li>
          <li className="menuList">Contact</li>
          <li className="menuList">Blog</li>
          <li className="menuList">Login</li>
          <li className="menuList">Register</li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
