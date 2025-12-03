"use client";

import { useEffect, useRef, useState } from "react";

/**
 * WhyChoose Component
 * Feature grid highlighting key differentiators with animations
 */
export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Level-5 Quality Finishes",
      description:
        "The highest industry standard for drywall finishing. Perfectly smooth surfaces ready for any paint sheen—even high-gloss.",
      color: "from-amber-500/20 to-amber-600/5",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast, Professional Crews",
      description:
        "Our experienced teams work efficiently without cutting corners. We respect your timeline and keep projects moving.",
      color: "from-blue-500/20 to-blue-600/5",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Interior & Exterior Painting",
      description:
        "From accent walls to complete exterior transformations. Premium paints, meticulous prep work, and clean lines.",
      color: "from-emerald-500/20 to-emerald-600/5",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Respectful of Your Home",
      description:
        "We treat your property like our own. Protective coverings, daily cleanup, and clear communication throughout.",
      color: "from-purple-500/20 to-purple-600/5",
    },
  ];

  return (
    <section id="why-delance" className="bg-delance-off-white py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-delance-gray-light text-sm font-medium tracking-wider uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-4">
            Why Choose Delance?
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto text-lg">
            Level 5 finishes, texture expertise, meticulous prep and cleanup—here&apos;s what 
            sets us apart from the competition.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm overflow-hidden
                         transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-default
                         ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-delance-black rounded-2xl flex items-center 
                                justify-center text-white mb-6 group-hover:scale-110 
                                group-hover:rotate-3 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-delance-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-delance-gray-mid leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-delance-off-white rounded-full 
                              opacity-50 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
