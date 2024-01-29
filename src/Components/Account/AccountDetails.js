import React from "react";
import { Link } from "react-router-dom";

const AccountDetails = () => {
  return (
    <div className="">
      <form action="">
       <label>Profile Picture:</label>
       <button>Upload image</button>
       <button><Link to='/camera' className="link">Take Photo</Link></button>
        <label htmlFor="">Name:</label>
        <input placeholder="full name"></input>
        <label htmlFor="">Username:</label>
        <input placeholder="nick name"></input>

        <label>Phone:</label>
        <input placeholder="Phone number"></input>
        <label>City:</label>
        <input placeholder="Kirinyaga"></input>
        <label>Country:</label>
        <input placeholder="Kenya"></input>
 {/* <label>Level of Education:</label>
        <input placeholder="Education"></input>
         <label>Employment status:</label>
        <input placeholder="Kenya"></input> */}
        <button>
          <Link to="/" className="link">
            Save
          </Link>
        </button>
      </form>
    </div>
  );
};

export default AccountDetails;
