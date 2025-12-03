/**
 * TrustBand Component
 * Light gray band showcasing trust badges and company credentials
 */
export default function TrustBand() {
  const badges = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "A+ Rated",
      description: "BBB Accredited",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Local & Family-Owned",
      description: "Orlando Based",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fully Insured",
      description: "Licensed Contractor",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Since 2017",
      description: "Years of Excellence",
    },
  ];

  return (
    <section className="bg-delance-off-white py-12 md:py-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-delance-black mb-3">
            Trusted Drywall & Painting in Central Florida
          </h2>
          <p className="text-delance-gray-light max-w-2xl mx-auto">
            With years of dedicated service, we&apos;ve built our reputation on professionalism, 
            clean workmanship, and finishes that stand the test of time.
          </p>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl 
                         bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-delance-black rounded-xl flex items-center 
                              justify-center text-white mb-4">
                {badge.icon}
              </div>
              <h3 className="text-delance-black font-bold text-lg mb-1">
                {badge.title}
              </h3>
              <p className="text-delance-gray-light text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

