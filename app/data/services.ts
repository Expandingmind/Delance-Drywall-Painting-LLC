/**
 * Services Data
 * Shared service data used across the site
 */

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  iconPath: string;
  fullDescription: string;
  features: string[];
  process: string[];
}

export const services: Service[] = [
  {
    slug: "drywall-installation",
    title: "Drywall Installation",
    description: "New construction and remodel drywall hanging with precise cuts and tight seams.",
    image: "/project-1.png",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
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
    slug: "drywall-repair",
    title: "Drywall Repair",
    description: "Holes, cracks, and water damage repairs with seamless blending.",
    image: "/project-15.png",
    iconPath: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
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
    slug: "level-5-finishing",
    title: "Level 5 Finishing",
    description: "The ultimate smooth finish for high-end results and glossy paints.",
    image: "/project-3.png",
    iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
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
    slug: "metal-framing",
    title: "Metal Framing",
    description: "Commercial-grade steel stud framing for walls and ceilings.",
    image: "/project-4.png",
    iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
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
    slug: "interior-painting",
    title: "Interior Painting",
    description: "Walls, ceilings, trim, and cabinets with flawless coverage.",
    image: "/project-7.png",
    iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
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
    slug: "exterior-painting",
    title: "Exterior Painting",
    description: "Complete exterior transformations with weather-resistant paints.",
    image: "/project-5.png",
    iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
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
    slug: "acoustic-ceilings",
    title: "Acoustic Ceilings",
    description: "Drop ceilings and acoustic tile systems for commercial spaces.",
    image: "/project-10.png",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
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
    slug: "texture-removal",
    title: "Texture & Removal",
    description: "Orange peel, knockdown, and popcorn ceiling removal.",
    image: "/project-9.png",
    iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
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

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}

