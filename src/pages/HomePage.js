import React from "react";
import Hero from "../Components/Hero/Hero.js";
import Websites from "../Components/Websites/Website.js";
import Brand from "../Components/Brand/Brand.js";
import Brief from "../Components/Brief/Brief.js";
import Team from "../Components/Team/Team.js";
import SalesPitch from "../Components/SalesPitch/SalesPitch.js";
import Copy from "../Components/Copy/Copy.js";
import Footer from "../Components/Footer/Footer.js";
//This contains the homepage components
function HomePage() {
  return (
    <>
      <Hero />
      <SalesPitch />
      <Copy />
      <Websites />
      <Brand />
      <Brief />
      <Team />
      <Footer />
    </>
  );
}

export default HomePage;
