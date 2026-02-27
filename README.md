# Islamic Hubb Institute Showcase

A production-ready Astro-based website for an Islamic education institute featuring animated components, JSON content pipeline, and comprehensive SEO.

## Features

- **Modern Tech Stack**: Built with Astro, TypeScript, and Tailwind CSS
- **Animated Components**: Smooth scroll animations and interactive elements
- **JSON Content Pipeline**: All content managed through JSON files for easy updates
- **Comprehensive SEO**: Meta tags, Open Graph, structured data, and sitemap
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance Optimized**: Static generation with prefetching and optimizations

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [GSAP](https://greensock.com/gsap/) - Animations (optional)

## Project Structure

```
├── src/
│   ├── components/        # Reusable components
│   │   ├── animations/    # Animation components
│   │   ├── sections/      # Page sections
│   │   ├── SEO.astro      # SEO component
│   │   ├── Header.astro   # Navigation header
│   │   └── Footer.astro   # Site footer
│   ├── content/           # JSON content files
│   │   └── data/          # Courses, instructors, etc.
│   ├── layouts/           # Page layouts
│   ├── pages/             # Site pages
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript types
│   └── utils/             # Helper functions
├── public/                # Static assets
└── astro.config.mjs       # Astro configuration
```

## Content Management

All content is stored in JSON files under `src/content/data/`:

- `institute.json` - Institute information
- `courses.json` - Course listings
- `instructors.json` - Instructor profiles
- `programs.json` - Learning programs
- `events.json` - Upcoming events
- `testimonials.json` - Student testimonials
- `faq.json` - Frequently asked questions
- `navigation.json` - Site navigation
- `seo.json` - SEO metadata
- `hero.json` - Hero section content

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## SEO Features

- Dynamic meta tags for each page
- Open Graph and Twitter Card support
- JSON-LD structured data
- Automatic sitemap generation
- robots.txt configuration
- Canonical URLs

## Customization

### Adding a New Course

1. Edit `src/content/data/courses.json`
2. Add a new course object following the existing schema
3. Create a page at `src/pages/courses/[id].astro` (already handled dynamically)

### Updating Institute Information

1. Edit `src/content/data/institute.json`
2. Changes will reflect across the site automatically

### Styling

Global styles are in `src/styles/global.css`. The site uses:
- Tailwind CSS utility classes
- CSS custom properties for theming
- Islamic green color palette

## License

MIT
