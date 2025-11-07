import React from "react";
import "./ResultSection.css";

const ResultsSection = () => {
  const results = [
    {
      title: "AI Powered Signals",
      subtitle: "Identify trend shift zones instantly with clear confirmations.",
      tags: ["Accuracy Boost", "Reduces Noise"],
      img: "/image1.png",
    },
    {
      title: "Automate Your Analysis",
      subtitle: "We remove guesswork — follow structured, repeatable execution.",
      tags: ["Smart Money", "ICT Models"],
      img: "/image2.png",
    },
    {
      title: "Win-Rate Improvement",
      subtitle: "Trade where big players enter — not where retailers react.",
      tags: ["85%+ Zones", "Volume-Based"],
      img: "/image3.png",
    },
    {
      title: "Clear Risk Management",
      subtitle: "Every call includes SL, validation and scaling targets.",
      tags: ["Low Risk", "Smart Scaling"],
      img: "/image4.png",
    },
  ];

  return (
    <section
      id="result"
      className="scroll-mt-24 w-full py-24 text-center relative overflow-hidden bg-[#0a0a0f]"
    >
      <h2 className="text-4xl font-bold mb-4 text-white">
        Results speak for <i>themselves.</i>
      </h2>
      <p className="text-gray-400 mb-14 max-w-2xl mx-auto px-4">
        Consistent, structured guidance backed by real market methodology.
      </p>

    <div
  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f] hidden lg:block"
/>



      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee flex gap-8 whitespace-nowrap">
          {[...results, ...results].map((card, index) => (
            <div
              key={index}
              className="inline-block w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] 
              bg-gradient-to-br from-[#141414] to-[#0b0b0b] border border-[#1c1c1c] rounded-3xl overflow-hidden
              hover:scale-[1.05] transition-transform duration-300"
            >
              <img
                src={card.img}
                className="w-full h-48 sm:h-60 object-contain bg-[#0a0a0f] p-3 rounded-2xl"
                alt={card.title}
              />

              <div className="p-5 text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{card.subtitle}</p>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs border border-[#2a2a2a] text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
