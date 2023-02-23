import React, { useEffect, useRef } from "react";
import "./Brand.scss";
import AOS from "aos";
import { Link } from "react-router-dom";

//Brand section components
const Brand = () => {
  let showOverLay = useRef(null);
  let changeTextColor = useRef(null);

  //Initialize Aos animation
  useEffect(() => {
    AOS.init();
  }, []);

  //Handle mouse enter animation for button
  const handleMouseEnter = () => {
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
            <h1 data-aos="fade-up" data-aos-duration="1000">
              We Create
            </h1>
          </div>
          <div className="second-section">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Brands.
            </h1>
            <h1 className="brand-str">Brands</h1>
          </div>
          <div className="str"></div>
        </div>
        <div className="b__wrapper__desc">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-desc"
            data-aos-delay="300"
          >
            <p>
              With over 5 bllion using the internet, the present and future of
              sales and business is digital. But to stand out, you need a solid
              brand. And MacGroup International Tech Services have the expertise
              to help you develop the perfect brand for your business. From
              brand strategy and identity development, to website design and
              social media management, we offer a range of services to help you
              effectively communicate your brand and connect with your audience.
              At our digital agency,
            </p>
          </div>
        </div>

        <div className="line-divider" data-aos="fade-right"></div>
        <div className="check-services">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Check our services
          </h1>
          <Link
            data-aos="fade-left"
            data-aos-duration="1000"
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
      <div
        className="circle right"
        data-aos="fade-left"
        data-aos-duration="1000"
      ></div>
      <div
        className="circle left"
        data-aos="fade-right"
        data-aos-duration="1000"
      ></div>
    </div>
  );
};

export default React.memo(Brand);
