import React, { useRef, useEffect, useState } from "react";
import "./Hero.scss";
import "../Hero/imageOne.jpg";

function Hero() {
  //State to change image

  const imageLoading = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    (function () {
      setTimeout(() => {
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
        }, 10000);
      }, 5000);

      if (isVisible) {
        imageLoading.current.classList.remove("setOpa");
        imageLoading.current.classList.add("setDisp");
      } else {
        imageLoading.current.classList.remove("setDisp");
        imageLoading.current.classList.add("setOpa");
      }
      console.log(isVisible);
    })();
  }, [isVisible]);

  return (
    <div className="h">
      <div className="image-res slide-in-left">
        <img
          className="right-img"
          src={process.env.PUBLIC_URL + "./AssetsFolder/imageOne.jpg"}
          alt="Right"
        />

        <img
          className="image-webDev"
          ref={imageLoading}
          src={process.env.PUBLIC_URL + "./AssetsFolder/webdev.webp"}
          alt="Website development"
        />
      </div>
      <div className="newImage">
        <img
          className="image-ecommerce"
          src={process.env.PUBLIC_URL + "./AssetsFolder/Ecommerce.jpeg"}
          alt="Ecommerce"
        />
      </div>
      <div className="h__wrapper">
        <div className="h-text">
          <h1 className="h-text-f puff-in-center">EXPERT DIGITAL</h1>
          <h1 className="h-text-s fade-in-bottom">SOLUTIONS</h1>
        </div>
        <div className="h-desc">
          <div className="h-desc-wrap ">
            <h1 className="h-desc-l-one">
              WE ARE A FULL-SERVICE DIGITAL AGENCY OFFERING A S WIDE RANGE
            </h1>
            <h1 className="h-desc-l-two">
              OF SERVICES, INCLUDING CUSTOM APP DEVELOPMENT, WEB DESIGN
            </h1>
            <h1 className="h-desc-l-three">
              AND DEVELOPMENT, E-COMMERCE SOLUTION, AND COMPREHENSIVE
            </h1>
            <h1 className="h-desc-l-four">DIGITAL MARKETING CAMPAIGNS</h1>
          </div>
          <div className="bounce-attr">
            <div className="bounce bounce-in-top"></div>
          </div>
          <div className="ro">
            <div className="h-strt-btn rotate-in-center">
              <h2 className="strt-prj">Start a project</h2>
            </div>
          </div>
          <div className="svgs">
            <svg
              width="80"
              height="28"
              viewBox="0 0 80 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="8.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="8.5" cy="21.5" r="2.5" fill="#515151" />
              <circle cx="17.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="17.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="17.5" cy="21.5" r="2.5" fill="#515151" />
              <circle cx="26.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="26.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="26.5" cy="21.5" r="2.5" fill="#515151" />
              <circle cx="35.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="35.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="35.5" cy="21.5" r="2.5" fill="#515151" />
              <circle cx="44.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="44.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="44.5" cy="21.5" r="2.5" fill="#515151" />
              <circle cx="53.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="53.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="53.5" cy="21.5" r="2.5" fill="#515151" />
              <circle cx="62.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="62.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="62.5" cy="21.5" r="2.5" fill="#515151" />
              <circle cx="71.5" cy="5.5" r="2.5" fill="#515151" />
              <circle cx="71.5" cy="13.5" r="2.5" fill="#515151" />
              <circle cx="71.5" cy="21.5" r="2.5" fill="#515151" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
