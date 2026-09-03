import ArchitecturalPage from "./ArchitecturalPage";

export async function generateMetadata() {
    return {
        title: 'Elevation Design & Architectural Projects | Arcmen Chennai',
        description:
            'Explore elevation design and architectural projects by Arcmen Chennai. Get modern, functional and stylish architectural designs tailored to your space.',
        keywords: [
            'elevation design',
            'architectural design',
            'elevation design Chennai',
            'architectural projects Chennai',
            'building elevation design',
            'modern architectural design',
        ],
        alternates: {
            canonical: '/architectural-projects/elevation-design-architectural',
        },
    };
}

const Page = () => {
    const architectural = 'elevation-design-architectural';

    return (
        <div>
            <ArchitecturalPage architectural={architectural} />
        </div>
    );
};

export default Page;