/**
 * Gallery Component
 * Project gallery showcasing completed work
 */
export default function Gallery() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Orlando, FL",
      description: "Full interior repaint with ceiling texture conversion from popcorn to smooth knockdown finish.",
    },
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Winter Park, FL",
      description: "New construction drywall installation with level 5 finish throughout 4,200 sq ft home.",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Lake Nona, FL",
      description: "Exterior painting and power washing for a modern two-story residence.",
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Kissimmee, FL",
      description: "Commercial office build-out with metal framing, drywall, and professional paint finish.",
    },
    {
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Sanford, FL",
      description: "Living room and bedroom accent walls with custom texture and two-tone paint scheme.",
    },
    {
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Altamonte Springs, FL",
      description: "Water damage repair, skim coat restoration, and matching interior repaint.",
    },
  ];

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-delance-black mb-4">
            See Our Work
          </h2>
          <p className="text-delance-gray-mid max-w-2xl mx-auto">
            From full remodels to simple repaints, here&apos;s a look at recent projects 
            across Central Florida.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-delance-off-white"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.description}
                  className="w-full h-full object-cover group-hover:scale-110 
                             transition-transform duration-500"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-delance-black/90 
                              via-delance-black/40 to-transparent opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-delance-silver text-sm font-medium mb-1">
                  {project.location}
                </p>
                <p className="text-white text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Always visible location badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm 
                              rounded-full px-3 py-1 text-xs font-medium text-delance-black">
                {project.location}
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-delance-black font-semibold 
                       hover:text-delance-gray-mid transition-colors group"
          >
            Want to see more? Let&apos;s discuss your project
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

