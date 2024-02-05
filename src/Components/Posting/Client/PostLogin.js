import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

const PostLogin = () => {
  
 

  const handleInput = (event) => {
   
  };

  const handleSubmit = (event) => {
         event.preventDefault();

    
  };
  const signInWithGoogle = (event) => {
     event.preventDefault();
   
  };

  return (

    <div className="loginContainer">
      <div className="loginChild">
        <h1>Login Page</h1>
        <hr />
        <form action="">
          <div className="usernameDiv">
            <label htmlFor="">Username</label>
            <input placeholder="Email or Phone" required></input>
          </div>
          <div className="passwordDiv">
            <label>Password</label>
            <input placeholder="Password" type="password" required></input>
          </div>
          <div className="loginDiv">
            <button className="login">
              <Link to="" className="link">
                Login
              </Link>
            </button>
            <Link to="" className="link forgot">
              Forgot Password
            </Link>
          </div>
          <div className="end">
            <p className="confirm">Dont have an account?</p>
            <Link to="/postregister" className="link register">
              Register
            </Link>
          </div>
        </form>
      </div>
      </div>

  );
};

export default PostLogin;
