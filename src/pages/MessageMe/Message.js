import { ContactUs } from "../ServicePage/Service";
import { Hero } from "../ServicePage/Service.js";
import Footer from "../../Components/Footer/Footer.js";
function Message() {
  return (
    <>
      <Hero headerText={<>We want to hear from you!!</>} />
      <ContactUs
        title="Contact Us"
        shadow="Contact Us"
        desc="Fill the form the form below to request a custom package"
      />
      <Footer />
    </>
  );
}

export default Message;
