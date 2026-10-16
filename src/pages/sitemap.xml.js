import { nav } from '../data/site.js';
const legalPages = ['/privacy-policy/', '/terms-and-conditions/', '/cookie-policy/'];
export function GET({ site: configured, url }) {
 const site = configured ?? new URL(url.origin);
 const urls = [...nav.map(([href]) => href), ...legalPages].map(path => {
  const priority = path === '/' ? '1.0' : legalPages.includes(path) ? '0.3' : '0.8';
  return `<url><loc>${new URL(path, site)}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
 });
 const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
 return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
