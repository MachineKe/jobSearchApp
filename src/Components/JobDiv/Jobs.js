import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import jobsData from "../data/jobsData.json";

const Jobs = () => {
  // search
  const [searchTermTitle, setSearchTermTitle] = useState("");
  const [searchTermLocation, setSearchTermLocation] = useState("");
  const [searchTermCompany, setSearchTermCompany] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const filteredData = jobsData.filter(
    ({ title, location, company, duration, type, level }) => {
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
      <div className="searchDiv">
        <form action="">
          <div className="firstDiv">
            <div className="byJob">
              <div className="icon">
                <IoBriefcaseOutline />
                <input
                  type="search"
                  className="input"
                  placeholder="Search Job Title..."
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
                  placeholder="Search Job Company..."
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
                  placeholder="Search Job Location..."
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
            Clear All
          </span>
        </div>
      </div>

      <div className="jobsContainer">
        {filteredData.map(
          ({
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
          }) => {
            return (
              <div key={id} className="singleJob" >
                <span className="singleJobSpan">
                  <h1 className="singleJobHead" >{title}</h1>
                  <span className="durationIcon">
                    <BiTimeFive />
                    {time}
                  </span>
                </span>
                <h6 className="locationName">{location}</h6>
                <div durationTypeLevel>
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
