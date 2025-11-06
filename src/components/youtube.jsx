import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// === 3D Particle Background ===
const Particles = ({ mouse }) => {
  const meshRef = useRef();
  const count = 120;

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
      meshRef.current.position.y = Math.sin(t / 2) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#b0b0b0" opacity={0.45} transparent />
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
  const [direction, setDirection] = useState(0); // for slide direction
  const mouse = useRef({ x: 0, y: 0 });
  const controls = useAnimation();

  // === Animate gradient cycling between black shades ===
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

  // Track mouse movement for particle parallax
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

  // Swipe detection
  const touchStartX = useRef(null);
  const touchCurrentX = useRef(null);
  const swipeThreshold = 50;

  const onTouchStart = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    touchStartX.current = x;
    touchCurrentX.current = x;
  };
  const onTouchMove = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    touchCurrentX.current = x;
  };
  const onTouchEnd = () => {
    const delta = touchCurrentX.current - touchStartX.current;
    if (Math.abs(delta) > swipeThreshold) {
      if (delta > 0) handlePrev();
      else handleNext();
    }
  };

  // Desktop pointer drag
  const onPointerDown = (e) => {
    onTouchStart(e);
    window.addEventListener("pointermove", onTouchMove);
    window.addEventListener("pointerup", handlePointerUp);
  };
  const handlePointerUp = (e) => {
    onTouchMove(e);
    onTouchEnd();
    window.removeEventListener("pointermove", onTouchMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  // Navigation logic with animation direction
  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % videos.length);
  };
  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="relative w-full py-20 flex flex-col items-center overflow-hidden text-white">
      {/* === Animated Changing Black Gradient Background === */}
      <motion.div
        className="absolute inset-0"
        animate={controls}
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* === 3D Particle Field === */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Particles mouse={mouse} />
        </Canvas>
      </div>

      {/* === Animated YouTube Player === */}
      <div
        className="relative z-10 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] max-w-[900px] 
                   aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onPointerDown={onPointerDown}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.iframe
            key={current}
            src={videos[current]}
            allowFullScreen
            className="w-full h-full rounded-2xl absolute"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 transition p-4 rounded-full"
          aria-label="Previous video"
        >
          <ChevronLeft className="text-white" size={36} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 transition p-4 rounded-full"
          aria-label="Next video"
        >
          <ChevronRight className="text-white" size={36} />
        </button>
      </div>

      {/* === Dots for Video Selection === */}
      <div className="flex mt-6 gap-3 z-10">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
            aria-label={`Go to video ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
