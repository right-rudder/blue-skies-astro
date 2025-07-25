// SEO Keywords and Optimization Constants for Blue Skies Above Flight School
// This file contains keyword mappings, meta templates, and SEO-focused content

export const SEO_KEYWORDS = {
  // Primary Keywords (High Priority)
  primary: {
    core: [
      "flight school alabama",
      "pilot training alabama",
      "flight training alabama",
      "aviation school alabama",
    ],
    location: [
      "flight school auburn",
      "pilot training auburn",
      "flight school columbus georgia",
      "flight training opelika",
      "flight school lanett alabama",
    ],
    certificates: [
      "private pilot license alabama",
      "instrument rating training",
      "commercial pilot school",
      "cfi training alabama",
      "multi engine rating",
    ],
  },

  // Secondary Keywords (Medium Priority)
  secondary: {
    informational: [
      "how to become a pilot",
      "pilot training cost",
      "flight school near me",
      "discovery flight",
      "flight training programs",
    ],
    longTail: [
      "best flight school in alabama",
      "part 61 flight school alabama",
      "cessna 172 flight training",
      "professional pilot training",
      "flight instructor training",
    ],
  },

  // Long-tail Keywords (Low Priority)
  longTail: {
    specific: [
      "accelerated pilot training alabama",
      "weekend flight training auburn",
      "veteran pilot training benefits",
      "auburn university flight training",
      "affordable flight school alabama",
    ],
    questions: [
      "what does flight training cost",
      "how long does it take to get pilot license",
      "best age to start flight training",
      "flight training vs university aviation program",
    ],
  },
};

export const SEO_LOCATIONS = {
  primary: ["Alabama", "Auburn", "Columbus", "Opelika", "Lanett"],
  secondary: ["Georgia", "East Alabama", "West Georgia"],
  tertiary: ["Montgomery", "Atlanta", "Birmingham"],
};

export const META_TEMPLATES = {
  homepage: {
    title: "Flight School Alabama | Premier Pilot Training at Blue Skies Above",
    description:
      "Top-rated flight school in Alabama offering comprehensive pilot training programs. Located near Auburn & Columbus. Private pilot, instrument, commercial & CFI training. Start today!",
  },

  trainingPrograms: {
    title:
      "Pilot Training Programs Alabama | Comprehensive Flight Training Courses",
    description:
      "Comprehensive pilot training programs in Alabama. Private pilot license, instrument rating, commercial pilot & CFI training with expert instructors, modern aircraft, and flexible scheduling.",
  },

  locationPage: {
    titleTemplate:
      "Flight School {city} {state} | Professional Pilot Training Programs",
    descriptionTemplate:
      "Expert flight training near {city}, {state}. Private pilot license, instrument rating, commercial pilot, and CFI training. {benefits}",
  },

  blogPost: {
    titleTemplate: "{title} | Blue Skies Above Flight School Blog",
    descriptionTemplate:
      "{description} Learn more about aviation training, pilot careers, and flight school insights from Blue Skies Above in Alabama.",
  },
};

export const CONTENT_KEYWORDS = {
  // Keywords to naturally include in content
  natural: [
    "flight school",
    "pilot training",
    "aviation training",
    "flight training programs",
    "private pilot license",
    "instrument rating",
    "commercial pilot",
    "certified flight instructor",
    "discovery flight",
    "aviation career",
    "flight instructor",
    "pilot certification",
    "aviation education",
  ],

  // Location-specific keywords
  location: [
    "Alabama flight school",
    "Auburn pilot training",
    "Columbus flight training",
    "East Alabama aviation",
    "Lanett Municipal Airport",
    "Auburn University flight training",
  ],
};

export const SCHEMA_KEYWORDS = {
  // Keywords for structured data
  organization: [
    "Blue Skies Above Flight School",
    "Alabama Aviation Training",
    "Professional Pilot School",
  ],

  services: [
    "Private Pilot Training",
    "Instrument Rating Course",
    "Commercial Pilot Certification",
    "Flight Instructor Training",
    "Multi-Engine Rating",
    "Discovery Flight Experience",
  ],

  locations: [
    "Lanett Municipal Airport",
    "Auburn Alabama",
    "Columbus Georgia",
    "East Alabama",
    "West Georgia",
  ],
};

