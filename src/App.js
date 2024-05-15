import React from "react";
//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ColorHexPrivacy from "./pages/ColorHexPrivacy";
import Terms from "./pages/Terms";
//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ColorHex/privacy" element={<ColorHexPrivacy />} />
          <Route path="/ColorHex/termsAndConditions" element={<Terms />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
