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
// high order array containing jobs
const Data = [
  {
    id: 1,
    image: dvc,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "We are seeking a skilled and motivated Web Developer to join our dynamic team at DVC, a leading job search website. As a Web Developer, you will play a crucial role in the design, development, and maintenance of our platform, ensuring an exceptional user experience for job seekers and employers alike. Your primary focus will be on creating efficient, scalable, and visually appealing web solutions that enhance the functionality and usability of our job search website",
    company: "DVC Limited",
    type: "Remote",
    level: "Juniour",
    duration: "Full-time",
  },
  {
    id: 2,
    image: anaconda_logo,
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "Are you a creative thinker with a passion for crafting visually stunning user interfaces? Join our team at PyCharm as a UI Designer and play a pivotal role in shaping the digital experiences of our users. As a UI Designer, you'll collaborate with cross-functional teams to create intuitive and aesthetically pleasing interfaces that elevate the usability of our products.",
    company: "PyCharm",
    type: "Remote",
    level: "Intermediate",
    duration: "Full-time",
  },
  {
    id: 3,
    image: cad,
    title: "Software Engineer",
    time: "20Hrs",
    location: "Greece",
    desc: "Are you a talented and innovative Software Engineer eager to contribute to cutting-edge projects and drive technological advancements? Join our team at Cadilac and be part of a dynamic environment where your skills will be at the forefront of developing robust and scalable software solutions",
    company: "Cadilac",
    type: "On-Site",
    level: "Senior",
    duration: "Full-time",
  },
  {
    id: 4,
    image: aws,
    title: "DevOps Engineer",
    time: "1 Day",
    location: "USA",
    desc: "Are you a skilled DevOps professional looking for a dynamic opportunity to shape and optimize the software development lifecycle? Join us at AWS as a DevOps Engineer and play a crucial role in streamlining our development processes, ensuring efficient delivery, and maintaining the reliability of our systems.",
    company: "AWS",
    type: "On-Site",
    level: "Intern",
    duration: "Contract",
  },
  {
    id: 5,
    image: machine,
    title: "Machine Operator",
    time: "1 week",
    location: "Nairobi, Kenya",
    desc: "Are you a skilled and detail-oriented individual with experience in machine operation? Join our team at Machine Operators as a Machine Operator and play a crucial role in ensuring the efficient and accurate operation of our machinery.",
    company: "Machine Operators",
    type: "On-Site",
    level: "Senior",
    duration: "Contract",
  },
  {
    id: 6,
    image: hotel,
    title: "Waiter/Waitres",
    time: "2 weeks",
    location: "Ngara, Nairobi, Kenya",
    desc: "Are you a customer-focused individual with a passion for providing exceptional dining experiences? Join our team at The Hennesis Hotel as a Waiter/Waitress and contribute to creating memorable moments for our guests.",
    company: "The Hennesis Hotel",
    type: "On-Site",
    level: "Intermediate",
    duration: "Full-Time",
  },
  {
    id: 7,
    image: melzar,
    title: "Research Assistant",
    time: "4 days",
    location: "Nairobi, Kenya",
    desc: "Are you a detail-oriented individual with a passion for contributing to meaningful research projects? Join our team at Daima Associates as a Research Assistant and play a vital role in advancing knowledge and innovation.",
    company: "Daima Associates",
    type: "On-Site",
    level: "Intern",
    duration: "Contract",
  },
  {
    id: 8,
    image: mjenzi,
    title: "Mason",
    time: "2 days",
    location: "Nairobi, Kenya",
    desc: "Are you a skilled and experienced mason looking for a rewarding opportunity in the construction industry? Join our team at [Construction Company Name] as a Mason and play a crucial role in the creation and enhancement of structures through your expertise in masonry.",
    company: "Mjenzi",

    type: "On-Site",
    level: "Senior",
    duration: "Contract",
  },
  {
    id: 9,
    image: mjenzi,
    title: "Contractor",
    time: "2 days",
    location: "Nairobi, Kenya",
    desc: "Are you an experienced and motivated contractor with a passion for overseeing construction projects from inception to completion? Join our team at [Your Contracting Business Name] and take a leadership role in delivering high-quality construction services to our clients.",
    company: "Mjenzi",

    type: "On-Site",
    level: "Senior",
    duration: "Contract",
  },
  {
    id: 10,
    image: maasai,
    title: "Lecturer",
    time: "2Hrs",
    location: "Narok, Kenya",
    desc: "Are you an enthusiastic and knowledgeable individual passionate about sharing your expertise with eager minds? Consider joining Maasai Mara University as a Lecturer in the [Department Name] department and contribute to the academic growth and development of students.",
    company: "Maasai Mara University",
    type: "On-Site",
    level: "Senior",
    duration: "Contract",
  },
  {
    id: 11,
    image: doc,
    title: "Neurosurgeon",
    time: "2Hrs",
    location: "Nakuru, Kenya",
    desc: "Are you an experienced and skilled Neurosurgeon seeking a rewarding opportunity to contribute to cutting-edge medical care? Join our team at [Hospital/Clinic Name] and play a pivotal role in providing exceptional neurosurgical services to our patients.",
    company: "MediHeal Hospital",

    type: "On-Site",
    level: "Intern",
    duration: "Contract",
  },
  {
    id: 12,
    image: mwalimu,
    title: "Teacher",
    time: "5Hrs",
    location: "Kericho City, Kenya",
    desc: "Are you an inspiring and dedicated educator with a passion for fostering a love of learning? Join the team at Tenwek High School as a Teacher and contribute to the academic and personal development of students in a dynamic educational environment.",
    company: "Tenwek High School",

    type: "On-Site",
    level: "Intermediate",
    duration: "Full-Time",
  },
];
const Jobs = () => {
  // search
  const [searchTermTitle, setSearchTermTitle] = useState("");
  const [searchTermLocation, setSearchTermLocation] = useState("");
  const [searchTermCompany, setSearchTermCompany] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const filteredData = Data.filter(
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
              <div key={id} className="singleJob">
                <span className="singleJobSpan">
                  <h1 className="singleJobHead">{title}</h1>
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
