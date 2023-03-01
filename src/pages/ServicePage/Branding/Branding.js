import React, { useEffect } from "react";
import "../WebDev/Webdev.scss";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import Branding from "./branding.jpg";
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
        src={Branding}
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
              Branding
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="5000"
              className="webdevDesc-p"
            >
              Your brand is your business's most valuable asset, and it's
              crucial that it reflects the values and personality of your
              company. Our branding services will help you create a unique and
              consistent brand identity that sets you apart from your
              competitors.
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
              Creating a Unique Brand Identity: How to Stand Out in a Crowded
              Market
            </h1>
          </div>
          <div className="webdev-desc">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="webdevDesc-p"
            >
              We specialize in helping businesses create unique brand identities
              that stand out in today's crowded market. We understand that in
              today's competitive landscape, it can be difficult to make your
              brand stand out from the crowd. But with our expert guidance and
              proven strategies, we can help you develop a strong, distinct
              brand identity that will capture the attention of potential
              customers.
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
              Maximizing Your Online Presence: Tips for Building a Strong
              Digital Brand
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="webdev-desc"
          >
            <p className="webdevDesc-p">
              In today's digital age, having a strong online presence is crucial
              for any business. Your online presence is often the first
              impression that potential customers will have of your brand, so
              it's important to make sure it's a good one. That's where we come
              in. Our team of digital marketing experts will provide you with
              the tips and strategies you need to maximize your online presence
              and build a strong digital brand. We will help you create a
              cohesive and visually appealing website, and optimize it for
              search engines to increase visibility.
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
