import React, { useEffect } from "react";
import "../WebDev/Webdev.scss";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import Digital from "./digital.webp";
import Neon from "../WebDev/neon.webp";
import Footer from "../../../Components/Footer/Footer";
function DigitalMarketing() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <div>
      <Main />
      <AltDesc />
      <CusDesc />
      <Footer />
    </div>
  );
}

const Main = () => {
  return (
    <div className="webdev-main">
      <img
        src={Digital}
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
              Digital Marketing
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="5000"
              className="webdevDesc-p"
            >
              Maximize your online presence and reach new customers with our
              comprehensive digital marketing services. From social media
              management to email campaigns and paid advertising, we'll help you
              connect with your target audience and drive conversions.
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
              Maximize Your Online Presence with Digital Marketing Strategies.
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="webdevDesc-p"
            >
              In today's digital age, having a strong online presence is crucial
              for any business. Our team of experts can help you develop and
              implement a comprehensive digital marketing strategy that will
              elevate your brand and increase your visibility online. From
              search engine optimization to social media advertising, we'll work
              with you to create a plan that drives results.
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
            <NavLink to="/contact">Send Us a Message</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
