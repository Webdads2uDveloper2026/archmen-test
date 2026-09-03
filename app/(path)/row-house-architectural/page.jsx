export const metadata = {
    title: 'Row House Architectural Design Project | Arcmen Chennai',
    description: "View Arcmen's row house architectural project featuring smart space planning, contemporary elevations, and modern residential design concepts.",
    keywords: ['Interior designers in Chennai', 'Best interior designers in Chennai', 'Luxury interior designers', 'Home interior designers in Chennai', 'Interior decorators in Chennai'],
    alternates: { canonical: '/architectural-projects/row-house-architectural' }
};

import ArchitecturalPage from './ArchitecturalPage';

const Page = () => {
    const architectural = 'row-house-architectural';
    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;
