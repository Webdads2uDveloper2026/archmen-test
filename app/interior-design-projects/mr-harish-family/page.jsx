export const metadata = {
    title: 'Mr. Harish Family Home Interior Design Project in Chennai | Arcmen',
    description: 'Explore the Mr. Harish Family residential interior project by Arcmen, featuring stylish home interiors, functional layouts, and bespoke design solutions.',
    keywords: ['interior decorators', 'interior decoration', 'interior decorator', 'interior designers', 'interiors', 'interior designer', 'best interior decorators', 'furniture', 'home interior designers'],
    alternates: { canonical: '/interior-design-projects/mr-harish-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-harish-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
