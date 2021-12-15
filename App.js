import Navbar from './Components/Navbar';
import './App.css';
import Price from './Components/Price';
import EMA30 from './Components/EMA30';
import Stakes from './Components/Stakes';
import About from './Components/About';
import { Routes, Route } from "react-router-dom";	



function App() {
  return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/Price" element={<Price />} />
				<Route path="/EMA30" element={<EMA30 />} />
				<Route path="/Stakes" element={<Stakes />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</div>
  );
}

export default App;
