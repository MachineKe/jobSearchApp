import React from "react";
import { Link } from "react-router-dom";
import ImgUpload from "../ImgUploader/ImgUpload";

const AccountDetails = () => {
  return (
    <div className="loginContainer">
      <div className="loginChild accountDiv">
        <form action="">
          <div className="profile">
            <label>Profile Picture:</label>
            <button className="takePhoto sendCodeButton">
              <Link to="/camera" className="link">
                Take Photo
              </Link>
            </button>
          </div>

          <ImgUpload />
          <label htmlFor="">Name:</label>
          <input className="loginInput" placeholder="Full Name"></input>
          <label htmlFor="">Username:</label>
          <input className="loginInput" placeholder="Nick Name"></input>

          <label>Phone:</label>
          <input className="loginInput" placeholder="Phone Number"></input>
          <label>City:</label>
          <input className="loginInput" placeholder="Nakuru"></input>
          <label>Country:</label>
          <input className="loginInput" placeholder="Kenya"></input>
          {/* <label>Level of Education:</label>
        <input placeholder="Education"></input>
         <label>Employment status:</label>
        <input placeholder="Kenya"></input> */}
          <div className="back">
            <button className="sendCodeButton">
              <Link to="/" className="link">
                Save
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
