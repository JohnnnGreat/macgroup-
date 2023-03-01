import React, { useEffect } from "react";

import "./Values.styles.scss";
import AOS from "aos";

function Values() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="values">
      <div className="values__wrapper">
        <h1 className="values-text">Our Values</h1>
        <p className="values-sub">
          At our digital agency, we believe that success starts with
          understanding the needs and goals of our clients. That's why we offer
          a range of services designed to help businesses thrive in the digital
          age.
        </p>

        <div className="values-box">
          <div className="box-one card">
            <div className="first">
              <h1 className="box-num">1</h1>
            </div>
            <h1 className="box-text">Innovation</h1>
            <p className="box-desc">
              We are committed to fostering a culture of innovation that is
              always looking for new and creative solutions to the challenges
              our clients face. We believe in embracing change and taking
              calculated risks to drive progress and growth, and we encourage
              experimentation and learning from failures.
            </p>
          </div>
          <div className="box-one card">
            <div className="first">
              <h1 className="box-num">2</h1>
            </div>
            <h1 className="box-text">Efficiency</h1>
            <p className="box-desc">
              Efficiency is a core value that drives everything we do at our
              digital agency. We believe in streamlining processes and systems
              to minimize waste and maximize productivity, and we make
              data-driven decisions that optimize performance and results.
            </p>
          </div>
          <div className="box-one card">
            <div className="first">
              <h1 className="box-num">3</h1>
            </div>
            <h1 className="box-text">Security</h1>
            <p className="box-desc">
              At our digital agency, the security of our clients' data and
              information is of the utmost importance. We maintain the highest
              standards of security and stay informed of industry trends and
              advancements in security technology to ensure that we are always
              providing the most secure solutions possible.
            </p>
          </div>
          <div className="box-one card">
            <div className="first">
              <h1 className="box-num">4</h1>
            </div>
            <h1 className="box-text">Fast Delivery</h1>
            <p className="box-desc">
              At our digital agency, we understand the importance of delivering
              solutions quickly and efficiently. We believe in providing fast
              delivery that meets the evolving needs of our clients, and we are
              committed to delivering solutions that are not only effective, but
              also delivered in a timely manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
