"use client";

/**
 * Footer Component
 * Site footer with navigation, contact info, and legal text
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-delance-black border-t border-delance-gray/30">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Left - Logo and tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-delance-black font-bold text-lg">D</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Delance</span>
                <span className="text-delance-silver font-medium text-lg ml-1">
                  Drywall & Painting
                </span>
              </div>
            </div>
            <p className="text-delance-silver text-sm leading-relaxed max-w-xs">
              Detail that shows on every wall. Professional drywall and painting 
              services for homes and businesses across Central Florida.
            </p>
          </div>

          {/* Center - Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-delance-silver hover:text-white transition-colors 
                             text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right - Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:407-274-3487"
                className="flex items-center gap-2 text-delance-silver hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (407) 274-3487
              </a>
              <a
                href="mailto:delancedrywall@gmail.com"
                className="flex items-center gap-2 text-delance-silver hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                delancedrywall@gmail.com
              </a>
              <div className="flex items-center gap-2 text-delance-silver">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Orlando, FL & Central Florida
              </div>
              <div className="flex items-start gap-2 text-delance-silver">
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p>Mon–Fri: 7am–6pm</p>
                  <p>Sat: 7am–3pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-delance-gray/30 flex flex-col md:flex-row 
                        items-center justify-between gap-4 text-xs text-delance-silver">
          <p>© {currentYear} Delance Drywall & Painting LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>A+ BBB Rated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

