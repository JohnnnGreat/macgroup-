import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPr.scss";
import { animateScroll as scroll } from "react-scroll";
function ContactPage() {
  function Show() {
    useEffect(() => {
      scroll.scrollToTop();
    }, []);
  }

  Show();
  return (
    <>
      <ContactUs></ContactUs>
    </>
  );
}

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});

  const form = useRef(null);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubject(e) {
    setSubject(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleForm() {
    let errors = {};
    let formValid = true;
    if (!email) {
      formValid = false;
      errors["email"] = "Invalid Email Address";
    }

    if (!message) {
      formValid = false;
      errors["message"] = "Message can not be empty";
    }

    if (!subject) {
      formValid = false;
      errors["subject"] = "Invalid subject";
    }

    setErrors(errors);
    console.log(formValid);
    console.log(errors);

    if (formValid) {
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
      alert("Message Sent succesfully");
    } else {
      alert("Error");
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-us">
      <div className="contact-us__wrapper">
        <div className="text-header">
          <h1 className="main-text">Contact Us</h1>
          <h1 className="stroke-text">Contact Us</h1>
          <h1 className="desc-text">Fill the form below.</h1>
        </div>

        <div className="input-fields">
          <form ref={form} onSubmit={sendEmail} action="">
            <p>{errors["email"]}</p>
            <input
              name="user_email"
              type="text"
              onChange={handleEmail}
              placeholder="Email"
              autocomplete="off"
              value={email}
            />
            <p>{errors["subject"]}</p>
            <input
              name="email_subject"
              onChange={handleSubject}
              type="text"
              placeholder="Subject"
              autocomplete="off"
              value={subject}
            />
            <p>{errors["message"]}</p>
            <textarea
              name="email_message"
              autocomplete="off"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={handleMessage}
              value={message}
            ></textarea>
            <input type="submit" onClick={handleForm} value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
