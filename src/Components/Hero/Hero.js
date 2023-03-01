import React, { useEffect } from "react";
import "./Hero.styles.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import Typewriter from "typewriter-effect";
import HeroImage from "./HeroImage.gif";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h">
      <div className="h__wrapper">
        <img class="hero-image" src={HeroImage} alt="" />
        <div className="hero-main">
          <div className="f-text">
            <h1>What We Offer</h1>
          </div>
          <div data-aos="fade-up" className="m-text">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "We take care of your software needs.",
                    "Elevate your digital presence.",
                    "We Put Businesses on the internet.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="sub-text">
            <p>
              We provide comprehensive branding, software and marketing services
              for individuals and business. These include: Custom software
              development, web design and development, e-commerce solutions, and
              comprehensive digital marketing campaigns.
            </p>
          </div>
          <div className="btn-cta">
            <Link className="pricing-btn" to="/services">
              GET STARTED
            </Link>
          </div>
        </div>
      </div>

      <a href="#scrow-d" className="move-down">
        <div className="outer-cir">
          <div className="inner-cir"></div>
        </div>
      </a>

      <svg
        className="svgs-h"
        width="400"
        height="600"
        viewBox="0 0 399 726"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="47"
          y="-183"
          width="415"
          height="862"
          rx="207.5"
          stroke="#acacacb2"
          stroke-width="70"
        />
      </svg>
      <svg
        className="hero-logo"
        width="500"
        height="500"
        viewBox="0 0 44 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.7859 15.8675C43.7859 18.4845 42.0591 20.1265 39.2289 20.2627C35.8828 20.4276 33.0526 22.7722 32.3146 26.0059C32.1713 26.6441 32.0997 27.3037 32.0639 27.9634C31.9564 30.0642 30.3228 31.742 28.1876 31.9714C26.253 32.1794 24.2755 30.8027 23.7739 28.8596C23.6306 28.3004 23.5876 27.7052 23.5518 27.1245C23.3297 23.5251 20.3204 20.4993 16.7307 20.2699C15.6344 20.1982 14.5454 20.0835 13.6139 19.3808C12.0591 18.2192 11.4572 16.2762 12.1236 14.498C12.7756 12.7557 14.5669 11.5869 16.3653 11.7375C18.2927 11.8952 19.8618 13.2791 20.2129 15.1935C20.3562 15.9607 20.349 16.7494 20.4995 17.5094C21.2375 21.1518 24.3615 23.5466 28.2019 23.4534C31.6698 23.3673 34.7006 20.6642 35.2595 17.1652C35.933 12.9062 33.0885 9.12043 28.7966 8.52531C27.9153 8.40342 27.0054 8.46078 26.1527 8.04492C24.2038 7.0913 23.2222 5.07651 23.7954 3.06889C24.3758 1.0326 26.21 -0.179145 28.3882 0.0216168C30.3586 0.208039 31.9636 1.93602 32.0639 4.04402C32.157 6.06598 32.7517 7.88001 34.1704 9.36421C35.6392 10.9129 37.4663 11.6515 39.5872 11.7375C41.3426 11.8092 42.6538 12.5907 43.4563 14.1825C43.7357 14.7418 43.836 15.3369 43.8002 15.8603L43.7859 15.8675Z"
          fill="#864D3A"
        />
        <path
          d="M8.46209 15.9751C8.44776 20.019 11.4857 23.2384 15.5483 23.4821C17.4255 23.5969 18.9947 24.2135 19.79 26.0634C20.4707 27.6623 20.2772 29.168 19.1022 30.4945C17.8698 31.8855 16.315 32.2798 14.5954 31.6847C12.9259 31.1111 11.9801 29.8707 11.8297 28.0782C11.6577 26.0705 11.192 24.2063 9.78046 22.6504C8.20415 20.9081 6.19794 20.2341 3.96962 20.1409C1.91325 20.0477 0.0288479 18.334 0.00018775 15.8819C-0.0213074 13.7882 1.80578 11.9025 3.99828 11.7806C5.95433 11.673 7.73842 11.1855 9.23592 9.84467C10.5829 8.6401 11.3353 7.11288 11.6649 5.36338C11.758 4.86148 11.7795 4.34524 11.8225 3.83616C12.0374 1.49155 13.8359 -0.0500146 16.2648 0.0216861C18.3785 0.0862167 20.1339 1.94326 20.1913 4.18032C20.2557 6.76872 21.309 8.84804 23.4084 10.3609C24.6909 11.2859 26.1454 11.7017 27.7289 11.7519C30.8385 11.8451 32.8232 14.9784 31.5407 17.7389C30.7167 19.5099 28.8036 20.4635 26.8619 20.062C24.913 19.6605 23.6305 18.0257 23.5302 15.8819C23.4012 13.0067 22.1401 10.7768 19.6037 9.36428C14.5954 6.56079 8.46926 10.2032 8.45493 15.9679L8.46209 15.9751Z"
          fill="#181818"
        />
      </svg>
    </div>
  );
}

export default React.memo(Hero);
