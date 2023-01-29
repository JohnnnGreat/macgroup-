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
      <ContactUs
        title={"Contact Us"}
        shadow="Contact Us"
        desc="We Want To Hear From You!!!"
      />
      <Footer />
    </>
  );
};

export default Email;
