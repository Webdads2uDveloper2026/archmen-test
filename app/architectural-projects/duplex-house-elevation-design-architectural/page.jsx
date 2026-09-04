import React from 'react';
import ArchitecturalPage from './ArchitecturalPage';

export const metadata = {
    title: 'Duplex House Elevation Design Project | Arcmen Chennai',
    alternates: {
        canonical: `/architectural-projects/duplex-house-elevation-design-architectural`,
    },
    description:
        'Explore Arcmen s duplex house elevation design featuring modern architecture, stylish façades, functional planning, and contemporary exterior finishes.',
    keywords: [
        'Luxury interior designer in Chennai',
        'Luxury Interior Designer',
        'luxury interior designers',
        'high end interior designers',
        'top luxury interior designers',
    ],
    alternates: {
        canonical: '/architectural-projects/interior-design-architectural',
    },
};


const Page = () => {
    const architectural = 'duplex-house-elevation-design-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
