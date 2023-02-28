import ImageOne from "./image 7.jpg";
import ImageTwo from "./image 8.jpg";
import ImageThree from "./image 9.jpg";
import ImageFour from "./image 10.jpg";
import ImageFive from "./image 11.jpg";
import ImageSix from "./image 12.jpg";
import "./Projects.scss";
function Projects() {
  return (
    <div className="projects">
      <div className="projects__wrapper">
        <h1 className="projects-header">Our Projects.</h1>
        <p className="projects-desc">Here are some of our past projects.</p>
        <div className="projects-section">
          <a
            target="_blank"
            href="https://www.behance.net/gallery/163852625/Miko-Plastic-Surgury"
          >
            <div className="image-container">
              <img src={ImageOne} alt="" />
              <div className="card-tag">
                <h1>MIko</h1>
                <p>UI Design</p>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/163833415/Veronicas-Kitchen"
          >
            <div className="image-container">
              <img src={ImageSix} alt="" />
              <div className="card-tag">
                <h1>Veronica's Kitchen</h1>
                <p>Brand Identity Design</p>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/163844491/Fellowship-of-the-Word"
          >
            <div className="image-container">
              <img src={ImageFour} alt="" />
              <div className="card-tag">
                <h1>Fellowship of the word</h1>
                <p>Flyer Design</p>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/163842171/Joniclo"
          >
            <div className="image-container">
              <img src={ImageFive} alt="" />
              <div className="card-tag">
                <h1>Joniclo</h1>
                <p>UI Design</p>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/163849887/Dr-GreenThumbs"
          >
            <div className="image-container">
              <img src={ImageTwo} alt="" />
              <div className="card-tag">
                <h1>Dr GreenThumb's</h1>
                <p>Brand Identity Design</p>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/163847415/Atlas-Pharmacies"
          >
            <div className="image-container">
              <img src={ImageThree} alt="" />
              <div className="card-tag">
                <h1>Atlas</h1>
                <p>UI Design</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
