import React from "react";


import { BiSolidImageAdd } from "react-icons/bi";
const Register2 = () => {
  return (
    <div className="accountSetFormContainer">
      <div className="formWrapper">
        <span className="logo registerLogo">BeyondJobs</span>
        <span className="logo title">Register</span>
        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <BiSolidImageAdd  className="addAvatarIcon" /> <span>Add avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  );
};

export default Register2;
