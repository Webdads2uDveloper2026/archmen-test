const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mr-manikandan-family#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mr-manikandan-family",
    "name": "Mr. Manikandan Family Home Interior Design Project in Chennai | Arcmen",
    "description": "Explore the Mr. Manikandan Family interior design project by Arcmen with modern aesthetics, customised furniture, and functional home interior solutions.",
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
                "name": "Mr Manikandan Family",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mr-manikandan-family"
            }
        ]
    }
};
export const metadata = {
    title: "Mr. Manikandan Family Home Interior Design Project in Chennai | Arcmen",
    description: "Explore the Mr. Manikandan Family interior design project by Arcmen with modern aesthetics, customised furniture, and functional home interior solutions.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mr-manikandan-family" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mr-manikandan-family",
        siteName: 'Arcmen Interior',
        title: "Mr. Manikandan Family Home Interior Design Project in Chennai | Arcmen",
        description: "Explore the Mr. Manikandan Family interior design project by Arcmen with modern aesthetics, customised furniture, and functional home interior solutions.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Mr. Manikandan Family Home Interior Design Project in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Mr. Manikandan Family Home Interior Design Project in Chennai | Arcmen",
        description: "Explore the Mr. Manikandan Family interior design project by Arcmen with modern aesthetics, customised furniture, and functional home interior solutions.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Mr. Manikandan Family Home Interior Design Project in Chennai | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-manikandan-family");
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>

        </>);
};

export default Page;
