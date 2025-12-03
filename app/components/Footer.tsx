"use client";

/**
 * Footer Component
 * Polished site footer with navigation, contact info, and social proof
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
    <footer className="bg-delance-black border-t border-delance-gray/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-delance-gray/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container py-16 md:py-20 relative">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-delance-black font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">Delance</span>
                <span className="text-delance-silver font-medium text-xl ml-1.5">
                  Drywall & Painting
                </span>
              </div>
            </div>
            <p className="text-delance-silver text-sm leading-relaxed max-w-sm mb-6">
              Detail that shows on every wall. Professional drywall and painting 
              services for homes and businesses across Central Florida since 2017.
            </p>
            {/* Trust badges */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-delance-charcoal rounded-full">
                <span className="text-xs font-bold text-white">A+</span>
                <span className="text-xs text-delance-silver">BBB Rated</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-delance-charcoal rounded-full">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs text-delance-silver">Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-delance-silver hover:text-white transition-colors 
                             text-sm text-left flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-delance-gray group-hover:bg-white 
                                   transition-colors" />
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:407-274-3487"
                className="flex items-center gap-3 text-delance-silver hover:text-white 
                           transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-delance-charcoal flex items-center justify-center
                                group-hover:bg-delance-gray transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                (407) 274-3487
              </a>
              <a
                href="mailto:delancedrywall@gmail.com"
                className="flex items-center gap-3 text-delance-silver hover:text-white 
                           transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-delance-charcoal flex items-center justify-center
                                group-hover:bg-delance-gray transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                delancedrywall@gmail.com
              </a>
              <div className="flex items-center gap-3 text-delance-silver">
                <div className="w-8 h-8 rounded-lg bg-delance-charcoal flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                Orlando, FL & Central Florida
              </div>
              <div className="flex items-start gap-3 text-delance-silver">
                <div className="w-8 h-8 rounded-lg bg-delance-charcoal flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs leading-relaxed">
                  Mon–Fri: 7am–6pm<br />
                  Sat: 7am–3pm<br />
                  Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-delance-gray/20 flex flex-col md:flex-row 
                        items-center justify-between gap-4 text-xs text-delance-silver">
          <p>© {currentYear} Delance Drywall & Painting LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Accepting New Projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
