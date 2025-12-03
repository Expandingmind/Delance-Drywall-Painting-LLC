"use client";

/**
 * TopBar Component
 * Full-width notification bar at the very top of the page
 * Contains promotional text and a CTA button
 */
export default function TopBar() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-delance-black border-b border-delance-gray/30">
      <div className="section-container">
        <div className="flex items-center justify-between py-2.5 text-sm">
          <p className="text-delance-silver hidden sm:block">
            Book expert drywall & painting in Orlando — fast, clean, professional.
          </p>
          <p className="text-delance-silver sm:hidden text-xs">
            Expert drywall & painting in Orlando
          </p>
          <button
            onClick={scrollToContact}
            className="text-white hover:text-delance-accent transition-colors duration-200 
                       text-xs sm:text-sm font-medium flex items-center gap-1.5 
                       border border-delance-gray-light rounded-full px-3 py-1 
                       hover:border-delance-silver"
          >
            Request Estimate
            <svg
              className="w-3 h-3"
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
          </button>
        </div>
      </div>
    </div>
  );
}

