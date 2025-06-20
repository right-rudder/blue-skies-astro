import { partnersData } from "../constants";
import features from "@data/features.json";

const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle: " | ",
    pageDescription: "",
    pageKeywords: "",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/images/.jpg",
      imageAlt: "",
      headerH1: `Efficient training to become an <span class="text-picton-blue-500 dark:text-picton-blue-400">Airline Pilot</span> in Albert airline area`,
      paragraph: "Flight school between Alabama and Georgia Nestled in the heart of Lanett, Alabama Lanett Municipal Airport 7A3",
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: false,
        },
      ],
    },

    clientSection: {
      title: "",
      subtitle: "",
      imagePath: "",
      imageAlt: "",
      partnersData: partnersData,
    },

    featuresGeneral:{
      title:"Preparing future pilots to launch their aviation careers",
      subTitle:"Discover why aspiring pilots in Auburn and throughout the Alabama area trust Blue Skies Above to turn their aviation dreams into reality. With experienced instructors and comprehensive programs, we help students build the skills and confidence needed for a successful aviation career.",
      imagePath:"",
      imageAlt:"",
      features: features,
    }
  },
};
export default homePage;