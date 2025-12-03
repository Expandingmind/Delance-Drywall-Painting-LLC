"use client";

import { useEffect, useRef } from "react";

/**
 * Reviews Component
 * Testimonials carousel with Google-style review cards
 * Features: Auto-scrolling animation, fade edges, Google icons
 */

interface Review {
  name: string;
  role: string;
  roleColor: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  initial: string;
}

const reviews: Review[] = [
  {
    name: "Robert H.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    location: "Orlando",
    rating: 5,
    text: "Transformed our entire home from outdated popcorn ceilings to a beautiful knockdown texture. The crew was professional, on time every day, and left the place spotless.",
    date: "NOVEMBER 2024",
    initial: "R",
  },
  {
    name: "Maria S.",
    role: "PROPERTY MANAGER",
    roleColor: "text-emerald-400",
    location: "Winter Park",
    rating: 5,
    text: "We had water damage in our living room that needed expert repair. Delance matched the existing texture perfectly—you can't even tell where the damage was.",
    date: "OCTOBER 2024",
    initial: "M",
  },
  {
    name: "James T.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    location: "Lake Nona",
    rating: 5,
    text: "Hired them for a full interior repaint of our 3,000 sq ft home. The attention to detail was incredible—perfect cut lines, no drips, and they moved all our furniture back.",
    date: "SEPTEMBER 2024",
    initial: "J",
  },
  {
    name: "David K.",
    role: "BUSINESS OWNER",
    roleColor: "text-amber-400",
    location: "Downtown Orlando",
    rating: 5,
    text: "Delance handled drywall and painting for our new office build-out. Level 5 finish throughout, completed on schedule, and the price was exactly what was quoted.",
    date: "NOVEMBER 2024",
    initial: "D",
  },
  {
    name: "Sarah M.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    location: "Kissimmee",
    rating: 5,
    text: "After getting quotes from several contractors, Delance stood out for their professionalism and fair pricing. The exterior paint job looks amazing!",
    date: "AUGUST 2024",
    initial: "S",
  },
  {
    name: "Carlos R.",
    role: "CONTRACTOR",
    roleColor: "text-purple-400",
    location: "Sanford",
    rating: 5,
    text: "I subcontract Delance for all my drywall needs. Their level 5 finishes are the best in Central Florida. Reliable, professional, and always on time.",
    date: "OCTOBER 2024",
    initial: "C",
  },
  {
    name: "Linda P.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    location: "Altamonte Springs",
    rating: 5,
    text: "They removed our popcorn ceilings and applied a smooth finish throughout the house. The dust control was impressive—our furniture stayed clean!",
    date: "SEPTEMBER 2024",
    initial: "L",
  },
  {
    name: "Michael W.",
    role: "REAL ESTATE INVESTOR",
    roleColor: "text-rose-400",
    location: "Orlando",
    rating: 5,
    text: "I've used Delance on multiple flip projects. They're fast, affordable, and the quality is always top-notch. My go-to for drywall and paint.",
    date: "NOVEMBER 2024",
    initial: "M",
  },
];

// Google "G" Logo SVG Component
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-delance-gray"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Review Card Component
const ReviewCard = ({ review }: { review: Review }) => (
  <div
    className="flex-shrink-0 w-[320px] bg-gradient-to-b from-delance-charcoal to-delance-charcoal-light 
               rounded-2xl p-6 border border-delance-gray/30 hover:border-delance-gray/50 
               transition-all duration-300"
  >
    {/* Header with Google logo and initial */}
    <div className="flex items-start justify-between mb-4">
      <GoogleLogo />
      <div
        className="w-8 h-8 rounded-full bg-delance-gray-mid flex items-center justify-center 
                   text-white text-sm font-medium"
      >
        {review.initial}
      </div>
    </div>

    {/* Star rating */}
    <div className="mb-3">
      <StarRating rating={review.rating} />
    </div>

    {/* Name and role */}
    <h4 className="text-white font-semibold text-lg">{review.name}</h4>
    <p className={`text-xs font-semibold tracking-wider mb-3 ${review.roleColor}`}>
      {review.role}
    </p>

    {/* Review text */}
    <p className="text-delance-silver text-sm leading-relaxed mb-4 line-clamp-4">
      &ldquo;{review.text}&rdquo;
    </p>

    {/* Date */}
    <p className="text-delance-gray-light text-xs font-medium tracking-wider pt-3 border-t border-delance-gray/30">
      {review.date}
    </p>
  </div>
);

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to beginning when reaching halfway (since we duplicate the content)
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="section-container mb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-3">
              Why Homeowners Love Delance
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-delance-gray-mid font-semibold">50+ reviews</span>
              <span className="text-delance-gray-mid">with an overall</span>
              <span className="font-semibold text-delance-black">4.9 star ranking</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Leave a Review button */}
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-delance-black 
                       text-delance-black font-semibold rounded-full hover:bg-delance-black hover:text-white 
                       transition-all duration-300 self-start md:self-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Leave a Review
          </a>
        </div>
      </div>

      {/* Carousel with fade edges */}
      <div className="relative">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white 0%, white 20%, transparent 100%)",
          }}
        />

        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, white 0%, white 20%, transparent 100%)",
          }}
        />

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-hidden scrollbar-hide py-4 px-4"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${index}`} review={review} />
          ))}
        </div>
      </div>

      {/* Google Guaranteed badge */}
      <div className="section-container mt-8">
        <div className="flex items-center justify-center gap-3 text-delance-gray-mid">
          <div className="flex items-center gap-2 px-4 py-2 bg-delance-off-white rounded-full">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-delance-black">Google Verified Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
