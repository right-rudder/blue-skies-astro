// Enhanced structured data for Blue Skies Above Flight School
import { SITE, contactData } from "@data/constants";

// =============================================
// CORE BUSINESS SCHEMAS
// =============================================

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization", "TrainingProvider"],
  "@id": "https://flytheblueskies.com/#organization",
  name: "Blue Skies Above Flight School",
  alternateName: ["Blue Skies Above", "BSA Flight School"],
  description: SITE.description,
  url: SITE.url,
  telephone: contactData.phone,
  email: contactData.email,
  foundingDate: "2020",
  logo: {
    "@type": "ImageObject",
    url: "https://flytheblueskies.com/blue-skies-icon.png",
    width: 512,
    height: 512,
  },
  image: [
    "https://flytheblueskies.com/blue-skies-cessna-on-ramp.webp",
    "https://flytheblueskies.com/blue-skies-auburn-university-student-pilot.webp",
    "https://flytheblueskies.com/blue-skies-cessna.webp",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: contactData.addressLine1,
    addressLocality: "Lanett",
    addressRegion: "AL",
    postalCode: "36863",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.8649",
    longitude: "-85.1886",
  },
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-15:00"],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: ["Cash", "Credit Card", "Financing"],
  sameAs: [
    "https://www.facebook.com/flytheblueskies",
    "https://www.instagram.com/flybsa/",
    "https://x.com/flybsa",
    "https://www.linkedin.com/company/blue-skies-above/",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "32.8649",
      longitude: "-85.1886",
    },
    geoRadius: "100",
  },
  hasMap: contactData.googleMap,
  areaServed: [
    {
      "@type": "State",
      name: "Alabama",
    },
    {
      "@type": "State",
      name: "Georgia",
    },
    {
      "@type": "City",
      name: "Auburn",
    },
    {
      "@type": "City",
      name: "Columbus",
    },
    {
      "@type": "City",
      name: "Opelika",
    },
  ],
  knowsAbout: [
    "Flight Training",
    "Pilot Education",
    "Aviation Safety",
    "FAA Certification",
    "Instrument Flight Rules",
    "Commercial Aviation",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "17",
    bestRating: "5",
    worstRating: "1",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Private Pilot Certificate",
      competencyRequired: "PPL",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Instrument Rating",
      competencyRequired: "IFR",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Commercial Pilot Certificate",
      competencyRequired: "CPL",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certified Flight Instructor",
      competencyRequired: "CFI",
    },
  ],
};

// =============================================
// BREADCRUMB SCHEMA GENERATOR
// =============================================

export const breadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url === "/" ? SITE.url : `${SITE.url}${crumb.url}`,
  })),
});

// =============================================
// COURSE/PROGRAM SCHEMAS
// =============================================

export const courseSchema = (courseData: {
  title: string;
  description: string;
  price?: string;
  duration?: string;
  requirements?: string[];
  outcomes?: string[];
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: courseData.title,
  description: courseData.description,
  provider: {
    "@type": "EducationalOrganization",
    name: "Blue Skies Above Flight School",
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactData.addressLine1,
      addressLocality: "Lanett",
      addressRegion: "AL",
      postalCode: "36863",
      addressCountry: "US",
    },
  },
  courseMode: ["in-person", "hands-on"],
  educationalLevel: "Professional",
  teaches: courseData.title,
  coursePrerequisites: courseData.requirements || [],
  educationalCredentialAwarded: courseData.title,
  ...(courseData.duration && { timeRequired: courseData.duration }),
  ...(courseData.url && { url: `${SITE.url}${courseData.url}` }),
  ...(courseData.price && {
    offers: {
      "@type": "Offer",
      price: courseData.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
      seller: {
        "@type": "EducationalOrganization",
        name: "Blue Skies Above Flight School",
      },
    },
  }),
  ...(courseData.outcomes && {
    expectedLearningOutcome: courseData.outcomes.map((outcome) => ({
      "@type": "DefinedTerm",
      name: outcome,
    })),
  }),
});

// =============================================
// FAQ SCHEMA GENERATOR
// =============================================

export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// =============================================
// ARTICLE/BLOG POST SCHEMA
// =============================================

export const articleSchema = (articleData: {
  title: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  category?: string;
  tags?: string[];
  wordCount?: number;
  readingTime?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: articleData.title,
  description: articleData.description,
  image: articleData.image
    ? `${SITE.url}${articleData.image}`
    : `${SITE.url}/blue-skies-icon.png`,
  datePublished: articleData.datePublished,
  dateModified: articleData.dateModified || articleData.datePublished,
  author: {
    "@type": "Organization",
    name: articleData.author || "Blue Skies Above Flight School",
    url: SITE.url,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.title,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/blue-skies-icon.png`,
      width: 512,
      height: 512,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}${articleData.url}`,
  },
  ...(articleData.category && { articleSection: articleData.category }),
  ...(articleData.tags && { keywords: articleData.tags.join(", ") }),
  ...(articleData.wordCount && { wordCount: articleData.wordCount }),
  ...(articleData.readingTime && { timeRequired: articleData.readingTime }),
  isPartOf: {
    "@type": "Website",
    name: SITE.title,
    url: SITE.url,
  },
  about: {
    "@type": "Thing",
    name: "Flight Training",
    description: "Professional pilot training and aviation education",
  },
});

// =============================================
// SERVICE SCHEMA
// =============================================

export const serviceSchema = (serviceData: {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  offers?: { price: string; currency: string };
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceData.name,
  description: serviceData.description,
  serviceType: serviceData.serviceType,
  provider: {
    "@type": "EducationalOrganization",
    name: "Blue Skies Above Flight School",
    url: SITE.url,
  },
  areaServed: serviceData.areaServed || ["Alabama", "Georgia"],
  category: "Flight Training",
  ...(serviceData.offers && {
    offers: {
      "@type": "Offer",
      price: serviceData.offers.price,
      priceCurrency: serviceData.offers.currency,
    },
  }),
});

