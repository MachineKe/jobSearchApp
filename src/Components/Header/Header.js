import React, {useContext}  from 'react'
import { AuthContext } from "../Posting/Client/Context/auth";

const Header = () => {
    const {user,logout} = useContext(AuthContext)
const topBar = user ? (
     <div className="navBar">
      <div className="logoDiv">
        <p className="logo">
          <strong>Job</strong> Search App
        </p>
        <p>{user.username}</p>
      </div>
      </div>
  ): (<div className="navBar">
      <div className="logoDiv">
        <p className="logo">
          <strong>Job</strong> Search App
        </p>
      </div>
  </div>)
  return topBar
}

export default Header