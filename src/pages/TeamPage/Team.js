import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../Components/Footer/Footer.js";

import { animateScroll as scroll } from "react-scroll";
function TeamPage() {
  function Show() {
    useEffect(() => {
      scroll.scrollToTop();
    }, []);
  }

  Show();
  return <div></div>;
}

const ContactUs = () => {
  // const [email, setEmail] = useState("");
  // const [subject, setSeubject] = useState("");
  // const [message, setMessage] = useState("");
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_btqqoig",
        "template_sprcbxj",
        form.current,
        "8dnyCGiR6nE3cE-by"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-us">
      <div className="contact-us__wrapper">
        <div className="text-header">
          <h1 className="main-text">CONTACT US</h1>
          <h1 className="stroke-text">CONTACT US</h1>
          <h1 className="desc-text">WE WANT TO HEAR FROM YOU!!!</h1>
        </div>

        <div className="input-fields">
          <form ref={form} onSubmit={sendEmail} action="">
            <input name="user_email" type="text" placeholder="Email" />
            <input name="email_subject" type="text" placeholder="Subject" />
            <textarea
              name="email_message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
