export const metadata = {
    title: 'Home Interior Design for Mr. Raja Family | Arcmen Chennai',
    description: 'Explore the Mr. Raja Family home interior design project by Arcmen, featuring modern living spaces, smart storage, elegant finishes, and functional interiors in Chennai.',
    keywords: ['Luxury interior designer in porur', 'Luxury interior designer', 'Luxury interior in porur', 'interior designers in porur', 'modern interiors porur'],
    alternates: { canonical: '/interior-design-projects/mr-raja-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-raja-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;