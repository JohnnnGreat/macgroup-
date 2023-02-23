import React from "react";
import Location from "../LocationMap/Location.jsx";
import Faq from "react-faq-component";
import "./Contact.scss";
import Footer from "../../Components/Footer/Footer";
function ContactCus() {
  return (
    <>
      <div className="mail">
        <div className="mail-wrapper">
          <div className="main">
            <div className="map">
              <Location />
            </div>
            <div className="faq">
              <Faqs />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactCus;

const Faqs = () => {
  const styles = {
    // Styles for the FAQ container
    faqContainer: {
      backgroundColor: "#f8f8f8",
      padding: "10rem",
      borderRadius: "8px",
      maxWidth: "800px",
      margin: "0 auto",
      rowContentPaddingTop: "10px",
    },
    // Styles for the FAQ question rows
    row: {
      backgroundColor: "#fff",
      borderRadius: "4px",
      marginBottom: "1rem",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
      padding: "1rem",
      rowContentPaddingTop: "10px",
    },
    // Styles for the FAQ question titles
    title: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      padding: "1rem",
    },
    // Styles for the FAQ question content
    content: {
      fontSize: "1rem",
      lineHeight: "1.5",
      padding: "1rem",
    },
  };

  const data = {
    title: "Frequently Asked Questions",
    rows: [
      {
        title: "What is Lorem Ipsum?",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        title: "Why do we use it?",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        title: "Where does it come from?",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
      },
    ],
  };

  return (
    <div className="faq">
      <Faq data={data} styles={styles} />;
    </div>
  );
};
