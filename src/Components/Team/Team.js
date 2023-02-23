import React, { useEffect } from "react";
import "./Team.scss";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import Timothy from "./imagesteam//MainTimothy.jpg";
import Akin from "./imagesteam/Timothy.jpg";
import Babson from "./imagesteam/BABSON.png";
import CEO from "./imagesteam/CEoEdit.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
function Team() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="team">
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
          <div className="container-mem">
            <div className="members-cont">
              <img src={CEO} alt="" />
              <div className="card">
                <h1 className="tag">Samuel Adiele</h1>
                <p className="m-desc ">Chief Executive Officer</p>
                <div className="s-icons">
                  <LinkedInIcon fontSize="medium" />
                  <MailIcon />
                </div>
              </div>
            </div>
            <div className="members-cont">
              <img src={Timothy} alt="" />
              <div className="card">
                <h1 className="tag ">Zinwota Timothy</h1>
                <p className="m-desc ">Chief Technical Officer</p>
              </div>
            </div>
            <div className="members-cont">
              <img src={Akin} alt="" />
              <div className="card">
                <h1 className="tag ">Akinwumi Ogundipe</h1>
                <p className="m-desc ">Lead designer</p>
              </div>
            </div>
            <div className="members-cont">
              <img src={Babson} alt="" />
              <div className="card">
                <h1 className="tag">Babatunde Samson</h1>
                <p className="m-desc ">Head of Content</p>
              </div>
            </div>
          </div>
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
