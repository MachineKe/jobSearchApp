import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(true);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNavOpen(true);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="navBar">
      <div className="logoDiv">
        <p1 className="logo">
          <strong>Job</strong> Search App
        </p1>

        <div className="mobileMenu" ref={menuRef}>
          <button
            className="menuBtn"
            id="openMenuBtn"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <GiHamburgerMenu /> : <MdOutlineClose />}
          </button>

          {!navOpen && (
            <div className="mobileMenu2" id="mobileMenu">
              <li className="menuList">
                <Link className="link" to="/">
                  {" "}
                  <div className="mobileMenu3"> Home</div>
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" to="/companies">
                  <div className="mobileMenu3"> Companies</div>
                </Link>
              </li>
              {/* <li className="menuList">
                <Link className="link" to="/footer">
                  Contact
                </Link>
              </li> */}
              <li className="menuList">
                <Link className="link" to="/community">
                  <div className="mobileMenu3"> Community</div>
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" to="/about">
                  <div className="mobileMenu3"> About</div>
                </Link>
              </li>

              <li className="menuList">
                <Link className="link" to="/login">
                  <div className="mobileMenu3"> Login</div>
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" to="/register">
                  <div className="mobileMenu3"> Register</div>
                </Link>
              </li>
            </div>
          )}
        </div>

        <div className="menu">
          <li className="menuList active">
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
            <Link className="link" to="/register">
              Register
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
