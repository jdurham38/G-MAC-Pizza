const { create } = require('xmlbuilder2');
const { promises: fs } = require('fs');
const path = require('path');

(async () => {
  try {
    const urls = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/about', changefreq: 'weekly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.5 },
      // Add more URLs here
    ];

    const urlElements = urls.map(url => ({
      url: {
        loc: `https://gmacpizzawings.com${url.url}`,
        changefreq: url.changefreq,
        priority: url.priority
      }
    }));

    const sitemapObj = {
      urlset: {
        '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
        url: urlElements
      }
    };

    const xml = create(sitemapObj).end({ prettyPrint: true });
    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    await fs.writeFile(sitemapPath, xml);

    console.log('Sitemap created successfully');
  } catch (error) {
    console.error('Error creating sitemap:', error);
  }
})();
