import React, { useEffect } from "react";
import "./SideNav.scss";
import { Link } from "react-router-dom";

import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";

function SideNav({ Toggle }) {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);

  //Close navigation for click events
  function setClick() {
    Toggle();
  }

  return (
    <div className="side-nav">
      <div className="side-nav__wrapper nav-grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="item">
          <h1 className="items-tag">Quick Links</h1>
          <ul>
            <li>
              {" "}
              <Link className="nav" onClick={setClick} to="/">
                Home
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link className="nav" onClick={setClick} to="/blog">
                Blog
              </Link>
            </li> */}

            <li>
              {" "}
              <Link className="nav" onClick={setClick} to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav" onClick={setClick} to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="item"
        >
          <div className="items-tag">About Us</div>
          <ul>
            <li>
              <Link className="nav" onClick={setClick} to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav" onClick={setClick} to="/email">
                Information
              </Link>
            </li>
            <li>
              <Link className="nav" onClick={setClick} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="item"
        >
          <div className="items-tag">Service</div>
          <ul>
            <li>
              <Link className="nav" onClick={setClick} to="/branding">
                Branding
              </Link>
            </li>
            <li>
              <Link className="nav" onClick={setClick} to="/commerce">
                E-commerce
              </Link>
            </li>
            <li>
              <Link className="nav" onClick={setClick} to="/webdevelopment">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="nav" onClick={setClick} to="/appdevelopment">
                App Development
              </Link>
            </li>
            <li>
              <Link className="nav" onClick={setClick} to="/contentwriting">
                Content Writing
              </Link>
            </li>
            <li>
              <Link className="nav" onClick={setClick} to="/digitalmarketing">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link to="/" className="home-icon">
          <HomeIcon fontSize="large" className="icon" />
        </Link> */}
      </div>
    </div>
  );
}

export default React.memo(SideNav);
