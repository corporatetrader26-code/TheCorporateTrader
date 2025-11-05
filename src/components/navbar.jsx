import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Features", href: "#feature" },
  { name: "Results", href: "#result" },
  { name: "Testimonials", href: "#testimonial" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className="fixed z-50 w-full max-w-5xl px-6 sm:px-10 lg:px-12 left-1/2 top-5 -translate-x-1/2 rounded-xl"
      style={{
        backgroundColor: "rgba(10, 10, 15, 0.5)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.15)",
      }}
    >
      <div className="flex items-center justify-between h-16">
        {/* ✅ Brand Logo */}
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          <img
            src="/logo.png" // ✅ replace this path with your logo
            alt="The Corporate Trade"
           className="h-22 sm:h-30 md:h-40 w-auto object-contain transition-transform duration-300 hover:scale-105"

          />
        </div>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={(e) => handleSmoothScroll(e, href)}
                  className="text-white hover:text-gray-300 transition text-sm font-medium whitespace-nowrap"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl rounded-b-xl">
          {NAV_LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
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
