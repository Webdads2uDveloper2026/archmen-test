const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mrs-mohan#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mrs-mohan",
    "name": "Mrs. Mohan Home Interior Design Project in Chennai | Arcmen",
    "description": "View Arcmen's interior design for Mrs. Mohan's home in Chennai, featuring custom interiors, elegant finishes & smart space planning for modern living.",
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
                "name": "Mrs Mohan",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mrs-mohan"
            }
        ]
    }
};
export const metadata = {
    title: "Mrs. Mohan Home Interior Design Project in Chennai | Arcmen",
    description: "View Arcmen's interior design for Mrs. Mohan's home in Chennai, featuring custom interiors, elegant finishes & smart space planning for modern living.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mrs-mohan" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mrs-mohan",
        siteName: 'Arcmen Interior',
        title: "Mrs. Mohan Home Interior Design Project in Chennai | Arcmen",
        description: "View Arcmen's interior design for Mrs. Mohan's home in Chennai, featuring custom interiors, elegant finishes & smart space planning for modern living.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Mrs. Mohan Home Interior Design Project in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Mrs. Mohan Home Interior Design Project in Chennai | Arcmen",
        description: "View Arcmen's interior design for Mrs. Mohan's home in Chennai, featuring custom interiors, elegant finishes & smart space planning for modern living.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Mrs. Mohan Home Interior Design Project in Chennai | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mrs-mohan");
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>

        </>);
};

export default Page;
