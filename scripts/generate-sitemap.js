const fs = require('fs');
const path = require('path');

// --- Konfigurasi ---
const baseUrl = 'https://abbeey-labs.vercel.app';
const foldersToScan = [
  '.',         // root folder
  'posts',
  'tags'
];

// --- Generate Sitemap ---
let urls = '';

foldersToScan.forEach(folder => {
  const folderPath = path.join(__dirname, '..', folder);
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(file => {
      if (path.extname(file) === '.html') {
        const fileUrl = folder === '.'
          ? `${baseUrl}/${file}`
          : `${baseUrl}/${folder}/${file}`;

        urls += `
  <url>
    <loc>${fileUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.80</priority>
  </url>`;
      }
    });
  }
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), sitemapXml, 'utf8');

console.log('✅ sitemap.xml berhasil digenerate!');
