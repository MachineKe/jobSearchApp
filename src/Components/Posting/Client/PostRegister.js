import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const PostRegister = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
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
      navigate("/posts");
    },
    onError(error) {
      console.log(error);
      setErrors(error.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

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
              Back To Login
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