// =============================================
// PERSON/INSTRUCTOR SCHEMA
// =============================================

export const personSchema = (personData: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  qualifications?: string[];
  yearsExperience?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: personData.name,
  jobTitle: personData.jobTitle,
  description: personData.description,
  ...(personData.image && { image: `${SITE.url}${personData.image}` }),
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Blue Skies Above Flight School",
    url: SITE.url,
  },
  ...(personData.qualifications && {
    hasCredential: personData.qualifications.map((qual) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: qual,
    })),
  }),
  ...(personData.yearsExperience && {
    hasOccupation: {
      "@type": "Occupation",
      name: personData.jobTitle,
      experienceRequirements: `${personData.yearsExperience} years`,
    },
  }),
});

// =============================================
// REVIEW/TESTIMONIAL SCHEMA
// =============================================

export const reviewSchema = (reviewData: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  program?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  author: {
    "@type": "Person",
    name: reviewData.author,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: reviewData.rating,
    bestRating: 5,
    worstRating: 1,
  },
  reviewBody: reviewData.reviewBody,
  datePublished: reviewData.datePublished,
  itemReviewed: {
    "@type": "EducationalOrganization",
    name: "Blue Skies Above Flight School",
    ...(reviewData.program && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: reviewData.program,
      },
    }),
  },
});

// =============================================
// WEBSITE SCHEMA
// =============================================

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.title,
  description: SITE.description,
  publisher: {
    "@id": "https://flytheblueskies.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    "@id": "https://flytheblueskies.com/#organization",
  },
};

// =============================================
// NAVIGATION/MENU SCHEMA
// =============================================

export const siteNavigationSchema = (
  navItems: Array<{
    name: string;
    url: string;
    children?: Array<{ name: string; url: string }>;
  }>,
) => ({
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  hasPart: navItems.map((item) => ({
    "@type": "WebPage",
    name: item.name,
    url: `${SITE.url}${item.url}`,
    ...(item.children && {
      hasPart: item.children.map((child) => ({
        "@type": "WebPage",
        name: child.name,
        url: `${SITE.url}${child.url}`,
      })),
    }),
  })),
});

// =============================================
// PREDEFINED SCHEMAS FOR COMMON PAGES
// =============================================

export const discoveryFlightSchema = courseSchema({
  title: "Discovery Flight",
  description:
    "Your first flight lesson where you take the controls with a certified instructor. No experience required.",
  price: "199",
  duration: "PT1H",
  requirements: ["No experience required", "Valid photo ID"],
  outcomes: [
    "Basic flight controls",
    "Aviation fundamentals",
    "Career path guidance",
  ],
  url: "/discovery-flights",
});

export const privatePilotSchema = courseSchema({
  title: "Private Pilot Certificate (PPL)",
  description:
    "Complete training program to earn your Private Pilot License, including ground school and flight training.",
  price: "12000",
  duration: "P3M",
  requirements: [
    "17 years old",
    "3rd class medical certificate",
    "English proficiency",
  ],
  outcomes: [
    "Private Pilot Certificate",
    "Solo flight privileges",
    "Passenger carrying privileges",
  ],
  url: "/flight-training-programs/private-pilot-certificate-ppl",
});

export const instrumentRatingSchema = courseSchema({
  title: "Instrument Rating (IFR)",
  description:
    "Advanced training to fly in instrument meteorological conditions (IMC) and low visibility.",
  price: "8000",
  duration: "P2M",
  requirements: ["Private Pilot Certificate", "50 hours cross-country time"],
  outcomes: [
    "Instrument Rating",
    "IFR flight privileges",
    "Enhanced safety skills",
  ],
  url: "/flight-training-programs/instrument-rating-ifr",
});

export const commercialPilotSchema = courseSchema({
  title: "Commercial Pilot Certificate (CPL)",
  description:
    "Professional pilot training to earn your Commercial Pilot License for paid flying opportunities.",
  price: "15000",
  duration: "P4M",
  requirements: [
    "Private Pilot Certificate",
    "250 total flight hours",
    "18 years old",
  ],
  outcomes: [
    "Commercial Pilot Certificate",
    "Professional flying privileges",
    "Career advancement",
  ],
  url: "/flight-training-programs/commercial-pilot-certificate-cpl",
});

export const cfiSchema = courseSchema({
  title: "Certified Flight Instructor (CFI)",
  description:
    "Instructor rating to teach the next generation of pilots and build flight time toward airline minimums.",
  price: "8000",
  duration: "P2M",
  requirements: [
    "Commercial Pilot Certificate",
    "Instrument Rating",
    "FAA written exams",
  ],
  outcomes: [
    "CFI Certificate",
    "Teaching privileges",
    "Flight time building opportunity",
  ],
  url: "/flight-training-programs/certified-flight-instructor-cfi",
});

// =============================================
// UTILITY FUNCTIONS
// =============================================

export const generatePageSchema = (pageType: string, pageData: any) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE.url}${pageData.url || ""}`,
    name: pageData.title,
    description: pageData.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
    },
    about: {
      "@type": "Organization",
      "@id": "https://flytheblueskies.com/#organization",
    },
    inLanguage: "en-US",
  };

  // Add page-specific schema based on type
  switch (pageType) {
    case "course":
      return [baseSchema, courseSchema(pageData)];
    case "article":
      return [baseSchema, articleSchema(pageData)];
    case "faq":
      return [baseSchema, faqSchema(pageData.faqs)];
    case "service":
      return [baseSchema, serviceSchema(pageData)];
    default:
      return baseSchema;
  }
};
