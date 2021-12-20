import Header from "./Components/Header";
import Price from "./Components/Price";
import EMA30 from "./Components/EMA30";
import Stakes from "./Components/Stakes";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/EMA30" element={<EMA30 />} />
        <Route path="/Stakes" element={<Stakes />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
