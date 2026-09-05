const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mr-santhosh-family#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mr-santhosh-family",
    "name": "Mr. Santhosh Family Home Interior Design Project in Chennai | Arcmen",
    "description": "Discover the Mr. Santhosh Family home interior project by Arcmen with contemporary designs, premium materials and customised interiors for every room.",
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
                "name": "Mr Santhosh Family",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mr-santhosh-family"
            }
        ]
    }
};
export const metadata = {
    title: "Mr. Santhosh Family Home Interior Design Project in Chennai | Arcmen",
    description: "Discover the Mr. Santhosh Family home interior project by Arcmen with contemporary designs, premium materials and customised interiors for every room.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mr-santhosh-family" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mr-santhosh-family",
        siteName: 'Arcmen Interior',
        title: "Mr. Santhosh Family Home Interior Design Project in Chennai | Arcmen",
        description: "Discover the Mr. Santhosh Family home interior project by Arcmen with contemporary designs, premium materials and customised interiors for every room.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Mr. Santhosh Family Home Interior Design Project in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Mr. Santhosh Family Home Interior Design Project in Chennai | Arcmen",
        description: "Discover the Mr. Santhosh Family home interior project by Arcmen with contemporary designs, premium materials and customised interiors for every room.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Mr. Santhosh Family Home Interior Design Project in Chennai | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-santhosh-family");
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>

        </>);
};

export default Page;
