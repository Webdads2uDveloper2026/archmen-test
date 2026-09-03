export const metadata = {
    title: 'Villa Elevation Design Project – Sadik Residence | Arcmen',
    description: "Discover Arcmen's villa elevation design for the Sadik residence, showcasing elegant architecture, premium facades, and modern exterior detailing.",
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/architectural-projects/villa-elevation-design-sadik-architectural' }
};

import ArchitecturalPage from './ArchitecturalPage';


const Page = () => {
    const architectural = 'villa-elevation-design-sadik-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
