import React from 'react';
import './interior.css';
import InteriorPage from './InteriorPage';
import { notFound } from 'next/navigation';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arcmeninterior.com';
const OG_IMAGE = "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp";

const interiorProjects = [
    {
        headingTitle: 'Mr Raja & Family',
        titleUrl: 'mr-raja-family',
        interiorType: '',
        metaTitle: 'Luxury interior designer in porur',
        metaDescription: 'Luxury interior designer in porur, German brands & fitting, 27yr Exp, 45days handover',
        metaKeywords: 'Luxury interior designer in porur | Luxury interior designer | Luxury interior in porur | interior designers in porur | modern interiors porur',
    },
    {
        headingTitle: 'Mr Baskaran & Family',
        titleUrl: 'mr-baskaran-family',
        interiorType: '',
        metaTitle: 'Premium interior designer in chennai',
        metaDescription: 'Premium interior designer Chennai, Award winner, We Assure 100% Desing & work satisfy',
        metaKeywords: 'Premium interior designer in chennai | Premium interior designer',
    },
    {
        headingTitle: 'Mr Arun & Family',
        titleUrl: 'mr-arun-family',
        interiorType: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'Mr Mohan & Family',
        titleUrl: 'mr-mohan-family',
        interiorType: '',
        metaTitle: 'Top interior designers in Chennai',
        metaDescription: 'Top interior designers in Chennai ! Available free 3D virtual design to visualize your perfect space. Book your consultation now',
        metaKeywords: 'Top interior designers in Chennai | Top interior designers | best interior designers | best interiors in chennai',
    },
    {
        headingTitle: 'Mr Manikandan & Family',
        titleUrl: 'mr-manikandan-family',
        interiorType: '',
        metaTitle: 'Architects and interior designers in Chennai',
        metaDescription: 'Top architects and interior designers in Chennai offering innovative design solutions for residential.Contact us today for personalized design services.',
        metaKeywords: 'Architects and interior designers |  Top architects designers | interior designers',
    },
    {
        headingTitle: 'Mr Dhanasekar & Family',
        titleUrl: 'mr-dhanasekar-family',
        interiorType: '',
        metaTitle: 'Best home interior designers in chennai',
        metaDescription: 'Best home interior designer in Chennai. 45* days complete handover, Provide German brands & Fittings',
        metaKeywords: 'Best home interior designers in chennai | Best home interior designers | home interior designers',
    },
    {
        headingTitle: 'Mr Harish & Family',
        titleUrl: 'mr-harish-family',
        interiorType: '',
        metaTitle: 'Top interior decorators in Chennai',
        metaDescription: 'Top interior decorators in Chennai, Expert Architect, we assure 100% Design & Work satisfy.',
        metaKeywords: 'interior decorators | interior decoration | interior decorator | interior designers | interior decorator | interiors | interior designer | best interior decorators | interior decoration interior decors | furniture | interior decoration pictures interior designers | interior decorator home interior decorators | home decorators | interior decoration | interior decorators interior designing | home interior designers',
    },
    {
        headingTitle: 'Mr Santhosh &Family',
        titleUrl: 'mr-santhosh-family',
        interiorType: '',
        metaTitle: 'Villa interior designers in Chennai',
        metaDescription: `Explore top villa interior designers in Chennai, specializing in luxury designs that elevate your home's aesthetics and functionality`,
        metaKeywords: 'Villa interior designers in Chennai | Villa interior designers | villa interior design | luxury villa interior design | villa interior',
    },
    {
        headingTitle: 'Mr Raguraman & Family',
        titleUrl: 'mr-raguraman-family',
        interiorType: '',
        metaTitle: 'Best Interior decorator in chennai',
        metaDescription: 'Best interior decorators in Chennai, Expert Architect, we assure 100% Design & Work satisfy. 45*days complete handover',
        metaKeywords: 'Best Interior decorator in chennai |  Best Interior decorator | Interior decorator',
    },
    {
        headingTitle: 'Mrs Mohan & Family',
        titleUrl: 'mrs-mohan',
        interiorType: '',
        metaTitle: 'Top interior companies in Chennai',
        metaDescription: 'Discover the top interior design companies in Chennai offering innovative home and office solutions. Transform your spaces with expert designers today',
        metaKeywords: 'Top interior companies in Chennai | Top interior companies | interior companies',
    },
    {
        headingTitle: 'Mr.Mukulrai Induvidul House',
        titleUrl: 'individual-house-parrys-interior',
        interiorType: 'Individual House Interior Design',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'ETA LILAC Appartment',
        titleUrl: '3bhk-appartment-interior-design',
        interiorType: '3BHK Appartment Interior Design',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'Mr.Mohan',
        titleUrl: '3bhk-appartment-interior-design',
        interiorType: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'Mrs.Nithya Srinivasan',
        titleUrl: 'mrs-nithya-srinivasan',
        interiorType: '3BHK Apartment Interior',
        metaTitle: '3 bhk flat interior design in chennai',
        metaDescription: 'Transform your 3 BHK flat with our impeccable interior design. Achieve a perfect balance of style and functionality for a stunning living experience.',
        metaKeywords: '3 bhk flat interior design in chennai | 3 bhk flat interior design | 3bhk interior design cost | 3bhk interior design',
    },
    {
        headingTitle: 'Mr.Sampath kumar',
        titleUrl: '3bhk-appartment-iyyapanthangal-interior',
        interiorType: '3BHK Appartment Interior',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'Rama Elangovan',
        titleUrl: 'mr-rama-elangovan',
        interiorType: '3BHK Apartment Interior',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'Mr.Srinath Kanya',
        titleUrl: 'mr-srinath-kanya',
        interiorType: 'Individual House Interior design',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'Mr.Arundev',
        titleUrl: 'mr-arun-dev',
        interiorType: 'Individual Duplex House Interior',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'Mr. Kandhan Family',
        titleUrl: 'mr-kandhan-family',
        interiorType: 'Individual Duplex House Interior',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    },
    {
        headingTitle: 'NBS Vijay Shankar & Family',
        titleUrl: 'nbs-vijay-shankar-family',
        interiorType: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
    }
];

