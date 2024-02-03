import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
            <Link to="/reset" className="link forgot">
              Forgot Password
            </Link>
          </div>
          <div className="end">
            <p className="confirm">Dont have an account?</p>
            <Link to="/register" className="link register">
              Register
            </Link>
          </div>
          {/* <button>
            <Link to="/jobs" className="link demo">
              Demo Account
            </Link>
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
