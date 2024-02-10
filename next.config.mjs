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
                // protocol: 'https',
                hostname: 'mainfacts.com',  // mainfacts.com
                // port: '3000',
                // pathname: '/account123/**',
            },
        ],
    },
    // output: 'export'
};

export default nextConfig;