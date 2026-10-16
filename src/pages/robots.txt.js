export function GET({ site: configured, url }) {
 const site = configured ?? new URL(url.origin);
 const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`;
 return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
