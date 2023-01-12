import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="h">
      <div className="h__wrapper">
        <div className="h-text">
          <h1 className="h-text-f puff-in-center">EXPERT DIGITAL</h1>
          <h1 className="h-text-s fade-in-bottom">SOLUTIONS</h1>
        </div>
        <div className="h-desc">
          <div className="h-desc-wrap">
            <h1 className="h-desc-l-one fade-in-one">
              WE ARE A FULL-SERVICE DIGITAL AGENCY OFFERING A S WIDE RANGE
            </h1>
            <h1 className="h-desc-l-two">
              OF SERVICES, INCLUDING CUSTOM APP DEVELOPMENT, WEB DESIGN
            </h1>
            <h1 className="h-desc-l-three">
              AND DEVELOPMENT, E-COMMERCE SOLUTION, AND COMPREHENSIVE
            </h1>
            <h1 className="h-desc-l-four">DIGITAL MARKETING CAMPAIGNS</h1>
          </div>
          <div className="con">
            <div className="h-strt-btn rotate-in-center">
              <h2 className="strt-prj">Start a project</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
