import React, { useRef, useEffect, useState } from "react";
import "./Hero.scss";
import "../Hero/imageOne.jpg";
import { NavLink } from "react-router-dom";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
function Hero() {
  //State to change image
  // const imageLoading = useRef();
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   (function () {
  //     setTimeout(() => {
  //       setIsVisible(true);

  //       setTimeout(() => {
  //         setIsVisible(false);
  //       }, 10000);
  //     }, 5000);

  //     if (isVisible) {
  //       imageLoading.current.classList.remove("setOpa");
  //       imageLoading.current.classList.add("setDisp");
  //     } else {
  //       imageLoading.current.classList.remove("setDisp");
  //       imageLoading.current.classList.add("setOpa");
  //     }
  //     console.log(isVisible);
  //   })();
  // }, [isVisible]);

  return (
    <div className="h">
      <div className="h__wrapper">
        <div className="h-value">
          <h1 className="h-value__main">Our Value</h1>
          <p className="h-value__desc">
            e are a full-service digital agency offering a wide range of
            services, including custom app development, web design and
            development,
          </p>
        </div>
        <div className="h-text slide-in-blurred-bottom">
          EXPERT DIGITAL <span className="m-b">SOLUTIONS</span>.
        </div>
        <div className="h-bottom">
          <div className="h-desc">
            <h1 className="h-desc-main">We Help Achieve digital Aspirations</h1>
            <p className="h-desc-d">
              We are a full-service digital agency offering a wide range of
              services,
            </p>
          </div>
          <a href="#sales" className="scroll animate">
            <ArrowDownwardSharpIcon />
          </a>
          <div className="start">
            <NavLink className="start-project" to="/email">
              Send us a message
            </NavLink>
          </div>
        </div>

        <div className="id">
          <div className="line"></div>
          <h1 className="title">HOMEPAGE</h1>
        </div>
      </div>

      <div className="h-overlay"></div>
    </div>
  );
}

export default Hero;
