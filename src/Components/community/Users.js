import React from "react";
import userData from "../data/userData.json";

const Users = () => {
// Count active users
  const activeUserCount = userData.reduce((count, { user_id }) => {
    return user_id ? count + 1 : count;
  }, 0);
  return (
    <div className="usersContainer">
     <div className='userListHeading'> <h2>User List <p className="activeCount">Active: {activeUserCount.toLocaleString()}</p></h2>
      
      </div>
      {userData.map(
        ({ fullname, company, job_title, gender, city, country,user_id }, index) => {
          const userGender = gender.toLowerCase();
          const profilePic = Math.floor(Math.random() * 77);
          return (
            <div className="userList" key={index}>
              <h4>Job Seeker</h4>
              <p>
                <a
                  href={`https://xsgames.co/randomusers/assets/avatars/${userGender}/${profilePic}.jpg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://xsgames.co/randomusers/assets/avatars/${userGender}/${profilePic}.jpg`}
                    alt="profile_Picture"
                    className="profilePicture"
                  />
                </a>
              </p>
              <p>Name: {fullname}</p>

              <p>Work: {job_title}</p>
              <p>Company: {company}</p>
              {/* <p>City: {country}</p> */}

              <p>Country: {city}</p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Users;
