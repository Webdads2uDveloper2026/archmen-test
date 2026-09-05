const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mr-dhanasekar-family#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mr-dhanasekar-family",
    "name": "Mr. Dhanasekar Family Home Interior Design Project in Chennai | Arcmen",
    "description": "Discover Arcmen's interior design for the Mr. Dhanasekar family home in Chennai, featuring stylish décor, modular storage and practical living spaces.",
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
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Mr. Dhanasekar Family",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mr-dhanasekar-family"
            }
        ]
    }
};
export const metadata = {
    title: "Mr. Dhanasekar Family Home Interior Design Project in Chennai | Arcmen",
    description: "Discover Arcmen's interior design for the Mr. Dhanasekar family home in Chennai, featuring stylish décor, modular storage and practical living spaces.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mr-dhanasekar-family" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mr-dhanasekar-family",
        siteName: 'Arcmen Interior',
        title: "Mr. Dhanasekar Family Home Interior Design Project in Chennai | Arcmen",
        description: "Discover Arcmen's interior design for the Mr. Dhanasekar family home in Chennai, featuring stylish décor, modular storage and practical living spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Mr. Dhanasekar Family Home Interior Design Project in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Mr. Dhanasekar Family Home Interior Design Project in Chennai | Arcmen",
        description: "Discover Arcmen's interior design for the Mr. Dhanasekar family home in Chennai, featuring stylish décor, modular storage and practical living spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Mr. Dhanasekar Family Home Interior Design Project in Chennai | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-dhanasekar-family");
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>

        </>);
};

export default Page;
