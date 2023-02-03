import React, { useEffect } from "react";
import "./Hero.scss";
import AOS from "aos";
import ImageBg from "./bg.jpg";
import Image from "../../pages/ServicePage/WebDev/webDev.jpg";
import "../Hero/imageOne.jpg";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
// import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
function Hero() {
  // const slider = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h">
      {/* <video src={video} muted loop autoPlay /> */}
      <img src={Image} alt="Web development" className="hero-img xx" />

      <div className="h__wrapper">
        <div className="wide">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="h-value"
          >
            <h1 className="h-value__main">Our Value</h1>
            <p className="h-value__desc">
              We specialize in delivering custom digital solutions to enhance
              your business's online presence and drive growth.
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
                className="h-text slide-in-blurred-bottom first-text"
              >
                <h1>
                  Expert Digital <span className="m-b">Solutions</span>.
                </h1>
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
              <h1 className="h-desc-main">
                We Help Achieve digital Aspirations
              </h1>
              <p className="h-desc-d">
                We are a full-service digital agency offering a wide range of
                services,
              </p>
            </div>
            <a href="#sales" className="scroll ">
              {/* <ArrowDownwardSharpIcon fontSize="large" className="scro-b" /> */}
              <div className="container-wr">
                <div className="move-ic animate"></div>
              </div>
            </a>
            <div className="start">
              <NavLink className="start-project" to="/email">
                Message Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="h-overlay"></div>
    </div>
  );
}

export default Hero;
