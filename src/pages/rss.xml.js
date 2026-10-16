import { services, reels, instagram } from '../data/site.js';
const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function GET({ site: configured, url }) {
 const site = configured ?? new URL(url.origin);
 const items = [
  ...reels.map(([id, title]) => ({ title: `Project video: ${title}`, link: `https://www.instagram.com/reel/${id}/`, description: `${title}, filmed on an AF Construction job site in Los Angeles.` })),
  ...services.map(([, title, description, list]) => ({ title: `Service: ${title}`, link: new URL(`/services/`, site).href, description: `${description} ${list.join(', ')}.` })),
 ];
 const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>AF Construction</title>
<link>${site}</link>
<atom:link href="${new URL('/rss.xml', site)}" rel="self" type="application/rss+xml"/>
<description>Projects and services from AF Construction, Los Angeles. More updates on Instagram: ${instagram}</description>
<language>en-us</language>
${items.map(i => `<item><title>${escape(i.title)}</title><link>${escape(i.link)}</link><guid isPermaLink="false">${escape(i.title)}</guid><description>${escape(i.description)}</description></item>`).join('\n')}
</channel>
</rss>
`;
 return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
