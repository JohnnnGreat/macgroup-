import React, { useRef, useEffect, useState } from "react";
import "./Hero.scss";
import AOS from "aos";

import video from "../../Hh.mp4";
import "../Hero/imageOne.jpg";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
function Hero() {
  const slider = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);

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
      <video src={video} muted loop autoPlay />

      <div className="h__wrapper">
        <div data-aos="fade-right" data-aos-duration="1000" className="h-value">
          <h1 className="h-value__main">Our Value</h1>
          <p className="h-value__desc">
            We specialize in delivering custom digital solutions to enhance your
            business's online presence and drive growth.
          </p>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={2000}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="swiper"
        >
          <SwiperSlide>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="h-text slide-in-blurred-bottom"
            >
              Expert Digital <span className="m-b">Solutions</span>.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="h-text slide-in-blurred-bottom"
            >
              We Build The <span className="m-b">Best Websites</span>.
            </div>
          </SwiperSlide>
        </Swiper>
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
      </div>
      <div className="h-overlay"></div>
    </div>
  );
}

export default Hero;
