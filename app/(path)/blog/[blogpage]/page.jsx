import React from 'react';
import DynamicBlog from './DynamicBlog';


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arcmeninterior.com';
const OG_IMAGE = "https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp";

export async function generateMetadata({ params }) {
    const { blogpage } = await params;
    const readable = decodeURIComponent(blogpage || 'Arcmen Interior Blog')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    const title = readable ? `${readable.charAt(0).toUpperCase()}${readable.slice(1)} | Arcmen Interior` : 'Arcmen Interior Blog';
    const description = `Read ${readable || 'the latest Arcmen Interior article'} for practical interior design, architecture, modular kitchen, and home interior insights from Arcmen Interior.`;
    const canonical = `${SITE_URL}/blog/${blogpage}`;
    return {
        title, description, keywords: ['Arcmen Interior', 'Interior design Chennai', 'Interior designers in Chennai'], robots: 'index,follow',
        alternates: { canonical },
        openGraph: { type: 'article', url: canonical, siteName: 'Arcmen Interior', title, description, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }], locale: 'en_IN' },
        twitter: { card: 'summary_large_image', title, description, images: [{ url: OG_IMAGE, alt: title }] }
    };
}


const Page = async ({ params }) => {
    const { blogpage } = await params;
    const readable = decodeURIComponent(blogpage || 'Arcmen Interior Blog').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
    const canonical = `${SITE_URL}/blog/${blogpage}`;
    const pageSchema = {
        '@context': 'https://schema.org', '@type': 'Article', '@id': `${canonical}#article`, 'url': canonical,
        'headline': readable || 'Arcmen Interior Blog',
        'description': `Read ${readable || 'the latest Arcmen Interior article'} for practical interior design, architecture, modular kitchen, and home interior insights from Arcmen Interior.`,
        'author': { '@id': `${SITE_URL}/#organization` }, 'publisher': { '@id': `${SITE_URL}/#organization` },
        'mainEntityOfPage': { '@type': 'WebPage', '@id': `${canonical}#webpage` },
        'image': { '@type': 'ImageObject', 'url': OG_IMAGE, 'width': 1200, 'height': 630 }
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
            <div><DynamicBlog /></div>
        </>
    );
};

export default Page;
