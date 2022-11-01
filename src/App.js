import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import GemStones from "./GemStones/GemStones";
import Home from "./Home/Home";
import Jewelries from "./Jewelries/Jewelries";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/what-we-do" element={<WhatWeDo />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/gemstones" element={<GemStones />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/jewelries" element={<Jewelries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
