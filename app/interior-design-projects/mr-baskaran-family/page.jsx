export const metadata = {
    title: 'Mr. Baskaran Family Home Interior Design Project in Chennai | Arcmen',
    description: 'View the Mr. Baskaran Family home interior project by Arcmen, showcasing stylish living spaces, custom furniture, modular designs, and premium interiors in Chennai.',
    keywords: ['Premium interior designer in chennai', 'Premium interior designer'],
    alternates: { canonical: '/interior-design-projects/mr-baskaran-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-baskaran-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
