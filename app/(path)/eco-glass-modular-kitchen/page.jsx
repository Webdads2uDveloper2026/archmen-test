const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/eco-glass-modular-kitchen#webpage",
    "url": "https://www.arcmeninterior.com/eco-glass-modular-kitchen",
    "name": "Eco Glass Modular Kitchen Designers in Chennai | Arcmen",
    "description": "Discover elegant eco glass modular kitchen designs by Arcmen Interior in Chennai with modern finishes, practical storage, and functional layouts.",
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
                "name": "Eco Glass Modular Kitchen",
                "item": "https://www.arcmeninterior.com/eco-glass-modular-kitchen"
            }
        ]
    }
};
export const metadata = {
    title: "Eco Glass Modular Kitchen Designers in Chennai | Arcmen",
    description: "Discover elegant eco glass modular kitchen designs by Arcmen Interior in Chennai with modern finishes, practical storage, and functional layouts.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/eco-glass-modular-kitchen" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/eco-glass-modular-kitchen",
        siteName: 'Arcmen Interior',
        title: "Eco Glass Modular Kitchen Designers in Chennai | Arcmen",
        description: "Discover elegant eco glass modular kitchen designs by Arcmen Interior in Chennai with modern finishes, practical storage, and functional layouts.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Eco Glass Modular Kitchen Designers in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Eco Glass Modular Kitchen Designers in Chennai | Arcmen",
        description: "Discover elegant eco glass modular kitchen designs by Arcmen Interior in Chennai with modern finishes, practical storage, and functional layouts.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Eco Glass Modular Kitchen Designers in Chennai | Arcmen" }]
    }
};


import React from 'react'
import Ecoglass from './ecoglass.jsx'

const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <Ecoglass />
      </div>
  
        </>)
}

export default page