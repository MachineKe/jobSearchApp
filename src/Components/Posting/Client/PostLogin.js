import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useForm } from "./util/Hooks";
import { AuthContext } from "./Context/auth";

const PostLogin = (props) => {
  const context = useContext(AuthContext)
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(loginUserCallBack, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, {data: {login: userData}}) {
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

  function loginUserCallBack() {
    loginUser();
  }

  return (
    <div className="loginContainer">
      <div className="loginChild">
        <h1>LOGIN PAGE</h1>
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

          <div className="loginDiv">
            <button className="login">
              <Link to="" className="link">
                Login
              </Link>
            </button>
          </div>
          <div className="end">
            <p className="confirm">Don't Have an account?</p>
            <Link to="/register" className="link">
              Register
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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default PostLogin;
