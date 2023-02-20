import { useEffect } from "react";
import Hero from "../Components/Hero/Hero.js";
import Websites from "../Components/Websites/Website.js";
import Brand from "../Components/Brand/Brand.js";
import Brief from "../Components/Brief/Brief.js";
import Team from "../Components/Team/Team.js";
import Values from "../Components/Values/Values.jsx";
<<<<<<< HEAD
import Companies from "../Components/Companies/Companies.js";
import Projects from "../Components/Projects/Projects.js";
=======
>>>>>>> 29c2a7384a93544ff2c189ae13ca882a283bafb7
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";
// import SalesPitch from "../Components/SalesPitch/SalesPitch.js";
// import Copy from "../Components/Copy/Copy.js";
import Footer from "../Components/Footer/Footer.js";

//This contains the homepage components
function HomePage() {
  useEffect(() => {
    AOS.init();
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <Hero />
<<<<<<< HEAD
      <Companies />
      <Websites />
      <Brand />
      <Brief />
      <Projects />
=======
      <Websites />
      <Brand />
      <Brief />
>>>>>>> 29c2a7384a93544ff2c189ae13ca882a283bafb7
      <Values />
      <Team />
      <Footer />
    </>
  );
}

export default HomePage;
