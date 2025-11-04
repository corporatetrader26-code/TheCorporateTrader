import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Features", href: "https://www.thesignaler.com/#feature" },
  { name: "Results", href: "https://www.thesignaler.com/#result" },
  { name: "Pricing", href: "https://www.thesignaler.com/#pricing" },
  { name: "Testimonials", href: "https://www.thesignaler.com/#testimonial" },
  { name: "FAQs", href: "https://www.thesignaler.com/#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed z-50 w-full max-w-4xl px-4 sm:px-6 lg:px-8 left-1/2 top-5 -translate-x-1/2 rounded-xl"
      style={{
        backgroundColor: "rgba(10, 10, 15, 0.5)", // semi-transparent dark
        backdropFilter: "blur(15px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      <div className="flex items-center justify-between h-16">
        <div className="text-white font-bold text-xl cursor-pointer select-none">
          The Signaler
        </div>

        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-white hover:text-indigo-400 transition px-3 py-2 rounded-md text-sm font-medium"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-400 focus:outline-none"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-70 rounded-b-xl backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-400"
                onClick={() => setMobileOpen(false)}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
