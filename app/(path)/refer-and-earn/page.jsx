import React from 'react'
import ReferTearn from './ReferTearn.jsx'

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/refer-and-earn#webpage",
    "url": "https://www.arcmeninterior.com/refer-and-earn",
    "name": "Refer and Earn | Arcmen Interior Chennai",
    "description": "Refer friends or family to Arcmen Interior and explore opportunities to earn rewards while helping them plan their dream home interiors.",
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
                "name": "Refer And Earn",
                "item": "https://www.arcmeninterior.com/refer-and-earn"
            }
        ]
    }
};
export const metadata = {
    title: "Refer and Earn | Arcmen Interior Chennai",
    description: "Refer friends or family to Arcmen Interior and explore opportunities to earn rewards while helping them plan their dream home interiors.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/refer-and-earn" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/refer-and-earn",
        siteName: 'Arcmen Interior',
        title: "Refer and Earn | Arcmen Interior Chennai",
        description: "Refer friends or family to Arcmen Interior and explore opportunities to earn rewards while helping them plan their dream home interiors.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Refer and Earn | Arcmen Interior Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Refer and Earn | Arcmen Interior Chennai",
        description: "Refer friends or family to Arcmen Interior and explore opportunities to earn rewards while helping them plan their dream home interiors.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Refer and Earn | Arcmen Interior Chennai" }]
    }
};



const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <ReferTearn />
    </div>
  
        </>)
}

export default page