"use client";

import { useEffect, useRef, useState } from "react";

/**
 * TrustBand Component
 * Enhanced trust section with stats and credentials
 */
export default function TrustBand() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const credentials = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stat: "A+",
      label: "BBB Rating",
      description: "Accredited Business",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      stat: "Orlando",
      label: "Local & Family-Owned",
      description: "Central Florida Based",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: "100%",
      label: "Fully Insured",
      description: "Licensed Contractor",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: "2017",
      label: "Established",
      description: "Years of Excellence",
    },
  ];

  return (
    <section className="bg-delance-off-white py-16 md:py-20 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-4">
            Trusted Drywall & Painting in Central Florida
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto text-lg">
            With years of dedicated service, we&apos;ve built our reputation on professionalism, 
            clean workmanship, and finishes that stand the test of time.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {credentials.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 md:p-8 
                         transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 
                         border border-transparent hover:border-delance-light
                         ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-delance-black rounded-2xl flex items-center 
                              justify-center text-white mb-5 group-hover:scale-110 
                              group-hover:rotate-3 transition-all duration-300 mx-auto md:mx-0">
                {item.icon}
              </div>
              
              {/* Stat */}
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-delance-black mb-1 
                              group-hover:text-delance-gray-mid transition-colors">
                  {item.stat}
                </p>
                <p className="text-delance-black font-semibold text-sm md:text-base mb-1">
                  {item.label}
                </p>
                <p className="text-delance-gray-light text-xs md:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-delance-off-white/50 
                              to-transparent opacity-0 group-hover:opacity-100 transition-opacity 
                              duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-delance-gray-mid text-sm flex items-center justify-center gap-2 flex-wrap">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Estimates
            </span>
            <span className="text-delance-light">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Same-Week Availability
            </span>
            <span className="text-delance-light">•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Satisfaction Guaranteed
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
