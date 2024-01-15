import React from "react";
import companyLogo from "../../Assets/plotly.png";
import companyLogo1 from "../../Assets/bokeh_light.png";
import companyLogo2 from "../../Assets/google_cloud2.png";

const Value = () => {
  return (
    <div className="motoDiv">
      <h1 className="motoQuote">
        Beyond Jobs, Building Futures - Where Talent Meets Opportunity,
        Excellence Emerges
      </h1>
      <div className="outerimgDiv">
        <div className="thirdinimgDiv">
          <div className="secondinimgDiv">
            <div className="innermostimgDiv">
              <img src={companyLogo} alt="" className="mycompanyLogo" />
            </div>
            <span className="logoText">Unlocking Doors!</span>
          </div>
          <p className="morelogoText">
            Unlocking Doors, Unleashing Potential - Your Journey to Professional
            Excellence Begins Now.
          </p>
        </div>
      </div>
      <div className="outerimgDiv">
        <div className="thirdinimgDiv">
          <div className="secondinimgDiv">
            <div className="innermostimgDiv">
              <img src={companyLogo1} alt="" className="mycompanyLogo" />
            </div>
            <span className="logoText">Unlocking Doors!</span>
          </div>
          <p className="morelogoText">
            Unlocking Doors, Unleashing Potential - Your Journey to Professional
            Excellence Begins Now.
          </p>
        </div>
      </div>
      <div className="outerimgDiv">
        <div className="thirdinimgDiv">
          <div className="secondinimgDiv">
            <div className="innermostimgDiv">
              <img src={companyLogo2} alt="" className="mycompanyLogo" />
            </div>
            <span className="logoText">Unlocking Doors!</span>
          </div>
          <p className="morelogoText">
            Unlocking Doors, Unleashing Potential - Your Journey to Professional
            Excellence Begins Now.
          </p>
        </div>
      </div>
      <div className="card">
        <div>
          <h1 className="cardText">Ready to switch to a career?</h1>
          <h2 className="morecardText">Let's get started! </h2>
          <button className="cardBtn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Value;
