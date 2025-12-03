"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Gallery Component
 * Project gallery showcasing completed work with hover effects
 */
export default function Gallery() {
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

  const projects = [
    {
      image: "/project-2.png",
      location: "Orlando, FL",
      description: "Full interior repaint with ceiling texture conversion",
      category: "Residential",
    },
    {
      image: "/project-6.png",
      location: "Winter Park, FL",
      description: "New construction with level 5 finish",
      category: "New Build",
    },
    {
      image: "/project-8.png",
      location: "Lake Nona, FL",
      description: "Exterior painting and power washing",
      category: "Exterior",
    },
    {
      image: "/project-11.png",
      location: "Kissimmee, FL",
      description: "Commercial office build-out",
      category: "Commercial",
    },
    {
      image: "/project-12.png",
      location: "Sanford, FL",
      description: "Living room accent walls with custom texture",
      category: "Residential",
    },
    {
      image: "/project-16.png",
      location: "Altamonte Springs, FL",
      description: "Water damage repair and restoration",
      category: "Repair",
    },
  ];

  return (
    <section id="gallery" className="bg-white py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-delance-gray-light text-sm font-medium tracking-wider uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-4">
            See Our Work
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto text-lg">
            From full remodels to simple repaints, here&apos;s a look at recent projects 
            across Central Florida.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-delance-charcoal cursor-pointer
                         transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                         ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.description}
                  className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-delance-black via-delance-black/50 
                              to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm 
                                 rounded-full text-delance-black">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 
                              group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-delance-silver text-sm font-medium mb-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {project.location}
                </p>
                <p className="text-white font-semibold text-lg leading-tight">
                  {project.description}
                </p>
                
                {/* View project link - appears on hover */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 
                                   hover:text-white transition-colors">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-delance-black font-semibold 
                       hover:text-delance-gray-mid transition-colors group"
          >
            Want to see more? Let&apos;s discuss your project
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
