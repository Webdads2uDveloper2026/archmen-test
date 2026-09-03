export const metadata = {
    title: 'Mr. Santhosh Family Home Interior Design Project in Chennai | Arcmen',
    description: 'Discover the Mr. Santhosh Family home interior project by Arcmen with contemporary designs, premium materials, and customised interiors for every room.',
    keywords: ['Villa interior designers in Chennai', 'Villa interior designers', 'villa interior design', 'luxury villa interior design', 'villa interior'],
    alternates: { canonical: '/interior-design-projects/mr-santhosh-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-santhosh-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
