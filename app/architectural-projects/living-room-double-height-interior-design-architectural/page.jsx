import ArchitecturalPage from './ArchitecturalPage';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/living-room-double-height-interior-design-architectural#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/living-room-double-height-interior-design-architectural",
    "name": "Living Room Double Height Interior Design | Arcmen",
    "description": "View Arcmen s double-height living room design showcasing spacious interiors, premium finishes, modern aesthetics, and elegant architectural details.",
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
                "name": "Living Room Double Height Interior Design Architectural",
                "item": "https://www.arcmeninterior.com/architectural-projects/living-room-double-height-interior-design-architectural"
            }
        ]
    }
};
export const metadata = {
    title: "Living Room Double Height Interior Design | Arcmen",
    description: "View Arcmen s double-height living room design showcasing spacious interiors, premium finishes, modern aesthetics, and elegant architectural details.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/living-room-double-height-interior-design-architectural" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/living-room-double-height-interior-design-architectural",
        siteName: 'Arcmen Interior',
        title: "Living Room Double Height Interior Design | Arcmen",
        description: "View Arcmen s double-height living room design showcasing spacious interiors, premium finishes, modern aesthetics, and elegant architectural details.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Living Room Double Height Interior Design | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Living Room Double Height Interior Design | Arcmen",
        description: "View Arcmen s double-height living room design showcasing spacious interiors, premium finishes, modern aesthetics, and elegant architectural details.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Living Room Double Height Interior Design | Arcmen" }]
    }
};


export default function Page() {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <ArchitecturalPage
            architectural="living-room-double-height-interior-design-architectural"
        />
    
        </>);
}