import React, { useEffect, useRef } from "react";
import "./Brand.scss";
import AOS from "aos";
import { Link } from "react-router-dom";
import BrandImage from "./Branbg.jpg";

//Brand section components
const Brand = () => {
  let showOverLay = useRef(null);
  let changeTextColor = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  //Handle mouse enter animation for button
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
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              Brands
            </h1>
            <h1 className="brand-str">Brands</h1>
          </div>
          <div className="str"></div>
        </div>
        <div className="b__wrapper__desc">
          <div
            className="dots-design"
            data-aos-duration="2000"
            data-aos-delay="300"
            data-aos="fade-right"
          >
            <img src={BrandImage} alt="brand" className="xx" />
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
          <Link
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="200"
            ref={changeTextColor}
            className="more-sevices"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            to="/services"
          >
            <div ref={showOverLay} className="black-overlay-t"></div>
            More Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
