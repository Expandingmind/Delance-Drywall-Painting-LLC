"use client";

import { useEffect, useRef, useState } from "react";

/**
 * AlternativeService Component
 * Section promoting 3 Floor Guys as an alternative/complementary service (flooring)
 * Renders above FAQ with a preview and link to their site.
 */

const FLOOR_GUYS_URL = "https://www.3floorguys.com/";

const previewServices = [
  "Hardwood installation & refinishing",
  "Vinyl flooring",
  "Buff & coat",
  "Floor restoration",
  "Trim & molding",
];

export default function AlternativeService() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="alternative-service"
      className="bg-delance-off-white py-16 md:py-20 overflow-hidden border-y border-delance-light"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-delance-gray-light text-sm font-medium tracking-wider uppercase mb-2">
              Need flooring?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-delance-black mb-3">
              An alternative service we recommend
            </h2>
            <p className="text-delance-gray-mid text-base md:text-lg max-w-2xl mx-auto">
              For premium flooring in Orlando and Central Florida, we recommend our trusted partner below.
            </p>
          </div>

          {/* Preview card */}
          <div
            className={`rounded-2xl bg-white border border-delance-light shadow-lg overflow-hidden
                        transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="p-6 md:p-8">
              {/* Site name & tagline */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <a
                  href={FLOOR_GUYS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-bold text-delance-black hover:text-delance-charcoal 
                             underline underline-offset-2 decoration-delance-gray-light hover:decoration-delance-black 
                             transition-colors"
                >
                  3 Floor Guys
                </a>
                <span className="text-delance-gray-light text-sm">— Premium Flooring in Orlando</span>
              </div>
              <p className="text-delance-gray-mid mb-6 leading-relaxed">
                Family-owned since 2014, 3 Floor Guys offers expert hardwood and vinyl flooring installation,
                refinishing, and restoration across Orlando and Central Florida. If your project needs new floors
                or floor work, they’re a great alternative to consider.
              </p>

              {/* Services preview */}
              <div className="mb-6">
                <p className="text-delance-gray-light text-sm font-medium uppercase tracking-wider mb-3">
                  Services they offer
                </p>
                <ul className="flex flex-wrap gap-2">
                  {previewServices.map((service, index) => (
                    <li
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-delance-off-white text-delance-gray-mid text-sm"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={FLOOR_GUYS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-delance-black text-white font-semibold 
                           rounded-full hover:bg-delance-charcoal transition-all duration-300 
                           hover:scale-105 hover:shadow-lg"
              >
                Visit 3floorguys.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
