import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import jobsData from "../data/jobsData.json";
import { useEffect } from "react";
//  the shuffleArray function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const Jobs = () => {
  // search
  const [searchTermTitle, setSearchTermTitle] = useState("");
  const [searchTermLocation, setSearchTermLocation] = useState("");
  const [searchTermCompany, setSearchTermCompany] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [shuffledData, setShuffledData] = useState([]);
  // Shuffle the data on component mount
  useEffect(() => {
    setShuffledData(shuffleArray([...jobsData]));
  }, []);

  const filteredData = shuffledData.filter(
    ({ title, location, company, duration, type, level, id }) => {
      const titleMatch = title
        .toLowerCase()
        .includes(searchTermTitle.toLowerCase());
      const locationMatch = location
        .toLowerCase()
        .includes(searchTermLocation.toLowerCase());
      const companyMatch = company
        .toLowerCase()
        .includes(searchTermCompany.toLowerCase());
      const durationMatch = selectedDuration
        ? duration === selectedDuration
        : true;
      const typeMatch = selectedType ? type === selectedType : true;
      const levelMatch = selectedLevel ? level === selectedLevel : true;
      return (
        titleMatch &&
        locationMatch &&
        companyMatch &&
        durationMatch &&
        typeMatch &&
        levelMatch
      );
    }
  );
  const openJobsCount = filteredData.reduce((count, { id }) => {
    return id ? count + 1 : count;
  }, 0);

  const clearAllFilters = () => {
    setSearchTermTitle("");
    setSearchTermLocation("");
    setSearchTermCompany("");
    setSelectedDuration("");
    setSelectedType("");
    setSelectedLevel("");
  };
  return (
    <div>
      {/* search */}
      <div className="searchDiv">
        <form action="">
          <div className="firstDiv">
            <div className="byJob">
              <div className="icon">
                <IoBriefcaseOutline />
                <input
                  type="search"
                  className="input"
                  placeholder=" Job "
                  title="Please input Job"
                  value={searchTermTitle}
                  onChange={(e) => setSearchTermTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="byCompany">
              <div className="icon">
                <BsHouseDoor />
                <input
                  type="search"
                  className="input"
                  placeholder=" Company "
                  title="Please input Company"
                  value={searchTermCompany}
                  onChange={(e) => setSearchTermCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="byLocation">
              <div className="icon">
                <CiLocationOn />
                <input
                  type="search"
                  className="input"
                  placeholder=" Location "
                  title="Please input Location"
                  value={searchTermLocation}
                  onChange={(e) => setSearchTermLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>

        <div className="secDiv">
          <div className="singleSearch">
            <label htmlFor="relevance" className="relevanceLabel durationLabel">
              Duration:
            </label>
            <select
              name=""
              id="relevance"
              className="selection durationSelection"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              <option value="">All</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div className="singleSearch">
            <label htmlFor="type" className="relevanceLabel typeLabel">
              Type:
            </label>
            <select
              name=""
              id="relevance"
              className="selection typeSelection"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All</option>
              <option value="Remote">Remote</option>
              <option value="On-Site">On-Site</option>
            </select>
          </div>
          <div className="singleSearch">
            <label htmlFor="level" className="relevanceLabel levelLabel">
              Level:
            </label>
            <select
              name=""
              id="relevance"
              className="selection levelSelection"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All</option>
              <option value="Senior">Senior</option>
              <option value="Juniour">Junior</option>
              <option value="Intern">Intern</option>
              <option value="Intermediate">Intermediate</option>
            </select>
          </div>
          <span className="clearSelect" onClick={clearAllFilters}>
            Clear
          </span>
        </div>
      </div>
      {/* cards mother div */}
      <div className="jobsContainer">
        <div className="userListHeading jobListHeading header">
          {" "}
          <h2 className="head">
            Jobs List{" "}
            <p className="activeCount head2">
              Open: {openJobsCount.toLocaleString()}
            </p>
          </h2>
        </div>

        {filteredData.map(
          (
            {
              id,
              image,
              title,
              time,
              location,
              desc,
              company,
              duration,
              type,
              level,
            },
            index
          ) => {
            return (
              // card
              <div key={index} className="singleJob">
                <span className="singleJobSpan">
                  <h1 className="singleJobHead">{title}</h1>
                  <span className="durationIcon">
                    <BiTimeFive />
                    {time}
                  </span>
                </span>
                <h6 className="locationName">{location}</h6>
                <div className="durationTypeLevel">
                  <h4 className="durationText">{duration}</h4>
                  <h5 className="typeText">{type}</h5>
                  <h6 className="levelText">{level}</h6>
                </div>
                <p className="jobInfo">{desc}</p>
                <div className="company">
                  <img
                    src={require(`../../Assets/${image}`)}
                    alt={`Logo for ${title}`}
                    className="companyLogo"
                  />
                  <span className="companyName">{company}</span>
                </div>
                <button className="applyBtn">Apply</button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
