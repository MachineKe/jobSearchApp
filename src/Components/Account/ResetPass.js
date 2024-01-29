import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    
    <div className="jobsContainer">
                  <h1>RESET PASSWORD</h1>

            <form action="" className="">
        <label htmlFor="">username</label>
        <input placeholder="email or phone"></input>
        <button>Send code</button>
        <label htmlFor="">Input code</label>
        <input placeholder="auth code"></input>
        <label>New Password</label>
        <input placeholder="Input new password" type="password"></input>
         <label>Repeat New Password</label>
        <input placeholder="Re input new password" type="password"></input>
        <button>
          <Link to="" className="link">
            Submit
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

export default ResetPassword;
