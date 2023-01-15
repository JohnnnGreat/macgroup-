import React, { useEffect, useRef } from "react";
import "./Brand.scss";
import AOS from "aos";
//Brand section components

const Brand = () => {
  let showOverLay = useRef(null);
  let changeTextColor = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleMouseEnter = () => {
    console.log(showOverLay.current);
    console.log(changeTextColor.current);

    showOverLay.current.classList.add("showOverLay");
    changeTextColor.current.classList.add("changeTextColor");
  };

  const handleMouseLeave = () => {
    console.log(showOverLay.current);
    console.log(changeTextColor.current);

    showOverLay.current.classList.remove("showOverLay");
    changeTextColor.current.classList.remove("changeTextColor");
  };
  return (
    <div className="b">
      <div className="b__wrapper">
        <div className="b__wrapper__bg-text">
          <div className="first-section">
            <h1 data-aos="fade-up" data-aos-duration="2000">
              We Create
            </h1>
          </div>
          <div className="second-section">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Brands
            </h1>
          </div>
        </div>
        <div className="b__wrapper__desc">
          <div
            className="dots-design"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos="fade-right"
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 299 312"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="40" y="52" width="169" height="169" fill="#F0EDED" />
              <circle cx="104" cy="86" r="5" fill="#777777" />
              <circle cx="104" cy="106" r="5" fill="#777777" />
              <circle cx="104" cy="126" r="5" fill="#777777" />
              <circle cx="104" cy="146" r="5" fill="#777777" />
              <circle cx="104" cy="166" r="5" fill="#777777" />
              <circle cx="104" cy="186" r="5" fill="#777777" />
              <circle cx="104" cy="206" r="5" fill="#777777" />
              <circle cx="104" cy="226" r="5" fill="#777777" />
              <circle cx="104" cy="246" r="5" fill="#777777" />
              <circle cx="125" cy="86" r="5" fill="#777777" />
              <circle cx="125" cy="106" r="5" fill="#777777" />
              <circle cx="125" cy="126" r="5" fill="#777777" />
              <circle cx="125" cy="146" r="5" fill="#777777" />
              <circle cx="125" cy="166" r="5" fill="#777777" />
              <circle cx="125" cy="186" r="5" fill="#777777" />
              <circle cx="125" cy="206" r="5" fill="#777777" />
              <circle cx="125" cy="226" r="5" fill="#777777" />
              <circle cx="125" cy="246" r="5" fill="#777777" />
              <circle cx="146" cy="86" r="5" fill="#777777" />
              <circle cx="146" cy="106" r="5" fill="#777777" />
              <circle cx="146" cy="126" r="5" fill="#777777" />
              <circle cx="146" cy="146" r="5" fill="#777777" />
              <circle cx="146" cy="166" r="5" fill="#777777" />
              <circle cx="146" cy="186" r="5" fill="#777777" />
              <circle cx="146" cy="206" r="5" fill="#777777" />
              <circle cx="146" cy="226" r="5" fill="#777777" />
              <circle cx="146" cy="246" r="5" fill="#777777" />
              <circle cx="167" cy="86" r="5" fill="#777777" />
              <circle cx="167" cy="106" r="5" fill="#777777" />
              <circle cx="167" cy="126" r="5" fill="#777777" />
              <circle cx="167" cy="146" r="5" fill="#777777" />
              <circle cx="167" cy="166" r="5" fill="#777777" />
              <circle cx="167" cy="186" r="5" fill="#777777" />
              <circle cx="167" cy="206" r="5" fill="#777777" />
              <circle cx="167" cy="226" r="5" fill="#777777" />
              <circle cx="167" cy="246" r="5" fill="#777777" />
              <circle cx="188" cy="86" r="5" fill="#777777" />
              <circle cx="188" cy="106" r="5" fill="#777777" />
              <circle cx="188" cy="126" r="5" fill="#777777" />
              <circle cx="188" cy="146" r="5" fill="#777777" />
              <circle cx="188" cy="166" r="5" fill="#777777" />
              <circle cx="188" cy="186" r="5" fill="#777777" />
              <circle cx="188" cy="206" r="5" fill="#777777" />
              <circle cx="188" cy="226" r="5" fill="#777777" />
              <circle cx="188" cy="246" r="5" fill="#777777" />
              <circle cx="209" cy="86" r="5" fill="#777777" />
              <circle cx="209" cy="106" r="5" fill="#777777" />
              <circle cx="209" cy="126" r="5" fill="#777777" />
              <circle cx="209" cy="146" r="5" fill="#777777" />
              <circle cx="209" cy="166" r="5" fill="#777777" />
              <circle cx="209" cy="186" r="5" fill="#777777" />
              <circle cx="209" cy="206" r="5" fill="#777777" />
              <circle cx="209" cy="226" r="5" fill="#777777" />
              <circle cx="209" cy="246" r="5" fill="#777777" />
              <circle cx="230" cy="86" r="5" fill="#777777" />
              <circle cx="230" cy="106" r="5" fill="#777777" />
              <circle cx="230" cy="126" r="5" fill="#777777" />
              <circle cx="230" cy="146" r="5" fill="#777777" />
              <circle cx="230" cy="166" r="5" fill="#777777" />
              <circle cx="230" cy="186" r="5" fill="#777777" />
              <circle cx="230" cy="206" r="5" fill="#777777" />
              <circle cx="230" cy="226" r="5" fill="#777777" />
              <circle cx="230" cy="246" r="5" fill="#777777" />
              <circle cx="251" cy="86" r="5" fill="#777777" />
              <circle cx="251" cy="106" r="5" fill="#777777" />
              <circle cx="251" cy="126" r="5" fill="#777777" />
              <circle cx="251" cy="146" r="5" fill="#777777" />
              <circle cx="251" cy="166" r="5" fill="#777777" />
              <circle cx="251" cy="186" r="5" fill="#777777" />
              <circle cx="251" cy="206" r="5" fill="#777777" />
              <circle cx="251" cy="226" r="5" fill="#777777" />
              <circle cx="251" cy="246" r="5" fill="#777777" />
            </svg>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-desc"
            data-aos-delay="300"
          >
            <p>
              At our digital agency, we understand the importance of a strong
              brand and have the expertise to help you build one. From brand
              strategy and identity development, to website design and social
              media management, we offer a range of services to help you
              effectively communicate your brand and connect with your audience.
            </p>
          </div>
        </div>

        <div
          className="line-divider"
          data-aos="fade-right"
          data-aos-delay="200"
        ></div>
        <div className="check-services">
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            Check our services
          </h1>
          <a
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="200"
            ref={changeTextColor}
            className="more-sevices"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="/"
          >
            <div ref={showOverLay} className="black-overlay"></div>
            More Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brand;