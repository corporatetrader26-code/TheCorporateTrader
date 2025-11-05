import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 pt-24 pb-10 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-white blur-[150px] opacity-[0.10]"></div>
      </div>

      {/* ✅ Animated Star Rating */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-gray-400 text-lg tracking-wide"
      >
        ★★★★★ <span className="ml-2 text-gray-300">1,500+ Verified Members</span>
      </motion.div>

      {/* Hero heading with shimmer */}
      <h1 className="shimmer-text text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-extrabold leading-tight">
        Trade. Learn. Grow.
      </h1>

      <p className="max-w-2xl mt-6 text-lg md:text-xl text-gray-400">
        Master Options trading through disciplined execution and structured market understanding.
      </p>

      {/* ✅ Telegram Button - same as Contact section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <motion.a
          href="https://t.me/+1G2MYj8eFes2YWY1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 50px rgba(0, 180, 255, 0.6)",
            textShadow: "0 0 20px rgba(0, 180, 255, 0.9)",
          }}
          whileTap={{ scale: 0.95 }}
          className="telegram-button inline-flex items-center justify-center gap-3 text-lg font-bold px-10 py-4 rounded-full transition"
        >
          <MessageCircle size={22} /> Join Our Telegram
        </motion.a>
      </motion.div>
    </section>
  );
}
