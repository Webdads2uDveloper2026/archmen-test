import ArchitecturalProjectClient from './ArchitecturalProjectClient';

const projects = {
    'elevation-design-architectural': {
        title: 'Elevation Design & Architectural Project | Arcmen Chennai',
        description: "Explore Arcmen's elevation design project in Thirumullaivoyal, featuring modern architectural planning, stylish exteriors, and elegant facade detailing."
    },
    'interior-design-architectural': {
        title: 'Interior Design Project in Peravurani, Thanjavur | Arcmen',
        description: "Explore Arcmen's interior design project in Peravurani, Thanjavur, featuring functional layouts, contemporary interiors, and premium design solutions."
    },
    'interior-design-valasaravakkam-architectural': {
        title: 'Interior Design Project in Valasaravakkam, Chennai | Arcmen',
        description: "Discover Arcmen's interior design project in Valasaravakkam with customized layouts, contemporary interiors, and stylish living spaces."
    },
    'living-room-double-height-interior-design-architectural': {
        title: 'Double-Height Living Room Interior Design | Arcmen',
        description: "View Arcmen's double-height living room project in Mayiladuthurai, showcasing spacious interiors, premium finishes, modern aesthetics, and elegant architectural details."
    },
    'duplex-house-elevation-design-architectural': {
        title: 'Duplex House Elevation Design in Peravurani | Arcmen',
        description: "Explore Arcmen's duplex house elevation project in Peravurani, featuring modern architecture, stylish facades, and contemporary exterior detailing."
    },
    'duplux-house-elevation-design-peravurani-architectural': {
        title: 'Duplex House Elevation Design in Kumbakonam | Arcmen',
        description: "Discover Arcmen's duplex house elevation project in Kumbakonam with elegant exteriors, modern architecture, and thoughtfully designed facades."
    },
    'pool-terrace-design-architectural': {
        title: 'Pool Terrace Design Project in Chennai | Arcmen',
        description: "Explore Arcmen's pool terrace design project in Besant Nagar, Chennai, featuring luxurious outdoor spaces, stylish landscaping, functional layouts, and modern architecture."
    },
    'bedroom-interior-design-architectural': {
        title: 'Bedroom Interior Design Project | Arcmen Chennai',
        description: "View Arcmen's bedroom interior design project featuring elegant decor, customized furniture, smart storage solutions, and contemporary design elements."
    },
    'duplex-house-elevation-design-nolambur-architectural': {
        title: 'Duplex House Elevation Design in Nolambur | Arcmen',
        description: "Discover Arcmen's duplex house elevation project in Nolambur, Chennai, featuring premium architecture, modern exteriors, and elegant facade concepts."
    },
    'duplex-villa-elevation-design-architectural': {
        title: 'Duplex Villa Elevation Design Project | Arcmen Chennai',
        description: "Explore Arcmen's duplex villa elevation design featuring premium architectural concepts, contemporary exteriors, and visually striking facade designs."
    },
    'house-of-glass-front-elevation-design-architectural': {
        title: 'Glass Front House Elevation Design Project | Arcmen',
        description: "Discover Arcmen's glass front house elevation design featuring contemporary architecture, elegant glass facades, and modern exterior styling."
    },
    'villa-landscape-design-architectural': {
        title: 'Villa Landscape Design Project in Chennai | Arcmen',
        description: "Explore Arcmen's villa landscape design project featuring thoughtfully planned outdoor spaces, greenery, hardscaping, and elegant residential landscaping."
    },
    'row-house-architectural': {
        title: 'Row House Architectural Design Project | Arcmen Chennai',
        description: "View Arcmen's row house architectural project featuring smart space planning, contemporary elevations, and modern residential design concepts."
    },
    'villa-elevation-design-sadik-architectural': {
        title: 'Villa Elevation Design Project – Sadik Residence | Arcmen',
        description: "Discover Arcmen's villa elevation design for the Sadik residence, showcasing elegant architecture, premium facades, and modern exterior detailing."
    },
    'duplex-house-elevation-design-front-ayyampettai-architectural': {
        title: 'Front Duplex House Elevation Design in Ayyampettai | Arcmen',
        description: "Explore Arcmen's front duplex house elevation project in Ayyampettai, featuring stylish facades, modern architecture, and premium exterior design."
    }
};

export async function generateMetadata({ params }) {
    const { architectural } = await params;
    const project = projects[architectural];

    if (!project) {
        return {
            title: 'Architectural Design Projects | Arcmen Chennai',
            description: 'Explore architectural and interior design projects by Arcmen Interior in Chennai and across Tamil Nadu.',
            alternates: { canonical: `/architectural-projects/${architectural}` }
        };
    }

    return {
        title: project.title,
        description: project.description,
        keywords: [
            'Architectural design Chennai',
            'Elevation design Chennai',
            'Residential architecture Chennai',
            'Interior designers in Chennai',
            'Arcmen Interior'
        ],
        alternates: {
            canonical: `/architectural-projects/${architectural}`
        },
        openGraph: {
            title: project.title,
            description: project.description,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description
        }
    };
}

export default function Page() {
    return <ArchitecturalProjectClient />;
}
