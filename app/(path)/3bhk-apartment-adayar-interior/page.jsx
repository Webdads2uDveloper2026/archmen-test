export const metadata = {
    title: '3BHK Apartment Interior Design in Adyar, Chennai | Arcmen',
    description: 'Explore a beautifully designed 3BHK apartment interior project in Adyar by Arcmen, featuring modern décor, modular storage, and elegant living spaces.',
    keywords: ['3 bhk flat interior design in chennai', '3 bhk flat interior design', '3bhk interior design cost', '3bhk interior design'],
    alternates: { canonical: '/interior-design-projects/3bhk-apartment-adayar-interior' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "3bhk-apartment-adayar-interior");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
