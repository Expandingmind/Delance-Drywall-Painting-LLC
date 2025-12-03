/**
 * WhyChoose Component
 * Feature grid highlighting key differentiators
 */
export default function WhyChoose() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Level-5 Quality Finishes",
      description:
        "The highest industry standard for drywall finishing. Perfectly smooth surfaces ready for any paint sheen—even high-gloss. No shadows, no imperfections.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast, Professional Crews",
      description:
        "Our experienced teams work efficiently without cutting corners. We respect your timeline and keep projects moving so you can get back to normal life quickly.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Interior & Exterior Painting",
      description:
        "From accent walls to complete exterior transformations. Premium paints, meticulous prep work, and clean lines that make the difference between good and exceptional.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Respectful of Your Home & Time",
      description:
        "We treat your property like our own. Protective coverings, daily cleanup, and clear communication mean you're never left wondering what's happening in your space.",
    },
  ];

  return (
    <section id="why-delance" className="bg-delance-off-white py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-delance-black mb-4">
            Why Choose Delance for Drywall & Painting?
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto">
            Level 5 finishes, texture expertise, meticulous prep and cleanup—here&apos;s what 
            sets us apart from the competition.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg 
                         transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-delance-black rounded-2xl flex items-center 
                              justify-center text-white mb-6 group-hover:scale-110 
                              transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-delance-black mb-3">
                {feature.title}
              </h3>
              <p className="text-delance-gray-mid leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

