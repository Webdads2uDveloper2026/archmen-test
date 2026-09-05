const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mr-srinath-kanya#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mr-srinath-kanya",
    "name": "Individual House Interior Design in KK Nagar, Chennai | Arcmen",
    "description": "Discover Arcmen's house interior projects in KK Nagar featuring custom interiors, elegant furnishings, smart space planning and premium craftsmanship.",
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
                "name": "Mr Srinath Kanya",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mr-srinath-kanya"
            }
        ]
    }
};
export const metadata = {
    title: "Individual House Interior Design in KK Nagar, Chennai | Arcmen",
    description: "Discover Arcmen's house interior projects in KK Nagar featuring custom interiors, elegant furnishings, smart space planning and premium craftsmanship.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mr-srinath-kanya" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mr-srinath-kanya",
        siteName: 'Arcmen Interior',
        title: "Individual House Interior Design in KK Nagar, Chennai | Arcmen",
        description: "Discover Arcmen's house interior projects in KK Nagar featuring custom interiors, elegant furnishings, smart space planning and premium craftsmanship.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Individual House Interior Design in KK Nagar, Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Individual House Interior Design in KK Nagar, Chennai | Arcmen",
        description: "Discover Arcmen's house interior projects in KK Nagar featuring custom interiors, elegant furnishings, smart space planning and premium craftsmanship.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Individual House Interior Design in KK Nagar, Chennai | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';
import { notFound } from 'next/navigation';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-srinath-kanya");

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
