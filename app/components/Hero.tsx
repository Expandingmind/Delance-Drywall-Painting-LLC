"use client";

import { useEffect, useState } from "react";

/**
 * Hero Component
 * Main hero section with animated headline, CTA buttons, and background image
 */
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-delance-black min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-delance-gray/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-delance-gray/10 to-transparent" />
      </div>

      {/* Background image with overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
          style={{
            backgroundImage: `url('/project-1.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-delance-black via-delance-black/95 to-delance-black/60" />
        </div>
        
        {/* Floating particles/shapes for visual interest */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-delance-gray/5 blur-3xl 
                        transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-delance-gray/5 blur-3xl
                        transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow text */}
          <p className={`text-delance-silver text-sm sm:text-base font-medium tracking-wider uppercase mb-4
                        transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Drywall & Painting in Orlando, FL
          </p>

          {/* Main headline - staggered animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            <span className={`block transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Walls So Smooth
            </span>
            <span className={`block transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              They Disappear.
            </span>
            <span className={`block text-delance-silver italic font-light transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Paint That Makes
            </span>
            <span className={`block transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Them Pop.
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className={`text-delance-light/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl
                        transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            From flawless level-5 finishes to precision painting, we transform 
            spaces with craftsmanship you can see and feel. Clean job sites, 
            clear communication, and on-time completion—every project.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <a
              href="tel:407-274-3487"
              className="btn-primary text-center sm:text-left group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (407) 274-3487
            </a>
            <button onClick={scrollToContact} className="btn-secondary group">
              Request a Free Estimate
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Reassurance line */}
          <p className={`text-delance-silver text-sm transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Licensed & insured. Serving homes and businesses across Central Florida.
          </p>

          {/* Trust badges strip */}
          <div className={`flex flex-wrap items-center gap-8 mt-8 pt-8 pb-16 border-t border-delance-gray/30
                          transition-all duration-700 delay-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-9 h-9 bg-delance-gray rounded-full flex items-center justify-center
                              group-hover:bg-delance-gray-light transition-colors">
                <span className="text-white text-xs font-bold">A+</span>
              </div>
              <span className="text-delance-silver text-sm group-hover:text-white transition-colors">BBB Rated</span>
            </div>
            <div className="w-px h-6 bg-delance-gray/50 hidden sm:block" />
            <div className="flex items-center gap-3 group cursor-default">
              <svg
                className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-delance-silver text-sm group-hover:text-white transition-colors">
                500+ Projects Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
