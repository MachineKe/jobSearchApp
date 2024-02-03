import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="loginContainer">
      <div className="loginChild">
        <h1>RESET PASSWORD</h1>
        <hr />
        <form action="" className="">
          <div className="usernameDiv sendCode">
            <label htmlFor="">Username</label>
            <input placeholder="Email or Phone"></input>
            <button className="sendCodeButton">Send code</button>
          </div>
          <div className="codeDiv">
            <label htmlFor="">Input code</label>
            <input placeholder="Authentication Code"></input>
          </div>
          <div className="passwordDiv">
            <label>New Password</label>
            <input placeholder=" New password" type="password"></input>
          </div>
          <div className="passwordDiv">
            <label>Confirm New Password</label>
            <input placeholder="Confirm Password" type="password"></input>
          </div>
          <div className="loginDiv">
            <button className="login">
              <Link to="" className="link">
                Submit
              </Link>
            </button>
          </div>
          <div className="back">
          <Link to="/login" className="backToLogin">
            Back To Login
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
