"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PainlessSection Component
 * Compact section explaining how Delance makes drywall and painting stress-free
 */
export default function PainlessSection() {
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

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Protected Spaces",
      description: "Furniture & floors fully covered",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Dust Control",
      description: "Professional containment systems",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Clear Updates",
      description: "Dedicated point of contact",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Headline and text */}
            <div className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-delance-black mb-4 leading-tight">
                Drywall is messy.
                <span className="text-delance-gray-light"> We make it painless.</span>
              </h2>
              <p className="text-delance-gray-mid leading-relaxed">
                Our crews arrive prepared with professional-grade dust barriers and floor protection. 
                Every project includes a clear timeline and dedicated communication—no surprises, 
                no guesswork, just results.
              </p>
            </div>

            {/* Right: Feature cards */}
            <div className={`grid grid-cols-3 gap-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group text-center p-4 rounded-xl bg-delance-off-white hover:bg-delance-black 
                             transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-delance-black rounded-xl flex items-center 
                                  justify-center mx-auto mb-3 text-white
                                  group-hover:bg-white group-hover:text-delance-black 
                                  transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-delance-black text-sm mb-1 
                                 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-delance-gray-mid text-xs group-hover:text-delance-silver transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
