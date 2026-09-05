import ArchitecturalPage from './ArchitecturalPage';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/interior-design-valasaravakkam-architectural#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/interior-design-valasaravakkam-architectural",
    "name": "Interior Design Project in Valasaravakkam, Chennai | Arcmen",
    "description": "Discover Arcmen s interior design project in Valasaravakkam with customised layouts, contemporary interiors, and stylish living spaces.",
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
                "name": "Interior Design Valasaravakkam Architectural",
                "item": "https://www.arcmeninterior.com/architectural-projects/interior-design-valasaravakkam-architectural"
            }
        ]
    }
};
export const metadata = {
    title: "Interior Design Project in Valasaravakkam, Chennai | Arcmen",
    description: "Discover Arcmen s interior design project in Valasaravakkam with customised layouts, contemporary interiors, and stylish living spaces.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/interior-design-valasaravakkam-architectural" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/interior-design-valasaravakkam-architectural",
        siteName: 'Arcmen Interior',
        title: "Interior Design Project in Valasaravakkam, Chennai | Arcmen",
        description: "Discover Arcmen s interior design project in Valasaravakkam with customised layouts, contemporary interiors, and stylish living spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Interior Design Project in Valasaravakkam, Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior Design Project in Valasaravakkam, Chennai | Arcmen",
        description: "Discover Arcmen s interior design project in Valasaravakkam with customised layouts, contemporary interiors, and stylish living spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Interior Design Project in Valasaravakkam, Chennai | Arcmen" }]
    }
};


export default function Page() {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <ArchitecturalPage architectural="interior-design-valasaravakkam-architectural" />
    
        </>);
}