import React from "react";
import { Star } from "lucide-react";
import "./TestimonialsSection.css"; // For smooth marquee animation

const testimonials = [
  {
    name: "Rohan S.",
    text: "Before this, I used to overtrade a lot. Now my entries are clean, disciplined, and backed by logic. Went from -20k a month to consistent profits.",
  },
  {
    name: "Aditya K.",
    text: "Best part is how clear the alerts are. No confusion. Entry, SL and scaling levels all pre-defined. Made trading peaceful.",
  },
  {
    name: "Sahil G.",
    text: "I finally stopped gambling in options. The institutional approach + psychology guidance actually changed how I see the market.",
  },
  {
    name: "Ananya T.",
    text: "I only take 1-2 trades a day now but accuracy is crazy. Quality > quantity. This group teaches the actual mindset.",
  },
];

export default function TestimonialsSection() {
  return (
    <section 
    id="testimonial"
    className="relative w-full py-24 overflow-hidden text-center bg-[#0a0a0f]">
      <h2 className="text-4xl font-bold mb-4">
        What Our Members <i>Say</i>
      </h2>
      <p className="text-gray-400 mb-14 max-w-2xl mx-auto px-4">
        Real feedback from real traders experiencing sustainable improvement.
      </p>

      {/* Fade edges for smooth marquee look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10"></div>

      {/* Marquee wrapper */}
      <div className="w-full max-w-[1400px] mx-auto overflow-hidden">
        <div className="marquee flex gap-8 will-change-transform">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="inline-block w-[280px] sm:w-[320px] md:w-[360px] bg-gradient-to-br 
              from-[#161616] to-[#0d0d0d] border border-white/10 rounded-2xl p-6 
              shadow-xl text-left flex-shrink-0 hover:scale-[1.05] transition-transform duration-300 overflow-hidden"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-300 fill-yellow-300" />
                ))}
              </div>

              {/* Ensure text stays inside box and wraps */}
              <p className="text-gray-300 mb-6 leading-relaxed break-words whitespace-normal">
                “{t.text}”
              </p>
              <p className="text-sm text-gray-400 font-medium truncate">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
