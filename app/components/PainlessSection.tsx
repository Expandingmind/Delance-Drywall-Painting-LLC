"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PainlessSection Component
 * Section explaining how Delance makes drywall and painting stress-free
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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Protected Spaces",
      description: "Furniture, floors, and belongings fully covered and protected throughout the project.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Dust Control",
      description: "Advanced containment systems and daily cleanup keep your home livable during work.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Clear Communication",
      description: "Real-time updates and a dedicated contact person from estimate to final walkthrough.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-6 leading-tight">
              Drywall is messy.
              <br />
              <span className="text-delance-gray-light">We make it painless.</span>
            </h2>
          </div>

          {/* Description paragraphs */}
          <div className={`space-y-6 text-lg text-delance-gray-mid leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p>
              We know what you&apos;re thinking: dust everywhere, furniture covered in plastic for weeks, 
              and workers who disappear mid-project. That&apos;s not how we operate. Our crews arrive 
              prepared with professional-grade dust barriers and floor protection, keeping your home 
              clean from day one.
            </p>
            
            <p>
              Every project comes with a clear timeline and a dedicated point of contact who keeps 
              you informed at every stage. No guessing when we&apos;ll show up, no surprises on your 
              invoice. From the first phone call to the final walkthrough, you&apos;ll know exactly 
              what&apos;s happening and when.
            </p>
          </div>

          {/* Feature highlights */}
          <div className={`grid md:grid-cols-3 gap-6 mt-14 pt-14 border-t border-delance-light transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group text-center p-6 rounded-2xl hover:bg-delance-off-white transition-all duration-300
                           hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <div className="w-16 h-16 bg-delance-off-white rounded-2xl flex items-center 
                                justify-center mx-auto mb-4 text-delance-black
                                group-hover:bg-delance-black group-hover:text-white transition-all duration-300
                                group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-delance-black text-lg mb-2">{feature.title}</h3>
                <p className="text-delance-gray-mid text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
