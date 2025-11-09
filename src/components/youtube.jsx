import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// === 3D Particle Background (restored color, lower opacity/size, masked bottom) ===
const Particles = ({ mouse }) => {
  const meshRef = useRef();
  const count = 250; // slightly fewer particles to reduce overlap

  const positions = Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 6,
    z: (Math.random() - 0.5) * 10,
  }));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x +=
        (mouse.current.y / 100 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y +=
        (mouse.current.x / 100 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.position.y = Math.sin(t / 2) * 0.12; // smaller vertical motion
    }
  });

  return (
    <group ref={meshRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          {/* smaller geometry (reduced size) */}
          <sphereGeometry args={[0.03, 10, 10]} />
          {/* restored white-gray color, much lower opacity */}
          <meshBasicMaterial color="#b0b0b0" opacity={0.12} transparent />
        </mesh>
      ))}
    </group>
  );
};

const Youtube = () => {
  const videos = [
    "https://www.youtube.com/embed/Y710_VOPHdw?si=oA5iyU07bpQo-7DX",
    "https://www.youtube.com/embed/IVLBtl2uiCM?si=F08olE__ifNZdIJ_",
    "https://www.youtube.com/embed/kM1FIMTKS3Q?si=ABaFvlrAo9p-TsfM",
    "https://www.youtube.com/embed/jinKDtvkFAk?si=F52IC48QmtjCdWrG",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const mouse = useRef({ x: 0, y: 0 });
  const controls = useAnimation();

  // === Animate subtle gradient background (UNCHANGED) ===
  useEffect(() => {
    const animateGradient = async () => {
      await controls.start({
        background: [
          "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
          "linear-gradient(135deg, #0f0f0f 0%, #000000 100%)",
          "linear-gradient(135deg, #121212 0%, #050505 100%)",
          "linear-gradient(135deg, #101010 0%, #0a0a0a 100%)",
        ],
        transition: { duration: 30, repeat: Infinity, ease: "linear" },
      });
    };
    animateGradient();
  }, [controls]);

  // parallax mouse/touch
  useEffect(() => {
    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.current.x = (clientX / window.innerWidth - 0.5) * 100;
      mouse.current.y = (clientY / window.innerHeight - 0.5) * 100;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  // swipe logic (unchanged)
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const swipeThreshold = 50;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchEndX.current - touchStartX.current;
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) handlePrev();
      else handleNext();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handlePointerDown = (e) => {
    handleTouchStart(e);
    window.addEventListener("pointermove", handleTouchMove);
    window.addEventListener("pointerup", handlePointerUp);
  };
  const handlePointerUp = (e) => {
    handleTouchMove(e);
    handleTouchEnd();
    window.removeEventListener("pointermove", handleTouchMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % videos.length);
    if (navigator.vibrate) navigator.vibrate(15);
  };
  const handlePrev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + videos.length) % videos.length);
    if (navigator.vibrate) navigator.vibrate(15);
  };

  return (
    <section
      id="video"
      className="relative w-full py-20 flex flex-col items-center overflow-visible text-white"
    >
      {/* framer-motion background — UNCHANGED */}
      <motion.div
        className="absolute inset-0"
        animate={controls}
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Canvas wrapper: limited visual height + CSS mask to fade bottom */}
      <div
        className="absolute inset-0 z-0 video-canvas-wrapper"
        aria-hidden="true"
      >
        <Canvas camera={{ position: [0, 0, 5] }} style={{ pointerEvents: "none" }}>
          <Particles mouse={mouse} />
        </Canvas>
      </div>

      {/* subtle fade overlay at bottom of the video area (prevents haze from overlapping next section) */}
      

      {/* YouTube carousel (same structure as before) */}
      <div
        className="relative z-20 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-w-[900px]
                   aspect-video rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence custom={direction} mode="wait">
            <motion.iframe
              key={current}
              src={videos[current]}
              allowFullScreen
              className="w-full h-full rounded-2xl"
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* transparent swipe layer */}
        <div
          className="absolute inset-0 z-30"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onPointerDown={handlePointerDown}
        />

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 transition p-3 rounded-full z-40"
          aria-label="Previous video"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 transition p-3 rounded-full z-40"
          aria-label="Next video"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>

      {/* dots */}
      <div className="flex mt-6 gap-3 z-40">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Youtube;
