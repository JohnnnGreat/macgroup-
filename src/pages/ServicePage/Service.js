import React, { useState, useEffect, useRef } from "react";
import "./Service.scss";
import { animateScroll as scroll } from "react-scroll";
import emailjs from "@emailjs/browser";
import Footer from "../../Components/Footer/Footer.js";
import AOS from "aos";

function Scroll() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
}
function Service() {
  return (
    <>
      <Hero />
      <Main />
      <ServicesOne />
      <ServicesTwo />
      <ServicesThree />
      <ContactUs />
      <Footer />
    </>
  );
}

const Hero = () => {
  return (
    <div className="service">
      <div className="service__wrapper">
        <div className="service__hero">
          <div className="intrs-yellow"></div>
          <div className="intrs-pink"></div>
          <div className="id-s">
            <div className="line"></div>
            <h1 className="title">SERVICE</h1>
          </div>
          <div className="service__hero__second">
            <h1 className="tag">
              HAVE A SHOT OR OUR <span className="bold-s">SERVICES</span>
            </h1>
          </div>
          <div className="gradient__line-s"></div>
        </div>
        <h1 className="bg-overlay">MACGROUP</h1>
      </div>
    </div>
  );
};

//Main Services Component
const Main = () => {
  Scroll();
  return (
    <div className="service__main">
      <div className="service__main__wrapper">
        <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          className="main-text"
        >
          Discover the services that interest you.
        </h1>
        <p data-aos="fade-left" data-aos-duration="2000" className="main-desc">
          We are a leading digital company that helps bring your digital
          solutions to reality.
        </p>
      </div>
      <svg
        className="svg-b"
        width="159"
        height="500"
        viewBox="0 0 205 665"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="102.978"
          y="9"
          width="17"
          height="531"
          rx="8.5"
          transform="rotate(30.3092 102.978 9)"
          fill="#D9D9D9"
          fill-opacity="0.5"
        />
        <rect
          x="77.9775"
          y="116"
          width="17"
          height="531"
          rx="8.5"
          transform="rotate(30.3092 77.9775 116)"
          fill="#D9D9D9"
          fill-opacity="0.5"
        />
        <rect
          x="147.405"
          width="17"
          height="111.767"
          rx="8.5"
          transform="rotate(30.3092 147.405 0)"
          fill="#D9D9D9"
          fill-opacity="0.5"
        />
        <rect
          x="189.405"
          y="77"
          width="17"
          height="111.767"
          rx="8.5"
          transform="rotate(30.3092 189.405 77)"
          fill="#D9D9D9"
          fill-opacity="0.5"
        />
        <rect
          x="131.978"
          y="99"
          width="17"
          height="531"
          rx="8.5"
          transform="rotate(30.3092 131.978 99)"
          fill="#D9D9D9"
          fill-opacity="0.5"
        />
        <rect
          x="117.978"
          y="198"
          width="17"
          height="531"
          rx="8.5"
          transform="rotate(30.3092 117.978 198)"
          fill="#D9D9D9"
          fill-opacity="0.5"
        />
      </svg>
    </div>
  );
};

//Services Section in details

