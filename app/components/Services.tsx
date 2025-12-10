"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Services Component
 * Grid of service cards with images that open into detailed modal views
 */

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  fullDescription: string;
  features: string[];
  process: string[];
}

const services: Service[] = [
  {
    title: "Drywall Installation",
    description: "New construction and remodel drywall hanging with precise cuts and tight seams.",
    image: "/project-1.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    fullDescription: "Our drywall installation service covers everything from new construction to complete remodels. We work with standard 1/2\" and 5/8\" drywall, as well as moisture-resistant and fire-rated boards for specialized applications. Every panel is precision-cut and secured with proper fastener patterns to ensure long-lasting, crack-free walls.",
    features: [
      "New construction & remodel projects",
      "Standard, moisture-resistant & fire-rated boards",
      "Precision cutting for perfect fits",
      "Proper fastener spacing & patterns",
      "High ceilings & complex angles",
      "Residential & commercial projects"
    ],
    process: [
      "Site assessment and measurements",
      "Material selection based on project needs",
      "Framing inspection and preparation",
      "Professional hanging with tight seams",
      "Quality inspection before finishing"
    ]
  },
  {
    title: "Drywall Repair",
    description: "Holes, cracks, and water damage repairs with seamless blending.",
    image: "/project-15.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    fullDescription: "Don't let damaged drywall ruin your space. Our repair specialists fix everything from small nail holes to large sections damaged by water or impact. We use professional-grade compounds and techniques to ensure repairs blend invisibly with existing walls, making damage completely undetectable.",
    features: [
      "Hole & crack repair of any size",
      "Water damage restoration",
      "Corner bead replacement",
      "Nail pop repairs",
      "Seamless texture matching",
      "Insurance claim support"
    ],
    process: [
      "Damage assessment and cause identification",
      "Removal of damaged material",
      "Structural repair if needed",
      "New drywall installation",
      "Finishing to match existing walls"
    ]
  },
  {
    title: "Level 5 Finishing",
    description: "The ultimate smooth finish for high-end results and glossy paints.",
    image: "/project-3.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    fullDescription: "Level 5 finishing is the highest standard in drywall finishing, providing a completely smooth surface with no visible imperfections. This premium finish is essential for high-gloss paints, critical lighting conditions, and high-end residential and commercial projects where perfection is expected.",
    features: [
      "Complete skim coat application",
      "Perfect for glossy & semi-gloss paints",
      "Eliminates photographing through paint",
      "Ideal for critical lighting areas",
      "Premium residential & commercial standard",
      "Smooth, glass-like surface"
    ],
    process: [
      "Standard taping and mudding (Levels 1-4)",
      "Light sanding and inspection",
      "Full skim coat application",
      "Fine sanding to 150+ grit",
      "Final inspection under critical light"
    ]
  },
  {
    title: "Metal Framing",
    description: "Commercial-grade steel stud framing for walls and ceilings.",
    image: "/project-4.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    fullDescription: "Steel stud framing offers superior durability, fire resistance, and dimensional stability compared to wood. Our certified crews install commercial-grade metal framing systems for walls, ceilings, and soffits in both commercial and high-end residential projects.",
    features: [
      "Commercial-grade steel studs",
      "Fire-resistant construction",
      "Moisture & termite proof",
      "Precise, straight walls guaranteed",
      "Interior & exterior applications",
      "Ceiling grid systems"
    ],
    process: [
      "Layout and marking per plans",
      "Track installation (floor & ceiling)",
      "Stud placement at specified spacing",
      "Bracing and blocking installation",
      "Inspection and adjustments"
    ]
  },
  {
    title: "Interior Painting",
    description: "Walls, ceilings, trim, and cabinets with flawless coverage.",
    image: "/project-7.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    fullDescription: "Transform your interior spaces with our professional painting services. We use premium paints from trusted brands and proven techniques to deliver flawless, long-lasting results. From single accent walls to complete home repaints, we handle projects of all sizes with meticulous attention to detail.",
    features: [
      "Walls, ceilings & trim painting",
      "Cabinet refinishing",
      "Color consultation available",
      "Premium paint brands used",
      "Proper surface preparation",
      "Clean, dust-free application"
    ],
    process: [
      "Color selection and consultation",
      "Furniture protection and masking",
      "Surface prep (patching, sanding, priming)",
      "Professional application (spray/roll/brush)",
      "Touch-ups and final inspection"
    ]
  },
  {
    title: "Exterior Painting",
    description: "Complete exterior transformations with weather-resistant paints.",
    image: "/project-5.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    fullDescription: "Protect and beautify your home's exterior with our comprehensive painting services. We use high-quality, weather-resistant paints specifically formulated for Florida's demanding climate. Our thorough preparation and application process ensures your exterior paint job will look great and last for years.",
    features: [
      "Stucco, wood & vinyl siding",
      "Trim, fascia & soffit painting",
      "Weather-resistant formulations",
      "UV protection for lasting color",
      "Thorough pressure washing included",
      "Caulking and minor repairs"
    ],
    process: [
      "Exterior inspection and assessment",
      "Power washing and surface prep",
      "Caulking and repair work",
      "Priming bare surfaces",
      "Professional paint application",
      "Final walkthrough and touch-ups"
    ]
  },
  {
    title: "Acoustic Ceilings",
    description: "Drop ceilings and acoustic tile systems for commercial spaces.",
    image: "/project-10.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    fullDescription: "Our acoustic ceiling solutions provide excellent sound control while offering easy access to mechanical systems above. We install complete drop ceiling systems including grid frameworks and acoustic tiles in various styles and NRC ratings to meet your project's aesthetic and acoustic requirements.",
    features: [
      "Complete grid system installation",
      "Various tile styles & NRC ratings",
      "Easy access to mechanical systems",
      "Sound absorption & noise reduction",
      "Fire-rated options available",
      "Commercial & residential applications"
    ],
    process: [
      "Ceiling height and layout planning",
      "Main runner and cross-tee installation",
      "Level adjustment and alignment",
      "Tile installation and cutting",
      "Integration with lighting and HVAC"
    ]
  },
  {
    title: "Texture & Removal",
    description: "Orange peel, knockdown, and popcorn ceiling removal.",
    image: "/project-9.png",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    fullDescription: "Update your home by removing dated popcorn ceilings or adding modern texture finishes. Our texture specialists can match existing textures for repairs or apply new textures including orange peel, knockdown, skip trowel, and smooth finishes. We also safely remove old popcorn ceilings, including those with asbestos testing when needed.",
    features: [
      "Popcorn ceiling removal",
      "Orange peel texture application",
      "Knockdown texture finishing",
      "Skip trowel & custom textures",
      "Texture matching for repairs",
      "Asbestos testing coordination"
    ],
    process: [
      "Existing texture assessment",
      "Room preparation and protection",
      "Safe texture removal (if applicable)",
      "Surface repair and preparation",
      "New texture application",
      "Priming and painting (optional)"
    ]
  },
];

