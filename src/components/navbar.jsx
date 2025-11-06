import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";

const NAV_LINKS = [
  { name: "Features", href: "#feature" },
  { name: "Results", href: "#result" },
  { name: "Testimonials", href: "#testimonial" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  // Handle sticky navbar
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSticky(!entry.isIntersecting);
        });
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Works on both mobile & desktop
  const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  console.log("Clicked:", href); // 👈 Add this line

  const target = document.querySelector(href);
  if (!target) {
    console.log("Target not found:", href);
    return;
  }

  setMobileOpen(false);

  const navHeight = navRef.current?.offsetHeight || 70;
  const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top: y, behavior: "smooth" });
};


  

  return (
    <nav
      ref={navRef}
      className={`navbar-wrapper z-[999] ${
        isSticky ? "navbar-top-sticky" : "navbar-floating"
      }`}
      style={{
        pointerEvents: "auto", // ensure clicks work on mobile
      }}
    >
      <div
        className={`nav-glass flex items-center justify-between
          w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)] max-w-[1800px]
          h-[4.2rem] px-6 sm:px-10 rounded-full transition-all duration-400
          ${isSticky ? "nav-sticky" : ""}`}
      >
        {/* Logo (Desktop) */}
        <div
          className="hidden md:flex items-center cursor-pointer select-none"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          <img
            src="/logo.png"
            alt="The Corporate Trader"
            className={`w-auto object-contain transition-transform duration-300 hover:scale-105 ${
              isSticky ? "logo-sm" : "logo-lg"
            }`}
          />
        </div>

        {/* Logo (Mobile, Centered) */}
        <div
          className="flex md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none z-20"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          <img src="/logo.png" alt="logo" className="logo-img logo-mobile" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name} className="relative group">
                <a
                  href={href}
                  onClick={(e) => handleSmoothScroll(e, href)}
                  className="text-white text-sm font-medium whitespace-nowrap relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
                    {name}
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          className="md:hidden text-white text-3xl focus:outline-none relative z-20"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-[1800px] 
          bg-black/90 backdrop-blur-xl rounded-b-2xl border-t border-cyan-400/20 
          overflow-hidden transition-all duration-500 ease-in-out z-50
          ${mobileOpen ? "opacity-100 top-[72px]" : "opacity-0 pointer-events-none top-[60px]"}`}
        style={{
          pointerEvents: mobileOpen ? "auto" : "none", // crucial for mobile touch
        }}
      >
        {NAV_LINKS.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            onClick={(e) => handleSmoothScroll(e, href)}
            className="block px-4 py-4 text-center text-white hover:text-cyan-400 transition-all duration-300"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