const ServicesOne = () => {
  Scroll();
  return (
    <div className="service-one">
      <div className="bg-s">
        <div className="service-one__wrapper">
          <div className="digital-mkt">
            <div data-aos="fade-up" data-aos-duration="2000" className="first">
              <h1 className="heading">DIGITAL MARKETING</h1>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                Maximize your online presence and reach new customers with our
                comprehensive digital marketing services. From social media
                management to email campaigns and paid advertising, we'll help
                you connect with your target audience and drive conversions. Our
                team of experts will work with you to create a customized
                strategy that fits your business goals and budget.
              </p>
            </div>
            <div className="second-sp">
              <div className="line"></div>
            </div>
          </div>
          <div className="app-dev">
            <div className="second-sp">
              <div className="line"></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="first">
              <h1 className="heading">APP DEVELOPMENT</h1>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                In today's digital world, having a mobile app is essential to
                stay ahead of the competition. Our app development services will
                help you create a custom mobile app that is tailored to your
                business needs and goals. From concept to launch, our team of
                experts will work with you every step of the way to create an
                app that is user-friendly, visually appealing, and highly
                functional
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesTwo = () => {
  Scroll();
  return (
    <div className="service-two">
      <div className="bg-s">
        <div className="service-two__wrapper">
          <div className="digital-mkt">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="first"
            >
              <h1 className="heading">ECCOMMERCE</h1>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                className="desc"
              >
                Looking to take your business online? Our eCommerce solutions
                are designed to help you create a seamless and efficient online
                shopping experience for your customers. With our eCommerce
                services, you'll be able to easily manage your inventory,
                process payments, and fulfill orders. Our team of experts will
                work with you to create a customized eCommerce platform that
                fits your specific business needs, whether you're selling
                physical or digital products. From design and development to
                marketing and analytics, we'll help you every step of the way to
                ensure the success of your online store.
              </p>
            </div>
            <div className="second-sp">
              <div className="line"></div>
            </div>
          </div>
          <div className="app-dev">
            <div className="second-sp">
              <div className="line"></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="first">
              <h1 className="heading">BRANDING</h1>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                Your brand is your business's most valuable asset, and it's
                crucial that it reflects the values and personality of your
                company. Our branding services will help you create a unique and
                consistent brand identity that sets you apart from your
                competitors. Our team of experts will work with you to create a
                brand that is visually appealing, memorable, and relevant to
                your target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ServicesThree = () => {
  Scroll();
  return (
    <div className="service-three">
      <div className="bg-s">
        <div className="service-three__wrapper">
          <div className="digital-mkt">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="first"
            >
              <h1 className="heading">WEB DEVELOPMENT</h1>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                className="desc"
              >
                Your website is the first impression that potential customers
                will have of your business, so it's crucial that it makes a good
                one. We offer professional web development services that will
                help you create a website that is not only visually stunning but
                also highly functional and easy to navigate. Our team of
                developers will work with you to create a customized website
                that meets your specific business needs.
              </p>
            </div>
            <div className="second-sp">
              <div className="line"></div>
            </div>
          </div>
          <div className="app-dev">
            <div className="second-sp">
              <div className="line"></div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="first">
              <h1 className="heading">CONTENT WRITING </h1>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                High-quality content is essential for any business looking to
                establish a strong online presence. Our content writing services
                will help you create compelling, informative, and engaging
                content that will help you connect with your target audience.
                Our team of writers will work with you to create content that is
                tailored to your business, your audience, and your goals.
                Whether you need blog posts, articles, product descriptions, or
                website copy, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactUs = () => {
  // const [email, setEmail] = useState("");
  // const [subject, setSeubject] = useState("");
  // const [message, setMessage] = useState("");
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_btqqoig",
        "template_sprcbxj",
        form.current,
        "8dnyCGiR6nE3cE-by"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  Scroll();
  return (
    <div className="contact-us-s">
      <div className="contact-us-s__wrapper">
        <div className="text-header">
          <h1
            data-aos-duration="2000"
            data-aos="fade-left"
            className="main-text"
          >
            CONTACT US
          </h1>
          <h1
            data-aos-duration="2000"
            data-aos="fade-right"
            className="stroke-text"
          >
            CONTACT US
          </h1>
          <h1 className="desc-text">WE WANT TO HEAR FROM YOU!!!</h1>
        </div>

        <div className="input-fields">
          <form ref={form} onSubmit={sendEmail} action="">
            <input
              data-aos="fade-up"
              data-aos-duration="2000"
              name="user_email"
              type="text"
              placeholder="Email"
            />
            <input
              data-aos="fade-up"
              data-aos-duration="5000"
              name="email_subject"
              type="text"
              placeholder="Subject"
            />
            <textarea
              data-aos="fade-up"
              data-aos-duration="2000"
              name="email_message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input
              data-aos="fade-up"
              data-aos-duration="2000"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Service;
