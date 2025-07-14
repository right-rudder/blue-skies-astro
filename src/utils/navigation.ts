// An array of links for navigation bar
const navBarLinks = [
  {
    name: "New to Flight Training?",
    link: "/",
    submenu: [
      {
        name: "Why Become a Pilot?",
        link: "/should-i-become-a-pilot",
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
        icon: "puzzle",
      },
      {
        name: "Commercial Pilot",
        link: "/flight-training-programs/commercial-pilot-certificate-cpl",
        description: "Make flying your career",
        icon: "plane",
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
        icon: "plane",
      },
      {
        name: "CFI",
        link: "/flight-training-programs/certified-flight-instructor-cfi",
        description: "Teach what you know to the next class of pilots",
        icon: "plane",
      },
      {
        name: "CFII",
        link: "/flight-training-programs/certified-flight-instructor-instrument-cfii",
        description:
          "Bring student pilots to the next level with instrument rating",
        icon: "puzzle",
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
        description: "Meet the Blue Skies Above",
        icon: "plane",
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
        name: "Why Blue Skies Above?",
        link: "/about-us",
        description:
          "The only local flight school with a Cesna fleet. When you're here, you're family",
        icon: "community",
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
        icon: "community",
      },
      {
        name: "Leaseback Program",
        link: "/leaseback-program",
        description:
          "Earn money while you're not flying your aircraft. Learn more about our leaseback program",
        icon: "question",
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
        link: "/should-i-become-a-pilot",
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
        name: "Discovery Flight",
        link: "/discovery-flights",
      },
    ],
  },
  {
    section: "Training Programs",
    links: [
      {
        name: "Private Pilot",
        link: "/private-pilot-certificate-ppl",
      },
      {
        name: "Instrument Rating",
        link: "/instrument-rating-ifr",
      },
      {
        name: "Commercial Pilot",
        link: "/commercial-pilot-certificate-cpl",
      },
      {
        name: "Multi Engine Rating",
        link: "/multi-engine-rating",
      },
      {
        name: "Multi Engine Instructor (MEI)",
        link: "/multi-engine-instructor-mei",
      },
      {
        name: "CFI",
        link: "/certified-flight-instructor-cfi",
      },
      {
        name: "Multi Engine Instructor (MEI)",
        link: "/multi-engine-rating",
      },
      {
        name: "CFI",
        link: "/certified-flight-instructor-cfi",
      },
      {
        name: "CFII",
        link: "/certified-flight-instructor-cfii",
      },
      {
        name: "CFI Spin Endorsement",
        link: "/spin-endorsement",
      },
    ],
  },

  {
    section: "About us",
    links: [
      {
        name: "Our Team",
        link: "/about-us",
      },
      {
        name: "Our Fleet",
        link: "/our-fleet",
      },
      {
        name: "Why Blue Skies Above?",
        link: "/why-choose-blue-skies-above",
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
  {
    section: "Quick Links",
    links: [
      { name: "Discovery Flight", link: "/discovery-flight" },
      { name: "Contact us", link: "/contact" },
      { name: "Visit School", link: "/visit-flight-school" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
