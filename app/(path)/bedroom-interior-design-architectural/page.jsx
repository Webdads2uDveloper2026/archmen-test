export const metadata = {
    title: 'Bedroom Interior Design Project in Chennai | Arcmen',
    description: "View Arcmen's bedroom interior design project with elegant decor, customised furniture, smart storage solutions, and contemporary design elements.",
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/architectural-projects/bedroom-interior-design-architectural' }
};

import ArchitecturalPage from './ArchitecturalPage';

const Page = () => {
    const architectural = 'bedroom-interior-design-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
