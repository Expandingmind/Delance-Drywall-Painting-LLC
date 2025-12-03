/**
 * BlogCards Component
 * "Delance Knows Best" educational content section
 */
export default function BlogCards() {
  const articles = [
    {
      category: "Drywall Tips",
      title: "Should You Repair or Replace Damaged Drywall?",
      summary:
        "Not every hole requires a full panel replacement. Learn when patching makes sense and when it's time to call in the pros for a bigger fix.",
      readTime: "4 min read",
    },
    {
      category: "Paint Guide",
      title: "How to Choose the Right Interior Paint Finish",
      summary:
        "Flat, eggshell, satin, or semi-gloss? The right sheen depends on the room, the lighting, and how much wear your walls will see.",
      readTime: "5 min read",
    },
    {
      category: "Pro Insights",
      title: "Why Proper Surface Prep Matters More Than the Paint Brand",
      summary:
        "The secret to a paint job that lasts isn't the price of the paint—it's the hours spent cleaning, sanding, and priming before the first coat goes on.",
      readTime: "3 min read",
    },
  ];

  return (
    <section className="bg-delance-off-white py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-delance-black mb-4">
            Delance Knows Best
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto">
            Quick tips to keep your walls, ceilings, and paint looking flawless for years to come.
          </p>
        </div>

        {/* Article cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg 
                         transition-shadow duration-300 group cursor-pointer"
            >
              {/* Category & read time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider 
                                 text-delance-gray-light bg-delance-off-white px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-delance-silver">{article.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-delance-black mb-3 group-hover:text-delance-gray-mid 
                             transition-colors leading-tight">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-delance-gray-mid text-sm leading-relaxed mb-4">
                {article.summary}
              </p>

              {/* Read more link */}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold 
                           text-delance-black hover:text-delance-gray-mid transition-colors group/link"
              >
                Read More
                <svg
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

