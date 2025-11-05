import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Youtube from "./components/youtube";
import FeaturesSection from "./components/FeaturesSection";
import SnowEffect from "./components/SnowEffect";
import ResultsSection from "./components/ResultsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CursorGlow from "./components/TempCursorGlow";


import "./index.css";
import "./hero.css";

function App() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden bg-gradient-to-b from-[#0a0a0a] to-[#111]">

      {/* ✅ Navbar stays on top */}
      <Navbar />

      {/* ✅ Main Page Content */}
      <main className="relative z-[3] flex flex-col items-center w-full">
        <Hero />
        <Youtube />
        <ResultsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>

      {/* ✅ Cursor Glow Layer */}
      <CursorGlow />

      {/* ✅ Snow + Glow Layer (above background, below nav) */}
      <div className="absolute inset-0 pointer-events-none z-[90]">
        <SnowEffect />
      </div>
    </div>
  );
}

export default App;
