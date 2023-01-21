import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "../pages/ServicePage/Service.scss";
import Footer from "../Components/Footer/Footer.js";
import { ContactUs } from "../pages/ServicePage/Service";
import { animateScroll as scroll } from "react-scroll";
const Email = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Email;
