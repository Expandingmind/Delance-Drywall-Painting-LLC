"use client";

import { useState } from "react";

/**
 * Reviews Component
 * Testimonials carousel showcasing customer feedback
 */

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Robert H.",
    location: "Orlando homeowner",
    rating: 5,
    text: "Transformed our entire home from outdated popcorn ceilings to a beautiful knockdown texture. The crew was professional, on time every day, and left the place spotless. Could not be happier with the results.",
  },
  {
    name: "Maria S.",
    location: "Winter Park resident",
    rating: 5,
    text: "We had water damage in our living room that needed expert repair. Delance matched the existing texture perfectly—you can&apos;t even tell where the damage was. Excellent communication throughout the project.",
  },
  {
    name: "James & Linda T.",
    location: "Lake Nona",
    rating: 5,
    text: "Hired them for a full interior repaint of our 3,000 sq ft home. The attention to detail was incredible—perfect cut lines, no drips, and they moved all our furniture back exactly where it was. True professionals.",
  },
  {
    name: "David K.",
    location: "Commercial property owner",
    rating: 5,
    text: "Delance handled drywall and painting for our new office build-out. Level 5 finish throughout, completed on schedule, and the price was exactly what was quoted. Will definitely use them again.",
  },
  {
    name: "Sarah M.",
    location: "Kissimmee homeowner",
    rating: 5,
    text: "After getting quotes from several contractors, Delance stood out for their professionalism and fair pricing. The exterior paint job looks amazing and they power washed everything first. Neighbors keep asking who did our house!",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-delance-gray"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="reviews" className="bg-delance-black py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Homeowners Love Delance Drywall & Painting
          </h2>
          <p className="text-delance-silver max-w-2xl mx-auto">
            See what Orlando clients say about our drywall and paint work.
          </p>
        </div>

        {/* Desktop: Grid of cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-delance-charcoal rounded-2xl p-6 hover:bg-delance-charcoal-light 
                         transition-colors duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="text-delance-light mt-4 mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-delance-gray rounded-full flex items-center 
                                justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{review.name}</p>
                  <p className="text-delance-silver text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-delance-charcoal rounded-2xl p-6">
                      <StarRating rating={review.rating} />
                      <p className="text-delance-light mt-4 mb-6 leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-delance-gray rounded-full flex items-center 
                                        justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-medium">{review.name}</p>
                          <p className="text-delance-silver text-sm">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 
                         w-10 h-10 bg-delance-gray rounded-full flex items-center 
                         justify-center text-white hover:bg-delance-gray-light 
                         transition-colors"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 
                         w-10 h-10 bg-delance-gray rounded-full flex items-center 
                         justify-center text-white hover:bg-delance-gray-light 
                         transition-colors"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-delance-gray"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

