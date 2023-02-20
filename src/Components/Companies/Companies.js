import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/autoplay";
import { useEffect } from "react";
import LogoOne from "./CompaniesList/Component6.png";
import LogoTwo from "./CompaniesList/Component7.png";
import LogoThree from "./CompaniesList/Component8.png";
import LogoFour from "./CompaniesList/Component9.png";
import "./Companies.scss";
import AOS from "aos";
import { Autoplay, Pagination } from "swiper";
function Companies() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="companies">
      <div className="companies__wrapper">
        <h1 data-aos="fade-down" data-aos-duration="2000" className="c-header">
          Our Clients.
          <div className="h-line"></div>
        </h1>
        <div className="logos">
          <div className="con">
            <img src={LogoOne} alt="" />
          </div>
          <div className="con">
            <img src={LogoTwo} alt="" />
          </div>
          <div className="con">
            <img src={LogoThree} alt="" />
          </div>
          <div className="con">
            <img src={LogoFour} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
