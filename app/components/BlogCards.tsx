"use client";

import { useEffect, useRef, useState } from "react";

/**
 * BlogCards Component
 * "Delance Knows Best" educational content section with hover animations
 */
export default function BlogCards() {
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

  const articles = [
    {
      category: "Drywall Tips",
      categoryColor: "bg-blue-100 text-blue-700",
      title: "Should You Repair or Replace Damaged Drywall?",
      summary:
        "Not every hole requires a full panel replacement. Learn when patching makes sense and when it's time for a bigger fix.",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      category: "Paint Guide",
      categoryColor: "bg-emerald-100 text-emerald-700",
      title: "How to Choose the Right Interior Paint Finish",
      summary:
        "Flat, eggshell, satin, or semi-gloss? The right sheen depends on the room, lighting, and wear.",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      category: "Pro Insights",
      categoryColor: "bg-amber-100 text-amber-700",
      title: "Why Surface Prep Matters More Than the Paint Brand",
      summary:
        "The secret to a lasting paint job isn't the price—it's the prep work before the first coat.",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="bg-delance-off-white py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-delance-gray-light text-sm font-medium tracking-wider uppercase mb-3">
            Expert Tips
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-4">
            Delance Knows Best
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto text-lg">
            Quick tips to keep your walls, ceilings, and paint looking flawless for years to come.
          </p>
        </div>

        {/* Article cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm 
                         transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer
                         ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & read time */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 
                                   rounded-full ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-delance-silver">{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-delance-black mb-2 group-hover:text-delance-gray-mid 
                               transition-colors leading-tight">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-delance-gray-mid text-sm leading-relaxed mb-4">
                  {article.summary}
                </p>

                {/* Read more link */}
                <span className="inline-flex items-center gap-1 text-sm font-semibold 
                                 text-delance-black group-hover:text-delance-gray-mid transition-colors">
                  Read More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
