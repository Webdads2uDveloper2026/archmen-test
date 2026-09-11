const BASE_URL = 'https://www.arcmeninterior.com';

const urls = [
  // =========================================================
  // CORE / TARGET PAGES — PRIORITY 1.0
  // =========================================================

  '/',
  '/interior-design-chennai',
  '/residential-interior-designers-in-chennai',
  '/modular-kitchen-chennai',
  '/interior-designers-chennai',
  '/home-interior-designers-in-chennai',
  '/architect-interior-in-chennai',
  '/architectural-projects',
  '/interior-design-projects',

  // =========================================================
  // IMPORTANT PAGES — PRIORITY 0.8
  // =========================================================

  '/aboutus',
  '/contact-us',
  '/services/modular-kitchen',
  '/island-kitchen-designer',
  '/luxury-glass-modular-kitchen',
  '/eco-glass-modular-kitchen',
  '/ecodura-modular-kitchen',
  '/g-rich-modular-kitchen',
  '/retro-modular-kitchen',
  '/wood-factory',
  '/how-we-process-works',
  '/faqs',
  '/career',
  '/refer-and-earn',

  // =========================================================
  // ARCHITECTURAL PROJECTS — PRIORITY 0.7
  // =========================================================

  '/architectural-projects/duplex-house-elevation-design-architectural',
  '/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural',
  '/architectural-projects/duplex-house-elevation-design-nolambur-architectural',
  '/architectural-projects/duplex-villa-elevation-design-architectural',
  '/architectural-projects/duplex-house-elevation-design-peravurani-architectural',
  '/architectural-projects/elevation-design-architectural',
  '/architectural-projects/individual-house-interior',
  '/architectural-projects/interior-decorators-role',
  '/architectural-projects/interior-design-architectural',
  '/architectural-projects/interior-design-valasaravakkam-architectural',
  '/architectural-projects/living-room-double-height-interior-design-architectural',
  '/architectural-projects/pool-terrace-design-architectural',
  '/architectural-projects/bedroom-interior-design-architectural',
  '/architectural-projects/house-of-glass-front-elevation-design-architectural',
  '/architectural-projects/villa-landscape-design-architectural',
  '/architectural-projects/row-house-architectural',
  '/architectural-projects/villa-elevation-design-sadik-architectural',

  // =========================================================
  // INTERIOR DESIGN PROJECTS — PRIORITY 0.7
  // =========================================================

  '/interior-design-projects/mr-arun-dev',
  '/interior-design-projects/mr-baskaran-family',
  '/interior-design-projects/mr-dhanasekar-family',
  '/interior-design-projects/mr-harish-family',
  '/interior-design-projects/mr-kandhan-family',
  '/interior-design-projects/mr-manikandan-family',
  '/interior-design-projects/mr-mohan-family',
  '/interior-design-projects/mr-raguraman-family',
  '/interior-design-projects/mr-raja-family',
  '/interior-design-projects/mr-rama-elangovan',
  '/interior-design-projects/mr-santhosh-family',
  '/interior-design-projects/mr-srinath-kanya',
  '/interior-design-projects/mrs-mohan',
  '/interior-design-projects/mrs-nithya-srinivasan',
  '/interior-design-projects/mrs-porchelvi',
  '/interior-design-projects/nbs-vijay-shankar-family',

  // =========================================================
  // BLOG — PRIORITY 0.7
  // =========================================================

  '/blog',
];

export default function sitemap() {
  const lastModified = new Date('2026-09-11T00:00:00.000Z');

  return urls.map((path) => {
    let priority = 0.7;

    // Core / target pages
    const corePages = [
      '/',
      '/interior-design-chennai',
      '/residential-interior-designers-in-chennai',
      '/modular-kitchen-chennai',
      '/interior-designers-chennai',
      '/home-interior-designers-in-chennai',
      '/architect-interior-in-chennai',
      '/architectural-projects',
      '/interior-design-projects',
    ];

    // Important pages
    const importantPages = [
      '/aboutus',
      '/contact-us',
      '/services/modular-kitchen',
      '/island-kitchen-designer',
      '/luxury-glass-modular-kitchen',
      '/eco-glass-modular-kitchen',
      '/ecodura-modular-kitchen',
      '/g-rich-modular-kitchen',
      '/retro-modular-kitchen',
      '/wood-factory',
      '/how-we-process-works',
      '/faqs',
      '/career',
      '/refer-and-earn',
    ];

    if (corePages.includes(path)) {
      priority = 1.0;
    } else if (importantPages.includes(path)) {
      priority = 0.8;
    }

    return {
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority,
    };
  });
}