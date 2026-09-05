const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/architectural-projects/interior-decorators-role#webpage",
    "url": "https://www.arcmeninterior.com/architectural-projects/interior-decorators-role",
    "name": "Role of Interior Decorators | Arcmen Interior Chennai",
    "description": "Learn about the role of interior decorators in planning, styling, coordinating, and creating functional residential spaces with Arcmen Interior.",
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
                "name": "Interior Decorators Role",
                "item": "https://www.arcmeninterior.com/architectural-projects/interior-decorators-role"
            }
        ]
    }
};
export const metadata = {
    title: "Role of Interior Decorators | Arcmen Interior Chennai",
    description: "Learn about the role of interior decorators in planning, styling, coordinating, and creating functional residential spaces with Arcmen Interior.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/architectural-projects/interior-decorators-role" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/architectural-projects/interior-decorators-role",
        siteName: 'Arcmen Interior',
        title: "Role of Interior Decorators | Arcmen Interior Chennai",
        description: "Learn about the role of interior decorators in planning, styling, coordinating, and creating functional residential spaces with Arcmen Interior.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Role of Interior Decorators | Arcmen Interior Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Role of Interior Decorators | Arcmen Interior Chennai",
        description: "Learn about the role of interior decorators in planning, styling, coordinating, and creating functional residential spaces with Arcmen Interior.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Role of Interior Decorators | Arcmen Interior Chennai" }]
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