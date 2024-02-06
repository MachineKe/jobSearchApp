import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {useForm} from './util/Hooks'

import { AuthContext } from "./Context/auth";
const PostRegister = () => {

const context = useContext(AuthContext)

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});


const {onChange, onSubmit, values} = useForm(registerUser, {
 username: "",
    email: "",
    password: "",
    confirmPassword: "",
})


  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, {data: {register: userData}}) {
      context.login(userData)
      navigate("/posts");
    },
    onError(error) {
      setErrors(error.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  if (loading) {
    return <h1>Loading ...</h1>;
  }

function registerUser() {
addUser()
}
  return (
    <div className="loginContainer">
      <div className="loginChild">
        <h1>REGISTRATION PAGE</h1>
        <hr />
        <form action="" onSubmit={onSubmit}>
          <div className="usernameDiv">
            <label htmlFor="">Username</label>
            <input
              placeholder="Username"
              type="text"
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
              type="email"
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
              name="confirmPassword"
              value={values.confirmPassword}
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
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </form>
        {Object.keys(errors).length > 0 && (
          <div>
            {Object.values(errors).map((value, index) => (
              <ul key={index}>
                <li>{value}</li>
              </ul>
            ))}
          </div>
        )}
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
