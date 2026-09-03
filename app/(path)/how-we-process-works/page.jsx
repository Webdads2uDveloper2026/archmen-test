import React from 'react';
import HowweHero from './HowweHero';
import './howwe.scss';

export async function generateMetadata() {
  return {
    title: 'How We Process Works | Interior Design Process | Arcmen Chennai',
    description:
      'Discover how our interior design process works at Arcmen Chennai, from consultation and design planning to execution and final handover.',
    keywords: [
      'interior design process',
      'how interior design works',
      'interior design process Chennai',
      'interior designers Chennai',
      'home interior design process',
      'Arcmen interior design',
    ],
    alternates: {
      canonical: '/how-we-process-works',
    },
  };
}

const Page = () => {
  return (
    <div>
      <HowweHero />
    </div>
  );
};

export default Page;