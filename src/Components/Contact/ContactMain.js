import ContactSvg from "./Contact.svg";
import { useState } from "react";
import { RadioGroup, Radio } from "react-radio-group";

import "./ContactMain.scss";
import Select from "react-select";
const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [showDialogue, setShowDialogue] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [ErrorFName, setErrorFName] = useState(false);
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Text, setText] = useState("");
  const [Error, setError] = useState(false);
  const options = [
    { value: "Modify Existing Product(s)", label: "Modify Existing Product" },
    { value: "Revamp a Digital Platform", label: "Revamp a Digital Platform" },
    {
      value: "Digital Service Consultancy",
      label: "Digital Service Consultancy",
    },
    {
      value: "Establish Relevancy in the Market Space",
      label: "Establish Relevancy in the Market Space",
    },
  ];
  const budget = [
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

  const onChange = (e) => {
    const { name } = e.target;
    console.log("clicked  ==>", name);
  };

  const handleFormP = (e) => {
    e.preventDefault();
  };

  const closeModal = () => {
    setShowDialogue(false);
  };

  //Handle input select

  const handleFName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  //Handle Error and Validation

  const ErrorHandler = () => {
    if (
      FirstName == "" ||
      LastName == "" ||
      Phone == "" ||
      Email == "" ||
      selectedOption == "" ||
      Text == ""
    ) {
      setError(true);
    } else {
      setError(false);
    }

    console.log(Error);
  };
  const handleForm = () => {
    //Open Modal on Form submit click
    setShowDialogue(true);
    ErrorHandler();

    if (Error) {
      console.log("An Error Has Occured");
    } else {
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
    }
  };

  return (
    <div className="contactForm">
      {showDialogue && (
        <div
          className={`modal-overlay ${showDialogue ? "show" : "removeModal"}`}
        >
          <div className="modal">
            <h2>Thank you, We have received your message!</h2>
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
            <form onClick={handleFormP}>
              <label htmlFor="firstName">
                {" "}
                FIRST NAME <span className="required">*</span>
              </label>

              <input
                type="text"
                id="firstName"
                placeholder="FIRST NAME"
                onChange={handleFName}
                value={FirstName}
              />
              <label className="margin" htmlFor="lastName">
                {" "}
                LAST NAME <span className="required">*</span>
              </label>

              <input
                type="text"
                id="lastName"
                placeholder="LAST NAME"
                onChange={handleLName}
                value={LastName}
              />
              <label className="margin" htmlFor="email">
                {" "}
                EMAIL <span className="required">*</span>
              </label>

              <input
                type="text"
                id="email"
                placeholder="johndoe@email.com"
                onChange={handleEmail}
                value={Email}
              />
              <label className="margin" htmlFor="number">
                {" "}
                PHONE <span className="required">*</span>
              </label>
              <input
                type="text"
                id="text"
                placeholder="+1 (123) 456-7890"
                onChange={handlePhone}
                value={Phone}
              />
              <label className="margin" htmlFor="number">
                {" "}
                DESCRIBE YOUR PRODUCT.<span className="required">*</span>
              </label>
              <Select
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
                styles={customStyles}
              />
              <label className="margin" htmlFor="number">
                {" "}
                WHAT IS YOUR BUDGET?.<span className="required">*</span>
              </label>
              <Select
                options={budget}
                value={selectedBudget}
                onChange={setSelectedBudget}
                styles={customStyles}
              />

              <label htmlFor="text">
                {" "}
                ANYTHING ELSE? <span className="required">*</span>
              </label>

              <textarea
                onChange={handleText}
                value={Text}
                name=""
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
