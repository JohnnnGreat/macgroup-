import React, { useEffect } from "react";
import "../WebDev/Webdev.scss";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import AppDev from "./contentw.jpg";

import Footer from "../../../Components/Footer/Footer";
function ContentWriting() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Main />
      <CusDesc />
      <Footer />
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
              Content Writing
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="5000"
              className="webdevDesc-p"
            >
              High-quality content is essential for any business looking to
              establish a strong online presence. Our content writing services
              will help you create compelling, informative, and engaging content
              that will help you connect with your target audience.
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
              Unlocking the Secrets of Successful Content Marketing
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="webdev-desc"
          >
            <p className="webdevDesc-p">
              Creating high-quality, engaging content is essential for any
              business looking to establish a strong online presence. However,
              with so much content being produced on a daily basis, standing out
              from the crowd can be a challenge. In this article, we'll explore
              some of the key strategies and techniques that can help you create
              content that resonates with your audience and drives results.
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

export default ContentWriting;
