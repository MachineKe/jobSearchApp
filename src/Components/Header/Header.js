import React, {useContext}  from 'react'
import { AuthContext } from "../Posting/Client/Context/auth";

const Header = () => {
    const {user,logout} = useContext(AuthContext)

  return (
     <div className="navBar">
      <div className="logoDiv">
        <p className="logo">
          <strong>Job</strong> Search App
        </p>
        <p>{user.username}</p>
      </div>
      </div>
  )
}

export default Header