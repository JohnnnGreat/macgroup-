import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
function TeamPage() {
  function Show() {
    useEffect(() => {
      scroll.scrollToTop();
    }, []);
  }

  Show();
  return (
    <div>
      <div className="team" id="team">
        <div className="team__wrapper">
          <div className="team__wrapper__bg-text"></div>
          <div className="desc" data-aos="fade-up" data-aos-duration="2000">
            <p>
              At MacGroup, we are proud to have a team of experienced
              professionals who are dedicated to delivering top-quality digital
              solutions to our clients.
            </p>
          </div>
        </div>
        <div className="team-bar">
          <h1>Meet Our Team</h1>
        </div>
        <div className="team__wrapper">
          {" "}
          <div className="team-icon">
            <div className="team-one"></div>
            <div className="team-one"></div>
          </div>
          <div className="line"></div>
          <div className="contact">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="start-project"
            >
              <h1>Start a Project</h1>
            </div>
            <div className="contact-us">
              <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                className="cont-us"
              >
                Contact Us
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="2000" className="sub">
                Lets start your next digital project
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="linetwo"
            ></div>
            <div data-aos="fade-up" data-aos-duration="2000" className="email">
              <a className="email-btn" href="/">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
