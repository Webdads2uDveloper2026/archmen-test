const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-projects/mrs-nithya-srinivasan#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-projects/mrs-nithya-srinivasan",
    "name": "3BHK Apartment Interior Design in Adyar, Chennai | Arcmen",
    "description": "Explore a beautifully designed 3BHK apartment interior project in Adyar by Arcmen, featuring modern décor, modular storage, and elegant living spaces.",
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
                "name": "Mrs Nithya Srinivasan",
                "item": "https://www.arcmeninterior.com/interior-design-projects/mrs-nithya-srinivasan"
            }
        ]
    }
};
export const metadata = {
    title: "3BHK Apartment Interior Design in Adyar, Chennai | Arcmen",
    description: "Explore a beautifully designed 3BHK apartment interior project in Adyar by Arcmen, featuring modern décor, modular storage, and elegant living spaces.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-projects/mrs-nithya-srinivasan" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-projects/mrs-nithya-srinivasan",
        siteName: 'Arcmen Interior',
        title: "3BHK Apartment Interior Design in Adyar, Chennai | Arcmen",
        description: "Explore a beautifully designed 3BHK apartment interior project in Adyar by Arcmen, featuring modern décor, modular storage, and elegant living spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "3BHK Apartment Interior Design in Adyar, Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "3BHK Apartment Interior Design in Adyar, Chennai | Arcmen",
        description: "Explore a beautifully designed 3BHK apartment interior project in Adyar by Arcmen, featuring modern décor, modular storage, and elegant living spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "3BHK Apartment Interior Design in Adyar, Chennai | Arcmen" }]
    }
};


import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';
import { notFound } from 'next/navigation';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mrs-nithya-srinivasan");

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
