import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Faq from "react-faq-component";
import "./Contact.scss";
import Footer from "../../Components/Footer/Footer";
function ContactCus() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <div className="mail">
        <div className="mail-wrapper">
          <div className="main">
            <div className="map"></div>
            <div className="faq">
              <div className="faqs-header">
                <h1>Frequently asked questions.</h1>
                <p>
                  Here are some frequently asked questions (FAQs) for MacGroup
                  International Tech Services:
                </p>
              </div>
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
    rows: [
      {
        title:
          "What kind of services does MacGroup International Tech Services provide?",
        content:
          "We provide a range of digital solutions, including eCommerce development, app development, digital marketing, content writing, and branding services.",
      },
      {
        title:
          "Can you provide examples of eCommerce development projects you have completed?",
        content:
          "Yes, we have worked on a variety of eCommerce projects, including developing online stores for small businesses, optimizing existing eCommerce platforms, and integrating eCommerce functionality into existing websites.",
      },
      {
        title: "What kinds of apps do you develop?",
        content:
          "We develop custom mobile apps for iOS and Android platforms, including native apps, hybrid apps, and web apps.",
      },
      {
        title: "How can you help with digital marketing?",
        content:
          "Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content marketing. We work with clients to create and implement a customized digital marketing strategy that fits their unique needs.",
      },
      {
        title: "Do you offer content writing services?",
        content:
          "Yes, we offer professional content writing services, including blog posts, articles, website copy, and marketing materials.",
      },
      {
        title: "What kind of branding services do you offer?",
        content:
          "Our branding services include logo design, brand identity development, and brand strategy consulting. We work with clients to create a cohesive brand image that aligns with their business goals and values.",
      },
      {
        title: "How long does it take to complete a project?",
        content:
          "The timeline for each project varies depending on the scope of work and complexity of the project. We work closely with clients to establish project milestones and deadlines and communicate regularly throughout the project.",
      },
      {
        title:
          "How much does it cost to work with MacGroup International Tech Services?",
        content:
          "The cost of each project is determined on a case-by-case basis, depending on the scope of work and specific client needs. We provide detailed project proposals and cost estimates upfront, so clients know exactly what to expect before work begins.",
      },
      {
        title:
          "How can I get started with MacGroup International Tech Services?",
        content:
          "Simply reach out to us via our website or email, and we'll schedule a consultation to discuss your project needs and how we can help.",
      },
    ],
  };

  return (
    <div className="faq">
      <Faq data={data} styles={styles} />
    </div>
  );
};
