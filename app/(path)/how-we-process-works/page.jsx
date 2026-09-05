const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/how-we-process-works#webpage",
    "url": "https://www.arcmeninterior.com/how-we-process-works",
    "name": "How We Process Works | Interior Design Process | Arcmen Chennai",
    "description": "Discover how our interior design process works at Arcmen Chennai, from consultation and design planning to execution and final handover.",
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
                "name": "How We Process Works",
                "item": "https://www.arcmeninterior.com/how-we-process-works"
            }
        ]
    }
};
export const metadata = {
    title: "How We Process Works | Interior Design Process | Arcmen Chennai",
    description: "Discover how our interior design process works at Arcmen Chennai, from consultation and design planning to execution and final handover.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/how-we-process-works" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/how-we-process-works",
        siteName: 'Arcmen Interior',
        title: "How We Process Works | Interior Design Process | Arcmen Chennai",
        description: "Discover how our interior design process works at Arcmen Chennai, from consultation and design planning to execution and final handover.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "How We Process Works | Interior Design Process | Arcmen Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "How We Process Works | Interior Design Process | Arcmen Chennai",
        description: "Discover how our interior design process works at Arcmen Chennai, from consultation and design planning to execution and final handover.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "How We Process Works | Interior Design Process | Arcmen Chennai" }]
    }
};


import React from 'react';
import HowweHero from './HowweHero';
import './howwe.scss';


const Page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <div>
      <HowweHero />
    </div>
  
        </>);
};

export default Page;