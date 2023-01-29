import React, { useEffect } from "react";
import "../WebDev/Webdev.scss";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import AppDev from "app.webp";
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
            <a href="#alt-desc">Find More</a>
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
              Revolutionize Your Business with the Power of Digital Marketing
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="webdev-desc"
          >
            <p className="webdevDesc-p">
              Are you ready to take your business to the next level? Our digital
              marketing services can help you do just that. From website design
              and development to email marketing and analytics, we'll work with
              you to create a customized digital marketing plan that takes your
              business to new heights. Don't get left behind in the digital age,
              let us help you revolutionize your business and stand out from the
              competition.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="explore-btn"
          >
            <NavLink to="/email">Send Us a Message</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
