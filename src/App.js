import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import ServicePage from "./components/ServicesPage/ServicesPage";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/service" Component={ServicePage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;