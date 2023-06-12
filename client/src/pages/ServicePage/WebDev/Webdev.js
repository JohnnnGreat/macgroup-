import React, { useEffect } from "react";
import "./Webdev.scss";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import WebDevImage from "./webDev.jpg";
import Neon from "./neon.webp";
function Webdev() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Main />
      <AltDesc />
      <CusDesc />
    </div>
  );
}

export default Webdev;

const Main = () => {
  return (
    <div className="webdev-main">
      <img
        src={WebDevImage}
        alt="Web development"
        className="webdev-img kenburns-top"
      />
      <div className="webdev-main__wrapper">
        <div className="webdev-first">
          <div className="webdev-header">
            <h1
              data-aos="fade-down"
              // data-aos-duration="2000"
              className="webDev-txt"
            >
              Web Development
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="5000"
              className="webdevDesc-p"
            >
              Your website is the first impression that potential customers will
              have of your business, so it's crucial that it makes a good one.
              We offer professional web development services that will help you
              create a website that is not only visually stunning but also
              highly functional and easy to navigate.
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

const AltDesc = () => {
  return (
    <div id="alt-desc" className="alt-desc">
      <img src={Neon} alt="Web development" className="s-img kenburns-top" />

      <div className="alt-desc__wrapper">
        <div className="webdev-first">
          <div className="webdev-header">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="webDev-txt"
            >
              Expert Website Design and Development for All Types of Businesses
              - MacGroup
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="webdevDesc-p"
            >
              At MACGROUP, we specialize in building websites of all types. From
              small personal blogs to large e-commerce platforms, we can create
              a custom website tailored to your specific needs. Our team of
              experienced designers and developers use the latest technologies
              to ensure your website is visually appealing, user-friendly, and
              optimized for search engines.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="explore-btn"
          >
            <a href="#cus-desc">Next</a>
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
              Custom Website Solutions for Every Business - MacGroup
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="webdev-desc"
          >
            <p className="webdevDesc-p">
              Our team of experienced designers and developers use the latest
              technologies to build visually appealing, user-friendly, and
              search engine optimized websites. We understand that every
              business has its own unique needs and goals, which is why we take
              the time to understand your vision and create a website tailored
              to your specific requirements.
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
