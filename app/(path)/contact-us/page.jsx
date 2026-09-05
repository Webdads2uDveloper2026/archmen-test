import React from 'react'
import Contactus from './Contact-us'

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.arcmeninterior.com/contact-us#webpage",
    "url": "https://www.arcmeninterior.com/contact-us",
    "name": "Contact Arcmen Interior | Interior Designers in Chennai",
    "description": "Contact Arcmen Interior for residential interior design, modular kitchen, architectural design, and customized home interior solutions in Chennai.",
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
                "name": "Contact Us",
                "item": "https://www.arcmeninterior.com/contact-us"
            }
        ]
    }
};
export const metadata = {
    title: "Contact Arcmen Interior | Interior Designers in Chennai",
    description: "Contact Arcmen Interior for residential interior design, modular kitchen, architectural design, and customized home interior solutions in Chennai.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/contact-us" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/contact-us",
        siteName: 'Arcmen Interior',
        title: "Contact Arcmen Interior | Interior Designers in Chennai",
        description: "Contact Arcmen Interior for residential interior design, modular kitchen, architectural design, and customized home interior solutions in Chennai.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Contact Arcmen Interior | Interior Designers in Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact Arcmen Interior | Interior Designers in Chennai",
        description: "Contact Arcmen Interior for residential interior design, modular kitchen, architectural design, and customized home interior solutions in Chennai.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Contact Arcmen Interior | Interior Designers in Chennai" }]
    }
};



const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <Contactus />
    </div>
  
        </>)
}

export default page