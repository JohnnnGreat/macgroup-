import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./Components/SideNav/SideNav";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />
        <Routes>
          <Route exact path="/" component={HomePage}>
            <HomePage />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
