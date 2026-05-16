---
// Sitemap for static pages
import { getCollection } from 'astro:content';

const pages = [
  { url: '/', lastmod: new Date().toISOString().split('T')[0] },
  { url: '/katalog', lastmod: new Date().toISOString().split('T')[0] },
  { url: '/direktori', lastmod: new Date().toISOString().split('T')[0] },
];

// Generate sitemap dynamically
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>https://karyogit.id${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`).join('')}
</urlset>`;
---

{sitemap}
