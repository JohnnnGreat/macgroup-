import React, { useRef } from "react";
import "./SideNav.scss";
import { NavLink } from "react-router-dom";
function SideNav() {
  const navSideBar = useRef(null);
  const removeSideNav = () => {
    navSideBar.current.classList.add("remove");
  };
  return (
    <div className="side-nav">
      <div className="side-nav__wrapper nav-grid">
        <div className="item">
          <h1 className="items-tag">Quick Links</h1>
          <ul>
            <li>
              {" "}
              <NavLink className="nav" to="/">
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav" to="/team">
                Team
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="nav" to="/services">
                Services
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="item">
          <div className="items-tag">About Us</div>
          <ul>
            <li>
              <NavLink className="nav" to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="nav" to="/email">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="item"></div>
      </div>
    </div>
  );
}

export default SideNav;
