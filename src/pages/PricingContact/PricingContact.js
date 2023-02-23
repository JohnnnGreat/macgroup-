import Footer from "../../Components/Footer/Footer";
import MainContact from "../../Components/Contact/ContactPr.js";
import Phone from "./phone.png";
import "./PricingContact.scss";
function PricingContact() {
  return (
    <>
      <img className="img-pr" src={Phone} alt="phone device" />
      <MainContact />
      <Footer />
    </>
  );
}

export default PricingContact;
