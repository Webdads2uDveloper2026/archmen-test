import ArchitecturalPage from './ArchitecturalPage';

export const metadata = {
    title: 'Duplex House Elevation Design in Peravurani | Arcmen',
    description:
        'Discover Arcmen s duplex house elevation project in Peravurani with elegant exteriors, modern architecture, and thoughtfully designed facades.',
    keywords: [
        'Luxury interior designer in Chennai',
        'Luxury Interior Designer',
        'luxury interior designers',
        'high end interior designers',
        'top luxury interior designers',
    ],
    alternates: {
        canonical: '/architectural-projects/duplux-house-elevation-design-peravurani-architectural',
    },
};

const Page = () => {
    const architectural = 'duplux-house-elevation-design-peravurani-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
