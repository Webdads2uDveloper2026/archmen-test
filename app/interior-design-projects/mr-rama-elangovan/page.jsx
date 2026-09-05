const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.arcmeninterior.com/interior-design-projects/mr-rama-elangovan#webpage',
    url: 'https://www.arcmeninterior.com/interior-design-projects/mr-rama-elangovan',
    name: '3BHK Apartment Interior Design in Velachery, Chennai | Arcmen',
    description: 'Explore Arcmen’s 3BHK apartment interior project in Velachery, featuring modern designs, modular storage, premium finishes, and functional living spaces.',
    isPartOf: {
        '@id': 'https://www.arcmeninterior.com/#website'
    },
    about: {
        '@id': 'https://www.arcmeninterior.com/#organization'
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.arcmeninterior.com/'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Interior Design Projects',
                item: 'https://www.arcmeninterior.com/interior-design-projects'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Mr Rama Elangovan',
                item: 'https://www.arcmeninterior.com/interior-design-projects/mr-rama-elangovan'
            }
        ]
    }
};
export const metadata = {
    title: '3BHK Apartment Interior Design in Velachery, Chennai | Arcmen',
    description: 'Explore Arcmen’s 3BHK apartment interior project in Velachery, featuring modern designs, modular storage, premium finishes, and functional living spaces.',
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: 'https://www.arcmeninterior.com/interior-design-projects/mr-rama-elangovan' },
    openGraph: {
        type: 'website',
        url: 'https://www.arcmeninterior.com/interior-design-projects/mr-rama-elangovan',
        siteName: 'Arcmen Interior',
        title: '3BHK Apartment Interior Design in Velachery, Chennai | Arcmen',
        description: 'Explore Arcmen’s 3BHK apartment interior project in Velachery, featuring modern designs, modular storage, premium finishes, and functional living spaces.',
        images: [
            {
                url: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp',
                width: 1200,
                height: 630,
                alt: '3BHK Apartment Interior Design in Velachery, Chennai | Arcmen'
            }
        ],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: '3BHK Apartment Interior Design in Velachery, Chennai | Arcmen',
        description: 'Explore Arcmen’s 3BHK apartment interior project in Velachery, featuring modern designs, modular storage, premium finishes, and functional living spaces.',
        images: [{ url: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp', alt: '3BHK Apartment Interior Design in Velachery, Chennai | Arcmen' }]
    }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';
import { notFound } from 'next/navigation';

const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === 'mr-rama-elangovan');

    if (!project) {
        notFound();
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <InteriorPage interiordesign={project.titleUrl} />
            </div>
        </>
    );
};

export default Page;
