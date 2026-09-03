export const metadata = {
    title: 'Mrs. Mohan Home Interior Design Project in Chennai | Arcmen',
    description: 'View the Mrs. Mohan home interior design project by Arcmen, showcasing customised interiors, elegant finishes, and smart space planning for modern living.',
    keywords: ['Top interior companies in Chennai', 'Top interior companies', 'interior companies'],
    alternates: { canonical: '/interior-design-projects/mrs-mohan' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mrs-mohan");
    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
