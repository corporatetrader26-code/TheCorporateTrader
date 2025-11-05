import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Youtube from "./components/youtube";
import FeaturesSection from "./components/FeaturesSection";
import SnowEffect from "./components/SnowEffect";
import ResultsSection from "./components/ResultsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";


import "./index.css";
import "./hero.css";

function App() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden bg-gradient-to-b from-[#0a0a0a] to-[#111]">

      {/* ✅ Navbar stays highest */}
      <Navbar />

      {/* ✅ Main Page Content */}
      <main className="relative z-[3] flex flex-col items-center w-full">
        <Hero />
        <Youtube />
        <ResultsSection />
        <FeaturesSection />
        <TestimonialsSection />
<Footer />
    
      </main>

      {/* ✅ Snow + Glow Layer (above content, below nav) */}
      <div className="absolute inset-0 pointer-events-none z-[90]">
        <SnowEffect />
      </div>

    </div>
  );
}

export default App;
