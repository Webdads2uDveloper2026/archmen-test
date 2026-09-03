import ArchitecturalPage from './ArchitecturalPage';

export const metadata = {
    title: 'Duplex Villa Elevation Design Project | Arcmen Chennai',
    description:
        'Explore Arcmen s duplex villa elevation design with premium architectural concepts, contemporary exteriors, and visually striking façade designs.',
    keywords: [
        'Luxury interior designer in Chennai',
        'Luxury Interior Designer',
        'luxury interior designers',
        'high end interior designers',
        'top luxury interior designers',
    ],
    alternates: {
        canonical: '/architectural-projects/duplex-villa-elevation-design-architectural',
    },
};


const Page = () => {
    const architectural = 'duplex-villa-elevation-design-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
