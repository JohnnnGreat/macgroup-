import React, { useEffect, useState, useRef } from "react";
import "./Service.scss";
import { animateScroll as scroll } from "react-scroll";
import emailjs from "@emailjs/browser";
import Footer from "../../Components/Footer/Footer.js";
import AOS from "aos";
import Location from "../LocationMap/Location.jsx";
import { Link } from "react-router-dom";

function Service() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <Hero
        headerText={
          <>
            Have a shot of our
            <span className="bold-s"> Services.</span>{" "}
          </>
        }
      />
      <div className="service__main">
        <div className="service__main__wrapper">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="main-text"
          >
            Discover the services that interest you.
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="main-desc"
          >
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
            // fill-opacity="0.5"
          />
          <rect
            x="77.9775"
            y="116"
            width="17"
            height="531"
            rx="8.5"
            transform="rotate(30.3092 77.9775 116)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="147.405"
            width="17"
            height="111.767"
            rx="8.5"
            transform="rotate(30.3092 147.405 0)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="189.405"
            y="77"
            width="17"
            height="111.767"
            rx="8.5"
            transform="rotate(30.3092 189.405 77)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="131.978"
            y="99"
            width="17"
            height="531"
            rx="8.5"
            transform="rotate(30.3092 131.978 99)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
          <rect
            x="117.978"
            y="198"
            width="17"
            height="531"
            rx="8.5"
            transform="rotate(30.3092 117.978 198)"
            fill="#D9D9D9"
            // fill-opacity="0.5"
          />
        </svg>
      </div>
      <ServicesOne />
      <ServicesTwo />
      <ServicesThree />
      <ContactUs
        title="Contact Us"
        shadow="Contact Us"
        desc="Send us a message!!!"
      />
      <Footer />
    </>
  );
}

//Pages Header
export function Hero({ headerText }) {
  return (
    <>
      <div className="service">
        <div className="service__wrapper">
          <div className="service__hero">
            <div className="intrs-pink"></div>

            <div className="service__hero__second">
              <h1 className="tag" data-aos="fade-down" data-aos-duration="2000">
                {headerText}
              </h1>
            </div>
            <div className="gradient__line-s"></div>
          </div>
          <h1 className="bg-overlay">MACGROUP</h1>
        </div>
      </div>
    </>
  );
}
//Services Section in details

const ServicesOne = () => {
  return (
    <div className="service-one">
      <div className="bg-s">
        <div className="service-one__wrapper">
          <div className="digital-mkt">
            <div data-aos="fade-up" data-aos-duration="2000" className="first">
              <h1 className="heading">Digital Marketing</h1>
              <div className="line-div"></div>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                Maximize your online presence and reach new customers with our
                comprehensive digital marketing services. From social media
                management to email campaigns and paid advertising, we'll help
                you connect with your target audience and drive conversions.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="dmkt-btn"
              >
                <a className="link" href="#cus-desc">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="app-dev">
            <div data-aos="fade-up" data-aos-duration="2000" className="first">
              <h1 className="heading">App Development</h1>
              <div className="line-div"></div>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                In today's digital world, having a mobile app is essential to
                stay ahead of the competition. Our app development services will
                help you create a custom mobile app that is tailored to your
                business needs and goals.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="dmkt-btn"
              >
                <a className="link" href="#cus-desc">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesTwo = () => {
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
              <h1 className="heading">E-Commerce</h1>
              <div className="line-div"></div>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                className="desc"
              >
                Looking to take your business online? Our eCommerce solutions
                are designed to help you create a seamless and efficient online
                shopping experience for your customers. With our eCommerce
                services, you'll be able to easily manage your inventory,
                process payments, and fulfill orders.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="dmkt-btn"
              >
                <Link className="link" to="/commerce">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="app-dev">
            <div data-aos="fade-up" data-aos-duration="2000" className="first">
              <h1 className="heading">Branding</h1>
              <div className="line-div"></div>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                Your brand is your business's most valuable asset, and it's
                crucial that it reflects the values and personality of your
                company. Our branding services will help you create a unique and
                consistent brand identity that sets you apart from your
                competitors.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="dmkt-btn"
              >
                <Link className="link" to="/branding">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ServicesThree = () => {
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
              <h1 className="heading">Web Development</h1>
              <div className="line-div"></div>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                className="desc"
              >
                Your website is the first impression that potential customers
                will have of your business, so it's crucial that it makes a good
                one. We offer professional web development services that will
                help you create a website that is not only visually stunning but
                also highly functional and easy to navigate.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="dmkt-btn"
              >
                <Link className="link" to="/webdevelopment">
                  Read More
                </Link>
              </div>
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
              <h1 className="heading">Content Writing</h1>
              <div className="line-div"></div>
              <p data-aos="fade-up" data-aos-duration="2000" className="desc">
                High-quality content is essential for any business looking to
                establish a strong online presence. Our content writing services
                will help you create compelling, informative, and engaging
                content that will help you connect with your target audience.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="dmkt-btn"
              >
                <Link className="link" to="/writing">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactUs = ({ title, shadow, desc }) => {
  // const [email, setEmail] = useState("");
  // const [subject, setSeubject] = useState("");
  // const [message, setMessage] = useState("");

  const [Error, setError] = useState(false);
  const [Close, setCloseError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef(null);
  const ErrorRemove = useRef(null);
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
          setError(true);
          setShowAlert(true);
          console.log(Error);
          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        }
      );
  };

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <>
      {/* <Location /> */}
      <div className="contact-us-s">
        <div className="contact-us-s__wrapper">
          <div className="text-header">
            <h1
              data-aos-duration="2000"
              data-aos="fade-left"
              className="main-text"
            >
              {title}
            </h1>
            <h1
              data-aos-duration="2000"
              data-aos="fade-right"
              className="stroke-text"
            >
              {shadow}
            </h1>
            <h1 className="desc-text">{desc}</h1>
          </div>

          {showAlert ? (
            Error ? (
              <div
                style={{
                  transition: " all 300ms ease",

                  backgroundColor: "#000",
                  position: "fixed",
                  height: "100vh",
                  width: "0",
                  width: Error ? "100vw" : "0",

                  top: "0",
                  zIndex: "4",
                  transition: " all 300ms ease",
                }}
                // Error
                //   ? {
                //       transition: " all 300ms ease",
                //       backgroundColor: "red",
                //       position: "fixed",
                //       height: "100vh",
                //       width: "100vw",
                //       top: "0",
                //       zIndex: "4",
                //     }
                //   : {
                //       backgroundColor: "green",
                //       position: "fixed",
                //       height: "100vh",

                //       transition: "all 300ms ease",

                //       top: "0",
                //       zIndex: "4",

                className="error"
              >
                <div className="container-er">
                  <h1
                    style={{
                      fontSize: "30px",
                      color: "red",
                    }}
                  >
                    Error
                  </h1>
                </div>
              </div>
            ) : (
              (<div
                style={{
                  backgroundColor: "red",
                  position: "fixed",
                  height: "100vh",
                  width: "0",
                  width: Error ? "100vw" : "0",
                  top: "0",
                  zIndex: "4",
                  transition: "300ms ease",
                }}
                className="error"
              >
                <h1>This is a success</h1>
              </div>)()
            )
          ) : null}

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
                data-aos-duration="2000"
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
                // onClick={handleError}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(Service);
