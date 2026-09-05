const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/retro-modular-kitchen#webpage",
    "url": "https://www.arcmeninterior.com/retro-modular-kitchen",
    "name": "Retro Modular Kitchen Designers in Chennai | Arcmen",
    "description": "Explore retro-inspired modular kitchen designs by Arcmen Interior in Chennai, blending classic character with modern functionality and smart storage.",
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
                "name": "Retro Modular Kitchen",
                "item": "https://www.arcmeninterior.com/retro-modular-kitchen"
            }
        ]
    }
};
export const metadata = {
    title: "Retro Modular Kitchen Designers in Chennai | Arcmen",
    description: "Explore retro-inspired modular kitchen designs by Arcmen Interior in Chennai, blending classic character with modern functionality and smart storage.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/retro-modular-kitchen" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/retro-modular-kitchen",
        siteName: 'Arcmen Interior',
        title: "Retro Modular Kitchen Designers in Chennai | Arcmen",
        description: "Explore retro-inspired modular kitchen designs by Arcmen Interior in Chennai, blending classic character with modern functionality and smart storage.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Retro Modular Kitchen Designers in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Retro Modular Kitchen Designers in Chennai | Arcmen",
        description: "Explore retro-inspired modular kitchen designs by Arcmen Interior in Chennai, blending classic character with modern functionality and smart storage.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Retro Modular Kitchen Designers in Chennai | Arcmen" }]
    }
};


import React from 'react'
import Retromodular from './retromodular.jsx'

const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <Retromodular />
      </div>
  
        </>)
}

export default page