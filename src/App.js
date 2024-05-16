import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//rotas
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ColorHexPrivacy from "./pages/ColorHexPrivacy";
import Terms from "./pages/Terms";
//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router baseline="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ColorHex/privacy" element={<ColorHexPrivacy />} />
          <Route path="/ColorHex/termsAndConditions" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
