"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Gallery Component
 * Expanded project gallery showcasing completed work with hover effects and lightbox
 */

interface Project {
  image: string;
  location: string;
  description: string;
  category: string;
}

// Lightbox Component
const Lightbox = ({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                   flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                   flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                   flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image container */}
      <div 
        className="relative max-w-6xl max-h-[85vh] animate-modal-in"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.description}
          className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 rounded-full text-delance-black mb-2">
            {project.category}
          </span>
          <p className="text-white font-semibold text-xl">{project.description}</p>
          <p className="text-delance-silver text-sm flex items-center gap-1 mt-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {project.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const projects: Project[] = [
    {
      image: "/project-2.png",
      location: "Orlando, FL",
      description: "Full interior repaint with ceiling texture conversion",
      category: "Residential",
    },
    {
      image: "/project-6.png",
      location: "Winter Park, FL",
      description: "Exterior Paint",
      category: "Exterior",
    },
    {
      image: "/project-8.png",
      location: "Lake Nona, FL",
      description: "Accent Walls",
      category: "Residential",
    },
    {
      image: "/project-11.png",
      location: "Kissimmee, FL",
      description: "Metal Framing",
      category: "Commercial",
    },
    {
      image: "/project-12.png",
      location: "Sanford, FL",
      description: "Ceiling Tile",
      category: "Commercial",
    },
    {
      image: "/project-16.png",
      location: "Altamonte Springs, FL",
      description: "Commercial retail space finishing",
      category: "Commercial",
    },
    {
      image: "/project-13.png",
      location: "Davenport, FL",
      description: "Level 5 Finish",
      category: "Residential",
    },
    {
      image: "/project-14.png",
      location: "Clermont, FL",
      description: "Kitchen and bathroom renovation",
      category: "Residential",
    },
    {
      image: "/project-17.png",
      location: "Apopka, FL",
      description: "Multi-room interior painting",
      category: "Residential",
    },
    {
      image: "/project-18.png",
      location: "Ocoee, FL",
      description: "Commercial",
      category: "Commercial",
    },
    {
      image: "/project-19.png",
      location: "Windermere, FL",
      description: "Level 4 Finish",
      category: "Residential",
    },
    {
      image: "/project-20.png",
      location: "Dr. Phillips, FL",
      description: "Basement finishing and paint",
      category: "Residential",
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
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
              across Central Florida. Click any image to view full size.
            </p>
          </div>

          {/* Project grid - expanded to show more */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-delance-charcoal cursor-pointer
                           transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                           ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                           ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`}
                style={{ transitionDelay: `${Math.min(index * 50, 400) + 200}ms` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <div className={`overflow-hidden ${
                  index === 0 || index === 5 ? "aspect-square" : "aspect-[4/3]"
                }`}>
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
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className="px-2 py-1 md:px-3 text-xs font-semibold bg-white/90 backdrop-blur-sm 
                                   rounded-full text-delance-black">
                    {project.category}
                  </span>
                </div>

                {/* View icon - appears on hover */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 transform translate-y-2 
                                group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-delance-silver text-xs md:text-sm font-medium mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className={`text-white font-semibold leading-tight ${
                    index === 0 || index === 5 ? "text-base md:text-xl" : "text-sm md:text-base"
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-delance-black">500+</p>
              <p className="text-delance-gray-mid text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-delance-black">8+</p>
              <p className="text-delance-gray-mid text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-delance-black">100%</p>
              <p className="text-delance-gray-mid text-sm">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-delance-black">A+</p>
              <p className="text-delance-gray-mid text-sm">BBB Rating</p>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-10 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-delance-black text-white font-semibold 
                         rounded-full hover:bg-delance-gray transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox 
        project={projects[currentIndex]} 
        isOpen={lightboxOpen} 
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
}
