"use client";

import { useState, useEffect } from "react";

/**
 * Navigation Component
 * Sticky navigation with logo, nav links, phone number, and CTA
 */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Delance", href: "#why-delance" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-delance-black/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-delance-black"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-delance-black font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg tracking-tight">
                Delance
              </span>
              <span className="text-delance-silver font-medium text-lg ml-1">
                Drywall & Painting
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-delance-light/80 hover:text-white transition-colors duration-200 
                           text-sm font-medium relative group"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white 
                              group-hover:w-full transition-all duration-300"
                />
              </button>
            ))}
          </div>

          {/* Right side - Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:407-274-3487"
              className="flex items-center gap-2 text-delance-light hover:text-white 
                         transition-colors duration-200 px-4 py-2 rounded-full 
                         border border-delance-gray-light hover:border-delance-silver"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm font-medium">(407) 274-3487</span>
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary text-sm"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-delance-light hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-delance-gray/30">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-delance-light hover:text-white transition-colors 
                             duration-200 text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-delance-gray/30">
                <a
                  href="tel:407-274-3487"
                  className="flex items-center gap-2 text-delance-light"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (407) 274-3487
                </a>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="btn-primary text-center"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

