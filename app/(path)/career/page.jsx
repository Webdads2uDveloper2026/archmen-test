import React from 'react'
import Career from './Career'

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/career#webpage",
    "url": "https://www.arcmeninterior.com/career",
    "name": "Interior Designer Jobs in Chennai | Interior Design Career | Arcmen",
    "description": "Explore exciting interior designer jobs in Chennai with Arcmen Interior, offering creative projects, professional growth, and career opportunities.",
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
                "name": "Career",
                "item": "https://www.arcmeninterior.com/career"
            }
        ]
    }
};
export const metadata = {
    title: "Interior Designer Jobs in Chennai | Interior Design Career | Arcmen",
    description: "Explore exciting interior designer jobs in Chennai with Arcmen Interior, offering creative projects, professional growth, and career opportunities.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/career" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/career",
        siteName: 'Arcmen Interior',
        title: "Interior Designer Jobs in Chennai | Interior Design Career | Arcmen",
        description: "Explore exciting interior designer jobs in Chennai with Arcmen Interior, offering creative projects, professional growth, and career opportunities.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Interior Designer Jobs in Chennai | Interior Design Career | Arcmen"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior Designer Jobs in Chennai | Interior Design Career | Arcmen",
        description: "Explore exciting interior designer jobs in Chennai with Arcmen Interior, offering creative projects, professional growth, and career opportunities.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Interior Designer Jobs in Chennai | Interior Design Career | Arcmen" }]
    }
};


const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div><Career/></div>
  
        </>)
}

export default page