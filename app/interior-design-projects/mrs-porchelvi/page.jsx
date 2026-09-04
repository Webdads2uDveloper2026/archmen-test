export const metadata = {
    title: 'Individual House Interior Design in Perambur, Chennai | Arcmen',
    description: 'Explore Arcmen’s individual house interior design project in Perambur with modern layouts, modular interiors, elegant décor, and quality finishes.',
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/interior-design-projects/mrs-porchelvi' }
};

import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';
import { notFound } from 'next/navigation';



const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mrs-porchelvi");

    if (!project) {
        notFound();
    }

    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
