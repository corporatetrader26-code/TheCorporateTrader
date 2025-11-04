/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Custom color palette
      colors: {
        midnight: "#0a0a0f",
        mist: "#1a1a25",
        snow: "#ffffff",
        glow: "#a3bffa",
      },

      // 🌈 Background gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // ✨ Animations for fade/glow/move
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },

      animation: {
        "fade-in": "fade-in 1.5s ease-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },

      // 📱 Responsive container widths
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },

      // 💨 Subtle box shadows
      boxShadow: {
        glow: "0 0 30px rgba(163,191,250,0.25)",
        mist: "0 0 60px rgba(255,255,255,0.05)",
      },

      // 📏 Typography & font sizes
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
