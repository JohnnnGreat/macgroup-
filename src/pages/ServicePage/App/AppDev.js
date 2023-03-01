import React, { useEffect } from "react";
import "../WebDev/Webdev.scss";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import AppDev from "./app.webp";
import Neon from "../WebDev/neon.webp";
function AppDevelopment() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Main />
      <CusDesc />
    </div>
  );
}

const Main = () => {
  return (
    <div className="webdev-main">
      <img
        src={AppDev}
        alt="Web development"
        className="webdev-img kenburns-top"
      />
      <div className="webdev-main__wrapper">
        <div className="webdev-first">
          <div className="webdev-header">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="webDev-txt"
            >
              App Development
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="5000"
              className="webdevDesc-p"
            >
              In today's digital world, having a mobile app is essential to stay
              ahead of the competition. Our app development services will help
              you create a custom mobile app that is tailored to your business
              needs and goals.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="explore-btn"
          >
            <a href="#cus-desc">Find More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CusDesc = () => {
  return (
    <div id="cus-desc" className="cus-desc">
      <div className="cus-desc__wrapper">
        <div className="webdev-first">
          <div className="webdev-header">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="webDev-txt"
            >
              Unlock the Potential of Your Business with Our App Development
              Services
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="webdev-desc"
          >
            <p className="webdevDesc-p">
              Are you ready to unlock the full potential of your business? Our
              app development services can help you do just that. Our team of
              developers have the skills and expertise to create an app that is
              not only visually stunning but also fully functional. From iOS and
              Android to augmented reality and artificial intelligence, we can
              help you bring your app vision to life. Let us help you take your
              business to new heights with the power of custom app development.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="explore-btn"
          >
            <NavLink to="/contact">Send Us a Message</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
