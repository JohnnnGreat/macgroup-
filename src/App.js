import "./App.css";
import { useState, useRef, useEffect } from "react";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage.js";
import Team from "./pages/TeamPage/Team.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header.js";
import Branding from "./pages/ServicePage/Branding/Branding.js";
import DigitalMarketing from "./pages/ServicePage/DigitalMarketing/DMarketing.js";
import AppDevelopment from "./pages/ServicePage/App/AppDev";
import ContentWriting from "./pages/ServicePage/ContentWriting/Content";
import SideNav from "./Components/SideNav/SideNav.js";
import ServicePage from "./pages/ServicePage/Service.js";
const Side = lazy(() => import("./Components/SideNav/SideNav.js"));
const Home = lazy(() => import("./pages/HomePage.js"));
const Service = lazy(() => import("./pages/ServicePage/Service.js"));

const Commerce = lazy(() => import("./pages/ServicePage/Commerce/Commerce"));
const WebDev = lazy(() => import("./pages/ServicePage/WebDev/Webdev.js"));
const EmailPage = lazy(() => import("./pages/Email.js"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing.js"));
const CoMessage = lazy(() => import("./pages/ContactPage/ContactCus.js"));

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const sideN = useRef(null);
  function NavToggle() {
    setNavOpen(!navOpen);
    console.log(`${navOpen} nav open`);
    console.log(sideN);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          Toggle={NavToggle}
          NavOpen={navOpen}
          NavState={navOpen}
          title={"MACGROUP"}
          sub={"International Tech Services"}
        />
        <Suspense fallback={"<h1> Loading </h1>"}>
          {navOpen ? <Side Toggle={NavToggle} /> : null}
        </Suspense>
        <Suspense>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/services" element={<ServicePage />}></Route>
            <Route exact path="/email" element={<EmailPage />}></Route>
            <Route exact path="/branding" element={<Branding />}></Route>
            <Route exact path="/pricing" element={<Pricing />}></Route>
            <Route exact path="/webdevelopment" element={<WebDev />}></Route>
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
            <Route
              exact
              path="/coporate-message"
              element={<CoMessage />}
            ></Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
