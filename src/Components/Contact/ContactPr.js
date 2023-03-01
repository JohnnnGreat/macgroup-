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

  const [errors, setErrors] = useState({});
  const [showDialogue, setShowDialogue] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(false);
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

    if (formValid) {
      setShowLoader(true);
      emailjs
        .sendForm(
          "service_67p71v4",
          "template_pajzgdm",
          form.current,
          "NhFQzm8AH31I7jKJz"
        )
        .then(
          (result) => {
            setShowLoader(false);
            console.log(result.text);
            setShowDialogue(true);

            setTimeout(() => {
              setShowDialogue(false);
              setEmail("");
              setSubject("");
              setMessage("");
            }, 2000);
          },
          (error) => {
            setShowLoader(false);
            console.log(error.text);
            setError(true);

            setTimeout(() => {
              setError(false);
            }, 2000);
          }
        );
    } else {
    }
  }
  //Close modal when opened
  function closeModal() {
    setShowDialogue(false);
  }
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-us">
      <div className="contact-us__wrapper">
        {showDialogue && (
          <div
            className={`modal-overlay ${showDialogue ? "show" : "removeModal"}`}
          >
            <div className="modal ">
              <h2>Thank you, We have received your message!</h2>
              <button className="closeModal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
        {error && (
          <div className={`modal-overlay ${error ? "show" : "removeModal"}`}>
            <div className="modal ">
              <h2>Internet Connection Required!</h2>
              <button className="closeModal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
        <div className="text-header">
          <h1 className="main-text">Contact Us</h1>
          <h1 className="stroke-text">Contact Us</h1>
          <h1 className="desc-text">
            Fill the form below so we can reach out to you.
          </h1>
        </div>

        <div className="input-fields">
          <form ref={form} onSubmit={sendEmail} action="">
            <p className="error-dis">{errors["email"]}</p>
            <input
              name="user_email"
              type="text"
              onChange={handleEmail}
              placeholder="Email"
              autoComplete="off"
              value={email}
            />
            <p className="m error-dis">{errors["subject"]}</p>
            <input
              name="user_subject"
              onChange={handleSubject}
              type="text"
              placeholder="Subject"
              autoComplete="off"
              value={subject}
            />
            <p className="m error-dis">{errors["message"]}</p>
            <textarea
              name="user_message"
              autoComplete="off"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={handleMessage}
              value={message}
            ></textarea>
            <button
              onClick={handleForm}
              value={Text}
              className="submit"
              type="submit"
            >
              Submit
              {showLoader && <div class="loader"></div>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
