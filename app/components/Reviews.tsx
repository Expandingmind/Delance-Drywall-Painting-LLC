"use client";

import { useEffect, useRef } from "react";

/**
 * Reviews Component
 * Testimonials carousel with Google-style review cards
 * Features: Dual-row auto-scrolling animation, fade edges, Google icons
 */

interface Review {
  name: string;
  role: string;
  roleColor: string;
  rating: number;
  text: string;
  date: string;
  initial: string;
}

const reviewsRow1: Review[] = [
  {
    name: "Robert H.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    rating: 5,
    text: "Transformed our entire home from outdated popcorn ceilings to a beautiful knockdown texture. Professional and clean.",
    date: "NOV 2024",
    initial: "R",
  },
  {
    name: "Maria S.",
    role: "PROPERTY MANAGER",
    roleColor: "text-emerald-400",
    rating: 5,
    text: "Water damage repair done perfectly. You can't even tell where the damage was. Excellent communication.",
    date: "OCT 2024",
    initial: "M",
  },
  {
    name: "James T.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    rating: 5,
    text: "Full interior repaint of our 3,000 sq ft home. Perfect cut lines, no drips. True professionals.",
    date: "SEP 2024",
    initial: "J",
  },
  {
    name: "David K.",
    role: "BUSINESS OWNER",
    roleColor: "text-amber-400",
    rating: 5,
    text: "Office build-out with level 5 finish. Completed on schedule and price was exactly as quoted.",
    date: "NOV 2024",
    initial: "D",
  },
  {
    name: "Sarah M.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    rating: 5,
    text: "Exterior paint job looks amazing! Neighbors keep asking who did our house!",
    date: "AUG 2024",
    initial: "S",
  },
  {
    name: "Carlos R.",
    role: "CONTRACTOR",
    roleColor: "text-purple-400",
    rating: 5,
    text: "I subcontract Delance for all my drywall needs. Best level 5 finishes in Central Florida.",
    date: "OCT 2024",
    initial: "C",
  },
];

const reviewsRow2: Review[] = [
  {
    name: "Linda P.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    rating: 5,
    text: "Popcorn ceiling removal was clean and dust-free. Our furniture stayed spotless!",
    date: "SEP 2024",
    initial: "L",
  },
  {
    name: "Michael W.",
    role: "INVESTOR",
    roleColor: "text-rose-400",
    rating: 5,
    text: "Used Delance on multiple flips. Fast, affordable, and always top-notch quality.",
    date: "NOV 2024",
    initial: "M",
  },
  {
    name: "Jennifer A.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    rating: 5,
    text: "Kitchen and bathroom repaint exceeded expectations. So detail-oriented!",
    date: "OCT 2024",
    initial: "J",
  },
  {
    name: "Tony G.",
    role: "BUSINESS OWNER",
    roleColor: "text-amber-400",
    rating: 5,
    text: "Restaurant renovation done fast. Minimal disruption to our business. Highly recommend.",
    date: "SEP 2024",
    initial: "T",
  },
  {
    name: "Amanda K.",
    role: "REALTOR",
    roleColor: "text-cyan-400",
    rating: 5,
    text: "My go-to for all listing prep. They make homes sell faster with their quality work.",
    date: "NOV 2024",
    initial: "A",
  },
  {
    name: "Steve B.",
    role: "HOMEOWNER",
    roleColor: "text-blue-400",
    rating: 5,
    text: "Garage conversion drywall was perfect. Clean work and great communication throughout.",
    date: "OCT 2024",
    initial: "S",
  },
];

// Google "G" Logo SVG Component
const GoogleLogo = () => (
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
);

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 ${i < rating ? "text-yellow-400" : "text-delance-gray"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Review Card Component - Smaller size
const ReviewCard = ({ review }: { review: Review }) => (
  <div
    className="flex-shrink-0 w-[240px] bg-gradient-to-b from-delance-charcoal to-delance-charcoal-light 
               rounded-xl p-4 border border-delance-gray/30 hover:border-delance-gray/50 
               transition-all duration-300"
  >
    {/* Header with Google logo and initial */}
    <div className="flex items-start justify-between mb-2">
      <GoogleLogo />
      <div
        className="w-6 h-6 rounded-full bg-delance-gray-mid flex items-center justify-center 
                   text-white text-xs font-medium"
      >
        {review.initial}
      </div>
    </div>

    {/* Star rating */}
    <div className="mb-2">
      <StarRating rating={review.rating} />
    </div>

    {/* Name and role */}
    <h4 className="text-white font-semibold text-sm">{review.name}</h4>
    <p className={`text-[10px] font-semibold tracking-wider mb-2 ${review.roleColor}`}>
      {review.role}
    </p>

    {/* Review text */}
    <p className="text-delance-silver text-xs leading-relaxed mb-3 line-clamp-3">
      &ldquo;{review.text}&rdquo;
    </p>

    {/* Date */}
    <p className="text-delance-gray-light text-[10px] font-medium tracking-wider pt-2 border-t border-delance-gray/30">
      {review.date}
    </p>
  </div>
);

// Scrolling Row Component
const ScrollingRow = ({
  reviews,
  direction,
  speed = 0.5,
}: {
  reviews: Review[];
  direction: "left" | "right";
  speed?: number;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = direction === "left" ? 0 : scrollContainer.scrollWidth / 2;

    const animate = () => {
      if (direction === "left") {
        scrollPosition += speed;
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= speed;
        if (scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth / 2;
        }
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

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
  }, [direction, speed]);

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden scrollbar-hide py-2"
      style={{ scrollBehavior: "auto" }}
    >
      {duplicatedReviews.map((review, index) => (
        <ReviewCard key={`${review.name}-${index}`} review={review} />
      ))}
    </div>
  );
};

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="section-container mb-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-delance-black mb-2">
              Why Homeowners Love Delance
            </h2>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              <span className="text-delance-gray-mid font-semibold">50+ reviews</span>
              <span className="text-delance-gray-mid">with an overall</span>
              <span className="font-semibold text-delance-black">4.9 star ranking</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-delance-black 
                       text-delance-black text-sm font-semibold rounded-full hover:bg-delance-black hover:text-white 
                       transition-all duration-300 self-start md:self-auto"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Carousel rows with fade edges */}
      <div className="relative">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white 0%, white 10%, transparent 100%)",
          }}
        />

        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, white 0%, white 10%, transparent 100%)",
          }}
        />

        {/* Row 1 - scrolling left */}
        <div className="px-4">
          <ScrollingRow reviews={reviewsRow1} direction="left" speed={0.4} />
        </div>

        {/* Row 2 - scrolling right (opposite direction) */}
        <div className="px-4 mt-4">
          <ScrollingRow reviews={reviewsRow2} direction="right" speed={0.4} />
        </div>
      </div>

      {/* Google Verified badge */}
      <div className="section-container mt-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-delance-off-white rounded-full">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
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
            <span className="text-xs font-medium text-delance-black">Google Verified Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
