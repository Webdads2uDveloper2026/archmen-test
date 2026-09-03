export const metadata = {
    title: 'Mr. Manikandan Family Home Interior Design Project in Chennai | Arcmen',
    description: 'Explore the Mr. Manikandan Family interior design project by Arcmen with modern aesthetics, customised furniture, and functional home interior solutions.',
    keywords: ['Architects and interior designers', 'Top architects designers', 'interior designers'],
    alternates: { canonical: '/interior-design-projects/mr-manikandan-family' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-manikandan-family");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
