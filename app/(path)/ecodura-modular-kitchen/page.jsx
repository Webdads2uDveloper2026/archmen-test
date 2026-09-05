const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/ecodura-modular-kitchen#webpage",
    "url": "https://www.arcmeninterior.com/ecodura-modular-kitchen",
    "name": "Ecodura Modular Kitchen Designers in Chennai | Arcmen",
    "description": "Discover Ecodura modular kitchen solutions by Arcmen Interior in Chennai, designed with durable finishes, smart storage, and contemporary functionality.",
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
                "name": "Ecodura Modular Kitchen",
                "item": "https://www.arcmeninterior.com/ecodura-modular-kitchen"
            }
        ]
    }
};
export const metadata = {
    title: "Ecodura Modular Kitchen Designers in Chennai | Arcmen",
    description: "Discover Ecodura modular kitchen solutions by Arcmen Interior in Chennai, designed with durable finishes, smart storage, and contemporary functionality.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/ecodura-modular-kitchen" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/ecodura-modular-kitchen",
        siteName: 'Arcmen Interior',
        title: "Ecodura Modular Kitchen Designers in Chennai | Arcmen",
        description: "Discover Ecodura modular kitchen solutions by Arcmen Interior in Chennai, designed with durable finishes, smart storage, and contemporary functionality.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Ecodura Modular Kitchen Designers in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Ecodura Modular Kitchen Designers in Chennai | Arcmen",
        description: "Discover Ecodura modular kitchen solutions by Arcmen Interior in Chennai, designed with durable finishes, smart storage, and contemporary functionality.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Ecodura Modular Kitchen Designers in Chennai | Arcmen" }]
    }
};


import React from 'react'
import Ecoduramodular from './ecoduramodular.jsx'

const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <Ecoduramodular />
      </div>
  
        </>)
}

export default page