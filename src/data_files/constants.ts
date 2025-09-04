import ogImageSrc from "@images/BSA-OG-image.png";

export const SITE = {
  title:
    "Blue Skies Above | Alabama’s Top Flight School for Private & Commercial Pilot Training",
  tagline: "Your Aviation Journey Starts Here.",
  description:
    "Launch your aviation career with Blue Skies Above, a premier flight school in Lanett, Alabama. We offer expert-led training for Private Pilot, Instrument, Commercial, and CFI certifications—just 30 minutes from Auburn and Columbus. Schedule your Discovery Flight today!",
  description_short:
    "Start your pilot journey with Blue Skies Above, Alabama’s trusted flight school offering expert-led training in a fun, focused, and supportive environment.",
  url: "https://flytheblueskies.com",
  author: "Blue Skies Above Flight School",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: SITE.title,
  description: SITE.description_short,
  image: ogImageSrc,
};

export const contactData = {
  phone: "+1 (334) 449-7600",
  addressLine1: "4445 51st Ave SW",
  addressLine2: "Lanett, Alabama 36863",
  email: "connect@flytheblueskies.com",
  googleMap: "https://maps.app.goo.gl/J6yNaHPp5KZf6TTX6",
};

export const partnersData = [
  {
    icon: ``,
    name: "Federal Aviation Administration Safety Team (FAAST)",
    href: "https://www.faasafety.gov/",
    imagePath:
      "/src/assets/images/parnter-faast-federal-aviaiton-administration-safety-team.webp",
    imageAlt: "FAAST Logo",
    subTitle: "Building safer pilots through official FAA resources.",
    description:
      "Through our partnership with the FAA Safety Team, Blue Skies Above gives students access to the highest level of aviation safety education. This collaboration ensures our pilots-in-training benefit from official FAA resources, safety seminars, and best practices that build a culture of professionalism and risk awareness from day one.",
  },
  {
    icon: ``,
    name: "Gleim Aviation",
    href: "https://www.gleimaviation.com/",
    imagePath: "/src/assets/images/partner-blue-skies-gleim.webp",
    imageAlt: "Gleim Aviation Logo",
    subTitle: "Proven training tools for exam success.",
    description:
      "By partnering with Gleim Aviation, we provide our students with industry-leading training materials and exam prep tools. This means you’ll have a clear learning roadmap, expert-reviewed content, and proven resources that dramatically improve your chances of passing FAA written exams and checkrides on the first attempt.",
  },
  {
    icon: ``,
    name: "National Association of Flight Instructors (NAFI)",
    href: "https://nafimentor.org/",
    imagePath: "/src/assets/images/partner-blue-skies-nafi-logo.webp",
    imageAlt: "NAFI Logo",
    subTitle: "Instructors supported by a national mentorship network.",
    description:
      "Blue Skies Above instructors are supported by NAFI’s mentorship and professional network. For students, this translates into learning from passionate educators who are backed by the latest instructional strategies and a strong community of aviation professionals dedicated to your success.",
  },
  {
    icon: ``,
    name: "Flight Training Finance",
    href: "https://www.flighttrainingfinancellc.com/",
    imagePath: "/src/assets/images/parner-flight-training-finance-logo.webp",
    imageAlt: "Flight Training Finance Logo",
    subTitle: "Flexible financing designed specifically for flight training.",
    description:
      "Our collaboration with Flight Training Finance makes becoming a pilot financially achievable. Students gain access to specialized loan programs built specifically for aviation training — with flexible terms that fit your schedule and allow you to focus on flying rather than finances.",
  },
  {
    icon: ``,
    name: "Flight School Association of North America (FSANA)",
    href: "https://fsana.com/",
    imagePath: "/src/assets/images/partner-blue-skies-fsana-logo.webp",
    imageAlt: "FSANA Logo",
    subTitle: "Part of a nationwide network of trusted flight schools.",
    description:
      "As a FSANA-affiliated school, Blue Skies Above operates within a nationwide network of trusted flight schools. This partnership ensures we follow industry best practices, maintain high standards, and give students access to a community of like-minded aviators and resources that extend beyond our own campus.",
  },
  {
    icon: ``,
    name: "Stratus Financial",
    href: "/stratus-financing/",
    imagePath:
      "/src/assets/images/Partner Stratus Tagline Color CMYK 300 Outline.png",
    imageAlt: "Stratus Financial Logo",
    subTitle: "Smart financing to help you reach your aviation goals.",
    description:
      "Through Stratus Financial, our students have access to innovative financing solutions that support every stage of flight training. This partnership allows you to move confidently toward your pilot’s license without delays, knowing you have a trusted financial partner walking with you every step of the journey.",
  },
  {
    icon: ``,
    name: "LifeStyle Aviation",
    href: "/lifestyle-aviation/",
    imagePath:
      "/src/assets/images/Partner LifeStyle Aviation Logo-Standard.png",
    imageAlt: "LifeStyle Aviation Logo",
    subTitle: "Access to modern Diamond Aircraft and ownership pathways.",
    description:
      "Our connection with LifeStyle Aviation opens doors to modern, state-of-the-art Diamond Aircraft and unique ownership opportunities. Students benefit from training in advanced, safe, and efficient aircraft, while also gaining insight into future pathways for personal or shared ownership through DiamondShare programs.",
  },
  {
    icon: ``,
    name: "DiamondShare",
    href: "https://www.diamondshare.com",
    imagePath: "/src/assets/images/Partner DiamondShare Logo.jpg",
    imageAlt: "DiamondShare Logo",
    subTitle: "Affordable access to modern aircraft after training.",
    description:
      "The DiamondShare partnership means our graduates can step seamlessly from training into affordable aircraft access. This program eliminates the barriers of full ownership, offering pilots the ability to fly new Diamond Aircraft at a fraction of the cost — a perfect bridge between training and building real-world flying experience.",
  },
];
