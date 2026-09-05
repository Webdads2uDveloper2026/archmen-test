const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mr-raja-family#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mr-raja-family",
    "name": "Home Interior Design for Mr. Raja Family | Arcmen Chennai",
    "description": "Explore Arcmen's modern interior design for the Mr. Raja family home in Chennai, featuring smart storage, elegant finishes & functional living spaces.",
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
                "name": "Mr Raja Family",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mr-raja-family"
            }
        ]
    }
};
export const metadata = {
    title: "Home Interior Design for Mr. Raja Family | Arcmen Chennai",
    description: "Explore Arcmen's modern interior design for the Mr. Raja family home in Chennai, featuring smart storage, elegant finishes & functional living spaces.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mr-raja-family" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mr-raja-family",
        siteName: 'Arcmen Interior',
        title: "Home Interior Design for Mr. Raja Family | Arcmen Chennai",
        description: "Explore Arcmen's modern interior design for the Mr. Raja family home in Chennai, featuring smart storage, elegant finishes & functional living spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Home Interior Design for Mr. Raja Family | Arcmen Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Home Interior Design for Mr. Raja Family | Arcmen Chennai",
        description: "Explore Arcmen's modern interior design for the Mr. Raja family home in Chennai, featuring smart storage, elegant finishes & functional living spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Home Interior Design for Mr. Raja Family | Arcmen Chennai" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-raja-family");
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>

        </>);
};

export default Page;