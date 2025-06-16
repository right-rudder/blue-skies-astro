// An array of links for navigation bar
const navBarLinks = [
  { name: "New to Flight Training?", url: "/", submenu: [
      {
        name: "Why Become a Pilot?",
        link: "/should-i-become-a-pilot",
        description: "Now is the best time to become a pilot",
        icon: "",
      },
      {
        name: "Pilot Training Process",
        link: "/pilot-training-programs-and-courses",
        description: "Learn how to become a pilot",
        icon: "",
      },
      {
        name: "Considering a university for pilot training?",
        link: "/professional-flight-program",
        description: "Learn about our Part 61 program",
        icon: "",
      },
      {
        name: "Discovery Flight",
        link: "/discovery-flights",
        description: "Your first flight lesson. You fly the plane",
        icon: "",
      },
    ],
  },
  { name: "Training Programs", url: "/products", submenu: [
      {
        name: "Private Pilot",
        link: "/private-pilot-certificate-ppl",
        description: "Start you aviation journey here",
        icon: "",
      },
      {
        name: "Instrument Rating",
        link: "/instrument-rating-ifr",
        description: "Advance your navigation abilities and opportunities",
        icon: "",
      },
      {
        name: "Commercial Pilot",
        link: "/commercial-pilot-certificate-cpl",
        description: "Make flying your career",
        icon: "",
      },
      {
        name: "Multi Engine Rating",
        link: "/multi-engine-rating",
        description: "Fly aircraft with more then one engine",
        icon: "",
      },
      {
        name: "Multi Engine Instructor (MEI)",
        link: "/multi-engine-instructor-mei",
        description: "Learn how to instruct in multi-engine aircraft",
        icon: "",
      },
      {
        name: "CFI",
        link: "/certified-flight-instructor-cfi",
        description: "Learn how to instruct in multi-engine aircraft",
        icon: "",
      },
      {
        name: "Multi Engine Instructor (MEI)",
        link: "/multi-engine-rating",
        description: "Learn how to instruct in multi-engine aircraft",
        icon: "",
      },
      {
        name: "CFI",
        link: "/certified-flight-instructor-cfi",
        description: "Teach what you know to the next class of pilots",
        icon: "",
      },
      {
        name: "CFII",
        link: "/certified-flight-instructor-cfii",
        description: "Bring student pilots to the next level with instrument rating",
        icon: "",
      },
      {
        name: "CFI Spin Endorsement",
        link: "/spin-endorsement",
        description: "Specialize in spin for CFI candidates",
        icon: "",
      },
      
    ],
  },
  { name: "About us", url: "/about-us", submenu: [
      {
        name: "Our Team",
        link: "/about-us",
        description: "Meet the Blue Skies Above team",
        icon: "",
      },
      {
        name: "Our Fleet",
        link: "/our-fleet",
        description: "Meet the fleet at Blue Skies Above",
        icon: "",
      },
      {
        name: "Why Blue Skies Above?",
        link: "/why-choose-blue-skies-above",
        description: "The only local flight school with a Cesna fleet. When you're here, you're family",
        icon: "",
      },
      {
        name: "Join the team",
        link: "/join-team",
        description: "Are you a CFI looking to teach the next generation of aviators? Apply today!",
        icon: "",
      },
      {
        name: "Blog",
        link: "/blog",
        description: "Check out the latest news, articles, and events at 743 Lannet Municipal Airport",
        icon: "",
      },
      {
        name: "Financing",
        link: "/financing",
        description: "Learn about financing options for your flight training at Blue Skies Above",
        icon: "",
      },
      {
        name: "Leaseback Program",
        link: "/leaseback-program",
        description: "Earn money while you're not flying your aircraft. Learn more about our leaseback program",
        icon: "",
      },
    ],
   },
  { name: "Visit School", url: "/visit-school" },
  { name: "Discovery Flight", url: "/discovery-flights" },
  { name: "Contact us", url: "/contact-us" },
];
// An array of links for footer
const footerLinks = [
  { section: "New to Flight Training?",
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
  { section: "Training Programs", links: [
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
  
  { section: "About us", links: [
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
    section: "Quick Links", links: [
      { name: "Discovery Flight", url: "/discovery-flight" },
      { name: "Contact us", url: "/contact" },
      { name: "Visit School", url: "/visit-flight-school" },
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