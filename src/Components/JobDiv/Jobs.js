import React from "react";
import { BiTimeFive } from "react-icons/bi";
import dvc from "../../Assets/dvc.png";
import anaconda_logo from "../../Assets/anaconda_logo.png";
import cad from "../../Assets/caddy.png";
import aws from "../../Assets/aws.png";
import machine from "../../Assets/tabby.png";
import hotel from "../../Assets/huggingface.png";
import melzar from "../../Assets/elasticsearch.png";
import mjenzi from "../../Assets/docusaurus.png";
import maasai from "../../Assets/streamlit_dark.png";
import doc from "../../Assets/jax.png";
import mwalimu from "../../Assets/Notepad_plus_plus.png";
import { useState } from "react";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
// hh order array containing jobs
const Data = [
  {
    id: 1,
    image: dvc,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "DVC Limited",
    type: "Remote",
    level: "Juniour",
      duration: "Juniour",

  },
  {
    id: 2,
    image: anaconda_logo,
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "PyCharm",
    type: "Remote",
    level: "Intermediate",
  },
  {
    id: 3,
    image: cad,
    title: "Software Engineer",
    time: "20Hrs",
    location: "Greece",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "Cadilac",
    type: "Full-Time",
    level: "Senior",
  },
  {
    id: 4,
    image: aws,
    title: "DevOps Engineer",
    time: "1 Day",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "AWS",
    type: "Contract",
    level: "Advocate",
  },
  {
    id: 5,
    image: machine,
    title: "Machine Operator",
    time: "1 week",
    location: "Nairobi, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "Machine Operators",
  },
  {
    id: 6,
    image: hotel,
    title: "Waiter/Waitres",
    time: "2 weeks",
    location: "Ngara, Nairobi, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "The Hennesis Hotel",
  },
  {
    id: 7,
    image: melzar,
    title: "Research Assistant",
    time: "4 days",
    location: "Nairobi, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "Daima Associates",
  },
  {
    id: 8,
    image: mjenzi,
    title: "Mason",
    time: "2 days",
    location: "Nairobi, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "Mjenzi Mkuu",
  },
  {
    id: 9,
    image: mjenzi,
    title: "Contractor",
    time: "2 days",
    location: "Nairobi, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "Mjenzi Mkuu",
  },
  {
    id: 10,
    image: maasai,
    title: "Lecturer",
    time: "2Hrs",
    location: "Narok, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "Maasai Mara University",
  },
  {
    id: 11,
    image: doc,
    title: "Clinical officer",
    time: "2Hrs",
    location: "Nakuru, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "MediHeal Hospital",
  },
  {
    id: 12,
    image: mwalimu,
    title: "Teacher",
    time: "5Hrs",
    location: "Kericho City, Kenya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias totam libero vitae recusandae architecto explicabo voluptates, at praesentium. Labore eum ut autem consequuntur necessitatibus in temporibus quasi culpa odio.",
    company: "Tenwek High School",
  },
];
const Jobs = () => {
  const [searchTermTitle, setSearchTermTitle] = useState("");
  const [searchTermLocation, setSearchTermLocation] = useState("");
  const [searchTermCompany, setSearchTermCompany] = useState("");
  const filteredData = Data.filter(({ title, location, company }) => {
    const titleMatch = title
      .toLowerCase()
      .includes(searchTermTitle.toLowerCase());
    const locationMatch = location
      .toLowerCase()
      .includes(searchTermLocation.toLowerCase());
    const companyMatch = company
      .toLowerCase()
      .includes(searchTermCompany.toLowerCase());

    return titleMatch && locationMatch && companyMatch;
  });

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
            <select name="" id="relevance" className="selection durationSelection">
                            <option value="">Full-Time</option>
              <option value="">Contract</option>

            </select>
          </div>
          <div className="singleSearch">
            <label htmlFor="type" className="relevanceLabel typeLabel">
              Type:
            </label>
            <select name="" id="relevance" className="selection typeSelection">
              {" "}
              <option value="">Remote</option>
              <option value="">On-Site</option>
            </select>
          </div>{" "}
          <div className="singleSearch">
            <label htmlFor="level" className="relevanceLabel levelLabel">
              Level:
            </label>
            <select name="" id="relevance" className="selection levelSelection">
              {" "}
              <option value="">Senior</option>
              <option value="">Junior</option>
              <option value="">Intern</option>
              <option value="">Intermediate</option>
            </select>
          </div>
          <span className="clearSelect">Clear All</span>
        </div>
      </div>

      <div className="jobsContainer">
        {filteredData.map(
          ({ id, image, title, time, location, desc, company }) => {
            return (
              <div key={id} className="singleJob">
                <span className="singleJobSpan">
                  <h1 className="singleJobHead">{title}</h1>
                  <span className="durationIcon">
                    <BiTimeFive />
                    {time}
                  </span>
                </span>
                <h6 className="locationName">{location}</h6>

                <p className="jobInfo">{desc}</p>
                <div className="company">
                  <img src={image} alt="Company Logo" className="companyLogo" />
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
