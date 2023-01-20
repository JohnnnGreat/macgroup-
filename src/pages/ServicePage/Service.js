import React from "react";
import "./Service.scss";
function Service() {
  return (
    <div className="service">
      <div className="bg">
        <div className="service__wrapper">
          <div className="service__hero">
            <div className="intrs-yellow"></div>
            <div className="intrs-pink"></div>
            <div className="service__hero__first">
              <div className="line"></div>
              <h1 className="title">SERVICE</h1>
            </div>
            <div className="service__hero__second">
              <h1 className="tag">
                HAVE A SHOT OR OUR <span className="bold-s">SERVICES</span>
              </h1>
            </div>
          </div>
          <h1 className="bg-overlay">MACGROUP</h1>
        </div>
      </div>

      <Main />
    </div>
  );
}

//Main Services Component
const Main = () => {
  return (
    <div className="service-main">
      <div className="service__main__wrapper">
        <h1 className="main-text">
          LET’S KNOW THE SERVICE OF INTERESTT TO YOU.
        </h1>
        <p className="main-desc">
          WE ARE A BIG DIGITAL COMPANY THAT HELPS BRINGS TO REALITY DIGITAL
          SOLUTIONS.
        </p>
      </div>
    </div>
  );
};

export default Service;
