import gsap from "gsap";
import "./Copy.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Fragment, useEffect, useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Copy = () => {
  const p1Ref = useRef(null),
    pitchContainerRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <Fragment>
      <section ref={pitchContainerRef} className="pitch">
        <p ref={p1Ref} className="pitch-line-1">
          WE CREATE
        </p>
        <p className="pitch-line-2">THE BEST</p>
        <p className="pitch-line-3">WEBSITES</p>
      </section>
      <section className="blobs">
        <section className="blobs__copy-1 hidden-on-mobile">
          <p>We offer a range of expert digital solutions, </p>
          <p>including custom app and web development,</p>
          <p>e-commerce solutions, and comprehensive </p>
          <p>digital marketing campaigns</p>
        </section>

        <section className="blobs__copy-1 hidden-on-desktop">
          <p>
            We offer a range of expert digital solutions, including custom app
            and web development, e-commerce solutions, and comprehensive digital
            marketing campaigns
          </p>
        </section>

        <section className="blobs__copy-2">
          <section className="copy-2__text">
            <h3>Let's GET</h3>
            <p>IN CONTACT</p>
          </section>
        </section>

        <section className="blobs__copy-3">
          <section className="copy-3__text">
            <p>
              Our team of experienced web designers and developers will work
              with you to bring your vision to life and build a website that
              meets the specific needs and goals of your business.
            </p>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default Copy;
