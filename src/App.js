import "./App.css";
import { useState, useRef } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";

import Branding from "./pages/ServicePage/Branding/Branding.js";
import DigitalMarketing from "./pages/ServicePage/DigitalMarketing/DMarketing.js";
import AppDevelopment from "./pages/ServicePage/App/AppDev";
import ContentWriting from "./pages/ServicePage/ContentWriting/Content";
import SideNav from "./Components/SideNav/SideNav.js";
import ServicePage from "./pages/ServicePage/Service.js";
import HomePage from "./pages/HomePage.js";
// import EmailPage from "./pages/Email.js";
import Pricing from "./pages/Pricing/Pricing.js";
import Header from "./Components/Header/Header";
import Commerce from "./pages/ServicePage/Commerce/Commerce";
import WebDevelopment from "./pages/ServicePage/WebDev/Webdev";
import NoPageError from "./pages/404Page/404Page.jsx";
import ContactPage from "./pages/ContactPage/ContactCus";
import PricingMessage from "./pages/PricingContact/PricingContact";
import AboutPage from "./pages/About/About.jsx";
import Terms from "./pages/Terms-Prici/Terms";
import Privacy from "./pages/Terms-Prici/Privacy";
// import PricingMessage from "./Components/Contact/ContactPr.js";
function App() {
  const [navOpen, setNavOpen] = useState(false);

  const sideN = useRef(null);
  function NavToggle() {
    setNavOpen(!navOpen);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          Toggle={NavToggle}
          NavOpen={navOpen}
          NavState={navOpen}
          title={"Macgroup"}
          sub={"International Tech Services"}
        />

        {navOpen ? <SideNav Toggle={NavToggle} /> : null}
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/services" element={<ServicePage />}></Route>
          <Route exact path="/email" element={<ContactPage />}></Route>
          <Route exact path="/contact" element={<PricingMessage />}></Route>
          <Route exact path="/branding" element={<Branding />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
          <Route exact path="/termsandconditions" element={<Terms />}></Route>
          <Route exact path="/privacy" element={<Privacy />}></Route>

          <Route
            exact
            path="/webdevelopment"
            element={<WebDevelopment />}
          ></Route>
          <Route exact path="/commerce" element={<Commerce />}></Route>
          <Route
            exact
            path="/contentwriting"
            element={<ContentWriting />}
          ></Route>
          <Route
            exact
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          ></Route>
          <Route
            exact
            path="/appdevelopment"
            element={<AppDevelopment />}
          ></Route>

          <Route exact path="/about-us" element={<AboutPage />}>
            {" "}
          </Route>
          {/* <Route
              exact
              path="/coporate-message"
              element={<CoMessage />}
            ></Route> */}

          <Route path="*" element={<NoPageError />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
