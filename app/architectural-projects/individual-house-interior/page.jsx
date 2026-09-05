const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/individual-house-interior#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/individual-house-interior",
    "name": "Individual House Interior Design | Arcmen Interior Chennai",
    "description": "Explore individual house interior design solutions by Arcmen Interior, combining functional planning, customized interiors, premium finishes, and elegant residential spaces.",
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
                "name": "Architectural Projects",
                "item": "https://www.arcmeninterior.com/architectural-projects"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Individual House Interior",
                "item": "https://www.arcmeninterior.com/architectural-projects/individual-house-interior"
            }
        ]
    }
};
export const metadata = {
    title: "Individual House Interior Design | Arcmen Interior Chennai",
    description: "Explore individual house interior design solutions by Arcmen Interior, combining functional planning, customized interiors, premium finishes, and elegant residential spaces.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/individual-house-interior" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/individual-house-interior",
        siteName: 'Arcmen Interior',
        title: "Individual House Interior Design | Arcmen Interior Chennai",
        description: "Explore individual house interior design solutions by Arcmen Interior, combining functional planning, customized interiors, premium finishes, and elegant residential spaces.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Individual House Interior Design | Arcmen Interior Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Individual House Interior Design | Arcmen Interior Chennai",
        description: "Explore individual house interior design solutions by Arcmen Interior, combining functional planning, customized interiors, premium finishes, and elegant residential spaces.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Individual House Interior Design | Arcmen Interior Chennai" }]
    }
};


import React from 'react'

const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div><h1>interior-design-chennai</h1></div>
  
        </>)
}

export default page