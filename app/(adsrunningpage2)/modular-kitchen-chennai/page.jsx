const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/modular-kitchen-chennai#webpage",
    "url": "https://www.arcmeninterior.com/modular-kitchen-chennai",
    "name": "Best Modular Kitchen Designers & Interiors in chennai",
    "description": "Bring life to your home with Arcmen Interiors, the best modular kitchen designers in chennai - crafting modern, warm abd soulful kitchen interiors",
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
                "name": "Modular Kitchen Chennai",
                "item": "https://www.arcmeninterior.com/modular-kitchen-chennai"
            }
        ]
    }
};
export const metadata = {
    title: "Best Modular Kitchen Designers & Interiors in chennai",
    description: "Bring life to your home with Arcmen Interiors, the best modular kitchen designers in chennai - crafting modern, warm abd soulful kitchen interiors",
    keywords: ["Kitchen Interior Designers in Chennai",
        "Modular Kitchen Chennai",
        "Modular Kitchen Companies in Chennai",
        "Modular Kitchen Interior Designers in Chennai"],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/modular-kitchen-chennai" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/modular-kitchen-chennai",
        siteName: 'Arcmen Interior',
        title: "Best Modular Kitchen Designers & Interiors in chennai",
        description: "Bring life to your home with Arcmen Interiors, the best modular kitchen designers in chennai - crafting modern, warm abd soulful kitchen interiors",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg",
            width: 1200,
            height: 630,
            alt: "Best Modular Kitchen Designers & Interiors in chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Best Modular Kitchen Designers & Interiors in chennai",
        description: "Bring life to your home with Arcmen Interiors, the best modular kitchen designers in chennai - crafting modern, warm abd soulful kitchen interiors",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg", alt: "Best Modular Kitchen Designers & Interiors in chennai" }]
    }
};


import React from 'react'

import ModularHero from './ModularHero';
import "./modularlanding.scss";

const page = () => {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <>
                <ModularHero />
            </>

        </>)
}

export default page