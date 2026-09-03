import ArchitecturalPage from './ArchitecturalPage';

export const metadata = {
    title: 'Interior Design Architectural Project in Chennai | Arcmen',
    description:
        'Explore Arcmen`s interior design architectural project featuring modern layouts, elegant interiors, functional planning, and premium design solutions.',
    keywords: [
        'Luxury interior designer in Chennai',
        'Luxury Interior Designer',
        'luxury interior designers',
        'high end interior designers',
        'top luxury interior designers',
    ],
    alternates: {
        canonical: '/architectural-projects/interior-design-architectural',
    },
};

const Page = () => {
    const architectural = 'interior-design-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
