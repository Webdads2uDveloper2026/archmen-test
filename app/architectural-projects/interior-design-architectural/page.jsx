import ArchitecturalPage from './ArchitecturalPage';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/interior-design-architectural#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/interior-design-architectural",
    "name": "Interior Design Architectural Project in Chennai | Arcmen",
    "description": "Explore Arcmen's interior design architectural project featuring modern layouts, elegant interiors, functional planning, and premium design solutions.",
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
                "name": "Interior Design Architectural",
                "item": "https://www.arcmeninterior.com/architectural-projects/interior-design-architectural"
            }
        ]
    }
};
export const metadata = {
    title: "Interior Design Architectural Project in Chennai | Arcmen",
    description: "Explore Arcmen's interior design architectural project featuring modern layouts, elegant interiors, functional planning, and premium design solutions.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/interior-design-architectural" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/interior-design-architectural",
        siteName: 'Arcmen Interior',
        title: "Interior Design Architectural Project in Chennai | Arcmen",
        description: "Explore Arcmen's interior design architectural project featuring modern layouts, elegant interiors, functional planning, and premium design solutions.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Interior Design Architectural Project in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior Design Architectural Project in Chennai | Arcmen",
        description: "Explore Arcmen's interior design architectural project featuring modern layouts, elegant interiors, functional planning, and premium design solutions.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Interior Design Architectural Project in Chennai | Arcmen" }]
    }
};


const Page = () => {
    const architectural = 'interior-design-architectural';
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    
        </>);
};

export default Page;
