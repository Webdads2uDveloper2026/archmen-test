import React from 'react'

import "./woodfactory.scss"
import Woodhero from './Woodhero'

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/wood-factory#webpage",
    "url": "https://www.arcmeninterior.com/wood-factory",
    "name": "Interior factory in chennai | Arcmen architect & interior designer",
    "description": "German brands and fittings.Visit our interior factory in Chennai for unparalleled craftsmanship",
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
                "name": "Wood Factory",
                "item": "https://www.arcmeninterior.com/wood-factory"
            }
        ]
    }
};
export const metadata = {
    title: "Interior factory in chennai | Arcmen architect & interior designer",
    description: "German brands and fittings.Visit our interior factory in Chennai for unparalleled craftsmanship",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/wood-factory" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/wood-factory",
        siteName: 'Arcmen Interior',
        title: "Interior factory in chennai | Arcmen architect & interior designer",
        description: "German brands and fittings.Visit our interior factory in Chennai for unparalleled craftsmanship",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Interior factory in chennai | Arcmen architect & interior designer"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior factory in chennai | Arcmen architect & interior designer",
        description: "German brands and fittings.Visit our interior factory in Chennai for unparalleled craftsmanship",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Interior factory in chennai | Arcmen architect & interior designer" }]
    }
};


const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <Woodhero/>
    </div>
  
        </>)
}

export default page