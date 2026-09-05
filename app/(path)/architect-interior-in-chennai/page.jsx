const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architect-interior-in-chennai#webpage",
    "url": "https://www.arcmeninterior.com/architect-interior-in-chennai",
    "name": "Architect Interior in Chennai | Arcmen Interior",
    "description": "Professional architectural and interior design services in Chennai for homes, villas, and residential spaces.",
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
    title: "Architect Interior in Chennai | Arcmen Interior",
    description: "Professional architectural and interior design services in Chennai for homes, villas, and residential spaces.",
    keywords: ['Interior Architects in Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architect-interior-in-chennai" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architect-interior-in-chennai",
        siteName: 'Arcmen Interior',
        title: "Architect Interior in Chennai | Arcmen Interior",
        description: "Professional architectural and interior design services in Chennai for homes, villas, and residential spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1735276944/arcmen/Gallery/architectural-projects/row-house.jpg",
            width: 1200,
            height: 630,
            alt: "Architect Interior in Chennai | Arcmen Interior"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Architect Interior in Chennai | Arcmen Interior",
        description: "Professional architectural and interior design services in Chennai for homes, villas, and residential spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1735276944/arcmen/Gallery/architectural-projects/row-house.jpg", alt: "Architect Interior in Chennai | Arcmen Interior" }]
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
