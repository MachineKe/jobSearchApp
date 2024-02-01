import React from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Backend/firebaseConfig";
import { BiSolidImageAdd } from "react-icons/bi";
const Register2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="accountSetFormContainer">
      <div className="formWrapper">
        <span className="logo registerLogo">BeyondJobs</span>
        <span className="logo title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" 
          name="display name"
          />
          <input type="email" placeholder="email" 
          name="email"
          />
          <input type="text" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }}
          name="file"
          />
          <label htmlFor="file">
            <BiSolidImageAdd className="addAvatarIcon" />{" "}
            <span>Add avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  );
};

export default Register2;
