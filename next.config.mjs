/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                // protocol: 'https',
                hostname: 'flagcdn.com',  // mainfacts.com
                // port: '3000',
                // pathname: '/account123/**',
            },
            {
                hostname: 'mainfacts.com',
            },
            {
                hostname: 'upload.wikimedia.org',
            },
            {
                hostname: 'www.openstreetmap.org',
            },
        ],
    },
    // output: 'export'
};

export default nextConfig;