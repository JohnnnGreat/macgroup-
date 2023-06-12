import React, { useEffect } from "react";
import "../WebDev/Webdev.scss";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import Commerce from "./Commerce.webp";
import Neon from "../WebDev/neon.webp";
import Footer from "../../../Components/Footer/Footer";
function BrandingP() {
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
        src={Commerce}
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
              E-Commerce
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="5000"
              className="webdevDesc-p"
            >
              Looking to take your business online? Our eCommerce solutions are
              designed to help you create a seamless and efficient online
              shopping experience for your customers. With our eCommerce
              services, you'll be able to easily manage your inventory, process
              payments, and fulfill orders.
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
              The Ultimate Guide to Boosting Online Sales: Ecommerce Best
              Practices
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="webdevDesc-p"
            >
              Our guide will cover a wide range of topics, from website
              optimization and product presentation, to marketing and
              advertising strategies. We will help you create a visually
              appealing and user-friendly website that will attract and retain
              customers. We will also provide you with tips on how to optimize
              your product listings, and strategies to increase your visibility
              in search engines and social media platforms.
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
              Elevating the Customer Journey: Proven Strategies for Ecommerce
              Success
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="webdev-desc"
          >
            <p className="webdevDesc-p">
              We understand that in today's digital marketplace, the customer
              experience is more important than ever. That's why our team of
              experts is dedicated to providing you with the tools and
              strategies you need to create a seamless customer journey that
              will encourage repeat purchases, build brand loyalty, and drive
              revenue growth.
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

export default BrandingP;
