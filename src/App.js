import "./App.css";
import Header from "./Components/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
import Websites from "./Components/Websites/Website.js";
import Brand from "./Components/Brand/Brand.js";
import Brief from "./Components/Brief/Brief.js";
import Team from "./Components/Team/Team.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div  className="App">
      <Header title={"MACGROUP"} sub={"INTERNATIONAL TECH SERVICE"} />
      <Hero />
      <Websites />
      <Brand />
      <Brief />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
