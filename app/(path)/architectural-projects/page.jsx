import React from 'react';
import Architechhero from './Architechhero';
import './architechstyle.scss';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects",
    "name": "Architectural Design Projects | Arcmen Interior Chennai",
    "description": "Experience architectural design projects by Arcmen Interior Chennai, where design excellence and attention to detail create inspiring, timeless spaces.",
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
                "name": "Architectural Projects",
                "item": "https://www.arcmeninterior.com/architectural-projects"
            }
        ]
    }
};
export const metadata = {
    title: "Architectural Design Projects | Arcmen Interior Chennai",
    description: "Experience architectural design projects by Arcmen Interior Chennai, where design excellence and attention to detail create inspiring, timeless spaces.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects",
        siteName: 'Arcmen Interior',
        title: "Architectural Design Projects | Arcmen Interior Chennai",
        description: "Experience architectural design projects by Arcmen Interior Chennai, where design excellence and attention to detail create inspiring, timeless spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Architectural Design Projects | Arcmen Interior Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Architectural Design Projects | Arcmen Interior Chennai",
        description: "Experience architectural design projects by Arcmen Interior Chennai, where design excellence and attention to detail create inspiring, timeless spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Architectural Design Projects | Arcmen Interior Chennai" }]
    }
};


const page = () => {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <Architechhero />
        </div>
    
        </>);
};

export default page;
