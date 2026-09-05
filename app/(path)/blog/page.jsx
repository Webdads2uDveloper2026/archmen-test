import React from 'react'
import BlogPage from './BlogPage'

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.arcmeninterior.com/blog#webpage",
    "url": "https://www.arcmeninterior.com/blog",
    "name": "Best Interior Design Company in Chennai | Arcmen Interior Blog",
    "description": "Explore Arcmen Interior’s latest insights, ideas, and guidance on interior design, architecture, modular kitchens, and modern home interiors in Chennai.",
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
                "name": "Blog",
                "item": "https://www.arcmeninterior.com/blog"
            }
        ]
    }
};
export const metadata = {
    title: "Best Interior Design Company in Chennai | Arcmen Interior Blog",
    description: "Explore Arcmen Interior’s latest insights, ideas, and guidance on interior design, architecture, modular kitchens, and modern home interiors in Chennai.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/blog" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/blog",
        siteName: 'Arcmen Interior',
        title: "Best Interior Design Company in Chennai | Arcmen Interior Blog",
        description: "Explore Arcmen Interior’s latest insights, ideas, and guidance on interior design, architecture, modular kitchens, and modern home interiors in Chennai.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Best Interior Design Company in Chennai | Arcmen Interior Blog"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Best Interior Design Company in Chennai | Arcmen Interior Blog",
        description: "Explore Arcmen Interior’s latest insights, ideas, and guidance on interior design, architecture, modular kitchens, and modern home interiors in Chennai.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Best Interior Design Company in Chennai | Arcmen Interior Blog" }]
    }
};



const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div><BlogPage/></div>
  
        </>)
}

export default page