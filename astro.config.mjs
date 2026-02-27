// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://islamichubb.org',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ar: 'ar-SA',
        },
      },
    }),
  ],
  build: {
    format: 'directory',
    assets: 'assets',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});
