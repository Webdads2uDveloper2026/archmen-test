const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/elevation-design-architectural#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/elevation-design-architectural",
    "name": "Elevation Design & Architectural Projects | Arcmen Chennai",
    "description": "Explore elevation design and architectural projects by Arcmen Chennai. Get modern, functional and stylish architectural designs tailored to your space.",
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
                "name": "Elevation Design Architectural",
                "item": "https://www.arcmeninterior.com/architectural-projects/elevation-design-architectural"
            }
        ]
    }
};
export const metadata = {
    title: "Elevation Design & Architectural Projects | Arcmen Chennai",
    description: "Explore elevation design and architectural projects by Arcmen Chennai. Get modern, functional and stylish architectural designs tailored to your space.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/elevation-design-architectural" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/elevation-design-architectural",
        siteName: 'Arcmen Interior',
        title: "Elevation Design & Architectural Projects | Arcmen Chennai",
        description: "Explore elevation design and architectural projects by Arcmen Chennai. Get modern, functional and stylish architectural designs tailored to your space.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Elevation Design & Architectural Projects | Arcmen Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Elevation Design & Architectural Projects | Arcmen Chennai",
        description: "Explore elevation design and architectural projects by Arcmen Chennai. Get modern, functional and stylish architectural designs tailored to your space.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Elevation Design & Architectural Projects | Arcmen Chennai" }]
    }
};


import ArchitecturalPage from "./ArchitecturalPage";


const Page = () => {
    const architectural = 'elevation-design-architectural';

    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    
        </>);
};

export default Page;