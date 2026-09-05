import ArchitecturalPage from './ArchitecturalPage';


const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural",
    "name": "Front Duplex House Elevation Design in Ayyampettai | Arcmen",
    "description": "Explore Arcmen s front duplex house elevation project in Ayyampettai featuring stylish facades, modern architecture, and premium exterior designs.",
    "isPartOf": {
        "@id": "https://www.arcmeninterior.com/#website"
    },
    "about": {
        "@id": "https://www.arcmeninterior.com/#organization"
    },
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.arcmeninterior.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Architectural Projects",
                "item": "https://www.arcmeninterior.com/architectural-projects"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Duplex House Elevation Design Front Ayyampettai Architectural",
                "item": "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural"
            }
        ]
    }
};
export const metadata = {
    title: "Front Duplex House Elevation Design in Ayyampettai | Arcmen",
    description: "Explore Arcmen s front duplex house elevation project in Ayyampettai featuring stylish facades, modern architecture, and premium exterior designs.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural",
        siteName: 'Arcmen Interior',
        title: "Front Duplex House Elevation Design in Ayyampettai | Arcmen",
        description: "Explore Arcmen s front duplex house elevation project in Ayyampettai featuring stylish facades, modern architecture, and premium exterior designs.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Front Duplex House Elevation Design in Ayyampettai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Front Duplex House Elevation Design in Ayyampettai | Arcmen",
        description: "Explore Arcmen s front duplex house elevation project in Ayyampettai featuring stylish facades, modern architecture, and premium exterior designs.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Front Duplex House Elevation Design in Ayyampettai | Arcmen" }]
    }
};


const Page = () => {
    const architectural = 'duplex-house-elevation-design-front-ayyampettai-architectural';
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    
        </>);
};

export default Page;
