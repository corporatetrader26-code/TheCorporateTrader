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

  const baseParticleConfig = {
    number: { value: 15 },
    color: { value: "#A3BFFA" },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      animation: { enable: true, speed: 1, minimumValue: 0.3, sync: false }
    },
    size: { value: { min: 1, max: 1 } },
    move: {
      enable: true,
      speed: 4,                // faster movement to fall farther
      random: false,
      outModes: { default: "out" },
      straight: false          // natural drift
    },
    life: {
      duration: { sync: true, value: 10 }, // longer lifetime
      count: 0
    }
  };

  const leftOptions = {
    background: { color: "transparent" },
    fullScreen: { enable: false },
    detectRetina: true,
    particles: {
      ...baseParticleConfig,
      move: { ...baseParticleConfig.move, direction: "bottom-right" },
    }
  };

  const rightOptions = {
    background: { color: "transparent" },
    fullScreen: { enable: false },
    detectRetina: true,
    particles: {
      ...baseParticleConfig,
      move: { ...baseParticleConfig.move, direction: "bottom-left" },
    }
  };

  const containerStyle = {
    width: "20vw",
    minWidth: "150px",
    maxWidth: "280px",
    height: "45vh",
    minHeight: "250px",
    maxHeight: "600px",
    pointerEvents: "none"
  };

  return (
    <>
      <div className="absolute top-0 left-0" style={containerStyle}>
        <Particles id="left-snow" options={leftOptions} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="absolute top-0 right-0" style={containerStyle}>
        <Particles id="right-snow" options={rightOptions} style={{ width: "100%", height: "100%" }} />
      </div>
    </>
  );
}
