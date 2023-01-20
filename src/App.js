import "./App.css";
import HomePage from "./pages/HomePage.js";
import Team from "./pages/TeamPage/Team.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header.js";
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
      {/* <Footer /> */}{" "}
    </BrowserRouter>
  );
}

export default App;
