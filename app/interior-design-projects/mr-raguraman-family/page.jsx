const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mr-raguraman-family#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mr-raguraman-family",
    "name": "Mr. Raguraman Family Home Interior Design Project in Chennai | Arcmen",
    "description": "Discover Arcmen's interior design for the Mr. Raguraman family home in Chennai, with thoughtful room layouts, quality finishes and contemporary space.",
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
                "name": "Mr Raguraman Family",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mr-raguraman-family"
            }
        ]
    }
};
export const metadata = {
    title: "Mr. Raguraman Family Home Interior Design Project in Chennai | Arcmen",
    description: "Discover Arcmen's interior design for the Mr. Raguraman family home in Chennai, with thoughtful room layouts, quality finishes and contemporary space.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mr-raguraman-family" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mr-raguraman-family",
        siteName: 'Arcmen Interior',
        title: "Mr. Raguraman Family Home Interior Design Project in Chennai | Arcmen",
        description: "Discover Arcmen's interior design for the Mr. Raguraman family home in Chennai, with thoughtful room layouts, quality finishes and contemporary space.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Mr. Raguraman Family Home Interior Design Project in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Mr. Raguraman Family Home Interior Design Project in Chennai | Arcmen",
        description: "Discover Arcmen's interior design for the Mr. Raguraman family home in Chennai, with thoughtful room layouts, quality finishes and contemporary space.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Mr. Raguraman Family Home Interior Design Project in Chennai | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-raguraman-family");
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>

        </>);
};

export default Page;
