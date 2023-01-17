import "./App.css";
import Header from "./Components/Header/Header.js";
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
  );
}

export default App;
