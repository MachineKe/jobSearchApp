import React, { useContext, useRef, useEffect } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Posting/Client/Context/auth";
import { MdOutlineHome } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { MdDynamicFeed } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Header from '../Header/Header';
const NewNav = () => {
 
  return (
    <div className="newNav">
      <div className='headerInNav'>
        <Header/>
      </div>
       <li className="">
                <Link className="link" to="/">
                  
                  <div className=""><MdOutlineHome /></div>
                </Link>
      </li>
      <li className="">
                <Link className="link" to="/companies">
                  
                  <div className=""><GoOrganization /></div>
                </Link>
      </li>
       <li className="">
                <Link className="link" to="/posts">
                  
                  <div className=""><MdDynamicFeed /></div>
                </Link>
      </li>
       <li className="">
                <Link className="link" to="/chatalt1">
                  
                  <div className=""><IoChatboxEllipsesOutline /></div>
                </Link>
      </li>
      <li className="">
                <Link className="link" to="/login">
                  
                  <div className=""><CgProfile /></div>
                </Link>
      </li>
   </div> 

  )
};

export default NewNav;

