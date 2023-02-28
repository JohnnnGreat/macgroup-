import React, { useEffect } from "react";
import "./Brief.scss";
import AOS from "aos";
import { Link } from "react-router-dom";

function Brief() {
  //Initialize Aos animation
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="brief">
      <div className="brief__wrapper">
        <div className="brief__wrapper__bg-text">
          <div className="first-section">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              Read Our
            </h1>
          </div>
          <div className="second-section">
            <h1 data-aos="fade-left" data-aos-duration="1000">
              Brief
            </h1>
            <h1 className="brief-str">Brief</h1>
          </div>
        </div>
        <div className="brief__wrapper__main">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="first-sec"
          >
            <div className="circle-text">
              <h1>Who Are</h1>
            </div>
            <h1 className="main-text">We?</h1>
          </div>
          <div className="second-sec">
            <p data-aos="fade-up" data-aos-duration="1000" className="text-one">
              At MacGroup, we are a team of experienced professionals who are
              passionate about helping businesses succeed in the digital world.
              We have a diverse range of skills and expertise, including
              branding, web development, digital marketing, and ecommerce.
            </p>
            <p className="text-two" data-aos="fade-up" data-aos-duration="1000">
              We believe that every business is unique, and we take the time to
              understand our clients' goals, needs, and target audience. We then
              use our expertise to develop customized solutions that help our
              clients achieve their objectives.
            </p>
            <div data-aos="fade-up" data-aos-duration="1000" className="btn">
              <Link to="/about-us">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Brief);
