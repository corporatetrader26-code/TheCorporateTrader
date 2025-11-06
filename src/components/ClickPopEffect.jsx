import React, { useEffect } from "react";
import "./ClickPopEffect.css";

const ClickPopEffect = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const pop = document.createElement("span");
      pop.className = "click-pop";

      // Position the pop at cursor
      pop.style.left = `${e.clientX}px`;
      pop.style.top = `${e.clientY}px`;

      // Random color shades (you can fix to one)
      const colors = ["#00aaff", "#ffaa00", "#ff0066", "#00ff99", "#ffffff"];
      pop.style.borderColor = colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(pop);

      // Remove it after animation
      setTimeout(() => pop.remove(), 600);
    };

    // Works for both click and touch
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches.length > 0) {
        handleClick({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
      }
    });

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleClick);
    };
  }, []);

  return null; // No visual UI — only effect
};

export default ClickPopEffect;
