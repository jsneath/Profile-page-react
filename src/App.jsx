import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatedBackground } from "animated-backgrounds";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <AnimatedBackground animationName="starryNight" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
