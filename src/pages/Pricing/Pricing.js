import "./Pricing.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../../Components/Footer/Footer.js";

function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [showDialogue, setShowDialogue] = useState(false);
  const [date, setDate] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);

  const ShowModal = (packageName, price) => {
    //Get the current Date for the card
    let date = new Date();

    let day = date.getDate();
    let month = date.toLocaleString("default", { month: "short" });
    let year = date.getFullYear();

    let fullDate = day + " " + month + "," + year;

    setDate(fullDate);
    if (!packageName) {
      return new Error("Cannot be empty");
    }

    if (!price) {
      return new Error("Cannot be empty");
    }

    setSelectedPackage(packageName);
    setSelectedPrice(price);
    setShowDialogue(true);
    //Close Modal and Navigate to Email Page after 2 seconds

    setTimeout(() => {
      navigate("/contact");
    }, 2000);
  };

  return (
    <>
      {showDialogue && (
        <div
          className={`modal-overlay ${showDialogue ? "show" : "removeModal"}`}
        >
          <div className="modal-card">
            <div className="first-card">
              <h1 className="package-h">Package Information</h1>
              <h2 className="package-d">{date}</h2>
            </div>
            <div className="desc-card">
              <p className="desc-p">
                Thank you for your interest in our package. You have selected{" "}
                {selectedPackage} among our package lists.
              </p>
              <h2 className="other-info">Other Information:</h2>

              <p className="redirected">You will be redirected shortly!</p>
            </div>

            {/* <button className="closeModal" onClick={closeModal}>
              Close
            </button> */}
          </div>
        </div>
      )}
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
                  <button
                    onClick={() => {
                      ShowModal("BRANDING", "$1,800.00");
                    }}
                  >
                    Choose Plan
                  </button>
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
                  <button
                    onClick={() => {
                      ShowModal("SEO", "$2,700");
                    }}
                  >
                    Choose Plan
                  </button>
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
                      posted before launch)
                    </li>
                    <li>
                      Online Payment Systems Integration( Stripe, PayPal,
                      ShoPay, etc.)
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <button
                    onClick={() => {
                      ShowModal("E-commerce", "$1, 800.00");
                    }}
                  >
                    Choose Plan
                  </button>
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
                      Sales Analysis <span>$900</span>
                    </li>
                    <li>
                      Customer Analysis <span>$900</span>
                    </li>
                    <li>
                      Inventory Analysis <span>$900</span>
                    </li>
                    <li>
                      Marketing Analysis <span>$900</span>
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <button
                    onClick={() => {
                      ShowModal("Data Analysis", "$3,600.00");
                    }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="card plan one">
                <div className="p-h">
                  <h1>Social Media</h1>
                </div>
                <h1 className="price">$1, 950</h1>
                <div className="packages">
                  <ul>
                    <li>
                      Instagram and Facebook <span>$650</span>
                    </li>
                    <li>
                      Tiktok <span>$500</span>
                    </li>
                    <li>
                      Youtube <span>$200</span>
                    </li>
                    <li>
                      Pinterest and Twitter <span>$400</span>
                    </li>
                    <li>
                      Yelp <span>$200</span>
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <button
                    onClick={() => {
                      ShowModal("Social Media", "$1, 950.00");
                    }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="card plan one">
                <div className="p-h">
                  <h1>Content Writing.</h1>
                </div>
                <h1 className="price">$3, 000</h1>
                <div className="packages">
                  <ul>
                    <li>
                      Copywriting<span>$230 per hour</span>
                    </li>
                    <li>
                      SEO Content Writing <span>$200 per hour</span>
                    </li>
                    <li>
                      Blog Writing <span>150 per post</span>
                    </li>
                    <li>
                      Press Release Writing <span>$200 (300-500 words)</span>
                    </li>
                    <li>
                      Article Writing <span>$230 per article</span>
                    </li>
                    <li>
                      Social Media Content Writing <span>$230 per article</span>
                    </li>
                  </ul>
                </div>
                <div className="quote">
                  <button
                    onClick={() => {
                      ShowModal("Social Media", "$1, 950.00");
                    }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="other-packages">
          <div className="packages-wrapper">
            <h1 className="heading"> Other Packages</h1>
            <div className="scroll">
              <div className="sc">
                <table>
                  <thead>
                    <th>S/N</th>
                    <th>Package</th>
                    <th>Duration</th>
                    <th>Price</th>
                  </thead>
                  <tr>
                    <td>1</td>
                    <td>Digital Marketing</td>
                    <td>3 Months</td>
                    <td>$2, 500</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Custom(BeSpoke) Apps (Web and Mobile)</td>
                    <td>N/A</td>
                    <td>On Demand</td>
                  </tr>
                </table>
              </div>
            </div>
            <p className="disc">
              <span>Disclaimer: </span> The aforementioned packages are listed
              among the special packages available at MacGroup, and therefore,
              must be duly indicated when sending us a mail. Thank you.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
