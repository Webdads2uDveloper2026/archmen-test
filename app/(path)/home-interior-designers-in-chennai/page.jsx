const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/home-interior-designers-in-chennai#webpage",
    "url": "https://www.arcmeninterior.com/home-interior-designers-in-chennai",
    "name": "Best Home Interior Designers in Chennai | Residential Interiors",
    "description": "Transform your living space with Arcmen Interior, expert home interior designers in Chennai specializing in apartments, flats, villas, and modern home interiors.",
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
                "name": "Home Interior Designers In Chennai",
                "item": "https://www.arcmeninterior.com/home-interior-designers-in-chennai"
            }
        ]
    }
};
export const metadata = {
    title: "Best Home Interior Designers in Chennai | Residential Interiors",
    description: "Transform your living space with Arcmen Interior, expert home interior designers in Chennai specializing in apartments, flats, villas, and modern home interiors.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/home-interior-designers-in-chennai" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/home-interior-designers-in-chennai",
        siteName: 'Arcmen Interior',
        title: "Best Home Interior Designers in Chennai | Residential Interiors",
        description: "Transform your living space with Arcmen Interior, expert home interior designers in Chennai specializing in apartments, flats, villas, and modern home interiors.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Best Home Interior Designers in Chennai | Residential Interiors"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Best Home Interior Designers in Chennai | Residential Interiors",
        description: "Transform your living space with Arcmen Interior, expert home interior designers in Chennai specializing in apartments, flats, villas, and modern home interiors.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Best Home Interior Designers in Chennai | Residential Interiors" }]
    }
};


import LeadMain from '@/components/landingsection/LeadMain'
import React from 'react'

export default function Page() {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <LeadMain />
        </div>
    
        </>);
}