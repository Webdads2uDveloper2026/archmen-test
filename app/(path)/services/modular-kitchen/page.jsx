import React from 'react'
import './modularkitchenlanding.scss'
import ModularHero from './ModularHero'
const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.arcmeninterior.com/services/modular-kitchen#service',
    'url': 'https://www.arcmeninterior.com/services/modular-kitchen',
    'name': "Modular Kitchen Services in Chennai | Arcmen Interior",
    'description': "Explore customized modular kitchen services by Arcmen Interior in Chennai, including design, storage planning, premium finishes, and professional installation.",
    'provider': { '@id': 'https://www.arcmeninterior.com/#organization' },
    'areaServed': { '@type': 'City', 'name': 'Chennai' }
};
export const metadata = {
    title: "Modular Kitchen Services in Chennai | Arcmen Interior",
    description: "Explore customized modular kitchen services by Arcmen Interior in Chennai, including design, storage planning, premium finishes, and professional installation.",
    keywords: ['Interior designers in Chennai', 'Arcmen Interior', 'Home interior design', 'Interior design Chennai'],
    robots: 'index,follow',
    alternates: { canonical: "https://www.arcmeninterior.com/services/modular-kitchen" },
    openGraph: {
        type: 'website',
        url: "https://www.arcmeninterior.com/services/modular-kitchen",
        siteName: 'Arcmen Interior',
        title: "Modular Kitchen Services in Chennai | Arcmen Interior",
        description: "Explore customized modular kitchen services by Arcmen Interior in Chennai, including design, storage planning, premium finishes, and professional installation.",
        images: [{
            url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg",
            width: 1200,
            height: 630,
            alt: "Modular Kitchen Services in Chennai | Arcmen Interior"
        }],
        locale: 'en_IN'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Modular Kitchen Services in Chennai | Arcmen Interior",
        description: "Explore customized modular kitchen services by Arcmen Interior in Chennai, including design, storage planning, premium finishes, and professional installation.",
        images: [{ url: "https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg", alt: "Modular Kitchen Services in Chennai | Arcmen Interior" }]
    }
};



const page = () => {
  return (
        <> 
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

    <>
      <ModularHero />
    </>
  
        </>)
}

export default page

