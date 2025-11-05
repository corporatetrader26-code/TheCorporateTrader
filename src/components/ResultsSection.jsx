import React from "react";

const ResultsSection = () => {
  const results = [
    {
      title: "AI Powered Signals",
      subtitle: "Identify trend shift zones instantly with clear confirmations.",
      tags: ["Accuracy Boost", "Reduces Noise"],
      img: "https://i.imgur.com/WGRt9XV.png",
    },
    {
      title: "Automate Your Analysis",
      subtitle: "We remove guesswork — follow structured, repeatable execution.",
      tags: ["Smart Money", "ICT Models"],
      img: "https://i.imgur.com/79ZVwYi.png",
    },
    {
      title: "Win-Rate Improvement",
      subtitle: "Trade where big players enter — not where retailers react.",
      tags: ["85%+ Zones", "Volume-Based"],
      img: "https://i.imgur.com/f4u3BxO.png",
    },
    {
      title: "Clear Risk Management",
      subtitle: "Every call includes SL, validation and scaling targets.",
      tags: ["Low Risk", "Smart Scaling"],
      img: "https://i.imgur.com/A5c1g0a.png",
    },
  ];

  return (
    <section className="w-full py-24 text-center relative overflow-hidden">

      <h2 className="text-4xl font-bold mb-4">
        Results speak for <i>themselves.</i>
      </h2>
      <p className="text-gray-400 mb-14 max-w-2xl mx-auto">
        Consistent, structured guidance backed by real market methodology.
      </p>

      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

      {/* MARQUEE WRAPPER */}
      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-12 animate-marquee-left whitespace-nowrap">

          {[...results, ...results].map((card, index) => (
            <div
              key={index}
              className="inline-block w-[360px] md:w-[420px] bg-gradient-to-br
              from-[#161616] to-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden
              shadow-xl hover:scale-[1.05] transition-transform duration-300"
            >
              <img src={card.img} className="w-full h-60 object-cover" />

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{card.subtitle}</p>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs border border-white/15 text-gray-300">
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
