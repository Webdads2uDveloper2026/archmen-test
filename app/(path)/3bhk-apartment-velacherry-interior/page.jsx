export const metadata = {
    title: '3BHK Apartment Interior Design in Velachery, Chennai | Arcmen',
    description: 'Explore Arcmen’s 3BHK apartment interior project in Velachery, featuring modern designs, modular storage, premium finishes, and functional living spaces.',
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/interior-design-projects/3bhk-apartment-velacherry-interior' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';




const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "3bhk-apartment-velacherry-interior");

    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
