import ContactSvg from "./Contact.svg";
import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import "./ContactMain.scss";
import Select from "react-select";

const ContactForm = () => {
  //Initialize state for input
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [Text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const [showDialogue, setShowDialogue] = useState(false);
  const [error, setError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  //Get the ref for form
  const form = useRef(null);

  //Options for Product choice
  const options = [
    { value: "Modify Existing Product(s)", label: "Modify Existing Product" },
    { value: "Revamp a Digital Platform", label: "Revamp a Digital Platform" },
    {
      value: "Digital Service Consultancy",
      label: "Digital Service Consultancy",
    },
    {
      value: "Establish Relevancy in the Market Industry",
      label: "Establish Relevancy in the Market Industry",
    },
    {
      value: "Build your own app",
      label: "Build your own app",
    },
  ];

  //Option for budget choice
  const budget = [
    { value: "$2k - 5k", label: "$2k - 5k" },
    { value: "$5k - 50k", label: "$5k - 50k" },
    { value: "$50k-100k", label: "$50k-100k" },
    {
      value: "$100k-130k",
      label: "$100k-130k",
    },
    {
      value: "$130k-230k",
      label: "$130k-230k",
    },
  ];

  //Custom styling for the select button
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "5px",
      boxShadow: state.isFocused ? "0 0 0 2px #5f5fff" : "none",
      // borderColor: state.isFocused ? "#5f5fff" : provided.borderColor,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#5f5fff" : provided.backgroundColor,
      color: state.isFocused ? "white" : provided.color,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "white" : provided.color,
    }),
  };

  //handle input values
  function handleFName(event) {
    setFirstName(event.target.value);
  }

  function handleLName(event) {
    setLastName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleText(event) {
    setText(event.target.value);
  }

  //Validate Form inputs
  function validateForm() {
    let errors = {};
    let formIsValid = true;

    if (!FirstName) {
      formIsValid = false;
      errors["firstName"] = "First name is required";
    }

    if (!LastName) {
      formIsValid = false;
      errors["lastName"] = "Last name is required";
    }

    if (!Email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    }

    if (!Phone) {
      formIsValid = false;
      errors["phone"] = "Phone is required";
    }

    if (!selectedOption) {
      formIsValid = false;
      errors["product"] = "Product is required";
    }

    if (!selectedBudget) {
      formIsValid = false;
      errors["budget"] = "Budget is required";
    }

    setErrors(errors);
    return formIsValid;
  }

  //Close modal when opened
  function closeModal() {
    setShowDialogue(false);
  }

  //Handle Form on submission
  function handleForm(event) {
    event.preventDefault();

    if (validateForm()) {
      setShowLoader(true);
      emailjs
        .sendForm(
          "service_67p71v4",
          "template_1cpnl6g",
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
              setFirstName("");
              setLastName("");
              setEmail("");
              setPhone("");
              setSelectedOption("");
              setSelectedBudget("");
              setText("");
            }, 3000);
          },
          (error) => {
            setShowLoader(false);
            setError(true);

            setTimeout(() => {
              setError(false);
            }, 3000);
          }
        );
    }
  }

  return (
    <div className="contactForm">
      {/* Show Pop up value */}
      {showDialogue && (
        <div
          className={`modal-overlay ${showDialogue ? "show" : "removeModal"}`}
        >
          <div className="modal ">
            <h2>
              Thank you for your message! We appreciate you reaching out and
              will be responding shortly. Have a great day!
            </h2>
            <button className="closeModal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className={`modal-overlay ${error ? "show" : "removeModal"}`}>
          <div className="modal ">
            <h2>Internet connection required! </h2>
            <button className="closeModal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="contactForm__wrapper">
        <div className="contactForm-header">
          <h1>
            Let's <span>get started!</span>
          </h1>
          <p>Book your first digital solution session with us</p>
          <p>We look forward to working with you!!</p>
        </div>
        <div className="contactForm-main">
          <img src={ContactSvg} alt="" />
          <div className="form-section">
            <form ref={form}>
              <label htmlFor="firstName">
                {" "}
                FIRST NAME <span className="required">*</span>
              </label>
              <p className="error-disp">{errors["firstName"]}</p>
              <input
                type="text"
                id="firstName"
                placeholder="(eg. John..)"
                onChange={handleFName}
                value={FirstName}
                name="user_firstname"
              />
              <label className="margin" htmlFor="lastName">
                {" "}
                LAST NAME <span className="required">*</span>
              </label>

              <p className="error-disp">{errors["lastName"]}</p>
              <input
                type="text"
                id="lastName"
                placeholder="(eg. Doe..)"
                onChange={handleLName}
                value={LastName}
                name="user_lastname"
              />
              <label className="margin" htmlFor="email">
                {" "}
                EMAIL <span className="required">*</span>
              </label>
              <p className="error-disp">{errors["email"]}</p>
              <input
                type="text"
                id="email"
                placeholder="johndoe@email.com"
                onChange={handleEmail}
                value={Email}
                name="user_email"
              />
              <label className="margin" htmlFor="number">
                {" "}
                PHONE <span className="required">*</span>
              </label>
              <p className="error-disp">{errors["phone"]}</p>
              <input
                type="text"
                id="text"
                placeholder="+1 (123) 456-7890"
                onChange={handlePhone}
                value={Phone}
                name="user_phone"
              />
              <label className="margin" htmlFor="number">
                {" "}
                DESCRIBE YOUR PRODUCT.<span className="required">*</span>
              </label>
              <p className="error-disp">{errors["product"]}</p>
              <Select
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
                styles={customStyles}
                name="user_product"
              />
              <label className="margin" htmlFor="number">
                {" "}
                WHAT IS YOUR BUDGET?.<span className="required">*</span>
              </label>
              <p className="error-disp">{errors["budget"]}</p>
              <Select
                options={budget}
                value={selectedBudget}
                onChange={setSelectedBudget}
                styles={customStyles}
                name="user_budget"
              />

              <label htmlFor="text"> ANYTHING ELSE?</label>

              <textarea
                onChange={handleText}
                value={Text}
                name="user_text"
                id="text"
                cols="30"
                rows="10"
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
    </div>
  );
};

export default ContactForm;
