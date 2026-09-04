import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';
import { notFound } from 'next/navigation';


export async function generateMetadata() {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-srinath-kanya");

    if (!project) {
        notFound();
    }

    const metadata = {
        alternates: {
            canonical: `/interior-design-projects/${project?.titleUrl}`,
        },
        title: project ? project.metaTitle : 'Individual House Interior Design in KK Nagar, Chennai | Arcmen',
        description: project ? project.metaDescription : 'Discover Arcmen`s individual house interior project in KK Nagar with customised interiors, elegant furnishings, smart space planning, and premium craftsmanship.',
        keywords: project
            ? project.metaKeywords.split('|').map(keyword => keyword.trim())
            : ['Luxury interior designer in chennai', 'Luxury Interior Designer', 'luxury interior designers', 'high end interior designers', 'top luxury interior designers']
    };

    return metadata;
}

const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "mr-srinath-kanya");

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
