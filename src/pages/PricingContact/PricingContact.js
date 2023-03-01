import Footer from "../../Components/Footer/Footer";
import MainContact from "../../Components/Contact/ContactPr.js";
import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Location from "../LocationMap/Location.jsx";
import "./PricingContact.scss";
function PricingContact() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  //Get Direction function
  const getDirection = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((position) => {
      const LATITUDE = position.coords.latitude;
      const LONGITUDE = position.coords.longitude;
      const URL = `https://www.google.com/maps/dir/?api=1&destination=33.9914619,-118.238958&origin=${LATITUDE},${LONGITUDE}`;
      window.open(URL, "_blank");
    });
  };
  return (
    <>
      <div className="map-wrap">
        <Location />
        <a href="#" className="get-dir" onClick={getDirection}>
          Get Direction
        </a>
      </div>
      {/* <img className="img-pr" src={Phone} alt="phone device" /> */}
      <MainContact />
      <Footer />
    </>
  );
}

export default PricingContact;
