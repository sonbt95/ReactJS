import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import TravelGuide from "./Components/Travel Guide/TravelGuide";
import HotelInfo from "./Components/HotelInfo/HotelInfo";
import Home from "./Components/Home/Home";
import Consulting from "./Components/Consulting/Consulting";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/consulting" element={<Consulting />}></Route>
        <Route path="/travel-guide" element={<TravelGuide />}></Route>
        <Route path="/hotel-info" element={<HotelInfo />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
