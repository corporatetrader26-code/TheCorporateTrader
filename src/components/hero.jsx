import React from "react";

export default function Hero() {
  return (
    <section className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 pt-24 pb-10 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-white blur-[150px] opacity-[0.10]"></div>
      </div>

      <div className="mb-4 text-gray-400 text-lg tracking-wide">
        ★★★★★ <span className="ml-2 text-gray-300">1,500+ Verified Members</span>
      </div>

      <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-extrabold leading-tight text-white">
        Trade with Ease
      </h1>

      <p className="max-w-2xl mt-6 text-lg md:text-xl text-gray-400">
        Professional Options & Futures guidance backed by structured analysis and disciplined execution.
      </p>

      <div className="mt-10">
        <a
          href="https://t.me/thesignaler"
          className="px-10 py-4 rounded-full text-lg font-semibold bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-[1.05] transition"
        >
          Join Our Telegram
        </a>
      </div>
    </section>
  );
}