export async function generateMetadata({ params }) {
    const { interiordesign } = await params;
    const project = interiorProjects.find((project) => project.titleUrl === interiordesign);
    const title = project?.metaTitle || 'Luxury Interior Designer in Chennai | Arcmen Interior';
    const description = project?.metaDescription || 'Luxury interior designer in Chennai providing customized residential interiors, modern designs, and complete home interior solutions.';
    const canonical = `${SITE_URL}/interior-design-projects/${interiordesign}`;
    return {
        title,
        description,
        keywords: project?.metaKeywords ? project.metaKeywords.split('|').map((keyword) => keyword.trim()) : ['Interior designers in Chennai', 'Arcmen Interior'],
        robots: 'index,follow',
        alternates: { canonical },
        openGraph: { type: 'website', url: canonical, siteName: 'Arcmen Interior', title, description, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }], locale: 'en_IN' },
        twitter: { card: 'summary_large_image', title, description, images: [{ url: OG_IMAGE, alt: title }] }
    };
}

const Page = async ({ params }) => {
    const { interiordesign } = await params;
    const project = interiorProjects.find((project) => project.titleUrl === interiordesign);
    if (!project) notFound();
    const canonical = `${SITE_URL}/interior-design-projects/${project.titleUrl}`;
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        'url': canonical,
        'name': project.metaTitle || project.headingTitle,
        'description': project.metaDescription || 'Arcmen Interior residential interior design project.',
        'isPartOf': { '@id': `${SITE_URL}/#website` },
        'about': { '@id': `${SITE_URL}/#organization` },
        'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${SITE_URL}/` },
                { '@type': 'ListItem', 'position': 2, 'name': 'Interior Design Projects', 'item': `${SITE_URL}/interior-design-projects` },
                { '@type': 'ListItem', 'position': 3, 'name': project.headingTitle, 'item': canonical }
            ]
        }
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
            <div><InteriorPage interiordesign={project.titleUrl} /></div>
        </>
    );
};

export default Page;
