import React, { useEffect } from "react";
import "./Footer.scss";
import AOS from "aos";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="footer">
      <div className="footer__wrapper ">
        <div className="logo-grid">
          <h1 data-aos="fade-right" data-aos-duration="2000" className="logo-t">
            Macgroup
          </h1>
          <h1 data-aos="fade-left" data-aos-duration="2000" className="logo-s">
            International Tech Services.
          </h1>
        </div>

        <div className="footer-grid">
          <div className="info">
            <h1 className="contact-f">CONTACT</h1>
            <h1 className="physical-address">
              5716, Alba Street. <br />
              Los Angeles 90058
            </h1>
            <h1>+1 (310) 490-3772</h1>
            <h1>info@macgrouptech.com</h1>
          </div>
          <div className="services">
            <h1 className="services-f">OUR SERVICES</h1>

            <ul>
              <li>
                <Link to="/commerce">E-Commerce</Link>
              </li>
              <li>
                <Link to="/webdevelopment">Web Development</Link>
              </li>
              <li>
                <Link to="/branding">Branding</Link>
              </li>
              <li>
                <Link to="/digitalmarketing">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/appdevelopment">App Development</Link>
              </li>
              <li>
                <Link to="/contentwriting">Content Writing</Link>
              </li>
            </ul>
          </div>
          <div className="blog">
            <h1 className="blog-f">SOCIAL MEDIA</h1>
            {/* <p className="desc">
              We have a whole library of tech related blog posts that may suit
              your interests. Read for more insights to the latest technologies
              and our services.
            </p>
            <a className="blog-btn" href="/">
              Go To Blog
            </a> */}
            <div className="sm-cons">
              <a href="" target="_blank">
                <FacebookIcon className="icons-sm" fontSize="medium" />
              </a>
              <a target="_blank" href="https://www.instagram.com/invites/contact/?i=1xq25m5xrfqwm&utm_content=qwqkijj">
                {" "}
                <InstagramIcon className="icons-sm" fontSize="medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="legal">
        <div className="line-f"></div>
        <div className="legal-details">
          <div className="legal-wrapper">
            <h1 className="legal-t">Legal</h1>
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/termsandconditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="line-f"></div>
      </div>
    </div>
  );
}

export default Footer;
