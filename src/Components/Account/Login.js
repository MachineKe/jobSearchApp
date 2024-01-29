import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="jobsContainer">
                  <h1>Login Page</h1>
      <form action="">
        <label htmlFor="">username</label>
        <input placeholder="email or phone"></input>
        <label>Password</label>
        <input placeholder="password" type="password"></input>
        <button>
          <Link to="" className="link">
            Login
          </Link>
        </button>
        <button>
          <Link to="/reset" className="link">
            Forgot Password
          </Link>
        </button>
        <button>
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
        <button>
          <Link to="/jobs" className="link">
            Demo Account
          </Link>
        </button>
      </form>
    </div>
);
};

export default Login;
