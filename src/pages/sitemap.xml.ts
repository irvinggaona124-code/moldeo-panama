import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://irvinggaona124-code.github.io/moldeo-panama';
  const today = new Date().toISOString().split('T')[0];

  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/vacantes', priority: '0.9', changefreq: 'daily' },
    { url: '/talento-moldeable', priority: '0.9', changefreq: 'daily' },
    { url: '/calculadora-fiscal', priority: '0.8', changefreq: 'weekly' },
    { url: '/test-vocacional', priority: '0.8', changefreq: 'weekly' },
    { url: '/kit-practica', priority: '0.8', changefreq: 'weekly' },
    { url: '/publicar', priority: '0.8', changefreq: 'weekly' },
    { url: '/registro-estudiante', priority: '0.8', changefreq: 'weekly' },
    { url: '/empresas', priority: '0.8', changefreq: 'weekly' },
    { url: '/legal', priority: '0.5', changefreq: 'monthly' },
    { url: '/arco', priority: '0.5', changefreq: 'monthly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${siteUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
