import React from "react";
import companyData from "../data/companyData.json";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { useState, useEffect } from "react";

const Companies = () => {
  const [searchTermName, setSearchTermName] = useState("");
  const [searchTermCompanyDiscipline, setSearchTermCompanyDiscipline] =
    useState("");
  const [searchTermCompanyLocation, setSearchTermCompanyLocation] =
    useState("");
  const [shuffledCompanyData, setShuffledCompanyData] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const filteredAndShuffledData = shuffleArray(
      companyData.filter(({ company, location, discipline }) => {
        const nameMatch =
          company &&
          company.toLowerCase().includes(searchTermName.toLowerCase());
        const companyDisciplineMatch =
          discipline &&
          discipline
            .toLowerCase()
            .includes(searchTermCompanyDiscipline.toLowerCase());
        const companyLocationMatch =
          location &&
          location
            .toLowerCase()
            .includes(searchTermCompanyLocation.toLowerCase());
        return nameMatch && companyDisciplineMatch && companyLocationMatch;
      })
    );

    setShuffledCompanyData(filteredAndShuffledData);
  }, [searchTermName, searchTermCompanyDiscipline, searchTermCompanyLocation]);

  // Count active users in the shuffled data
  const companyCount = shuffledCompanyData.reduce((count, { id }) => {
    return id ? count + 1 : count;
  }, 0);
  const clearAllFilters = () => {
    setSearchTermName("");
    setSearchTermCompanyDiscipline("");
    setSearchTermCompanyLocation("");
  };

  return (
    <div className="companiesContainer">
      <div className="grid-row-span-2 searchDiv userSearchDiv">
        <form action="">
          <div className="firstDiv">
            <div className="byJob">
              <div className="icon">
                <CgProfile />
                <input
                  type="search"
                  className="input"
                  placeholder="Name"
                  title="Please input Name"
                  value={searchTermName}
                  onChange={(e) => setSearchTermName(e.target.value)}
                />
              </div>
            </div>
            <div className="byCompany">
              <div className="icon">
                <IoBriefcaseOutline />
                <input
                  type="search"
                  className="input"
                  placeholder=" Field"
                  title="Please input Company"
                  value={searchTermCompanyDiscipline}
                  onChange={(e) =>
                    setSearchTermCompanyDiscipline(e.target.value)
                  }
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
                  title="Please input Name"
                  value={searchTermCompanyLocation}
                  onChange={(e) => setSearchTermCompanyLocation(e.target.value)}
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
          Company List
          <p className="activeCount companyCount">
            Online: {companyCount.toLocaleString()}
          </p>
        </h2>
      </div>

      <div className="jobsContainer">
        {shuffledCompanyData.map(
          ({ image, location, discipline, company, desc }, index) => {
            return (
              <div className="singleJob" key={index}>
                <img
                  src={require(`../../Assets/${image}`)}
                  alt={`Logo for ${company}`}
                  className="companyLogo"
                />

                <p className="companyName">{company}</p>
                <p>{location}</p>
                <p>{discipline}</p>

                <p className="jobInfo">{desc}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Companies;
