import React, { useRef } from "react";
import "./SideNav.scss";
import { NavLink, Link } from "react-router-dom";
function SideNav() {
  const navSideBar = useRef(null);
  const removeSideNav = () => {
    navSideBar.current.classList.add("remove");
  };
  return (
    <div ref={navSideBar} onClick={removeSideNav} className="side-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
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
