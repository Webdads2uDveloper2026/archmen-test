import React from 'react';
import Interiorhero from './Interiorhero';
import './interiorstyle.scss';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects",
    "name": "Interior Design Projects in Chennai | Arcmen Interior Chennai",
    "description": "Discover Arcmen Interiors Portfolio of thoughtfully designed spaces. From cozy homes to stylish kitchen. We craft interiors that blend functionality with elegance.",
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
                "name": "Interior Design Projects",
                "item": "https://www.arcmeninterior.com/interior-design-projects"
            }
        ]
    }
};
export const metadata = {
    title: "Interior Design Projects in Chennai | Arcmen Interior Chennai",
    description: "Discover Arcmen Interiors Portfolio of thoughtfully designed spaces. From cozy homes to stylish kitchen. We craft interiors that blend functionality with elegance.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects",
        siteName: 'Arcmen Interior',
        title: "Interior Design Projects in Chennai | Arcmen Interior Chennai",
        description: "Discover Arcmen Interiors Portfolio of thoughtfully designed spaces. From cozy homes to stylish kitchen. We craft interiors that blend functionality with elegance.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Interior Design Projects in Chennai | Arcmen Interior Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior Design Projects in Chennai | Arcmen Interior Chennai",
        description: "Discover Arcmen Interiors Portfolio of thoughtfully designed spaces. From cozy homes to stylish kitchen. We craft interiors that blend functionality with elegance.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Interior Design Projects in Chennai | Arcmen Interior Chennai" }]
    }
};


const page = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <Interiorhero />

        </>);
};

export default page;
