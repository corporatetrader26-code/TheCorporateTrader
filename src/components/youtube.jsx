import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Youtube = () => {
  const videos = [
    "https://www.youtube.com/embed/7dhGHH2z7nY?si=DiGACqwW5Q346t28",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="relative w-full py-10 flex flex-col items-center overflow-hidden">

      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white blur-[160px] opacity-20 pointer-events-none"></div>

      <div className="relative w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-w-[900px] aspect-video rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">

        <iframe
          className="w-full h-full rounded-2xl"
          src={videos[current]}
          allowFullScreen
        ></iframe>

        <button onClick={() => setCurrent((prev) => (prev - 1 + videos.length) % videos.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-4 rounded-full">
          <ChevronLeft className="text-white" size={36}/>
        </button>

        <button onClick={() => setCurrent((prev) => (prev + 1) % videos.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-4 rounded-full">
          <ChevronRight className="text-white" size={36}/>
        </button>
      </div>

      <div className="flex mt-6 gap-3">
        {videos.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-500"}`}></button>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
