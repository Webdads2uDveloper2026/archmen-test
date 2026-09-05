const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.arcmeninterior.com/#webpage",
    "url": "https://www.arcmeninterior.com/",
    "name": "Best Interior Designers in Chennai | Arcmen Interior",
    "description": "With 25 years of experience and 2000 + happy clients, Arcmen Interiors is one of the Top interior designers & decorators company in chennai. Lets build dreams.",
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
            }
        ]
    }
};
export const metadata = {
    title: "Best Interior Designers in Chennai | Arcmen Interior",
    description: "With 25 years of experience and 2000 + happy clients, Arcmen Interiors is one of the Top interior designers & decorators company in chennai. Lets build dreams.",
    keywords: ["Interior Design Company in Chennai",
        "Interior Designers in Chennai",
        "Best Interior Decorators in Chennai",
        "Best Interior Designers in Chennai",
        "Top Interior Designers in Chennai",
        "Luxury Interior Designers in Chennai",
        "Turnkey Interior Contractors in Chennai"],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/",
        siteName: 'Arcmen Interior',
        title: "Best Interior Designers in Chennai | Arcmen Interior",
        description: "With 25 years of experience and 2000 + happy clients, Arcmen Interiors is one of the Top interior designers & decorators company in chennai. Lets build dreams.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp",
            width: 1200,
            height: 630,
            alt: "Best Interior Designers in Chennai | Arcmen Interior"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Best Interior Designers in Chennai | Arcmen Interior",
        description: "With 25 years of experience and 2000 + happy clients, Arcmen Interiors is one of the Top interior designers & decorators company in chennai. Lets build dreams.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp", alt: "Best Interior Designers in Chennai | Arcmen Interior" }]
    }
};


import Header from '@/components/Header';
import Flipbox from '../components/home/Flipbox';
import Herosection from '../components/home/Herosection';
import '../style/homestyle.scss';
import Footer from '@/components/Footer';
import WhyChooseArcmen from '@/components/home/WhyChooseArcmen';

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

            <div>
                <Header />
                <Herosection />
                <Flipbox />
                <Footer />
            </div>

        </>);
}
