import React from "react";
import { ContactUs } from "../ServicePage/Service";
import Location from "../LocationMap/Location.jsx";

function ContactCus() {
  return (
    <>
      <Location />
      <div>
        <ContactUs
          title={"Request A Quote"}
          shadow="Contact Us"
          desc="You have requested for a custom application, feel freen to send us a message"
        />

        <h1>Hello</h1>
      </div>
    </>
  );
}

export default ContactCus;
