import React, { useEffect } from "react";
import "./Footer.scss";
import AOS from "aos";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="footer">
      <div className="footer__wrapper ">
        <div className="logo-grid">
          <h1 data-aos="fade-right" data-aos-duration="2000" className="logo-t">
            MACGROUP
          </h1>
          <h1 data-aos="fade-left" data-aos-duration="2000" className="logo-s">
            INTERNATIONAL TECH SERVICE
          </h1>
        </div>

        <div className="footer-grid">
          <div className="info">
            <h1 className="contact-f">CONTACT</h1>
            <h1 className="physical-address">
              6278 Springpark ave. Ladera Heights, Los Angeles, California 90056
            </h1>
            <h1>+1(310) 490-3772</h1>
            <h1>info@macgrouptech.com</h1>
          </div>
          <div className="services">
            <h1 className="services-f">OUR SERVICES</h1>

            <ul>
              <li>
                <a href="/">E-Commerce</a>
              </li>
              <li>
                <a href="/">Web Development</a>
              </li>
              <li>
                <a href="/">Branding</a>
              </li>
              <li>
                <a href="/">Digital Marketing</a>
              </li>
              <li>
                <a href="/  ">Mobile App Development</a>
              </li>
            </ul>
          </div>
          <div className="blog">
            <h1 className="blog-f">BLOG</h1>
            <p className="desc">
              We have a whole library of related blog post, that may suit your
              interests
            </p>
            <a className="blog-btn" href="/">
              Go To Blog
            </a>
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
                <a href="/">Career</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
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
