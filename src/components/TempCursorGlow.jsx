// File: src/components/CursorGlow.jsx
import React, { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    // ✅ Disable on mobile or tablets
    if (window.innerWidth < 768) return;

    // Create the glow element dynamically
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    // Move the glow with the mouse
    const moveGlow = (e) => {
      glow.style.left = `${e.pageX}px`;
      glow.style.top = `${e.pageY}px`;
    };

    document.addEventListener("mousemove", moveGlow);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("mousemove", moveGlow);
      glow.remove();
    };
  }, []);

  return null;
}
