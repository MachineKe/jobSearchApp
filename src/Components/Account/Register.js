import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="jobsContainer">
                  <h1>REGISTERATION PAGE </h1>
      <form action="">
        <label htmlFor="">username</label>
        <input placeholder="email or phone"></input>
        <label>Password</label>
        <input placeholder="password" type="password"></input>
        <button>
          <Link to="/completeProfile" className="link">
            Register
          </Link>
        </button>
        <button>
          <Link to="/login" className="link">
            Back To Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
