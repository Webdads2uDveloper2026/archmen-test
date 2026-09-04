export const metadata = {
    title: 'Individual Duplex House Interior Design in Anna Nagar | Arcmen',
    description: 'View Arcmen’s individual duplex house interior project in Anna Nagar, showcasing stylish interiors, custom furniture, and contemporary home design solutions.',
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/interior-design-projects/mr-arun-dev' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';
import { notFound } from 'next/navigation';



const Page = async () => {

    const project = interiorProjects.find((project) => project.titleUrl === "mr-arun-dev");

    if (!project) {
        notFound();
    }

    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
