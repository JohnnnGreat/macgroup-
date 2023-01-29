import "./Pricing.scss";
import { useEffect } from "react";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import Pattern from "./pattern.png";
import Footer from "../../Components/Footer/Footer.js";
import { NavLink } from "react-router-dom";
function Pricing() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <div className="pricing">
        <img className="patterns" src={Pattern} alt="pricing-pattern" />
        <div className="pricing__wrapper">
          <div className="pricing-header">
            <h1 data-aos="fade-up" data-aos-duration="2000">
              We have the best plans to choose from
            </h1>
            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
              We have a couple of plans to chooose from. Lets know the one that
              best suite you
            </p>
          </div>
        </div>
      </div>
      <div className="custom">
        <div className="c-header">
          <h1 className="c-h">Coporate Business</h1>
          <p className="c-d">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            corrupti, deleniti eligendi ipsum itaque rem id laborum beatae
            cupiditate accusamus?
          </p>
        </div>

        <div className="plans">
          <div className="plans-wrapper">
            <div className="grid-plans">
              <div className="card plan one">
                <div className="p-h">
                  <h1>Standard</h1>
                </div>
                <h1 className="price">
                  45$<span>/month</span>
                </h1>
                <div className="packages">
                  <ul>
                    <li>Monthly Website checkup</li>
                    <li>Free Content Publishing</li>
                    <li>Optimal SEO Checkup</li>
                  </ul>
                </div>
                <div className="quote">
                  <a href="">Contact Us</a>
                </div>
              </div>
              <div className="card plan twO"></div>
              <div className="card plan three"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="coporate">
        <div className="c-header">
          <h1 className="c-h">Coporate Business</h1>
          <p className="c-d">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            corrupti, deleniti eligendi ipsum itaque rem id laborum beatae
            cupiditate accusamus?
          </p>
        </div>

        <div className="plans">
          <div className="plans-wrapper">
            <div className="grid-plans">
              <div className="card plan one">
                <div className="p-h">
                  <h1>Standard</h1>
                </div>
                <h1 className="price">
                  45$<span>/month</span>
                </h1>
                <div className="packages">
                  <ul>
                    <li>Monthly Website checkup</li>
                    <li>Free Content Publishing</li>
                    <li>Optimal SEO Checkup</li>
                  </ul>
                </div>
                <div className="quote">
                  <NavLink to="/coporate-message">Contact Us</NavLink>
                </div>
              </div>
              <div className="card plan twO"></div>
              <div className="card plan three"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
