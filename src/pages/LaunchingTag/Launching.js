import "./Launching.scss";
import CEO from "./CEoEdit.jpg";
import CloseIcon from "@mui/icons-material/Close";
function Launching({ LaunchingMessage }) {
  function handleClose() {
    LaunchingMessage(false);
  }
  return (
    <div className="launching">
      <div className="card">
        <div className="box-s"></div>
        <p className="launching-text">Dear valued clients, </p>
        <p className="launching-text">
          I am thrilled to announce the MacGroup International Tech Services
          website launch. Our website is the perfect platform to showcase our
          wide range of services which includes branding, software engineering,
          digital marketing, content writing, graphics design, and more.
        </p>
        <p className="launching-text">
          At MacGroup International Tech Services, we believe in providing
          exceptional services to our clients. Our team of experts is dedicated
          to delivering innovative and effective solutions to meet your unique
          needs. With our extensive experience in the industry, we can help you
          achieve your goals and succeed in today's digital age.
        </p>
        <p className="launching-text">
          We understand that your satisfaction is our top priority, and we will
          go above and beyond to ensure that your expectations are met. Our
          website is designed to provide you with a seamless user experience,
          making it easier for you to browse our services and get in touch with
          us.
        </p>
        <p className="launching-text">
          Thank you for choosing MacGroup International Tech Services as your
          trusted partner. We look forward to serving you and helping you
          achieve your goals.
        </p>
        <p className="launching-text">Sincerely,</p>
        <button onClick={handleClose} className="closeBtn">
          <CloseIcon fontSize="medium" />
        </button>
        <div className="auth">
          <img src={CEO} alt="" />
          <div className="text-name">
            <h1 className="main-name">Sam Adiele</h1>
            <h1 className="main-title">
              CEO, MacGroup International Tech Services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Launching;
