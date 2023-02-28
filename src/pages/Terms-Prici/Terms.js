import "./Terms.scss";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../../Components/Footer/Footer";
function TermsAndCondition() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <div className="terms">
        <div className="terms__wrapper">
          <h1 className="header-term">Macgroup's Terms and Condition.</h1>

          <div className="terms-main">
            <p className="t-p">
              Welcome to the MacGroup International Tech Services website
              ("Site"). The following terms and conditions ("Terms") apply to
              your use of this Site. By accessing, browsing, or using this Site,
              you acknowledge that you have read, understood, and agree to be
              bound by these Terms. If you do not agree to these Terms, you
              should not use this Site.
            </p>
            <h1 className="header-p">1. Use of Site</h1>
            <p className="t-p">
              This Site is provided for informational purposes only. You may use
              this Site only for lawful purposes and in accordance with these
              Terms. You are prohibited from using this Site for any illegal or
              unauthorized purpose, including but not limited to, any act that
              would constitute a criminal offense or give rise to civil
              liability.
            </p>
            <h1 className="header-p">2. Intellectual Property</h1>
            <p className="t-p">
              The content of this Site, including but not limited to, text,
              graphics, logos, images, and software is the property of MacGroup
              International Tech Services and is protected by United States and
              international copyright laws. You may not modify, copy,
              distribute, transmit, display, perform, reproduce, publish,
              license, create derivative works from, transfer, or sell any
              information, software, products, or services obtained from this
              Site.
            </p>
            <h1 className="header-p">3. Disclaimer of Warranties</h1>
            <p className="t-p">
              This Site is provided on an "as is" and "as available" basis.
              MacGroup International Tech Services makes no warranties, either
              expressed or implied, as to the operation of this Site, the
              information, content, materials, or products included on this
              Site. To the fullest extent permissible by law, MacGroup
              International Tech Services disclaims all warranties, expressed or
              implied, including but not limited to, implied warranties of
              merchantability and fitness for a particular purpose.
            </p>
            <h1 className="header-p">4. Limitation of Liability</h1>
            <p className="t-p">
              MacGroup International Tech Services shall not be liable for any
              damages arising from the use or inability to use this Site or the
              information, content, materials, or products included on this
              Site. MacGroup International Tech Services shall not be liable for
              any damages arising from the use of links to third-party websites
              or the information, content, materials, or products included on
              those sites.
            </p>
            <h1 className="header-p">5. Indemnification</h1>
            <p className="t-p">
              You agree to indemnify, defend, and hold MacGroup International
              Tech Services, its affiliates, officers, directors, employees,
              agents, licensors, and suppliers harmless from and against any and
              all claims, liabilities, damages, losses, costs, expenses, or fees
              (including reasonable attorneys' fees) that such parties may incur
              as a result of or arising from your use of this Site or your
              breach of these Terms.
            </p>
            <h1 className="header-p">6. Governing Law</h1>
            <p className="t-p">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, without regard to its
              conflicts of law provisions. Any legal action or proceeding
              related to this Site shall be brought exclusively in the state or
              federal courts located in Los Angeles, California.
            </p>
            <h1 className="header-p">7. Modifications</h1>
            <p className="t-p">
              MacGroup International Tech Services reserves the right to modify
              these Terms at any time without notice. Your continued use of this
              Site after any such changes constitutes your acceptance of the new
              Terms.
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

export default TermsAndCondition;
