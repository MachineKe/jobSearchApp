import React from "react";

import { BiSolidImageAdd } from "react-icons/bi";
const Login2 = () => {
  return (
    <div className="accountSetFormContainer">
      <div className="formWrapper">
        <span className="logo registerLogo">BeyondJobs</span>
        <span className="logo title">Login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="text" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login2;
