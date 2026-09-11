const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architect-interior-in-chennai#webpage",
    "url": "https://www.arcmeninterior.com/architect-interior-in-chennai",
    "name": " Best Interior Architects in Chennai | Arcmen Interiors",
    "description": "Looking for interior architects in Chennai? Arcmen Interior designs functional, elegant residential spaces with customized architectural interior solutions.",
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
                "name": "Architect Interior In Chennai",
                "item": "https://www.arcmeninterior.com/architect-interior-in-chennai"
            }
        ]
    }
};
export const metadata = {
    title: " Best Interior Architects in Chennai | Arcmen Interiors",
    description: "Looking for interior architects in Chennai? Arcmen Interior designs functional, elegant residential spaces with customized architectural interior solutions.",
    keywords: ['Interior Architects in Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architect-interior-in-chennai" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architect-interior-in-chennai",
        siteName: 'Arcmen Interior',
        title: " Best Interior Architects in Chennai | Arcmen Interiors",
        description: "Looking for interior architects in Chennai? Arcmen Interior designs functional, elegant residential spaces with customized architectural interior solutions.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1735204334/arcmen/Architectural/architectural-banner.jpg",
            width: 1200,
            height: 630,
            alt: " Best Interior Architects in Chennai | Arcmen Interiors"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: " Best Interior Architects in Chennai | Arcmen Interiors",
        description: "Looking for interior architects in Chennai? Arcmen Interior designs functional, elegant residential spaces with customized architectural interior solutions.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1735204334/arcmen/Architectural/architectural-banner.jpg", alt: " Best Interior Architects in Chennai | Arcmen Interiors" }]
    }
};


'use Client';
import React from 'react';
import Architectinterior from './ArchitectInterior';

const page = () => {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <Architectinterior />
        </div>
    
        </>);
};

export default page;
