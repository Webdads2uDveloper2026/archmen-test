export const metadata = {
    title: 'Mr. Mohan Family Home Interior Design Project in Chennai | Arcmen',
    description: 'See the Mr. Mohan Family residential interior design project by Arcmen, featuring elegant home interiors, space-efficient layouts, and premium craftsmanship.',
    keywords: ['Top interior designers in Chennai', 'Top interior designers', 'best interior designers', 'best interiors in chennai'],
    alternates: { canonical: '/interior-design-projects/mr-mohan-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-mohan-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
