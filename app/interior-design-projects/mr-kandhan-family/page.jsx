export const metadata = {
    title: 'Mr. Kandhan Family Home Interior Design Project in Chennai | Arcmen',
    description: 'Discover the Mr. Kandhan Family home interior design project by Arcmen, featuring customised interiors, premium materials, functional layouts, and elegant living spaces.',
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/interior-design-projects/mr-kandhan-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';




const Page = async () => {

    const project = interiorProjects.find((project) => project.titleUrl === "mr-kandhan-family");

    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
