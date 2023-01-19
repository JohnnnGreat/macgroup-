import React from "react";
import Hero from "../Components/Hero/Hero.js";
import Websites from "../Components/Websites/Website.js";
import Brand from "../Components/Brand/Brand.js";
import Brief from "../Components/Brief/Brief.js";
import Team from "../Components/Team/Team.js";

function HomePage() {
  return (
    <>
      <Hero />
      <Websites />
      <Brand />
      <Brief />
      <Team />
    </>
  );
}

export default HomePage;
