import React from "react";
import userData from "../data/userData.json";
import { useState, useEffect } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogoBuffer } from "react-icons/io5";
import { LiaScrewdriverSolid } from "react-icons/lia";
import { FaBook } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Users = () => {
  const [searchTermName, setSearchTermName] = useState("");
  const [searchTermJobTitle, setSearchTermJobTitle] = useState("");
  const [searchTermCountry, setSearchTermCountry] = useState("");
  const [shuffledUserData, setShuffledUserData] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const filteredAndShuffledData = shuffleArray(
      userData.filter(({ fullname, country, job_title }) => {
        const nameMatch = fullname
          .toLowerCase()
          .includes(searchTermName.toLowerCase());
        const jobTitleMatch = job_title
          .toLowerCase()
          .includes(searchTermJobTitle.toLowerCase());
        const countryMatch = country
          .toLowerCase()
          .includes(searchTermCountry.toLowerCase());
        return nameMatch && jobTitleMatch && countryMatch;
      })
    );

    setShuffledUserData(filteredAndShuffledData);
  }, [searchTermName, searchTermJobTitle, searchTermCountry]);

  // Count active users in the shuffled data
  const activeUserCount = shuffledUserData.reduce((count, { user_id }) => {
    return user_id ? count + 1 : count;
  }, 0);
  const filteredData = userData.filter(({ fullname, country, job_title }) => {
    const nameMatch = fullname
      .toLowerCase()
      .includes(searchTermName.toLowerCase());
    const jobTitleMatch = job_title
      .toLowerCase()
      .includes(searchTermJobTitle.toLowerCase());
    const countryMatch = country
      .toLowerCase()
      .includes(searchTermCountry.toLowerCase());
    return nameMatch && jobTitleMatch && countryMatch;
  });
  const clearAllFilters = () => {
    setSearchTermName("");
    setSearchTermJobTitle("");
    setSearchTermCountry("");
  };

  return (
    <div className="usersContainer">
      <div>
        <form action="">
          <div className="firstDiv">
            <div className="byJob">
              <div className="icon">
                <IoBriefcaseOutline />
                <input
                  type="search"
                  className="input"
                  placeholder="Search Name..."
                  value={searchTermName}
                  onChange={(e) => setSearchTermName(e.target.value)}
                />
              </div>
            </div>
            <div className="byCompany">
              <div className="icon">
                <BsHouseDoor />
                <input
                  type="search"
                  className="input"
                  placeholder="Search Job Title..."
                  value={searchTermJobTitle}
                  onChange={(e) => setSearchTermJobTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="byLocation">
              <div className="icon">
                <CiLocationOn />
                <input
                  type="search"
                  className="input"
                  placeholder="Search by Country..."
                  value={searchTermCountry}
                  onChange={(e) => setSearchTermCountry(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
        <span className="clearSelect" onClick={clearAllFilters}>
          Clear All
        </span>
      </div>
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
