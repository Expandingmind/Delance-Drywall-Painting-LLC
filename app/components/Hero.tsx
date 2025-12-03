"use client";

/**
 * Hero Component
 * Main hero section with headline, CTA buttons, and abstract shape
 * Inspired by callmother.com but styled for Delance brand
 */
export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-delance-black min-h-[90vh] flex items-center overflow-hidden">
      {/* Abstract organic shape on the right - grayscale version */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] overflow-hidden">
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-delance-black via-delance-black/90 to-delance-black/40" />
        </div>
        
        {/* Abstract shape overlay */}
        <svg
          viewBox="0 0 800 800"
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-20"
          style={{ filter: "blur(60px)" }}
        >
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="50%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#2a2a2a" />
            </linearGradient>
          </defs>
          <ellipse
            cx="400"
            cy="400"
            rx="350"
            ry="380"
            fill="url(#heroGradient)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow text */}
          <p className="text-delance-silver text-sm sm:text-base font-medium tracking-wider uppercase mb-4 animate-fade-in">
            Drywall & Painting in Orlando, FL
          </p>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Walls So Smooth
            <br />
            They Disappear.
            <br />
            <span className="text-delance-silver italic font-light">
              Paint That Makes
            </span>
            <br />
            Them Pop.
          </h1>

          {/* Supporting paragraph */}
          <p className="text-delance-light/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl animate-slide-up animation-delay-100">
            From flawless level-5 finishes to precision painting, we transform 
            spaces with craftsmanship you can see and feel. Clean job sites, 
            clear communication, and on-time completion—every project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up animation-delay-200">
            <a
              href="tel:407-274-3487"
              className="btn-primary text-center sm:text-left"
            >
              <svg
                className="w-5 h-5 mr-2"
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
            <button onClick={scrollToContact} className="btn-secondary">
              Request a Free Estimate
            </button>
          </div>

          {/* Reassurance line */}
          <p className="text-delance-silver text-sm animate-slide-up animation-delay-300">
            Licensed & insured. Serving homes and businesses across Central Florida.
          </p>

          {/* Trust badges strip */}
          <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-delance-gray/30 animate-slide-up animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-delance-gray rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">A+</span>
              </div>
              <span className="text-delance-silver text-sm">BBB Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-delance-silver text-sm">
                500+ Projects Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

