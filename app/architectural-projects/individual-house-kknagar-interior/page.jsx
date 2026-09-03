import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';
import { interiorProjects } from '@/app/utilits/mockData';


export async function generateMetadata() {
    const project = interiorProjects.find((project) => project.titleUrl === "individual-house-kknagar-interior");

    const metadata = {
        alternates: {
            canonical: `/architectural-projects/${project?.titleUrl}`,
        },
        title: project ? project.metaTitle : 'Luxury interior designer in chennai | Luxury Interior Designer',
        description: project ? project.metaDescription : 'Luxury interior designer in Chennai, We provide affordable prices without sacrifice style, 27yr Exp, 45 days handover',
        keywords: project
            ? project.metaKeywords.split('|').map(keyword => keyword.trim())
            : ['Luxury interior designer in chennai', 'Luxury Interior Designer', 'luxury interior designers', 'high end interior designers', 'top luxury interior designers']
    };

    return metadata;
}

const Page = async () => {
    const project = interiorProjects.find((project) => project.titleUrl === "individual-house-kknagar-interior");

    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
