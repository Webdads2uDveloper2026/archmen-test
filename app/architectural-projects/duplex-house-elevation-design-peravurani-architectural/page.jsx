import ArchitecturalPage from './ArchitecturalPage';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-peravurani-architectural#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-peravurani-architectural",
    "name": "Duplex House Elevation Design in Peravurani | Arcmen",
    "description": "Discover Arcmen s duplex house elevation project in Peravurani with elegant exteriors, modern architecture, and thoughtfully designed facades.",
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
                "name": "Duplux House Elevation Design Peravurani Architectural",
                "item": "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-peravurani-architectural"
            }
        ]
    }
};
export const metadata = {
    title: "Duplex House Elevation Design in Peravurani | Arcmen",
    description: "Discover Arcmen s duplex house elevation project in Peravurani with elegant exteriors, modern architecture, and thoughtfully designed facades.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-peravurani-architectural" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/duplex-house-elevation-design-peravurani-architectural",
        siteName: 'Arcmen Interior',
        title: "Duplex House Elevation Design in Peravurani | Arcmen",
        description: "Discover Arcmen s duplex house elevation project in Peravurani with elegant exteriors, modern architecture, and thoughtfully designed facades.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Duplex House Elevation Design in Peravurani | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Duplex House Elevation Design in Peravurani | Arcmen",
        description: "Discover Arcmen s duplex house elevation project in Peravurani with elegant exteriors, modern architecture, and thoughtfully designed facades.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Duplex House Elevation Design in Peravurani | Arcmen" }]
    }
};


const Page = () => {
    const architectural = 'duplex-house-elevation-design-peravurani-architectural';
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    
        </>);
};

export default Page;
