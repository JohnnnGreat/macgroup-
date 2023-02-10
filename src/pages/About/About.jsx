import { Hero } from "../ServicePage/Service.js";
import "../ServicePage/Service.scss";
import "./About.scss";
import Footer from "../../Components/Footer/Footer.js";
function About() {
  return (
    <>
      <Hero
        headerText={
          <>
            Read Our
            <span className="bold-s"> About.</span>{" "}
          </>
        }
      />

      <div className="about">
        <div className="about__wrapper">
          <p className="text">
            MacGroup specializes in developing digital solutions that help
            organizations survive in today's ever-changing digital world. Our
            skilled staff is committed to offering high-quality online services.
            development, digital marketing, e-commerce, and branding services
            that help propel your company forward.
          </p>

          <p className="text">
            Our web development services will assist you in creating a website
            that is not only visually appealing but also user-friendly and
            search engine optimized. We use cutting-edge technologies to ensure
            that your website is responsive and accessible on any device.
          </p>
          <p className="text">
            We offer a digital service that will help you reach your target
            audience and drive more traffic to your website. We use a
            data-driven approach to create and execute effective campaigns that
            will help you increase your online visibility and generate more
            leads.
          </p>
          <p className="text">
            We will collaborate with you to provide your customers with a
            seamless shopping experience and to help you increase sales.
            Finally, our branding services will assist you in developing a
            strong and consistent brand identity that will help you stand out in
            the crowded digital space.
          </p>
          <p className="text">
            We will collaborate with you to define your brand's message, create
            a visual identity, and develop a brand strategy to help you achieve
            your business objectives. MacGroup is dedicated to assisting you in
            achieving success in the digital world. Contact us today to discover
            more about how we can assist your company in growing.
          </p>
          <div>.....From the Ceo</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
