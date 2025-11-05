import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Features", href: "#feature" },
  { name: "Results", href: "#result" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonial" },
  { name: "FAQs", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed z-50 w-full max-w-4xl px-4 sm:px-6 lg:px-8 left-1/2 top-5 -translate-x-1/2 rounded-xl"
      style={{
        backgroundColor: "rgba(10, 10, 15, 0.5)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.15)",
      }}
    >
      <div className="flex items-center justify-between h-16">

        <div className="text-white font-semibold text-xl cursor-pointer select-none">
          The Signaler
        </div>

        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-white hover:opacity-90 transition px-3 py-2 text-sm"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl rounded-b-xl">
          {NAV_LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-center text-white hover:opacity-80"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
