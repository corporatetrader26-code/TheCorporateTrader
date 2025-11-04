import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";



import SnowEffect from "./components/SnowEffect";

// Import all global and section CSS
import "./index.css";
import "./hero.css";

 // This is your featuredin.css file in src

function App() {
  return (
    <div className="relative full-page bg-gradient-main overflow-visible text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      

    

      {/* Snow effect */}
      <SnowEffect />

      {/* Optional Glow Overlays */}
      <div className="glow-overlay left"></div>
      <div className="glow-overlay right"></div>
    </div>
  );
}

export default App;
