import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import GemStones from "./GemStones/GemStones";
import Home from "./Home/Home";
import Jewelries from "./Jewelries/Jewelries";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/what-we-do" element={<WhatWeDo />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/gemstones" element={<GemStones />} exact />
        <Route path="/about-us" element={<AboutUs />} exact />
        <Route path="/jewelries" element={<Jewelries />} exact />
      </Routes>
    </Router>
  );
}

export default App;
