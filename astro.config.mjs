import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// Live domain: used for sitemap.xml, robots.txt, rss.xml and canonical links. Change it if the site is hosted elsewhere.
export default defineConfig({ site: 'https://afbuilds.com', trailingSlash: 'ignore', integrations: [react()], vite: { plugins: [tailwindcss()] } });
