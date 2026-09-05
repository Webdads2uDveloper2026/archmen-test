import React from 'react';
import Aboutpage from './Aboutpage';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.arcmeninterior.com/aboutus#webpage",
    "url": "https://www.arcmeninterior.com/aboutus",
    "name": "About Arcmen Interiors | Good Interiors in Chennai",
    "description": "Arcmen interiors is Chennai s trusted interior designer since 1995. We deleiver modern, personalized designs & turnkry execution with passion & precision.",
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
                "name": "Aboutus",
                "item": "https://www.arcmeninterior.com/aboutus"
            }
        ]
    }
};
export const metadata = {
    title: "About Arcmen Interiors | Good Interiors in Chennai",
    description: "Arcmen interiors is Chennai s trusted interior designer since 1995. We deleiver modern, personalized designs & turnkry execution with passion & precision.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/aboutus" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/aboutus",
        siteName: 'Arcmen Interior',
        title: "About Arcmen Interiors | Good Interiors in Chennai",
        description: "Arcmen interiors is Chennai s trusted interior designer since 1995. We deleiver modern, personalized designs & turnkry execution with passion & precision.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "About Arcmen Interiors | Good Interiors in Chennai"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "About Arcmen Interiors | Good Interiors in Chennai",
        description: "Arcmen interiors is Chennai s trusted interior designer since 1995. We deleiver modern, personalized designs & turnkry execution with passion & precision.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "About Arcmen Interiors | Good Interiors in Chennai" }]
    }
};


const page = () => {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <Aboutpage />
    
        </>);
};

export default page;
