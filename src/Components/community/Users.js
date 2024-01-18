import React from "react";
import userData from "../data/userData.json";
import { useState, useEffect } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogoBuffer } from "react-icons/io5";
import { LiaScrewdriverSolid } from "react-icons/lia";
import { FaBook } from "react-icons/fa";
const Users = () => {
  // // Count active users
  //   const activeUserCount = userData.reduce((count, { user_id }) => {
  //     return user_id ? count + 1 : count;
  //   }, 0);
  // State to store shuffled user data
  const [shuffledUserData, setShuffledUserData] = useState([]);

  useEffect(() => {
    // Function to shuffle the array (Fisher-Yates algorithm)
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    // Create a copy of the original user data and shuffle it
    const copiedUserData = [...userData];
    const shuffledData = shuffleArray(copiedUserData);

    // Update the state with the shuffled data
    setShuffledUserData(shuffledData);
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Count active users in the shuffled data
  const activeUserCount = shuffledUserData.reduce((count, { user_id }) => {
    return user_id ? count + 1 : count;
  }, 0);
  return (
    <div className="usersContainer">
      <div className="userListHeading">
        {" "}
        <h2>
          User List{" "}
          <p className="activeCount">
            Online: {activeUserCount.toLocaleString()}
          </p>
        </h2>
      </div>
      {shuffledUserData.map(
        (
          {
            fullname,
            company,
            job_title,
            gender,
            city,
            country,
            user_id,
            country_code,
            skills,
            avatar,
            education,
          },
          index
        ) => {
          const userGender = gender.toLowerCase();
          const profilePic = Math.floor(Math.random() * 77);

          return (
            <div className="userList" key={index}>
              <p>
                {/* <a
                  href={`https://xsgames.co/randomusers/assets/avatars/${userGender}/${profilePic}.jpg`}
                  target="_blank"
                  rel="noreferrer"
                > */}
                <img
                  src={`https://xsgames.co/randomusers/assets/avatars/${userGender}/${profilePic}.jpg`}
                  alt="profile_Picture"
                  className="profilePicture"
                />
                {/* </a> */}
              </p>
              <p>
                {" "}
                <CgProfile /> {fullname}
              </p>

              <p>
                <IoBriefcaseOutline /> {job_title}
              </p>
              <p>
                {" "}
                <LiaScrewdriverSolid /> {skills}
              </p>
              <p>
                <IoLogoBuffer /> {company}
              </p>
              {/* <p>City: {country}</p> */}

              <p>
                <FaBook />
                {education}
              </p>
              <p>
                <img
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country_code}.svg`}
                  alt="country flag icon"
                  className="countryFlag"
                />
                {country}
              </p>
              <button className="followButton userButtons">Follow</button>
              <button className="messageButton userButtons">Message</button>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Users;
