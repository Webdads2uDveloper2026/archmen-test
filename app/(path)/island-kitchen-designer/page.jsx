import React from 'react'
import Islandkitchen from './Islandkitchen.jsx'

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/island-kitchen-designer#webpage",
    "url": "https://www.arcmeninterior.com/island-kitchen-designer",
    "name": "Island Kitchen Interior Designer In Chennai | Island Kitchen Design",
    "description": "Chennai Island Kitchen Design, Award winner, Assure 100% Desing & work satisfy,Island Kitchen Interior Designer In Chennai",
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
                "name": "Island Kitchen Designer",
                "item": "https://www.arcmeninterior.com/island-kitchen-designer"
            }
        ]
    }
};
export const metadata = {
    title: "Island Kitchen Interior Designer In Chennai | Island Kitchen Design",
    description: "Chennai Island Kitchen Design, Award winner, Assure 100% Desing & work satisfy,Island Kitchen Interior Designer In Chennai",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/island-kitchen-designer" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/island-kitchen-designer",
        siteName: 'Arcmen Interior',
        title: "Island Kitchen Interior Designer In Chennai | Island Kitchen Design",
        description: "Chennai Island Kitchen Design, Award winner, Assure 100% Desing & work satisfy,Island Kitchen Interior Designer In Chennai",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Island Kitchen Interior Designer In Chennai | Island Kitchen Design"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Island Kitchen Interior Designer In Chennai | Island Kitchen Design",
        description: "Chennai Island Kitchen Design, Award winner, Assure 100% Desing & work satisfy,Island Kitchen Interior Designer In Chennai",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Island Kitchen Interior Designer In Chennai | Island Kitchen Design" }]
    }
};


const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <Islandkitchen />
      </div>
  
        </>)
}

export default page