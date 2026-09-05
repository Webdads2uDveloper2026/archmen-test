const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mr-arun-dev#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mr-arun-dev",
    "name": "Individual Duplex House Interior Design in Anna Nagar | Arcmen",
    "description": "View Arcmen's individual duplex house interior projects in Anna Nagar, showcasing stylish interiors, custom furniture & contemporary design solutions.",
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
                "name": "Mr Arun Dev",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mr-arun-dev"
            }
        ]
    }
};
export const metadata = {
    title: "Individual Duplex House Interior Design in Anna Nagar | Arcmen",
    description: "View Arcmen's individual duplex house interior projects in Anna Nagar, showcasing stylish interiors, custom furniture & contemporary design solutions.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mr-arun-dev" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mr-arun-dev",
        siteName: 'Arcmen Interior',
        title: "Individual Duplex House Interior Design in Anna Nagar | Arcmen",
        description: "View Arcmen's individual duplex house interior projects in Anna Nagar, showcasing stylish interiors, custom furniture & contemporary design solutions.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Individual Duplex House Interior Design in Anna Nagar | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Individual Duplex House Interior Design in Anna Nagar | Arcmen",
        description: "View Arcmen's individual duplex house interior projects in Anna Nagar, showcasing stylish interiors, custom furniture & contemporary design solutions.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Individual Duplex House Interior Design in Anna Nagar | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';
import { notFound } from 'next/navigation';



const Page = async () => {

    const project = interiorProjects.find((project) => project.titleUrl === "mr-arun-dev");

    if (!project) {
        notFound();
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>

        </>);
};

export default Page;
