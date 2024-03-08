import React, { useContext } from "react";
import { AuthContext } from "../Posting/Client/Context/auth";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // const topBar = user ? (
  //   <div className="navBar">
  //     <div className="logoDiv">
  //       <img src="https://res.cloudinary.com/dmpposta9/image/upload/v1709168114/careerQuest/img/azfdzi2gflcyu8ijquy8.png" alt="logo" className="appLogo "/>
  //       <p className="headerInNav headerName">CareerQuest</p>
  //       {/* <p>{user.username}</p> */}
  //     </div>
  //   </div>
  // ) : (
  //   <div className="navBar">
  //     <div className="logoDiv">
  //       <img src="https://res.cloudinary.com/dmpposta9/image/upload/v1709168114/careerQuest/img/azfdzi2gflcyu8ijquy8.png" alt="logo" className="appLogo "/>
  //       <p className="logo">CareerQuest</p>
  //     </div>
  //   </div>
  // );
  // return topBar;
  return (
    <>
    <div className="navBar bg-red-500">
       <div className="logoDiv">
        <img src="https://res.cloudinary.com/dmpposta9/image/upload/v1709168114/careerQuest/img/azfdzi2gflcyu8ijquy8.png" alt="logo" className="appLogo "/>
       <p className="headerInNav headerName">CareerQuest</p>
       </div>
    </div>
    </>
  )
};

export default Header;
