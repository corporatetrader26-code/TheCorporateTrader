import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function SnowEffect() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  const snowConfig = (direction) => ({
    background: { color: "transparent" },
    fullScreen: { enable: false },
    detectRetina: true,
    particles: {
      number: { value: 45 }, // MORE snow
      color: { value: "#ffffff" },
      opacity: {
        value: 0.6,
        animation: { enable: true, speed: 1, minimumValue: 0.3 },
      },
      size: { value: { min: 1, max: 2 } },
      move: {
        enable: true,
        speed: 3, // ⬅ MUCH faster
        direction,
        straight: false,
        outModes: { default: "out" },
      },
    },
  });

  return (
    <>
      {/* ✅ Strong Glow Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-[6]">
        <div className="absolute left-[10%] top-[15%] w-[450px] h-[450px] bg-white opacity-[0.25] blur-[140px]"></div>
        <div className="absolute right-[10%] top-[15%] w-[450px] h-[450px] bg-white opacity-[0.25] blur-[140px]"></div>
      </div>

      {/* ✅ Snow Render Layer */}
      <div className="absolute top-0 left-0 z-[7] w-[30vw] min-w-[200px] h-[70vh] pointer-events-none">
        <Particles id="left-snow" options={snowConfig("bottom-right")} />
      </div>

      <div className="absolute top-0 right-0 z-[7] w-[30vw] min-w-[200px] h-[70vh] pointer-events-none">
        <Particles id="right-snow" options={snowConfig("bottom-left")} />
      </div>
    </>
  );
}
