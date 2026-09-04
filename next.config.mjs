/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
        { source: '/mr-raja-family', destination: '/interior-design-projects/mr-raja-family', permanent: true },
        { source: '/mr-baskaran-family', destination: '/interior-design-projects/mr-baskaran-family', permanent: true },
        { source: '/mr-raguraman-family', destination: '/interior-design-projects/mr-raguraman-family', permanent: true },
        { source: '/mr-mohan-family', destination: '/interior-design-projects/mr-mohan-family', permanent: true },
        { source: '/mr-manikandan-family', destination: '/interior-design-projects/mr-manikandan-family', permanent: true },
        { source: '/mr-dhanasekar-family', destination: '/interior-design-projects/mr-dhanasekar-family', permanent: true },
        { source: '/3bhk-apartment-adayar-interior', destination: '/interior-design-projects/3bhk-apartment-adayar-interior', permanent: true },
        { source: '/mrs-mohan', destination: '/interior-design-projects/mrs-mohan', permanent: true },
        { source: '/mr-santhosh-family', destination: '/interior-design-projects/mr-santhosh-family', permanent: true },
        { source: '/mr-harish-family', destination: '/interior-design-projects/mr-harish-family', permanent: true },
        { source: '/3bhk-apartment-velacherry-interior', destination: '/interior-design-projects/3bhk-apartment-velacherry-interior', permanent: true },
        { source: '/individual-house-kknagar-interior', destination: '/interior-design-projects/individual-house-kknagar-interior', permanent: true },
        { source: '/individual-duplex-house-annanagar-interior', destination: '/interior-design-projects/individual-duplex-house-annanagar-interior', permanent: true },
        { source: '/individual-house-perambur-interior', destination: '/interior-design-projects/individual-house-perambur-interior', permanent: true },
        { source: '/mr-kandhan-family', destination: '/interior-design-projects/mr-kandhan-family', permanent: true },
        { source: '/nbs-vijay-shankar-family', destination: '/interior-design-projects/nbs-vijay-shankar-family', permanent: true },
        { source: '/elevation-design-architectural', destination: '/architectural-projects/elevation-design-architectural', permanent: true },
        { source: '/interior-design-architectural', destination: '/architectural-projects/interior-design-architectural', permanent: true },
        { source: '/interior-design-valasaravakkam-architectural', destination: '/architectural-projects/interior-design-valasaravakkam-architectural', permanent: true },
        { source: '/living-room-double-height-interior-design-architectural', destination: '/architectural-projects/living-room-double-height-interior-design-architectural', permanent: true },
        { source: '/duplex-house-elevation-design-architectural', destination: '/architectural-projects/duplex-house-elevation-design-architectural', permanent: true },
        { source: '/duplux-house-elevation-design-peravurani-architectural', destination: '/architectural-projects/duplux-house-elevation-design-peravurani-architectural', permanent: true },
        { source: '/pool-terrace-design-architectural', destination: '/architectural-projects/pool-terrace-design-architectural', permanent: true },
        { source: '/bedroom-interior-design-architectural', destination: '/architectural-projects/bedroom-interior-design-architectural', permanent: true },
        { source: '/duplex-house-elevation-design-nolambur-architectural', destination: '/architectural-projects/duplex-house-elevation-design-nolambur-architectural', permanent: true },
        { source: '/duplex-villa-elevation-design-architectural', destination: '/architectural-projects/duplex-villa-elevation-design-architectural', permanent: true },
        { source: '/house-of-glass-front-elevation-design-architectural', destination: '/architectural-projects/house-of-glass-front-elevation-design-architectural', permanent: true },
        { source: '/villa-landscape-design-architectural', destination: '/architectural-projects/villa-landscape-design-architectural', permanent: true },
        { source: '/row-house-architectural', destination: '/architectural-projects/row-house-architectural', permanent: true },
        { source: '/villa-elevation-design-sadik-architectural', destination: '/architectural-projects/villa-elevation-design-sadik-architectural', permanent: true },
        { source: '/duplex-house-elevation-design-front-ayyampettai-architectural', destination: '/architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural', permanent: true },
        { source: '/interior-designing-company-in-chennai', destination: '/residential-interior-designers-in-chennai', permanent: true },
        { source: '/modular-kitchen', destination: '/modular-kitchen-chennai', permanent: true },
        { source: '/architectural-projects/individual-house-kknagar-interior', destination: '/interior-design-projects/individual-house-kknagar-interior', permanent: true }
        ];
    },

    images: {
        qualities: [60, 75, 85],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dpflidsbg/image/upload/**'
            },
            {
                protocol: 'https',
                hostname: 'api-arcmeninterior.webdadsprojects.com',
                pathname: '/storage/posterimage/**'
            },
            {
                protocol: 'https',
                hostname: 'arcmen-uploads.s3.us-east-1.amazonaws.com',
                pathname: '/images/**'
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                pathname: '/vi/**'
            },
            {
                protocol: 'https',
                hostname: 'www.shutterstock.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'assets.webdads2u.com',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;
