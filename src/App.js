import "./App.css";
import Header from "./Components/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
function App() {
  return (
    <div className="App">
      <Header title={"MACGROUP"} sub={"INTERNATIONAL TECH SERVICE"} />
      <Hero />
    </div>
  );
}

export default App;
