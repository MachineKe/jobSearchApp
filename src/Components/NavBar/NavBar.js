import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

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
              <li className="menuList">
                <Link className="link" to="/">
                  {" "}
                 Home 
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" to="/companies">
                  Companies
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              {/* <li className="menuList">
                <Link className="link" to="/footer">
                  Contact
                </Link>
              </li> */}
              <li className="menuList">
                <Link className="link" to="/community">
                  Community
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" to="Register">
                  Register
                </Link>
              </li>
            </div>
          )}
        </div>

        <div className="menu">
          <li className="menuList">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="menuList">
            <Link className="link" to="/companies">
              Companies
            </Link>
          </li>
          {/* <li className="menuList">
            <Link className="link" to="/footer">
              Contact
            </Link>
          </li> */}
          <li className="menuList">
            <Link className="link" to="/community">
              Community
            </Link>
          </li>
                       <li className="menuList">
                <Link className="link" to="/about">
                  About
                </Link>
              </li>

          <li className="menuList">
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li className="menuList">
            <Link className="link" to="Register">
              Register
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