export const URL_KEYWORDS = {
  // SEO-friendly URL slugs
  pages: {
    homepage: "/",
    training: "/pilot-training-programs-alabama/",
    privatePilot: "/private-pilot-license-alabama/",
    instrument: "/instrument-rating-training-alabama/",
    commercial: "/commercial-pilot-school-alabama/",
    cfi: "/cfi-training-alabama/",
    multiEngine: "/multi-engine-rating-alabama/",
    discovery: "/discovery-flight-alabama/",
    contact: "/contact-flight-school-alabama/",
    about: "/about-alabama-flight-school/",
  },

  locations: {
    auburn: "/flight-school-auburn-alabama/",
    columbus: "/flight-school-columbus-georgia/",
    opelika: "/flight-training-opelika-alabama/",
    lanett: "/flight-school-lanett-alabama/",
  },

  blog: {
    category: "/aviation-training-blog/",
    pilotTips: "/pilot-training-tips/",
    careers: "/aviation-career-advice/",
    news: "/flight-school-news/",
  },
};

export const INTERNAL_LINKING = {
  // Keyword-rich anchor text for internal links
  anchors: {
    "flight school alabama": "/",
    "pilot training programs": "/pilot-training-programs-and-courses/",
    "private pilot license":
      "/flight-training-programs/private-pilot-certificate-ppl/",
    "instrument rating training":
      "/flight-training-programs/instrument-rating-ifr/",
    "commercial pilot training":
      "/flight-training-programs/commercial-pilot-certificate-cpl/",
    "flight school auburn": "/pilot-training/auburn-alabama-flight-school/",
    "flight training columbus":
      "/pilot-training/columbus-georgia-flight-school/",
    "discovery flight": "/discovery-flights/",
    "aviation careers": "/why-become-a-pilot/",
    "flight instructor training":
      "/flight-training-programs/certified-flight-instructor-cfi/",
  },
};

export const BLOG_KEYWORDS = {
  // Target keywords for blog content
  primary: [
    "flight training tips",
    "how to become a pilot",
    "pilot career advice",
    "aviation education",
    "flight school guide",
    "pilot certification process",
  ],

  secondary: [
    "private pilot requirements",
    "instrument rating benefits",
    "commercial pilot career",
    "flight instructor job",
    "aviation industry trends",
    "pilot training cost",
  ],

  longTail: [
    "what to expect in flight training",
    "choosing the right flight school",
    "private pilot license requirements alabama",
    "how much does pilot training cost",
    "flight training vs university aviation program",
    "career opportunities for pilots",
  ],
};

export const LOCAL_SEO = {
  // Local search optimization keywords
  nearMe: [
    "flight school near me",
    "pilot training near me",
    "aviation school near me",
    "learn to fly near me",
  ],

  cityState: [
    "flight school Auburn Alabama",
    "pilot training Columbus Georgia",
    "aviation school East Alabama",
    "flight training Opelika Alabama",
  ],

  landmarks: [
    "flight school near Auburn University",
    "pilot training near Columbus State University",
    "aviation school near Lanett Municipal Airport",
    "flight training near Lake Martin",
  ],
};

// Helper function to get keywords for specific page types
export function getKeywordsForPage(pageType: string): string[] {
  switch (pageType) {
    case "homepage":
      return [...SEO_KEYWORDS.primary.core, ...SEO_KEYWORDS.primary.location];
    case "training-programs":
      return [
        ...SEO_KEYWORDS.primary.certificates,
        ...SEO_KEYWORDS.secondary.informational,
      ];
    case "location":
      return [...SEO_KEYWORDS.primary.location, ...LOCAL_SEO.cityState];
    case "blog":
      return [...BLOG_KEYWORDS.primary, ...BLOG_KEYWORDS.secondary];
    default:
      return SEO_KEYWORDS.primary.core;
  }
}

// Helper function to generate meta description with keywords
export function generateMetaDescription(
  template: string,
  keywords: string[],
  location?: string,
): string {
  let description = template;

  // Inject primary keywords naturally
  if (keywords.length > 0) {
    keywords.slice(0, 3).forEach((keyword) => {
      if (!description.toLowerCase().includes(keyword.toLowerCase())) {
        description = description.replace(".", `, ${keyword}.`);
      }
    });
  }

  // Add location if provided
  if (location && !description.includes(location)) {
    description = description.replace("Alabama", `${location}, Alabama`);
  }

  return description;
}
