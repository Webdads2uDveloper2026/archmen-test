import React from 'react';
import FAQ from './FAQ';
import { faqItems } from './faqData';

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.arcmeninterior.com/faqs#faqpage',
    'url': 'https://www.arcmeninterior.com/faqs',
    'name': "Interior Design Frequently Asked Questions | Arcmen Interior",
    'description': "Find answers to common interior design questions about process, costs, timelines, materials, customization, and home interior services at Arcmen Interior.",
    'mainEntity': faqItems.map((item) => ({
        '@type': 'Question',
        'name': item.question.replace(/^\d+\.\s*/, ''),
        'acceptedAnswer': {
            '@type': 'Answer',
            'text': Array.isArray(item.answer) ? item.answer.join(' ') : item.answer
        }
    }))
};
export const metadata = {
    title: "Interior Design Frequently Asked Questions | Arcmen Interior",
    description: "Find answers to common interior design questions about process, costs, timelines, materials, customization, and home interior services at Arcmen Interior.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/faqs" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/faqs",
        siteName: 'Arcmen Interior',
        title: "Interior Design Frequently Asked Questions | Arcmen Interior",
        description: "Find answers to common interior design questions about process, costs, timelines, materials, customization, and home interior services at Arcmen Interior.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Interior Design Frequently Asked Questions | Arcmen Interior"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior Design Frequently Asked Questions | Arcmen Interior",
        description: "Find answers to common interior design questions about process, costs, timelines, materials, customization, and home interior services at Arcmen Interior.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Interior Design Frequently Asked Questions | Arcmen Interior" }]
    }
};


const page = () => {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <FAQ />
        </div>
    
        </>);
};

export default page;
