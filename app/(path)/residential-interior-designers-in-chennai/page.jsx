const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/residential-interior-designers-in-chennai#webpage",
    "url": "https://www.arcmeninterior.com/residential-interior-designers-in-chennai",
    "name": "Residential Interior Designers in Chennai | Arcmen Interior",
    "description": "Transform your home with customized residential interior design services in Chennai. Arcmen Interior delivers stylish and functional living spaces.",
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
                "name": "Residential Interior Designers In Chennai",
                "item": "https://www.arcmeninterior.com/residential-interior-designers-in-chennai"
            }
        ]
    }
};
export const metadata = {
    title: "Residential Interior Designers in Chennai | Arcmen Interior",
    description: "Transform your home with customized residential interior design services in Chennai. Arcmen Interior delivers stylish and functional living spaces.",
    keywords: ["Home Interior Designers in Chennai",
        "Best Home Interior Designers in Chennai",
        "Residential Interior Designers in Chennai",
        "Home Interior Decorators in Chennai",
        "Interior Designers in Chennai for Flats",
        "Apartment Interior Designers in Chennai"],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/residential-interior-designers-in-chennai" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/residential-interior-designers-in-chennai",
        siteName: 'Arcmen Interior',
        title: "Residential Interior Designers in Chennai | Arcmen Interior",
        description: "Transform your home with customized residential interior design services in Chennai. Arcmen Interior delivers stylish and functional living spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740396244/arcmen-interior-main-banner1_xucspf.jpg",
            width: 1200,
            height: 630,
            alt: "Residential Interior Designers in Chennai | Arcmen Interior"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Residential Interior Designers in Chennai | Arcmen Interior",
        description: "Transform your home with customized residential interior design services in Chennai. Arcmen Interior delivers stylish and functional living spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740396244/arcmen-interior-main-banner1_xucspf.jpg", alt: "Residential Interior Designers in Chennai | Arcmen Interior" }]
    }
};


import React from 'react';
import './Interiorstyle.scss';
import InteriorHero from './InteriorHero';

const page = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorHero />
            </div>

        </>)
}
export default page;
