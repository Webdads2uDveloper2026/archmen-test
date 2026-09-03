export const metadata = {
    title: 'Mr. Raguraman Family Home Interior Design Project in Chennai | Arcmen',
    description: 'Discover the Mr. Raguraman Family home interior design project by Arcmen with thoughtfully designed rooms, quality finishes, and contemporary home interiors.',
    keywords: ['Best Interior decorator in chennai', 'Best Interior decorator', 'Interior decorator'],
    alternates: { canonical: '/interior-design-projects/mr-raguraman-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-raguraman-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
