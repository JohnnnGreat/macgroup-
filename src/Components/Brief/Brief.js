import React, { useEffect } from "react";
import "./Brief.scss";
import AOS from "aos";

function Brief() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="brief">
      <div className="brief__wrapper">
        <div className="brief__wrapper__bg-text">
          <div className="first-section">
            <h1 data-aos="fade-up" data-aos-duration="2000">
              Read Our
            </h1>
          </div>
          <div className="second-section">
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Brief
            </h1>
          </div>
        </div>
        <div className="brief__wrapper__main">
          <div data-aos="fade-right" className="first-sec">
            <div className="circle-text">
              <h1>Who Are</h1>
            </div>
            <h1 className="main-text">We?</h1>
          </div>
          <div className="second-sec">
            <p data-aos="fade-up" data-aos-duration="2000" className="text-one">
              At MacGroup, we are a team of experienced professionals who are
              passionate about helping businesses succeed in the digital world.
              We have a diverse range of skills and expertise, including
              branding, web development, digital marketing, and ecommerce.
            </p>
            <p className="text-two" data-aos="fade-up" data-aos-duration="2000">
              We believe that every business is unique, and we take the time to
              understand our clients' goals, needs, and target audience. We then
              use our expertise to develop customized solutions that help our
              clients achieve their objectives.
            </p>
            <div data-aos="fade-up" data-aos-duration="2000" className="btn">
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="core-values">
        <div className="move">
          <h1>Innovative</h1>
          <h1>Efficient</h1>
          <h1>Reliable</h1>
          <h1>Trustworthy</h1>
        </div>
      </div>
    </div>
  );
}

export default Brief;
