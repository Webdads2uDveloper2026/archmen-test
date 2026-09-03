export const metadata = {
    title: 'Glass Front House Elevation Design Project | Arcmen',
    description: "Discover Arcmen's glass front house elevation design featuring contemporary architecture, elegant glass facades, and modern exterior styling.",
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/architectural-projects/house-of-glass-front-elevation-design-architectural' }
};

import ArchitecturalPage from './ArchitecturalPage';
const Page = () => {
    const architectural = 'house-of-glass-front-elevation-design-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
