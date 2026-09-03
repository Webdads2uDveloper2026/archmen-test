export const metadata = {
    title: 'Villa Landscape Design Project | Arcmen Chennai',
    description: "Explore Arcmen's villa landscape design project with beautifully planned outdoor spaces, greenery, hardscaping, and luxury architectural aesthetics.",
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/architectural-projects/villa-landscape-design-architectural' }
};

import ArchitecturalPage from './ArchitecturalPage';

const Page = () => {
    const architectural = 'villa-landscape-design-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
