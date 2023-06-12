import { Hero } from "../ServicePage/Service.js";
import React, { useEffect } from "react";
import "../ServicePage/Service.scss";
import { animateScroll as scroll } from "react-scroll";
import "./About.scss";
import Footer from "../../Components/Footer/Footer.js";
function About() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <Hero headerText={<>About Us</>} />
      <div className="about">
        <div className="about__wrapper">
          <p className="text">
            MacGroup International Tech Services have just one goal - to provide
            solutions to all the technological and business needs of our
            clients. To achieve this, we make use of cutting edge technology and
            world class expertise to provide innovative solutions, with a
            commitment to helping our clients reach their goals with efficiency
            and reliability.
          </p>

          <p className="text">
            Our branding services help individuals and businesses create the
            perfect brand; a brand that matches their values, vision, mission
            and would connect them with the right audience and customers.
          </p>
          <p className="text">
            Also, our software and data management services provide world class
            solutions guaranteed to help your business scale and attain
            sustainable and rapid growth.
          </p>
          <p className="text">
            We will collaborate with you to provide your customers with a
            seamless shopping experience and to help you increase sales.
            Finally, our branding services will assist you in developing a
            strong and consistent brand identity that will help you stand out in
            the crowded digital space.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
