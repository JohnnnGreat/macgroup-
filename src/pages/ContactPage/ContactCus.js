import React from "react";
import { ContactUs } from "../ServicePage/Service";
import Location from "../LocationMap/Location.jsx";

import Footer from "../../Components/Footer/Footer";
function ContactCus() {
  return (
    <>
      <Location />
      <div>
        {/* <ContactUs
          title="Contact Us"
          shadow="Contact Us"
          desc="Fill the form the form below to request a custom package"
        /> */}
      </div>
      <Footer />
    </>
  );
}

export default ContactCus;
