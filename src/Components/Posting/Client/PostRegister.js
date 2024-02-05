import React, { useState } from "react";
import { Link } from "react-router-dom";

// import 

import  {useMutation}  from "@apollo/react-hooks/index";
import gql from "graphql-tag";
const PostRegister = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: values,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  return (
    <div className="loginContainer">
      <div className="loginChild">
        <h1>REGISTERATION PAGE</h1>
        <hr />
        <form action="" onSubmit={onSubmit}>
          <div className="usernameDiv">
            <label htmlFor="">Username</label>
            <input
              placeholder="Username"
              required
              name="username"
              value={values.username}
              onChange={onChange}
            ></input>
          </div>
          <div className="usernameDiv">
            <label htmlFor="">Email</label>
            <input
              placeholder="Email or Phone"
              required
              name="email"
              value={values.email}
              onChange={onChange}
            ></input>
          </div>

          <div className="passwordDiv">
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              required
              name="password"
              value={values.password}
              onChange={onChange}
            ></input>
          </div>

          <div className="passwordDiv">
            <label>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              type="password"
              required
              name="password"
              value={values.password}
              onChange={onChange}
            ></input>
          </div>

          <div className="loginDiv">
            <button className="login">
              <Link to="" className="link">
                Register
              </Link>
            </button>
          </div>
          <div className="end">
            <p className="confirm">Have an account?</p>

            <Link to="/postlogin" className="link">
              Back To Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default PostRegister;
