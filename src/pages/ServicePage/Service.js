import React, { useEffect, useState, useRef } from "react";

import "./Service.scss";
import { animateScroll as scroll } from "react-scroll";
import emailjs from "@emailjs/browser";
import Footer from "../../Components/Footer/Footer.js";
import AOS from "aos";

import { Link } from "react-router-dom";
import ContactMain from "../../Components/Contact/ContactMain";
import App from "./app.svg";
import Marketing from "./marketing.svg";
import Commerce from "./Commerce.svg";
import Design from "./Design.svg";
import Web from "./web.svg";
import Writing from "./writing.svg";
function Service() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <Hero
        headerText={
          <>
            Have a look at our
            <span className="bold-s"> Services.</span>{" "}
          </>
        }
      />
      <div className="service__main">
        <div className="service__main__wrapper">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="main-text"
          >
            Discover the services that interest you.
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="main-desc"
          >
            We are a leading digital company that helps bring your digital
            solutions to reality.
          </p>
        </div>
        <svg
          className="svg-b"
          width="159"
          height="500"
          viewBox="0 0 205 665"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="102.978"
            y="9"
            width="17"
            height="531"
            rx="8.5"
            transform="rotate(30.3092 102.978 9)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="77.9775"
            y="116"
            width="17"
            height="531"
            rx="8.5"
            transform="rotate(30.3092 77.9775 116)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="147.405"
            width="17"
            height="111.767"
            rx="8.5"
            transform="rotate(30.3092 147.405 0)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="189.405"
            y="77"
            width="17"
            height="111.767"
            rx="8.5"
            transform="rotate(30.3092 189.405 77)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="131.978"
            y="99"
            width="17"
            height="531"
            rx="8.5"
            transform="rotate(30.3092 131.978 99)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="117.978"
            y="198"
            width="17"
            height="531"
            rx="8.5"
            transform="rotate(30.3092 117.978 198)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
        </svg>
      </div>
      {/* <ServicesOne /> */}
      <ServiceSection
        titleOne={"Digital Marketing"}
        descOne={`Maximize your online presence and reach new customers with our
              comprehensive digital marketing services. From social media
              management to email campaigns and paid advertising, we'll help you
              connect with your target audience and drive conversions.`}
        imageOne={Marketing}
        routeOne="/digitalMarketing"
        titleTwo={"App Development"}
        descTwo={`In today's digital world, having a mobile app is essential to
        stay ahead of the competition. Our app development services will
        help you create a custom mobile app that is tailored to your
        business needs and goals.`}
        imageTwo={App}
        routeTwo="/appdevelopment"
      />

      <ServiceSpecial
        titleOne={"Web Development"}
        descOne={`Your website is the first impression that potential customers will
        have of your business, so it's crucial that it makes a good one.
        We offer professional web development services that will help you
        create a website that is not only visually stunning but also
        highly functional and easy to navigate.`}
        imageOne={Web}
        routeOne="/webdevelopment"
        titleTwo={"Content Writing"}
        descTwo={`High-quality content is essential for any business looking to
        establish a strong online presence. Our content writing services
        will help you create compelling, informative, and engaging
        content that will help you connect with your target audience.`}
        imageTwo={Writing}
        routeTwo="/writing"
      />
      <ServiceSection
        titleOne={"E-Commerce"}
        descOne={`Looking to take your business online? Our eCommerce solutions
        are designed to help you create a seamless and efficient online
        shopping experience for your customers. With our eCommerce
        services, you'll be able to easily manage your inventory,
        process payments, and fulfill orders.`}
        imageOne={Commerce}
        routeOne="/commerce"
        titleTwo={"Branding"}
        descTwo={`Your brand is your business's most valuable asset, and it's
        crucial that it reflects the values and personality of your
        company. Our branding services will help you create a unique and
        consistent brand identity that sets you apart from your
        competitors.`}
        imageTwo={Design}
        routeTwo="/branding"
      />
      {/* <ContactUs
        title="Contact Us"
        shadow="Contact Us"
        desc="Send us a message!!!"
      /> */}

      <ContactMain />
      <Footer />
    </>
  );
}

//Pages Header

const ServiceSection = ({
  titleOne,
  descOne,
  imageOne,
  routeOne,
  titleTwo,
  descTwo,
  imageTwo,
  routeTwo,
}) => {
  return (
    <div className="service-p">
      <div className="service-p__wrapper">
        <div className="service-main">
          <img className="heartbeat" src={imageOne} alt="" />
          <div className="text-section">
            <h1
              data-aos-duration="1000"
              data-aos="fade-up"
              className="header-se"
            >
              {titleOne}
            </h1>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="line-div"
            ></div>
            <p
              data-aos-duration="1000"
              data-aos="fade-up"
              className="description-se"
            >
              {descOne}
            </p>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="dmkt-btn"
            >
              <Link className="link" to={routeOne}>
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="service-main">
          <div className="text-section">
            <h1
              data-aos-duration="1000"
              data-aos="fade-up"
              className="header-se"
            >
              {titleTwo}
            </h1>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="line-div"
            ></div>
            <p
              data-aos-duration="1000"
              data-aos="fade-up"
              className="description-se"
            >
              {descTwo}
            </p>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="dmkt-btn"
            >
              <Link className="link" to={routeTwo}>
                Read More
              </Link>
            </div>
          </div>
          <img className="heartbeat" src={imageTwo} alt="" />
        </div>
      </div>
    </div>
  );
};
export function Hero({ headerText }) {
  return (
    <>
      <div className="service">
        <div className="service__wrapper">
          <div className="service__hero">
            <div className="intrs-pink"></div>

            <div className="service__hero__second">
              <h1 className="tag" data-aos="fade-down" data-aos-duration="2000">
                {headerText}
              </h1>
            </div>
            <div className="gradient__line-s"></div>
            <div className="gradient__line-s"></div>
          </div>
          <h1 className="bg-overlay">MACGROUP</h1>
        </div>
      </div>
    </>
  );
}
//Services Section in details

const ServiceSpecial = ({
  titleOne,
  descOne,
  imageOne,
  routeOne,
  titleTwo,
  descTwo,
  imageTwo,
  routeTwo,
}) => {
  return (
    <div className="serviceSpe-p">
      <div className="serviceSpe-p__wrapper">
        <div className="service-main">
          <img className="heartbeat" src={imageOne} alt="" />
          <div className="text-section">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="header-se"
            >
              {titleOne}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="line-div"
            ></div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="description-se"
            >
              {descOne}
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="dmkt-btn"
            >
              <Link className="link" to={routeOne}>
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="service-main">
          <div className="text-section">
            <h1
              data-aos-duration="1000"
              data-aos="fade-up"
              className="header-se"
            >
              {titleTwo}
            </h1>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="line-div"
            ></div>
            <p
              data-aos-duration="1000"
              data-aos="fade-up"
              className="description-se"
            >
              {descTwo}
            </p>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="dmkt-btn"
            >
              <Link className="link" to={routeTwo}>
                Read More
              </Link>
            </div>
          </div>
          <img className="heartbeat" src={imageTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Service);
