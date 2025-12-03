"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Services Component
 * Grid of service cards with images, styled like review cards
 */

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Drywall Installation",
    description: "New construction and remodel drywall hanging with precise cuts and tight seams.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Drywall Repair",
    description: "Holes, cracks, and water damage repairs with seamless blending.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Level 5 Finishing",
    description: "The ultimate smooth finish for high-end results and glossy paints.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Metal Framing",
    description: "Commercial-grade steel stud framing for walls and ceilings.",
    image: "https://images.unsplash.com/photo-1590494165264-1ebe3602bb74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Interior Painting",
    description: "Walls, ceilings, trim, and cabinets with flawless coverage.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    description: "Complete exterior transformations with weather-resistant paints.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Acoustic Ceilings",
    description: "Drop ceilings and acoustic tile systems for commercial spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Texture & Removal",
    description: "Orange peel, knockdown, and popcorn ceiling removal.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// Service Card Component
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-delance-charcoal to-delance-charcoal-light 
                 border border-delance-gray/30 transition-all duration-500 hover:border-delance-gray/60
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image container */}
      <div className="relative h-40 overflow-hidden">
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
        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm 
                        flex items-center justify-center text-white border border-white/20
                        group-hover:bg-white group-hover:text-delance-black transition-all duration-300">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-delance-light transition-colors">
          {service.title}
        </h3>
        <p className="text-delance-silver text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Learn more link */}
        <div className={`mt-4 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
          isHovered ? "text-white translate-x-0 opacity-100" : "text-delance-silver -translate-x-2 opacity-0"
        }`}>
          <span>Learn more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
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
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
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
