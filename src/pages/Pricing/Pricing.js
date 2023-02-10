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
        {/* <img className="patterns" src={Pattern} alt="pricing-pattern" /> */}
        <div className="pricing__wrapper">
          <div className="pricing-header">
            <h1 data-aos="fade-up" data-aos-duration="2000">
              We have the best <span>plans</span> to choose from.
            </h1>
            <div className="line"></div>
            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
              We have a couple of plans to chooose from. Lets know the one that
              best suits you.
            </p>
          </div>
        </div>
        <div className="circle"></div>
        <div className="box"></div>
      </div>

      <div className="coporate">
        <div className="plans">
          <div className="plans-wrapper">
            <div className="grid-plans">
              <div className="card plan one">
                <div className="p-h">
                  <h1>Branding</h1>
                </div>
                <h1 className="price">$1,800.00</h1>
                <div className="packages">
                  <ul>
                    <li>
                      Logo Design <span>$500</span>
                    </li>
                    <li>
                      Business Card Design <span>$600</span>
                    </li>
                    <li>
                      Security Card Design <span>$100</span>
                    </li>
                    <li>
                      Letterhead Paper Design <span>$100</span>
                    </li>
                    <li>
                      Invoice and Receipt Design <span>$200</span>
                    </li>
                    <li>
                      Logbook/ Brochure Design <span>$200</span>
                    </li>
                    <li>
                      Brand Identity Story Design <span>$100</span>
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <NavLink to="/coporate-message">Order Now</NavLink>
                </div>
              </div>
              <div className="card plan one">
                <div className="p-h">
                  <h1>SEO</h1>
                </div>
                <h1 className="price">
                  $2,700 <span>/3months</span>
                </h1>
                <div className="packages">
                  <ul>
                    <li>
                      Keyword research and analysis <span>$500</span>
                    </li>
                    <li>
                      On-page optimization <span>$500</span>
                    </li>
                    <li>
                      Content optimization <span>$700</span>
                    </li>
                    <li>
                      Link building <span>$500</span>
                    </li>
                    <li>
                      Local SEO <span>$500</span>
                    </li>
                    <li>
                      Monthly reporting and analysis <span>$400</span>
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <NavLink to="/coporate-message">Order now</NavLink>
                </div>
              </div>
              <div className="card plan one">
                <div className="p-h">
                  <h1>E-Commerce</h1>
                </div>
                <h1 className="price">$1,800.00</h1>
                <div className="packages">
                  <ul>
                    <li>
                      SHopify / Joomla / WooCommerce Store(WIth 70 product
                      posted before launch) <span>$500</span>
                    </li>
                    <li>
                      Online Payment Systems Integration( Stripe, PayPal,
                      ShoPay, etc.)
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <NavLink to="/coporate-message">Order Now</NavLink>
                </div>
              </div>
              <div className="card plan one">
                <div className="p-h">
                  <h1>Data Analysis</h1>
                </div>
                <h1 className="price">$3, 600</h1>
                <div className="packages">
                  <ul>
                    <li>
                      Sales Analysis <span>-$900</span>
                    </li>
                    <li>
                      Customer Analysis <span>-$900</span>
                    </li>
                    <li>
                      Inventory Analysis <span>-$900</span>
                    </li>
                    <li>
                      Marketing Analysis <span>-$900</span>
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <NavLink to="/coporate-message">Contact Us</NavLink>
                </div>
              </div>
              <div className="card plan two"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
