import React from "react";
import "../hero.css";

export default function Hero() {
  return (
    <section className="hero-area w-full max-w-screen-2xl px-6 sm:px-12 md:px-20 py-20 mt-24 flex flex-col items-center justify-center text-center min-h-[70vh]">
      {/* Trusted Members Stars/Icons */}
      <div className="mb-4 flex flex-col items-center">
        <div className="flex items-center gap-2 text-blue-200 text-2xl font-extrabold tracking-wide">
          <span>★★★★★</span>
          <span className="text-blue-300 ml-2">1,500+ Trusted Members</span>
        </div>
      </div>

      {/* Animated text */}
      <h1 className="hero-glow-text text-[4rem] md:text-[6rem] lg:text-[8rem] font-extrabold mb-7 leading-tight tracking-tight w-full">
        Trade with Ease
      </h1>

      <p className="mx-auto w-full max-w-3xl mt-2 mb-10 text-lg md:text-2xl font-[450] text-gray-300">
        Experience the power of AI-driven trading indicator that gives you the edge in all markets - crypto, stocks, and forex
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        <a
          href="https://t.me/thesignaler"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-btn px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center"
        >
          <span className="pulse-dot mr-2" />
          Join Our Telegram
        </a>
      </div>
    </section>
  );
}
