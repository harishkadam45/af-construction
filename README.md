# AF Construction

Astro + React + Tailwind CSS v4 + GSAP. Run `npm install`, then `npm run dev`. Production: `npm run build`.

Business details: supplied signage and https://www.yelp.com/biz/af-construction-los-angeles-4. Instagram is linked at https://www.instagram.com/alex_af_construction/ but was not accessible for content research. Service categories use the readable signage text, plus cabinetry from Yelp. The hero and About visuals are real AF Construction photos from Instagram (kitchen and Alex on a new build). No unverified license number or certification is published.

The inquiry form prepares a local summary and links to Yelp. It does not submit, store, or email personal details. Connect a form backend before replacing this behavior with direct inquiries.

Animation respects reduced motion.; scroll reveals use GSAP ScrollTrigger. Tailwind is installed through its Vite plugin.

Project photos in `public/images/projects/` are cover frames from Reels on @alex_af_construction (two were cropped to remove text overlays). The "From the job site" section also embeds four of those reels via Instagram's embed iframe. For sharper images, swap in Alex's original photo files using the same filenames.

Pages: `/` (home), `/services/`, `/projects/`, `/about/`, `/contact/`. They share `src/layouts/Layout.astro` (header, footer, scripts); business data, services, photos and reels live in `src/data/site.js`. "Discuss your project" links open `/contact/?service=...` and pre-select that service in the form.

Legal and feeds: `/privacy-policy/`, `/terms-and-conditions/`, `/cookie-policy/`, plus generated `/sitemap.xml`, `/robots.txt` and `/rss.xml` (all linked in the footer). They use the `site` URL in `astro.config.mjs` (currently https://afbuilds.com); change it if the site is hosted on another domain. The legal pages describe how this site actually works (no cookies of its own, local-only form, Instagram embeds) and should be reviewed before launch.

SEO/GEO/AEO: every page has a keyword title, meta description, canonical, Open Graph/Twitter tags, geo tags and JSON-LD (GeneralContractor/LocalBusiness, WebSite, WebPage, BreadcrumbList; FAQPage on /services/). Business facts and FAQs live in `src/data/site.js`. `/llms.txt` gives AI assistants a plain-language summary of the business.
