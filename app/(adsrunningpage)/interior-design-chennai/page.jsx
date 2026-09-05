import Interiorhero from './Interiorhero';
import './interiorland.scss';

const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/interior-design-chennai#webpage",
    "url": "https://www.arcmeninterior.com/interior-design-chennai",
    "name": "Interior Designing Company in Chennai | No 1 Interior Designing Company",
    "description": "Get luxury and stylish interior designs with Arcmen Interior, a trusted interior designing company in Chennai.",
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
                "name": "Interior Design Chennai",
                "item": "https://www.arcmeninterior.com/interior-design-chennai"
            }
        ]
    }
};
export const metadata = {
    title: "Interior Designing Company in Chennai | No 1 Interior Designing Company",
    description: "Get luxury and stylish interior designs with Arcmen Interior, a trusted interior designing company in Chennai.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/interior-design-chennai" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/interior-design-chennai",
        siteName: 'Arcmen Interior',
        title: "Interior Designing Company in Chennai | No 1 Interior Designing Company",
        description: "Get luxury and stylish interior designs with Arcmen Interior, a trusted interior designing company in Chennai.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Interior Designing Company in Chennai | No 1 Interior Designing Company"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Interior Designing Company in Chennai | No 1 Interior Designing Company",
        description: "Get luxury and stylish interior designs with Arcmen Interior, a trusted interior designing company in Chennai.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Interior Designing Company in Chennai | No 1 Interior Designing Company" }]
    }
};


const page = () => {
    return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

        <div>
            <Interiorhero />
        </div>
    
        </>);
};

export default page;
