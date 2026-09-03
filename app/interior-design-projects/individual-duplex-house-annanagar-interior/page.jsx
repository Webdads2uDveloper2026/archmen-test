export const metadata = {
    title: 'Individual Duplex House Interior Design in Anna Nagar | Arcmen',
    description: 'View Arcmen’s individual duplex house interior project in Anna Nagar, showcasing stylish interiors, custom furniture, and contemporary home design solutions.',
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/interior-design-projects/individual-duplex-house-annanagar-interior' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {

    const project = interiorProjects.find((project) => project.titleUrl === "individual-duplex-house-annanagar-interior");

    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
