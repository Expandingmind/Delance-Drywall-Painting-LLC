"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/app/data/services";

/**
 * Services Component
 * Grid of service cards that link to individual service pages
 */

// Service Card Component
const ServiceCard = ({ 
  service, 
  index,
}: { 
  service: typeof services[0]; 
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-delance-charcoal to-delance-charcoal-light 
                 border border-delance-gray/30 transition-all duration-500 hover:border-delance-gray/60
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 cursor-pointer block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image container */}
      <div className="relative h-28 sm:h-40 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-50"
          }`}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-delance-charcoal via-delance-charcoal/50 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm 
                        flex items-center justify-center text-white border border-white/20
                        group-hover:bg-white group-hover:text-delance-black transition-all duration-300">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">
        <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-delance-light transition-colors line-clamp-2">
          {service.title}
        </h3>
        <p className="text-delance-silver text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none hidden sm:block">
          {service.description}
        </p>

        {/* Learn more link */}
        <div className={`mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
          isHovered ? "text-white translate-x-0 opacity-100" : "text-delance-silver -translate-x-2 opacity-0"
        }`}>
          <span className="hidden sm:inline">Learn more</span>
          <span className="sm:hidden">View</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Animated border glow on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-100" : "opacity-0"
      }`} style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
      }} />
    </Link>
  );
};

export default function Services() {
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

  return (
    <section id="services" className="bg-delance-black py-20 md:py-28 overflow-hidden">
      <div className="section-container" ref={sectionRef}>
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-delance-silver text-sm font-medium tracking-wider uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Drywall & Painting Services
          </h2>
          <p className="text-delance-silver max-w-2xl mx-auto text-lg">
            From framing to final coat, everything your walls need. 
            Residential and commercial projects across Central Florida.
          </p>
        </div>

        {/* Services grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {services.map((service, index) => (
            <ServiceCard 
              key={service.slug} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-delance-silver mb-4">
            Don&apos;t see your project type? We handle custom work too.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-delance-black font-semibold 
                       rounded-full hover:bg-delance-light transition-all duration-300 hover:scale-105
                       hover:shadow-lg hover:shadow-white/20"
          >
            Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
