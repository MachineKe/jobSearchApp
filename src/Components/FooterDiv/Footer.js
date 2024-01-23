import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="logoDiv">
        <p1 className="footerText">
          <strong>Job</strong> Search App
        </p1>
      </div>
      <p className="morefooterText">
        Where Talent Meets Opportunity - Fueling Your Career Aspirations with
        Every Interaction.
      </p>
      <div className="footerContent">
        <span className="titleDiv">Company</span>
        <div className="footerlist">
          <li>About Us</li>
          <li>Features</li>
          <li>News</li>
          <li>FAQ</li>
        </div>
      </div>
      <div className="footerContent">
        <span className="titleDiv">Resources</span>
        <div className="footerlist">
          <li>Account</li>
          <li>Support Centre</li>
          <li>Resources</li>
        </div>
      </div>
      <div className="footerContent">
        <span className="titleDiv">Support</span>
        <div className="footerlist">
          <li>Events</li>
          <li>Promo</li>
          <li>Careers</li>
        </div>
      </div>
      <div className="contactInfo">

        <a
          href="mailto:markarapsoi72@gmail.com"
          className="contactIcon"
          target="_blank"
          rel="noreferrer"
        >
          <MdOutgoingMail />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-kiprotich-a95a8a241/"
          className="contactIcon"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />{" "}
        </a>
        <a
          href="https://github.com/MachineKe"
          className="contactIcon"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
