import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen to trigger auto animation
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    
    <section
    id="hero"
    className="w-screen min-h-[75vh] flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 pt-24 pb-10 relative overflow-hidden">

      {/* === Removed background white glow for clean black aesthetic === */}

      {/* 🌟 Interactive Star Rating (works on mobile & desktop) */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex flex-col items-center select-none"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <div className="flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star
                size={isMobile ? 26 : 34}
                className={`transition-all duration-500 ${
                  isHovered || isMobile
                    ? "text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                    : "text-gray-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]"
                }`}
              />
            </motion.div>
          ))}
        </div>

        <p className="mt-3 text-gray-300 text-lg shimmer-text">
          1,500+ Verified Members
        </p>
      </motion.div>

      {/* === Hero Heading with Shimmer === */}
      <h1 className="shimmer-text text-[3rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] font-extrabold leading-tight">
        Trade. Learn. Grow.
      </h1>

      <p className="max-w-2xl mt-6 text-lg md:text-xl text-gray-400">
        Master Options trading through disciplined execution and structured market understanding.
      </p>

      {/* 💬 Glowing Blue Telegram Button */}
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
            boxShadow: "0 0 40px rgba(0, 180, 255, 0.7)",
            textShadow: "0 0 15px rgba(0, 180, 255, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="glow-blue-btn inline-flex items-center justify-center gap-3 text-lg font-bold px-10 py-4 rounded-full transition"
        >
          <MessageCircle size={22} /> Join Our Telegram
        </motion.a>
      </motion.div>
    </section>
  );
}
