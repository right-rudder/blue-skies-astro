# Blue Skies Above Flight School Website

<div align="center">
  <img src="https://flytheblueskies.com/_astro/blue-skies-logo-black-600-nobg.saIaC-kR_Z3AR6L.avif" alt="Blue Skies Above Logo" width="200"/>
  
  <p><strong>Alabama's Premier Flight School - Where Your Aviation Journey Takes Flight</strong></p>
  
  [![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=flat-square&logo=astro)](https://astro.build)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![SEO Score](https://img.shields.io/badge/SEO%20Score-95%2F100-brightgreen?style=flat-square)](https://developers.google.com/speed/pagespeed/insights/)
</div>

## 🛫 About

This is the official website for **Blue Skies Above Flight School**, located in Lanett, Alabama. We provide comprehensive pilot training programs for Private, Instrument, Commercial, and Certified Flight Instructor (CFI) certifications, serving students from Auburn, Columbus, Opelika, and surrounding areas.

🌐 **Live Site:** [flytheblueskies.com](https://flytheblueskies.com)

## ✨ Features

### 🎯 Core Functionality

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Built with Astro for optimal loading speeds
- **SEO Optimized** - Comprehensive schema markup and meta optimization
- **Accessibility** - WCAG compliant with proper semantic markup
- **Progressive Enhancement** - Works with JavaScript disabled

### 🧭 Navigation & UX

- **Interactive Navigation** - Hover dropdowns and mobile-friendly menu
- **Smooth Animations** - AOS (Animate On Scroll) integration
- **Discovery Flights** - Easy booking system for introductory flights
- **Contact Forms** - Multiple contact points for different services
- **Blog System** - Aviation articles and flight school updates

### 🎨 Visual Design

- **Modern UI** - Clean, professional design with aviation theming
- **Image Optimization** - Sharp integration for optimal image delivery
- **Dark/Light Mode** - Automatic theme switching support
- **Brand Consistency** - Cohesive Blue Skies Above branding throughout

### 📈 Technical Excellence

- **Schema.org Markup** - 13+ different schema types for rich search results
- **Local Business SEO** - Optimized for "flight school near me" searches
- **Content Management** - Astro Content Collections for blog and programs
- **Performance** - 95+ Lighthouse scores across all metrics

## 🛠️ Tech Stack

### Core Framework

- **[Astro 5.9.2](https://astro.build)** - Static site generator with island architecture
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4.1.8](https://tailwindcss.com)** - Utility-first CSS framework

### UI & Interactions

- **[Preline UI](https://preline.co/)** - Pre-built UI components and interactions
- **[AOS](https://michalsnik.github.io/aos/)** - Animate On Scroll library
- **[GSAP](https://greensock.com/gsap/)** - Advanced animations

### Content & SEO

- **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)** - Type-safe content management
- **[Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automatic sitemap generation
- **Schema.org** - Comprehensive structured data implementation

### Performance & Optimization

- **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image processing
- **[Astro Compressor](https://github.com/DavidTParks/astro-compressor)** - Brotli compression
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scrolling

### Analytics & Tracking

- **Google Analytics 4** - Website analytics
- **Google Tag Manager** - Tag management system

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.17.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/right-rudder/blue-skies-astro.git
   cd blue-skies-astro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run astro`   | Run Astro CLI commands   |

## 📁 Project Structure

```
blue-skies-astro/
├── public/                     # Static assets
│   ├── banner-pattern.svg
│   ├── blue-skies-above-booklet.pdf
│   └── favicon.ico
├── src/
│   ├── assets/                 # Processed assets
│   │   ├── images/            # Optimized images
│   │   ├── scripts/           # Client-side scripts
│   │   └── styles/            # Global styles
│   ├── components/            # Reusable components
│   │   ├── forms/             # Contact and booking forms
│   │   ├── sections/          # Page sections
│   │   ├── ui/                # UI components
│   │   └── utils/             # Utility components
│   ├── content/               # Content collections
│   │   ├── blog/              # Blog posts
│   │   ├── insights/          # Aviation insights
│   │   ├── pilot-training/    # Location-based training
│   │   └── training-programs/ # Course descriptions
│   ├── data_files/            # Site data and configuration
│   ├── layouts/               # Page layouts
│   ├── pages/                 # Route pages
│   └── utils/                 # Utility functions
├── astro.config.mjs           # Astro configuration
├── package.json               # Dependencies and scripts
├── tailwind.config.mjs        # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## 📄 Key Pages

### Main Pages

- **Homepage** (`/`) - Hero, services overview, testimonials
- **Training Programs** (`/pilot-training-programs-and-courses`) - Course catalog
- **About Us** (`/about-us`) - School information and team
- **Contact** (`/contact`) - Contact information and forms
- **Discovery Flights** (`/discovery-flights`) - Introductory flight booking

### Training Programs

- **Private Pilot Certificate** (`/flight-training-programs/private-pilot-certificate-ppl`)
- **Instrument Rating** (`/flight-training-programs/instrument-rating-ifr`)
- **Commercial Pilot** (`/flight-training-programs/commercial-pilot-certificate-cpl`)
- **CFI Training** (`/flight-training-programs/certified-flight-instructor-cfi`)
- **Multi-Engine Rating** (`/flight-training-programs/multi-engine-rating`)

### Content

- **Blog** (`/blog/`) - Aviation articles and school updates
- **Location Pages** (`/pilot-training/[location]`) - Local SEO pages

## 🔧 Development

### Adding New Content

#### Blog Posts

1. Create a new `.md` file in `src/content/blog/en/`
2. Include required frontmatter:
   ```yaml
   ---
   title: "Your Blog Post Title"
   description: "Post description for SEO"
   author: "Author Name"
   authorImage: "@images/author.webp"
   authorImageAlt: "Author Name"
   pubDate: 2024-01-15
   cardImage: "@images/post-image.webp"
   cardImageAlt: "Post image description"
   readTime: 5
   tags: ["flight-training", "aviation"]
   ---
   ```

#### Training Programs

1. Add content to `src/content/training-programs/en/`
2. Update navigation in `src/utils/navigation.ts`
3. Create corresponding page in `src/pages/flight-training-programs/`

### Component Development

#### Creating New Components

1. Add component to appropriate folder in `src/components/`
2. Use TypeScript interfaces for props
3. Include accessibility attributes
4. Test responsiveness across devices

#### Layout Components

- **MainLayout.astro** - Standard page layout
- **MainLayoutEnhanced.astro** - Enhanced layout with schema support

### SEO & Schema Implementation

The site uses comprehensive schema.org markup for enhanced search results:

- **LocalBusiness** - Flight school information
- **Course** - Training program details
- **Article** - Blog post markup
- **FAQ** - Frequently asked questions
- **Breadcrumb** - Navigation context
- **Service** - Flight training services

### Performance Optimization

- **Image Optimization** - Sharp integration with WebP/AVIF formats
- **Code Splitting** - Astro's automatic optimization
- **Compression** - Brotli compression for assets
- **Critical CSS** - Inlined critical styles
- **Lazy Loading** - Images and non-critical content

## 🎯 SEO Strategy

### Technical SEO

- ✅ **95+ Lighthouse Score** - Performance, accessibility, SEO
- ✅ **Schema.org Markup** - 13+ different schema types
- ✅ **Meta Optimization** - Title, description, Open Graph
- ✅ **Sitemap Generation** - Automatic XML sitemap
- ✅ **Mobile Optimization** - Responsive design
- ✅ **Page Speed** - Optimized loading times

### Content Strategy

- **Local SEO** - Location-based training pages
- **Educational Content** - Aviation blog and guides
- **Service Pages** - Detailed training program information
- **FAQ Content** - Common pilot training questions

### Keywords Targeted

- "flight school Alabama"
- "pilot training Auburn"
- "discovery flight Columbus"
- "private pilot license"
- "instrument rating training"
- "commercial pilot school"

## 🔒 Security & Privacy

- **HTTPS Enforced** - Secure data transmission
- **Form Protection** - Spam prevention measures
- **Privacy Policy** - Compliant data handling
- **Google Analytics** - Privacy-focused implementation

## 📊 Analytics & Tracking

### Google Analytics 4

- **Page Views** - Traffic analysis
- **User Behavior** - Interaction tracking
- **Conversion Goals** - Form submissions and bookings
- **Event Tracking** - Discovery flight requests

### Performance Monitoring

- **Core Web Vitals** - Loading, interactivity, visual stability
- **Error Tracking** - JavaScript error monitoring
- **Uptime Monitoring** - Site availability

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Build Output

- Static files generated in `dist/` directory
- Optimized for CDN deployment
- Compressed assets with Brotli

### Hosting Recommendations

- **Vercel** - Automatic deployments
- **Netlify** - JAMstack hosting
- **Cloudflare Pages** - Global CDN

## 🤝 Contributing

### Development Workflow

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes**

   - Follow existing code patterns
   - Add TypeScript types
   - Include accessibility attributes
   - Test across devices

3. **Commit Changes**

   ```bash
   git commit -m "feat: add new feature"
   ```

4. **Submit Pull Request**
   - Include description of changes
   - Reference any related issues
   - Ensure tests pass

### Code Standards

- **TypeScript** - Strict mode enabled
- **ESLint** - Code quality enforcement
- **Prettier** - Consistent formatting
- **Accessibility** - WCAG 2.1 AA compliance

## 📞 Support

### Blue Skies Above Flight School

- **Phone:** [Contact Information]
- **Email:** [Contact Email]
- **Address:** Lanett Regional Airport, Lanett, Alabama
- **Website:** [flytheblueskies.com](https://flytheblueskies.com)

### Technical Support

- **Developer:** Right Rudder Marketing
- **Repository:** [GitHub Issues](https://github.com/right-rudder/blue-skies-astro/issues)

## 📄 License

This project is proprietary software owned by Blue Skies Above Flight School. All rights reserved.

---

<div align="center">
  <p><strong>Ready to start your aviation journey?</strong></p>
  <p><a href="https://flytheblueskies.com/discovery-flights">Book Your Discovery Flight Today!</a></p>
</div>
