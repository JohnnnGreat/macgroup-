import React from "react";
import "./SideNav.scss";
function SideNav() {
  return (
    <div className="side-nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Services</a>
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
