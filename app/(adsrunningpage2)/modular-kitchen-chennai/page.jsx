const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/modular-kitchen-chennai#webpage",
    "url": "https://www.arcmeninterior.com/modular-kitchen-chennai",
    "name": "Best Modular Kitchen Chennai | Custom Kitchen Desigers",
    "description": "Transform your cooking space with modular kitchen Chennai solutions. We create customized, space-saving kitchens with modern designs and expert installation.",
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
    title: "Best Modular Kitchen Chennai | Custom Kitchen Desigers",
    description: "Transform your cooking space with modular kitchen Chennai solutions. We create customized, space-saving kitchens with modern designs and expert installation.",
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
        title: "Modular Kitchen Designers in Chennai | Arcmen Interior",
        description: "Explore customized modular kitchen designs in Chennai with premium finishes, smart storage solutions, and expert installation by Arcmen Interior.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg",
            width: 1200,
            height: 630,
            alt: "Modular Kitchen Designers in Chennai - Arcmen Interior"
        }],
        locale: 'en_IN'
    },
    twitter: {
    card: 'summary_large_image',
    title: "Modular Kitchen Designers in Chennai | Arcmen Interior",
    description:
        "Explore customized modular kitchen designs in Chennai with premium finishes, smart storage solutions, and expert installation by Arcmen Interior.",
    images: [
        {
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg",
            alt: "Modular Kitchen Designers in Chennai - Arcmen Interior"
        }
    ]
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