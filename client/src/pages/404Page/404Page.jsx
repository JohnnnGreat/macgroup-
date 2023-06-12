import React, { useEffect } from "react";
import "./404Page.jsx";
import "./404.styles.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
function ErrorPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="error">
      <div className="error__wrapper">
        <h1 data-aos="fade-down" className="error-text">
          404
        </h1>
        <p className="error-sub">Not Found Error</p>
        <Link className="back-homepage" to="/">
          Back to HomePage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
