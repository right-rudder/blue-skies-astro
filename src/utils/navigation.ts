// An array of links for navigation bar
const navBarLinks = [
  {
    name: "New to Flight Training?",
    link: "/why-become-a-pilot",
    submenu: [
      {
        name: "Why Become a Pilot?",
        link: "/why-become-a-pilot",
        description: "Now is the best time to become a pilot",
        icon: "earth",
      },
      {
        name: "Pilot Training Process",
        link: "/pilot-training-programs-and-courses",
        description: "Learn how to become a pilot",
        icon: "plane",
      },
      {
        name: "Considering a university for pilot training?",
        link: "/professional-flight-program",
        description: "Learn about our Part 61 program",
        icon: "community",
      },
      {
        name: "Discovery Flight",
        link: "/discovery-flights",
        description: "Your first flight lesson. You fly the plane",
        icon: "plane",
      },
    ],
  },
  {
    name: "Training Programs",
    link: "/flight-training-programs",
    submenu: [
      {
        name: "Private Pilot",
        link: "/flight-training-programs/private-pilot-certificate-ppl",
        description: "Start you aviation journey here",
        icon: "plane",
      },
      {
        name: "Instrument Rating",
        link: "/flight-training-programs/instrument-rating-ifr",
        description: "Advance your navigation abilities and opportunities",
        icon: "cloud",
      },
      {
        name: "Commercial Pilot",
        link: "/flight-training-programs/commercial-pilot-certificate-cpl",
        description: "Make flying your career",
        icon: "money",
      },
      {
        name: "Multi Engine Rating",
        link: "/flight-training-programs/multi-engine-rating",
        description: "Fly aircraft with more then one engine",
        icon: "puzzle",
      },
      {
        name: "Multi Engine Instructor (MEI)",
        link: "/flight-training-programs/multi-engine-instructor-mei",
        description: "Learn how to instruct in multi-engine aircraft",
        icon: "passport",
      },
      {
        name: "CFI",
        link: "/flight-training-programs/certified-flight-instructor-cfi",
        description: "Teach what you know to the next class of pilots",
        icon: "graduation",
      },
      {
        name: "CFII",
        link: "/flight-training-programs/certified-flight-instructor-instrument-cfii",
        description:
          "Bring student pilots to the next level with instrument rating",
        icon: "cloud",
      },
      {
        name: "CFI Spin Endorsement",
        link: "/flight-training-programs/spin-endorsement",
        description: "Specialize in spin for CFI candidates",
        icon: "plane",
      },
    ],
  },
  {
    name: "About us",
    link: "/about-us",
    submenu: [
      {
        name: "About us ",
        link: "/about-us",
        description: "Learn more about Blue Skies Above",
        icon: "graduation",
      },
      {
        name: "Our Team",
        link: "/our-team",
        description: "Meet the Blue Skies Above team",
        icon: "community",
      },
      {
        name: "Our Fleet",
        link: "/our-fleet",
        description: "Meet the fleet at Blue Skies Above",
        icon: "plane",
      },
      {
        name: "Join the team",
        link: "/join-team",
        description:
          "Are you a CFI looking to teach the next generation of aviators? Apply today!",
        icon: "community",
      },
      {
        name: "Blog",
        link: "/blog",
        description:
          "Check out the latest news, articles, and events at 743 Lannet Municipal Airport",
        icon: "earth",
      },
      {
        name: "Financing",
        link: "/financing",
        description:
          "Learn about financing options for your flight training at Blue Skies Above",
        icon: "money",
      },
      {
        name: "Leaseback Program",
        link: "/leaseback-program",
        description:
          "Earn money while you're not flying your aircraft. Learn more about our leaseback program",
        icon: "plane",
      },
    ],
  },
  // { name: "Visit School", link: "/visit-school" },
  // { name: "Discovery Flight", link: "/discovery-flights" },
  { name: "Contact us", link: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "New to Flight Training?",
    links: [
      {
        name: "Why Become a Pilot?",
        link: "/why-become-a-pilot",
      },
      {
        name: "Pilot Training Process",
        link: "/pilot-training-programs-and-courses",
      },
      {
        name: "Considering a university for pilot training?",
        link: "/professional-flight-program",
      },
      {
        name: "Book a Discovery Flight",
        link: "/discovery-flights",
      },
      { name: "Contact us", link: "/contact" },
      { name: "Enroll Now", link: "/enroll-at-blue-skies" },
    ],
  },
  {
    section: "Training Programs",
    links: [
      {
        name: "Private Pilot",
        link: "/flight-training-programs/private-pilot-certificate-ppl",
      },
      {
        name: "Instrument Rating",
        link: "/flight-training-programs/instrument-rating-ifr",
      },
      {
        name: "Commercial Pilot",
        link: "/flight-training-programs/commercial-pilot-certificate-cpl",
      },
      {
        name: "Multi Engine Rating",
        link: "/flight-training-programs/multi-engine-rating",
      },
      {
        name: "Multi Engine Instructor (MEI)",
        link: "/flight-training-programs/multi-engine-instructor-mei",
      },
      {
        name: "CFI",
        link: "/flight-training-programs/certified-flight-instructor-cfi",
      },
      {
        name: "CFII",
        link: "/flight-training-programs/certified-flight-instructor-instrument-cfii",
      },
      {
        name: "CFI Spin Endorsement",
        link: "/flight-training-programs/spin-endorsement",
      },
    ],
  },

  {
    section: "About us",
    links: [
      {
        name: "About us",
        link: "/about-us",
      },
      {
        name: "Our Team",
        link: "/about-us",
      },
      {
        name: "Our Fleet",
        link: "/our-fleet",
      },
      {
        name: "Join the team",
        link: "/join-team",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Financing",
        link: "/financing",
      },
      {
        name: "Leaseback Program",
        link: "/leaseback-program",
      },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/flytheblueskies",
  instagram: "https://www.instagram.com/flybsa/",
  x: "https://x.com/flybsa",
  linkedin: "https://www.linkedin.com/company/blue-skies-above/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
