import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {

  const openMenuBtn = document.getElementById("openMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const openMenu = () => {
    mobileMenu.style.display = "block";
    closeMenuBtn.style.display = "block";
    openMenuBtn.style.display = "none";
    
  };
  const closeMenu = () => {
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "block";
    mobileMenu.style.display = "none";
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <p1 className="logo">
          <strong>Job</strong> Search App
        </p1>

        <div className="mobileMenu">
          <button className="menuBtn" id="openMenuBtn" onClick={openMenu}>
            <GiHamburgerMenu />
          </button>

          <button className="menuBtn" id="closeMenuBtn" onClick={closeMenu}>
            <MdOutlineClose />
          </button>
          <div id="mobileMenu">
            <li className="menuList">Jobs</li>
            <li className="menuList">Companies</li>
            <li className="menuList">About</li>
            <li className="menuList">Contact</li>
            <li className="menuList">Blog</li>
            <li className="menuList">Login</li>
            <li className="menuList">Register</li>
          </div>
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
