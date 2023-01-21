import React, { useEffect, useRef } from "react";
import "./Team.scss";
import AOS from "aos";
import { NavLink } from "react-router-dom";
function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="team" id="team">
      <div className="team__wrapper">
        <div className="team__wrapper__bg-text">
          <div className="first-section">
            <h1 data-aos="fade-left" data-aos-duration="2000">
              We Are More
            </h1>
          </div>
          <div className="second-section">
            <h1
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              Than A Team
            </h1>
          </div>
        </div>
        <div className="desc" data-aos="fade-up" data-aos-duration="2000">
          <p>
            At MacGroup, we are proud to have a team of experienced
            professionals who are dedicated to delivering top-quality digital
            solutions to our clients.
          </p>
        </div>
      </div>
      <div className="team-bar">
        <h1>Meet Our Team</h1>
      </div>
      <div className="team__wrapper">
        {" "}
        <div className="team-icon">
          <div className="team-one"></div>
          <div className="team-one"></div>
        </div>
        <div className="line"></div>
        <div className="contact">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="start-project"
          >
            <h1>Start a Project</h1>
          </div>
          <div className="contact-us">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="cont-us">
              Contact Us
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="2000" className="sub">
              Lets start your next digital project
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="linetwo"
          ></div>
          <div data-aos="fade-up" data-aos-duration="2000" className="email">
            <NavLink className="email-btn" to="/email">
              Email
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
