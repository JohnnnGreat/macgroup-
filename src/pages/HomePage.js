import { useEffect } from "react";

import Hero from "../Components/Hero/Hero.js";
import Websites from "../Components/Websites/Website.js";
import Brand from "../Components/Brand/Brand.js";
import Brief from "../Components/Brief/Brief.js";
import Team from "../Components/Team/Team.js";
import Values from "../Components/Values/Values.jsx";
import Companies from "../Components/Companies/Companies.js";
import Projects from "../Components/Projects/Projects.js";
import AOS from "aos";
import { animateScroll as scroll } from "react-scroll";

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
      <Companies />
      <Websites />
      <Brand />
      <Brief />
      <Projects />
      <Values />
      <Team />
      <Footer />
    </>
  );
}

export default HomePage;
