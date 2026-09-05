const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/g-rich-modular-kitchen#webpage",
    "url": "https://www.arcmeninterior.com/g-rich-modular-kitchen",
    "name": "G-Rich Modular Kitchen Designers in Chennai | Arcmen",
    "description": "Explore G-Rich modular kitchen designs by Arcmen Interior in Chennai, combining premium finishes, smart storage, functional layouts, and modern style.",
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
                "name": "G Rich Modular Kitchen",
                "item": "https://www.arcmeninterior.com/g-rich-modular-kitchen"
            }
        ]
    }
};
export const metadata = {
    title: "G-Rich Modular Kitchen Designers in Chennai | Arcmen",
    description: "Explore G-Rich modular kitchen designs by Arcmen Interior in Chennai, combining premium finishes, smart storage, functional layouts, and modern style.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/g-rich-modular-kitchen" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/g-rich-modular-kitchen",
        siteName: 'Arcmen Interior',
        title: "G-Rich Modular Kitchen Designers in Chennai | Arcmen",
        description: "Explore G-Rich modular kitchen designs by Arcmen Interior in Chennai, combining premium finishes, smart storage, functional layouts, and modern style.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "G-Rich Modular Kitchen Designers in Chennai | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "G-Rich Modular Kitchen Designers in Chennai | Arcmen",
        description: "Explore G-Rich modular kitchen designs by Arcmen Interior in Chennai, combining premium finishes, smart storage, functional layouts, and modern style.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "G-Rich Modular Kitchen Designers in Chennai | Arcmen" }]
    }
};


import React from 'react'
import Grichmodular from './grichmodular.jsx'

const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <Grichmodular />
      </div>
  
        </>)
}

export default page