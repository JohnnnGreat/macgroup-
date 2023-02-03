import React, { useRef, useEffect, useState } from "react";
import "./SideNav.scss";
import { NavLink, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
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
            <li>
              {" "}
              <NavLink className="nav" onClick={setClick} to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav" onClick={setClick} to="/team">
                Team
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav" onClick={setClick} to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav" onClick={setClick} to="/services">
                Services
              </NavLink>
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
              <NavLink className="nav" onClick={setClick} to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" onClick={setClick} to="/email">
                Contact Us
              </NavLink>
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
              <NavLink className="nav" onClick={setClick} to="/branding">
                Branding
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" onClick={setClick} to="/commerce">
                E-commerce
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" onClick={setClick} to="/webdevelopment">
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" onClick={setClick} to="/appdevelopment">
                App Development
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" onClick={setClick} to="/contentwriting">
                Content Writing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav"
                onClick={setClick}
                to="/digitalmarketing"
              >
                Digital Marketing
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="home-icon">
          <HomeIcon fontSize="large" className="icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default SideNav;
