import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://flytheblueskies.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },

  redirects: {
    // missing pages:
    // locations

    //flight-training-programs
    "/visit-flight-school": "/contact",
    "/spin-endorsement": "/flight-training-programs/spin-endorsement",
    "/private-pilot": "/flight-training-programs/private-pilot-certificate-ppl",
    "/private-pilot-certificate-ppl":
      "/flight-training-programs/private-pilot-certificate-ppl",
    "/instrument-rating-ifr": "/flight-training-programs/instrument-rating-ifr",
    "/commercial-pilot-certificate-cpl":
      "/flight-training-programs/commercial-pilot-certificate-cpl",
    "/multi-engine-rating": "/flight-training-programs/multi-engine-rating",
    "/multi-engine-instructor-mei":
      "/flight-training-programs/multi-engine-instructor-mei",
    "/certified-flight-instructor-cfi":
      "/flight-training-programs/certified-flight-instructor-cfi",
    "/flight-instructor-instrument-cfii":
      "/flight-training-programs/certified-flight-instructor-instrument-cfii",
    "/should-i-become-a-pilot": "/why-become-a-pilot",
    "/why-choose-blue-skies-above": "/about-us",
    //blog
    "/posts/the-growing-demand-for-flight-instructors-start-your-aviation-career-with-blue-skies-above":
      "/blog/the-growing-demand-for-flight-instructors-start-your-aviation-career-with-blue-skies-above",
    "posts/from-student-to-instructor-why-becoming-a-cfi-is-the-smartest-step-toward-the-airlines":
      "blog/from-student-to-instructor-why-becoming-a-cfi-is-the-smartest-step-toward-the-airlines",
    "posts/factors-that-help-you-become-a-successful-student-pilot":
      "blog/factors-that-help-you-become-a-successful-student-pilot",
    "/posts/how-airplanes-defy-gravity-the-magic-of-lift":
      "/blog/how-airplanes-defy-gravity-the-magic-of-lift",
    "/posts/flight-training-from-inception-to-blue-skies":
      "/blog/flight-training-from-inception-to-blue-skies",
    "/posts/blue-skies-above-acquires-a-new-taa-plane":
      "/blog/blue-skies-above-acquires-a-new-taa-plane",
    "/posts/celebrating-our-1-year-anniversary-with-pancakes":
      "/blog/celebrating-our-1-year-anniversary-with-pancakes",
    "/posts/the-importance-of-flight-simulators-in-pilot-training":
      "/blog/the-importance-of-flight-simulators-in-pilot-training",
    "/posts/how-to-chooose-the-right-flight-school-for-you":
      "/blog/how-to-chooose-the-right-flight-school-for-you",
    "/posts/what-is-the-written-exam-and-how-to-pass-it":
      "/blog/what-is-the-written-exam-and-how-to-pass-it",
    "/posts/what-are-the-differences-between-part-61-and-part-141-flight-schools":
      "/blog/what-are-the-differences-between-part-61-and-part-141-flight-schools",
    "/posts/why-local-flight-schools-might-be-your-best-bet-for-pilot-training":
      "/blog/why-local-flight-schools-might-be-your-best-bet-for-pilot-training",
    "/posts/why-the-blue-skies-above-leaseback-program-is-a-smart-investment-for-aircraft-owners":
      "/blog/why-the-blue-skies-above-leaseback-program-is-a-smart-investment-for-aircraft-owners",
    "/posts/why-a-discovery-flight-over-alabama-can-be-the-first-step-to-your-aviation-career":
      "/blog/why-a-discovery-flight-over-alabama-can-be-the-first-step-to-your-aviation-career",
    "/posts/blue-skies-above-and-eaa-chapter-677-host-2024-04-30-chapter-flight-bag-meeting-at-columbus-airport":
      "/blog/blue-skies-above-and-eaa-chapter-677-host-2024-04-30-chapter-flight-bag-meeting-at-columbus-airport",
    "/posts/how-to-maintain-your-pilot-skills":
      "/blog/how-to-maintain-your-pilot-skills",
    "/posts/mastering-flight-instruments-at-blue-skies-above":
      "/blog/mastering-flight-instruments-at-blue-skies-above",
    "/posts/multi-engine-training-career-advantages-with-blue-skies-above":
      "/blog/multi-engine-training-career-advantages-with-blue-skies-above",
    "/posts/tfrs-election-season-s-odd-flight-restriction":
      "/blog/tfrs-election-season-s-odd-flight-restriction",
    "/posts/understanding-r-atp-a-guide-for-aspiring-pilots":
      "/blog/understanding-r-atp-a-guide-for-aspiring-pilots",
    "/posts/why-blue-skies-above-uses-the-cessna-172-for-flight-training":
      "/blog/why-blue-skies-above-uses-the-cessna-172-for-flight-training",
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en", // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
        },
      },
    }),
    // starlight({
    //   title: "ScrewFast Docs",
    //   defaultLocale: "root",
    //   // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
    //   // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
    //   // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
    //   // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
    //   // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
    //   locales: {
    //     root: {
    //       label: "English",
    //       lang: "en",
    //     },
    //     de: { label: "Deutsch", lang: "de" },
    //     es: { label: "Español", lang: "es" },
    //     fa: { label: "Persian", lang: "fa", dir: "rtl" },
    //     fr: { label: "Français", lang: "fr" },
    //     ja: { label: "日本語", lang: "ja" },
    //     "zh-cn": { label: "简体中文", lang: "zh-CN" },
    //   },
    //   // https://starlight.astro.build/guides/sidebar/
    //   // sidebar: [
    //   //   {
    //   //     label: "Quick Start Guides",
    //   //     translations: {
    //   //       de: "Schnellstartanleitungen",
    //   //       es: "Guías de Inicio Rápido",
    //   //       fa: "راهنمای شروع سریع",
    //   //       fr: "Guides de Démarrage Rapide",
    //   //       ja: "クイックスタートガイド",
    //   //       "zh-cn": "快速入门指南",
    //   //     },
    //   //     autogenerate: { directory: "guides" },
    //   //   },
    //   //   {
    //   //     label: "Tools & Equipment",
    //   //     items: [
    //   //       { label: "Tool Guides", link: "tools/tool-guides/" },
    //   //       { label: "Equipment Care", link: "tools/equipment-care/" },
    //   //     ],
    //   //   },
    //   //   {
    //   //     label: "Construction Services",
    //   //     autogenerate: { directory: "construction" },
    //   //   },
    //   //   {
    //   //     label: "Advanced Topics",
    //   //     autogenerate: { directory: "advanced" },
    //   //   },
    //   // ],
    //   social: [
    //     {
    //       icon: "github",
    //       label: "GitHub",
    //       href: "https://github.com/mearashadowfax/ScrewFast",
    //     },
    //   ],
    //   disable404Route: true,
    //   customCss: ["./src/assets/styles/starlight.css"],
    //   favicon: "/favicon.ico",
    //   components: {
    //     // SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
    //     // Head: "./src/components/ui/starlight/Head.astro",
    //     MobileMenuFooter:
    //       "./src/components/ui/starlight/MobileMenuFooter.astro",
    //     ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
    //   },
    //   head: [
    //     {
    //       tag: "meta",
    //       attrs: {
    //         property: "og:image",
    //         content: "https://flytheblueskies.com" + "/social.webp",
    //       },
    //     },
    //     {
    //       tag: "meta",
    //       attrs: {
    //         property: "twitter:image",
    //         content: "https://flytheblueskies.com" + "/social.webp",
    //       },
    //     },
    //   ],
    // }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
