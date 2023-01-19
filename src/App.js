import "./App.css";
import HomePage from "./pages/HomePage.js";
import Team from "./pages/TeamPage/Team.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header.js";
<<<<<<< HEAD
import TeamPage from "./pages/TeamPage/Team.js";
import ServicePage from "./pages/ServicePage/Service.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title={"MACGROUP"} sub={"INTERNATIONAL TECH SERVICE"} />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/team" element={<TeamPage />}></Route>
          <Route exact path="/services" element={<ServicePage />}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
=======
import Hero from "./Components/Hero/Hero.js";
import Copy from "./Components/Copy/Copy";
import SalesPitch from "./Components/SalesPitch/SalesPitch";

function App() {
  return (
    <div className="App">
      <Header title={"MACGROUP"} sub={"INTERNATIONAL TECH SERVICE"} />
      <Hero />
      <SalesPitch/>
      <Copy/>
    </div>
>>>>>>> 8e39598e756a3afbed4c9a037d03faf313fc2d62
  );
}

export default App;