// Service Modal Component
const ServiceModal = ({ 
  service, 
  isOpen, 
  onClose 
}: { 
  service: Service | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-delance-charcoal rounded-3xl 
                   shadow-2xl border border-delance-gray/30 animate-modal-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm
                     flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-delance-charcoal via-delance-charcoal/30 to-transparent" />
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-delance-black">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Full description */}
          <p className="text-delance-silver text-lg leading-relaxed mb-8">
            {service.fullDescription}
          </p>

          {/* Two column layout for features and process */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                What&apos;s Included
              </h4>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-delance-silver">
                    <svg className="w-4 h-4 text-delance-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Our Process
              </h4>
              <ol className="space-y-3">
                {service.process.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-delance-silver">
                    <span className="w-6 h-6 rounded-full bg-delance-gray flex items-center justify-center 
                                     text-xs font-bold text-white flex-shrink-0">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-delance-gray/30 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-delance-black 
                         font-semibold rounded-xl hover:bg-delance-light transition-all duration-300"
            >
              Get a Free Estimate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:407-274-3487"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 border border-delance-gray 
                         text-white font-semibold rounded-xl hover:bg-delance-gray/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (407) 274-3487
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ 
  service, 
  index,
  onClick 
}: { 
  service: Service; 
  index: number;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-delance-charcoal to-delance-charcoal-light 
                 border border-delance-gray/30 transition-all duration-500 hover:border-delance-gray/60
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image container */}
      <div className="relative h-28 sm:h-40 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110 brightness-75" : "scale-100 brightness-50"
          }`}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-delance-charcoal via-delance-charcoal/50 to-transparent" />
        
        {/* Icon badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm 
                        flex items-center justify-center text-white border border-white/20
                        group-hover:bg-white group-hover:text-delance-black transition-all duration-300">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">
        <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-delance-light transition-colors line-clamp-2">
          {service.title}
        </h3>
        <p className="text-delance-silver text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none hidden sm:block">
          {service.description}
        </p>

        {/* Learn more link */}
        <div className={`mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
          isHovered ? "text-white translate-x-0 opacity-100" : "text-delance-silver -translate-x-2 opacity-0"
        }`}>
          <span className="hidden sm:inline">Learn more</span>
          <span className="sm:hidden">View</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Animated border glow on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
        isHovered ? "opacity-100" : "opacity-0"
      }`} style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
      }} />
    </div>
  );
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section id="services" className="bg-delance-black py-20 md:py-28 overflow-hidden">
        <div className="section-container" ref={sectionRef}>
          {/* Header */}
          <div className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <p className="text-delance-silver text-sm font-medium tracking-wider uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Drywall & Painting Services
            </h2>
            <p className="text-delance-silver max-w-2xl mx-auto text-lg">
              From framing to final coat, everything your walls need. 
              Residential and commercial projects across Central Florida.
            </p>
          </div>

          {/* Services grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index}
                onClick={() => openModal(service)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <p className="text-delance-silver mb-4">
              Don&apos;t see your project type? We handle custom work too.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-delance-black font-semibold 
                         rounded-full hover:bg-delance-light transition-all duration-300 hover:scale-105
                         hover:shadow-lg hover:shadow-white/20"
            >
              Discuss Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
}
