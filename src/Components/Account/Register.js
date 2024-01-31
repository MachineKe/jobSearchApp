import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  let auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="jobsContainer">
      <h1>REGISTERATION PAGE </h1>
      <form action="">
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
          onChange={(event) => handleInput(event)}
          type="password"
        ></input>
        <button onClick={handleSubmit}>
          <Link to="" className="link">
            Register
          </Link>
        </button>
        <button >
          <Link to="/login" className="link">
            Back To Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
