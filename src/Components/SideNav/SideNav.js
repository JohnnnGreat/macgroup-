import React from "react";
import "./SideNav.scss";
import { Link } from "react-router-dom";
function SideNav() {
  return (
    <div className="side-nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/Blog">Services</Link>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Team</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>

      <div className="contact">
        <a href="/" className="contact-us">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default SideNav;
