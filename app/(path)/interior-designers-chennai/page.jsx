const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-designers-chennai#webpage",
    "url": "https://www.arcmeninterior.com/interior-designers-chennai",
    "name": "Best Interior designers in chennai | Home interior designer in chennai.",
    "description": "Premium Best interior designer Chennai, Award winner | We Assure 100% Desing & work satisfy | 15yr Warranty, 3500+ Complete Project",
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
                "name": "Interior Designers Chennai",
                "item": "https://www.arcmeninterior.com/interior-designers-chennai"
            }
        ]
    }
};
export const metadata = {
    title: "Interior designers in chennai | Home interior designer in chennai.",
    description: "Premium Best interior designer Chennai, Award winner | We Assure 100% Desing & work satisfy | 15yr Warranty, 3500+ Complete Project",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-designers-chennai" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-designers-chennai",
        siteName: 'Arcmen Interior',
        title: "Interior designers in chennai | Home interior designer in chennai.",
        description: "Premium Best interior designer Chennai, Award winner | We Assure 100% Desing & work satisfy | 15yr Warranty, 3500+ Complete Project",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Best Interior designers in chennai | Home interior designer in chennai."
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior designers in chennai | Home interior designer in chennai.",
        description: "Premium Best interior designer Chennai, Award winner | We Assure 100% Desing & work satisfy | 15yr Warranty, 3500+ Complete Project",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Best Interior designers in chennai | Home interior designer in chennai." }]
    }
};


import LeadMain from '../../../components/landingsection/LeadMain'
import React from 'react'

export default function page() {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <LeadMain/>
        </div>
    
        </>)
}
