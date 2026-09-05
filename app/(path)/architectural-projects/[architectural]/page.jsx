import ArchitecturalProjectClient from './ArchitecturalProjectClient';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arcmeninterior.com';
const OG_IMAGE = "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp";

const projects = {
    'elevation-design-architectural': {
        title: 'Elevation Design & Architectural Project | Arcmen Chennai',
        description: "Explore elevation design and architectural projects by Arcmen Chennai. Get modern, functional and stylish architectural designs tailored to your space."
    },
    'interior-design-architectural': {
        title: 'Interior Design Architectural Project in Chennai | Arcmen',
        description: "Explore Arcmen's interior design architectural project featuring modern layouts, elegant interiors, functional planning, and premium design solutions."
    },
    'interior-design-valasaravakkam-architectural': {
        title: 'Interior Design Project in Valasaravakkam, Chennai | Arcmen',
        description: "Discover Arcmen's interior design project in Valasaravakkam with customized layouts, contemporary interiors, and stylish living spaces."
    },
    'living-room-double-height-interior-design-architectural': {
        title: 'Living Room Double Height Interior Design | Arcmen',
        description: "View Arcmen s double-height living room design showcasing spacious interiors, premium finishes, modern aesthetics, and elegant architectural details."
    },
    'duplex-house-elevation-design-architectural': {
        title: 'Duplex House Elevation Design Project | Arcmen Chennai',
        description: "Explore Arcmen s duplex house elevation design featuring modern architecture, stylish façades, functional planning, and contemporary exterior finishes."
    },
    'duplex-house-elevation-design-peravurani-architectural': {
        title: 'Duplex House Elevation Design in Peravurani | Arcmen',
        description: "Discover Arcmen s duplex house elevation project in Peravurani with elegant exteriors, modern architecture, and thoughtfully designed facades."
    },
    'pool-terrace-design-architectural': {
        title: 'Pool Terrace Design Project in Chennai | Arcmen',
        description: "Explore Arcmen's pool terrace design project featuring luxurious outdoor spaces, stylish landscaping, finest functional layouts & modern architecture."
    },
    'bedroom-interior-design-architectural': {
        title: 'Bedroom Interior Design Project | Arcmen Chennai',
        description: "View Arcmen's bedroom interior design project featuring elegant decor, customised furniture, smart storage solutions and contemporary design elements."
    },
    'duplex-house-elevation-design-nolambur-architectural': {
        title: 'Duplex House Elevation Design in Nolambur | Arcmen',
        description: "Discover Arcmen s duplex house elevation design in Nolambur featuring premium architecture, modern exteriors, and elegant façade concepts."
    },
    'duplex-villa-elevation-design-architectural': {
        title: 'Duplex Villa Elevation Design Project | Arcmen Chennai',
        description: "Explore Arcmen s duplex villa elevation design with premium architectural concepts, contemporary exteriors, and visually striking façade designs."
    },
    'house-of-glass-front-elevation-design-architectural': {
        title: 'Glass Front House Elevation Design Project | Arcmen',
        description: "Premium Best interior designer Chennai, Award winner | We Assure 100% Desing & work satisfy | 15yr Warranty, 3500+ Complete Project"
    },
    'villa-landscape-design-architectural': {
        title: 'Villa Landscape Design Project in Chennai | Arcmen',
        description: "Explore Arcmen's villa landscape design featuring thoughtfully planned outdoor spaces, lush greenery, hardscaping and elegant residential landscaping."
    },
    'row-house-architectural': {
        title: 'Row House Architectural Design Project | Arcmen Chennai',
        description: "View Arcmen's premier row house architectural project featuring smart space planning, contemporary elevations, and modern residential design concepts."
    },
    'villa-elevation-design-sadik-architectural': {
        title: 'Villa Elevation Design Project – Sadik Residence | Arcmen',
        description: "Discover Arcmen's villa elevation design for the Sadik residence, showcasing stunning architecture, luxurious facades, and stylish exterior detailing."
    },
    'duplex-house-elevation-design-front-ayyampettai-architectural': {
        title: 'Front Duplex House Elevation Design in Ayyampettai | Arcmen',
        description: "Explore Arcmen s front duplex house elevation project in Ayyampettai featuring stylish facades, modern architecture, and premium exterior designs."
    }
};

export async function generateMetadata({ params }) {
    const { architectural } = await params;
    const project = projects[architectural];
    const title = project?.title || 'Architectural Design Projects | Arcmen Chennai';
    const description = project?.description || 'Explore architectural and interior design projects by Arcmen Interior in Chennai and across Tamil Nadu.';
    const canonical = `${SITE_URL}/architectural-projects/${architectural}`;
    return {
        title,
        description,
        keywords: ['Architectural design Chennai', 'Elevation design Chennai', 'Residential architecture Chennai', 'Interior designers in Chennai', 'Arcmen Interior'],
        robots: 'index,follow',
        alternates: { canonical },
        openGraph: {
            type: 'website', url: canonical, siteName: 'Arcmen Interior', title, description,
            images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }], locale: 'en_IN'
        },
        twitter: { card: 'summary_large_image', title, description, images: [{ url: OG_IMAGE, alt: title }] }
    };
}

export default async function Page({ params }) {
    const { architectural } = await params;
    const project = projects[architectural];
    const canonical = `${SITE_URL}/architectural-projects/${architectural}`;
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        'url': canonical,
        'name': project?.title || 'Architectural Design Projects | Arcmen Chennai',
        'description': project?.description || 'Explore architectural and interior design projects by Arcmen Interior in Chennai and across Tamil Nadu.',
        'isPartOf': { '@id': `${SITE_URL}/#website` },
        'about': { '@id': `${SITE_URL}/#organization` },
        'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
                { '@type': 'ListItem', 'position': 2, 'name': 'Architectural Projects', 'item': `${SITE_URL}/architectural-projects` },
                { '@type': 'ListItem', 'position': 3, 'name': project?.title || architectural, 'item': canonical }
            ]
        }
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
            <ArchitecturalProjectClient />
        </>
    );
}
