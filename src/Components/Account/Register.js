import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  // let auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // createUserWithEmailAndPassword(auth, data.email, data.password)
    //   .then((response) => {
    //     console.log(response.user);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  return (

    <div className="loginContainer">
      <div className="loginChild">
      <h1>REGISTERATION PAGE</h1>
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
          <Link to="/completeProfile" className="link">
            Register
          </Link>
        </button>
        </div>
        <div className="end">
        <p className="confirm">Have an account?</p>

          <Link to="/login" className="link">
            Back To Login
          </Link>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Register;
