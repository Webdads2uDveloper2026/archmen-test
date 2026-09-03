export const metadata = {
    title: 'Mr. Dhanasekar Family Home Interior Design Project in Chennai | Arcmen',
    description: 'Discover the Mr. Dhanasekar Family home interiors by Arcmen, designed with stylish décor, modular storage, premium finishes, and practical living spaces.',
    keywords: ['Best home interior designers in chennai', 'Best home interior designers', 'home interior designers'],
    alternates: { canonical: '/interior-design-projects/mr-dhanasekar-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-dhanasekar-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
