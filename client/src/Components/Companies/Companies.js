import React, { useEffect } from "react";
import LogoOne from "./CompaniesList/Component6.png";
import LogoTwo from "./CompaniesList/Component7.png";
import LogoThree from "./CompaniesList/Component8.png";
import LogoFour from "./CompaniesList/Component9.png";
import "./Companies.scss";
import AOS from "aos";

function Companies() {
  //Initialize Aos animation
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="scrow-d" className="companies">
      <div className="companies__wrapper">
        <h1 data-aos="fade-down" data-aos-duration="2000" className="c-header">
          Our Clients.
          <div className="h-line"></div>
        </h1>
        <div className="logos">
          <div className="con">
            <img src={LogoOne} alt="LogoOne" />
          </div>
          <div className="con">
            <img src={LogoTwo} alt="LogoTwo" />
          </div>
          <div className="con">
            <img src={LogoThree} alt="LogoThree" />
          </div>
          <div className="con">
            <img src={LogoFour} alt="LogoFour" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Companies);
