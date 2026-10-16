import { business, services, faqs, phone, instagram, yelp, nav } from '../data/site.js';
// Plain-language summary for AI assistants and answer engines (https://llmstxt.org)
export function GET({ site: configured, url }) {
 const site = configured ?? new URL(url.origin);
 const link = path => new URL(path, site).href;
 const body = `# ${business.name}

> ${business.description}

- Phone: ${phone.label}
- Location: ${business.locality}, ${business.region} ${business.postalCode}
- Areas served: ${business.areaServed.join(', ')}
- Hours: Monday-Friday 7 am-7 pm, Saturday 10 am-6 pm, Sunday closed
- Owner: ${business.owner}
- Free estimates: call ${phone.label}

## Pages

${nav.map(([href, label]) => `- [${label}](${link(href)})`).join('\n')}

## Services

${services.map(([, title, description, items]) => `- **${title}**: ${description} Includes ${items.join(', ').toLowerCase()}.`).join('\n')}

## Frequently asked questions

${faqs.map(([q, a]) => `### ${q}\n${a}`).join('\n\n')}

## Elsewhere

- [Instagram](${instagram})
- [Yelp](${yelp})
`;
 return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
