const BASE_URL = 'https://www.arcmeninterior.com';

const urls = [
  // Main pages
  '/interior-design-chennai',
  '/modular-kitchen-chennai',
  '/aboutus',
  '/architect-interior-in-chennai',
  '/architectural-projects',
  '/blog',
  '/career',
  '/contact-us',
  '/eco-glass-modular-kitchen',
  '/ecodura-modular-kitchen',
  '/faqs',
  '/g-rich-modular-kitchen',
  '/home-interior-designers-in-chennai',
  '/how-we-process-works',
  '/interior-design-projects',
  '/interior-designers-chennai',
  '/island-kitchen-designer',
  '/luxury-glass-modular-kitchen',
  '/refer-and-earn',
  '/residential-interior-designers-in-chennai',
  '/retro-modular-kitchen',
  '/services/modular-kitchen',
  '/wood-factory',

  // Architectural projects
  '/architectural-projects/duplex-house-elevation-design-architectural',
  '/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural',
  '/architectural-projects/duplex-house-elevation-design-nolambur-architectural',
  '/architectural-projects/duplex-villa-elevation-design-architectural',
  '/architectural-projects/duplux-house-elevation-design-peravurani-architectural',
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

  // Interior design projects - migrated canonical URLs
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

  // Homepage
  '/',
];

export default function sitemap() {
  const lastModified = new Date('2026-09-04T06:11:10.558Z');

  return urls.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/contact-us' ? 0.8 : 0.7,
  }));
}