import React, {useContext} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Posting/Client/Context/auth";
const NavBar = () => {
  const {user,logout} = useContext(AuthContext)
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
const menuBar = user ? (

    <div className="navBar">
      <div className="logoDiv">
        <p className="logo">
          <strong>Job</strong> Search App
        </p>
<p>{user.username}</p>
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
                <Link className="link" to="/posts">
                  <div className="mobileMenu3">Posts</div>
                </Link>
              </li>

              <li className="menuList">
                <Link className="link" to="/chatalt1">
                  <div className="mobileMenu3"> Chat</div>
                </Link>
              </li>

              <li className="menuList">
                <Link className="link" to="/about">
                  <div className="mobileMenu3"> About</div>
                </Link>
              </li>
              <li className="menuList">
                <Link className="link" onClick={logout}>
                  <div className="mobileMenu3"> Logout</div>
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
            <Link className="link" to="/posts">
              Posts
            </Link>
          </li>
          <li className="menuList">
            <Link className="link" to="/chatalt1">
              Chat
            </Link>
          </li>

          <li className="menuList">
            <Link className="link" to="/about">
              About
            </Link>
          </li>

          <li className="menuList">
            <Link className="link" onClick={logout}>
              Logout
            </Link>
          </li>
        
        </div>
      </div>
    </div>








):(
      <div className="navBar">
      <div className="logoDiv">
        <p className="logo">
          <strong>Job</strong> Search App
        </p>

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
                <Link className="link" to="/posts">
                  <div className="mobileMenu3">Posts</div>
                </Link>
              </li>

              <li className="menuList">
                <Link className="link" to="/chatalt1">
                  <div className="mobileMenu3"> Chat</div>
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
            <Link className="link" to="/posts">
              Posts
            </Link>
          </li>
          <li className="menuList">
            <Link className="link" to="/chatalt1">
              Chat
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

)
  return menuBar
};

export default NavBar;
