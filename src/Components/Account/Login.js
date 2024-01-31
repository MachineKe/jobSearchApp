import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { app } from "../../Backend/firebaseConfig";
import { useState } from "react";

const Login = () => {
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };

  const handleSubmit = (event) => {
         event.preventDefault();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const signInWithGoogle = (event) => {
     event.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="jobsContainer">
      <h1>Login Page</h1>
      <form action="">
        <button onClick={signInWithGoogle}>Continue With Google</button>

        <label htmlFor="">username</label>

        <input
          name="email"
          placeholder="email"
          onChange={(event) => handleInput(event)}
        ></input>
        <label>Password</label>
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={(event) => handleInput(event)}
        ></input>
        <button onClick={handleSubmit}>
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
