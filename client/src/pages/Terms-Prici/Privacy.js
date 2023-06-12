import "./Terms.scss";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../../Components/Footer/Footer";
function OurPrivacy() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <div className="terms">
        <div className="terms__wrapper">
          <h1 className="header-term">Privacy Policy</h1>

          <div className="terms-main">
            <p className="t-p">
              MacGroup International Tech Services ("MacGroup", "we", "us",
              "our") is committed to protecting your privacy. This privacy
              policy describes the types of information we collect, how we use
              and share that information, and your choices regarding your
              personal information. By using our website and services, you
              consent to our collection, use, and disclosure of your information
              as described in this privacy policy.
            </p>
            <h1 className="header-p">1. Information we collect</h1>
            <p className="t-p">
              We may collect personal information from you when you visit our
              website, use our services, or contact us. This information may
              include your name, email address, phone number, company name, job
              title, and any other information you provide to us. We will not
              collect sensitive information such as passwords, financial
              information, or social security numbers. We may also collect
              non-personal information such as your IP address, browser type,
              device type, and operating system.
            </p>
            <h1 className="header-p">2. How we use your information</h1>
            <p className="t-p">
              We may use your personal information for the following purposes:
              <ul>
                <li>a. To provide and improve our services to you</li>
                <li>
                  b. To communicate with you about our services, promotions, and
                  other news
                </li>
                <li>c. To respond to your inquiries and requests</li>
                <li>
                  d. To comply with legal obligations and protect our rights and
                  interests
                </li>
                <li>
                  e. We may also use non-personal information for analytics,
                  marketing, and improving our website and services.
                </li>
              </ul>
            </p>
            <h1 className="header-p">3. How we share your information</h1>
            <p className="t-p">
              We may share your personal information with third-party service
              providers who assist us in providing our services to you. These
              providers may include payment processors, hosting providers, email
              service providers, and other vendors. We require these providers
              to use your personal information only to provide services to us
              and to maintain appropriate security measures to protect your
              information. <br />
              We may also disclose your personal information if required by law
              or in response to a valid legal process, such as a court order or
              subpoena.
            </p>
            <h1 className="header-p">4. Your choices</h1>
            <p className="t-p">
              You may choose not to provide us with certain personal
              information, but this may limit your ability to use our services.
              You may also choose to opt-out of receiving marketing
              communications from us by following the unsubscribe instructions
              included in our emails.
            </p>
            <h1 className="header-p">
              5. Cookies and other tracking technologies
            </h1>
            <p className="t-p">
              We may use cookies and other tracking technologies to collect
              non-personal information about your use of our website and
              services. Cookies are small files that are stored on your device
              and allow us to recognize your device and track your activity. We
              may use cookies to remember your preferences, personalize your
              experience, and analyze your usage of our website and services.
            </p>
            <h1 className="header-p">6. Security</h1>
            <p className="t-p">
              We maintain appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, and use. However, no security measures can guarantee
              absolute security, and we cannot guarantee the security of your
              personal information.
            </p>
            <h1 className="header-p">7. Changes to this privacy policy</h1>
            <p className="t-p">
              We may update this privacy policy from time to time. We will
              notify you of any material changes to this policy by posting a
              notice on our website or by other means.
            </p>
            <h1 className="header-p">8. Contact Us</h1>
            <p className="t-p">
              If you have any questions or concerns about these Terms, please
              contact us at <span className="bold">info@macgrouptech.com</span>
            </p>
            <p className="t-p">
              By using this Site, you acknowledge that you have read,
              understood, and agree to be bound by these Terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurPrivacy;
