// SearchBar.js
import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch, placeholder }) => {
  return (
    <form action="">
      <div className="firstDiv">
        <div className="byJob">
          <div className="icon">
            <IoBriefcaseOutline />

            <input
              type="search"
              className="input"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="byCompany">
          <div className="icon">
            <BsHouseDoor />
            {/* Similar structure for other search types */}
          </div>
        </div>
        <div className="byLocation">
          <div className="icon">
            <CiLocationOn />
            {/* Similar structure for other search types */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
